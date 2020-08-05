import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ClassPostDTO, ClassesFilterDTO } from '@nlw2/interfaces';

import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  createClass(@Body() body: ClassPostDTO) {
    return this.classesService.createClass(body);
  }

  @Get()
  getFilteredClasses(@Query() filters: ClassesFilterDTO) {
    return this.classesService.getFilteredClasses(filters);
  }
}
