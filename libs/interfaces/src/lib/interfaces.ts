import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface BackendEnviromentProps {
  production: boolean;
  db: TypeOrmModuleOptions;
}

export interface ClassPostDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Schedule[];
}

export interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

export interface ClassesFilterDTO {
  week_day?: number;
  subject?: string;
  time?: string;
}
