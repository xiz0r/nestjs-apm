# nestjs-apm


## Installation
```
$ npm i nestjs-apm
```
## NestJs config
### main.ts (first line)

```
import { apm } from 'nestjs-apm';
...
```

```
apm.start();
if (apm.isStarted()) {
	console.log('APM running');
}
```

### app.module.ts

```
...
import { ApmModule } from 'nestjs-apm';
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
