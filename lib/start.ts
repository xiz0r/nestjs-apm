const elasticApm = require('elastic-apm-node');
const apm = {
  isStarted: (): boolean => elasticApm.isStarted(),
  start: (options?): any => elasticApm.start(options)
};
export { apm };
