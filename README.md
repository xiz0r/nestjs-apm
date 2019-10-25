# nestjs-apm-v6

Project forked from https://github.com/xiz0r/nestjs-apm.git with a fix for nestjs V6

## Installation
```
$ npm i nestjs-apm-v6
```
## NestJs config
### main.ts (first line)

```
import { apm } from 'nestjs-apm-v6';
...
```

```
if (apm.isStarted()) {
	console.log('APM running');
}
```

### app.module.ts

```
...
import { ApmModule } from 'nestjs-apm-v6';
...
```

```
@NgModule({
  ...
  imports: [
    ...,
    ApmModule.register(),
    ...
  ]
})
export class AppModule { }
```

### Env variables
```
ELASTIC_APM_SERVER_URL=
ELASTIC_APM_LOG_LEVEL=
ELASTIC_APM_SERVICE_NAME=
```
