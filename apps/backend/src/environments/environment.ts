import * as path from 'path';

import { BackendEnviromentProps } from '@nlw2/interfaces';
import { User, Class, ClassSchedule, Connection } from '@nlw2/entities';

export const environment: BackendEnviromentProps = {
  production: false,
  db: {
    type: 'sqlite',
    database: path.resolve(__dirname, 'db.sqlite'),
    entities: [User, Class, ClassSchedule, Connection],
    synchronize: true,
  },
};
