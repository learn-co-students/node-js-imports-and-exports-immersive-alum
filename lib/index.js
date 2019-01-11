const util = require('util');//imports module util
// console.log(util);

const interface = require('./interface');
const moduleName = interface();
 
try {
  const moduleToInspect = require(moduleName);

  console.log(util.inspect(moduleToInspect, { colors: true }));
} catch (error) {
  console.error(`Unable to inspect module ${moduleName}.`);
  console.error(`Reason: ${error.message}`);
}
