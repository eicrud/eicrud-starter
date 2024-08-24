# eicrud-starter
Starter project for [Eicrud framework](https://github.com/eicrud/eicrud).


# Start the application

1. rename `.env.sample` to `.env` (change your token with something secure)

2. `npm install`

3. `npm run start`

# Change the Database

This repository is configured for mongoDB, to switch to postgreSQL do the following :

1. run `npm i @eicrud/postgresql`

2. update your `src/eicrud.config.service.ts`
```typescript
import { PostgreDbAdapter } from "@eicrud/postgresql"; 

@Injectable()
export class MyConfigService extends CrudConfigService {

    constructor(
    // ...
    ) {
        super({
            // ...
            dbAdapter: new PostgreDbAdapter(),
        });
```

3. run `npm i @mikro-orm/postgresql`
3. update your `src/app.module.ts`

```typescript
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
   //...
   MikroOrmModule.forRoot({
    entities: [...CRUDEntities],
    // ...
    driver: PostgreSqlDriver,
    user: "postgres",
    password: "your_password_here",
    //...
```
