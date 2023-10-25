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
```

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
ELASTIC_APM_ACTIVATE || ELASTIC_APM_ACTIVE
# Set comma-separated values to disable particular modules to be instrumented
ELASTIC_APM_DISABLE_INSTRUMENTATIONS
# Override environment value
ELASTIC_APM_ENVIRONMENT
# Override the verification of SSL certificate.
ELASTIC_APM_VERIFY_SERVER_CERT
# Set the verbosity level for the agent’s logging. Possible levels are: trace (the most verbose logging, avoid in production), debug, info, warning, error, critical, and off (disable all logging).
ELASTIC_APM_LOG_LEVEL
# Enable capturing the HTTP body of incoming HTTP requests. Possible options are: off, all, errors, and transactions.
ELASTIC_APM_CAPTURE_BODY
# Capture apm error log stack traces. Possible options are: never, messages, always
ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES
# Set this option to true to use the URL path as the transaction name if no other route could be determined. 
ELASTIC_APM_USE_PATH_AS_TRANSACTION_NAME
```
