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

const apm: apmAgent.Agent = apmAgent.start(options);
export { apm };
