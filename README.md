# nestjs-apm

## Installation
```
$ npm i nestjs-apm-v4
```
## NestJs config
### main.ts (first line)

```
import { apm } from 'nestjs-apm-v4';
...
```

```
if (apm.isStarted()) {
	console.log('APM running');
}

...
// Register global interceptor
  const apmInterceptor = app
    .select(ApmModule)
    .get(ApmInterceptor);
  app.useGlobalInterceptors(apmInterceptor);

  await app.listen(3000);

```

### app.module.ts

```
...
import { ApmModule } from 'nestjs-apm-v4';
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
