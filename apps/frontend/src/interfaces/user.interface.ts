export interface UserResponse {
  id: string;
  subject: string;
  cost: number;
  schedules: Schedule[];
  user: User;
}

export interface Schedule {
  id: string;
  week_day: number;
  from: number;
  to: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}
