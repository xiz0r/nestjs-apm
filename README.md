# nestjs-apm

```
npm i nestjs-apm
```
## NestJs config
### main.ts (first line)

```
import { apm } from 'nestjs-apm';
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