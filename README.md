# eicrud-starter
Starter project for [Eicrud framework](https://github.com/eicrud/eicrud).

`npm run start`

# Database

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
