import { DynamicModule } from '@nestjs/common';
import { ApmService } from './apm.service';
import { ApmInterceptor } from './apm.interceptor';

export class ApmModule {
  static register(): DynamicModule {
    return {
      module: ApmModule,
      imports: [],
      components: [ApmService],
      exports: [ApmService, ApmInterceptor]
    };
  }
}
