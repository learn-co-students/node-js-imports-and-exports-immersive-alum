const interface = require("./interface");
const util = require("util");

const moduleName = interface();

try {
  const moduletoInspect = require(moduleName);

  console.log(util.inspect(moduletoInspect, { colors: true }));
} catch (error) {
  console.error(`Unable to inspect module ${moduleName}.`);
  console.error(`Reason: ${error.message}`);
  process.exitCode = 1;
}
