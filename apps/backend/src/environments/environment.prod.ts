import { BackendEnviromentProps } from '@nlw2/interfaces';
import { User, Class, ClassSchedule, Connection } from '@nlw2/entities';

export const environment: BackendEnviromentProps = {
  production: true,
  db: {
    type: 'postgres',
    host: 'drona.db.elephantsql.com',
    port: 5432,
    username: 'swljfdqh',
    password: 's2bp_HlekY6JHt_LDPJlSynRol34WWdQ',
    database: 'swljfdqh',
    entities: [User, Class, ClassSchedule, Connection],
    synchronize: true,
  },
};
