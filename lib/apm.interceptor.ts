import { NestInterceptor, ExecutionContext, Interceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApmService } from './apm.service';

@Interceptor()
export class ApmInterceptor implements NestInterceptor {
  constructor(private readonly apmService: ApmService) {}

  intercept(
    dataOrRequest,
    context: ExecutionContext,
    call$: Observable<any>
  ): Observable<any> {
    return call$.pipe(
      catchError(error => {
        this.apmService.captureError(error);
        throw error;
      })
    );
  }
}
