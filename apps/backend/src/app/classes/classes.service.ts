/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, getConnection } from 'typeorm';

import { ClassPostDTO, ClassesFilterDTO } from '@nlw2/interfaces';
import { User, Class, ClassSchedule } from '@nlw2/entities';
import { convertHourToMinutes } from '@nlw2/shared';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>
  ) {}
  private readonly logger = new Logger(ClassesService.name);

  async createClass(data: ClassPostDTO) {
    return await getConnection()
      .transaction(async (trx) => {
        const usersRepository = trx.getRepository(User);
        const classRepository = trx.getRepository(Class);
        const classScheduleRepository = trx.getRepository(ClassSchedule);

        const savedUser = await usersRepository.save({
          name: data.name,
          avatar: data.avatar,
          whatsapp: data.whatsapp,
          bio: data.bio,
        });

        const savedClass = await classRepository.save({
          subject: data.subject,
          cost: data.cost,
          user: savedUser,
        });

        const classSchedule = data.schedule.map((schedule) => {
          return {
            week_day: schedule.week_day,
            from: convertHourToMinutes(schedule.from),
            to: convertHourToMinutes(schedule.to),
          };
        });

        classSchedule.map((schedule) =>
          classScheduleRepository.save({ ...schedule, class: savedClass })
        );
      })
      .then(() => {
        return { message: 'User, Class and Schedule created sucessfully' };
      })
      .catch(() => {
        throw new BadRequestException(
          'Unexpected error while creating new class'
        );
      });
  }

  getAllUsers() {
    return this.usersRepository.find({
      relations: ['classes', 'classes.schedules'],
    });
  }

  async getFilteredClasses(filters: ClassesFilterDTO) {
    if (!filters.week_day || !filters.subject || !filters.time) {
      throw new BadRequestException('Missing filters to search classes');
    }
    const timeInMinutes = convertHourToMinutes(filters.time);
    const classes = await this.classRepository.find({
      where: {
        subject: filters.subject,
      },
      relations: ['schedules', 'user'],
    });

    const filteredDayClasses = classes.filter(function (value) {
      return value.schedules.some(
        (schedule) => schedule.week_day == filters.week_day
      );
    });

    const filteredTimeClasses = filteredDayClasses.filter(function (value) {
      return value.schedules.every((schedule) => {
        return timeInMinutes >= schedule.from && timeInMinutes < schedule.to;
      });
    });

    return filteredTimeClasses;
  }
}
