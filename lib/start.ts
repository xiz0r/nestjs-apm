import * as apmAgent from 'elastic-apm-node';

const options: apmAgent.AgentConfigOptions = {
  active: process.env.ELASTIC_APM_ACTIVATE === 'true'
};
if (process.env.ELASTIC_APM_SERVICE_NAME) {
  options['serviceName'] = process.env.ELASTIC_APM_SERVICE_NAME;
}
if (process.env.ELASTIC_APM_SECRET_TOKEN) {
  options['secretToken'] = process.env.ELASTIC_APM_SECRET_TOKEN;
}
if (process.env.ELASTIC_APM_API_KEY) {
  options['apiKey'] = process.env.ELASTIC_APM_API_KEY;
}
if (process.env.ELASTIC_APM_SERVER_URL) {
  options['serverUrl'] = process.env.ELASTIC_APM_SERVER_URL;
}
if (process.env.ELASTIC_APM_DISABLE_INSTRUMENTATIONS) {
  options['disableInstrumentations'] =
    process.env.ELASTIC_APM_DISABLE_INSTRUMENTATIONS.split(',');
}

if (process.env.ELASTIC_APM_ENVIRONMENT) {
  options['environment'] = process.env.ELASTIC_APM_ENVIRONMENT;
}

if (process.env.ELASTIC_APM_VERIFY_SERVER_CERT) {
  options['verifyServerCert'] =
    process.env.ELASTIC_APM_VERIFY_SERVER_CERT === 'true';
}

if (process.env.ELASTIC_APM_ACTIVE) {
  options['active'] = process.env.ELASTIC_APM_ACTIVE === 'true';
}

if (process.env.ELASTIC_APM_LOG_LEVEL) {
  if (
    process.env.ELASTIC_APM_LOG_LEVEL === 'trace' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'debug' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'info' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'warn' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'warning' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'error' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'fatal' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'critical' ||
    process.env.ELASTIC_APM_LOG_LEVEL === 'off'
  )
    options['logLevel'] = process.env.ELASTIC_APM_LOG_LEVEL;
}

if (process.env.ELASTIC_APM_CAPTURE_BODY) {
  if (
    process.env.ELASTIC_APM_CAPTURE_BODY === 'all' ||
    process.env.ELASTIC_APM_CAPTURE_BODY === 'off' ||
    process.env.ELASTIC_APM_CAPTURE_BODY === 'errors'
  )
    options['captureBody'] = process.env.ELASTIC_APM_CAPTURE_BODY;
}
if (process.env.ELASTIC_APM_LOG_UNCAUGHT_EXCEPTIONS) {
  options['logUncaughtExceptions'] =
    process.env.ELASTIC_APM_LOG_UNCAUGHT_EXCEPTIONS === 'true';
}

if (process.env.ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES) {
  if (
    process.env.ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES === 'never' ||
    process.env.ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES === 'messages' ||
    process.env.ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES === 'always'
  )
    options['captureErrorLogStackTraces'] =
      process.env.ELASTIC_APM_CAPTURE_ERROR_LOG_STACK_TRACES;
}
if (process.env.ELASTIC_APM_USE_PATH_AS_TRANSACTION_NAME) {
  options['usePathAsTransactionName'] =
    process.env.ELASTIC_APM_USE_PATH_AS_TRANSACTION_NAME === 'true';
}

const apm: apmAgent.Agent = apmAgent.start(options);
export { apm };
