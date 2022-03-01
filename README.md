# nestjs-elastic-apm

## Installation

```
$ npm i nestjs-elastic-apm
```

## NestJs config

### main.ts (first line)

```
import * as dotenv from 'dotenv';
dotenv.config(); //
import apm from 'nestjs-elastic-apm';
...

### app.module.ts

```

...
import { ApmModule } from 'nestjs-elastic-apm';
...

```

```

@Module({
...
imports: [
...,
ApmModule.register(),
...
]
})
export class AppModule { }

```

### Usage in the service

```

...
import { ApmService } from 'nestjs-elastic-apm';
...

...
@Injectable()
export class TestService {
constructor(private readonly apmService: ApmService) {}

doSomething(): void {
const span = this.apmService.startSpan('Custom span name');
....
span.end();
}
}
...

```

### Env variables

```

# Override service name from package.json

ELASTIC_APM_SERVICE_NAME

# Use if APM Server requires a token

ELASTIC_APM_SECRET_TOKEN

# Use if APM Server uses API keys for authentication

ELASTIC_APM_API_KEY

# Set custom APM Server URL (default: http://localhost:8200)

ELASTIC_APM_SERVER_URL

# Set 'true' value to enable APM agent

ELASTIC_APM_ACTIVATE

```

```
