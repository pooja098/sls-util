const fs = require('fs'),
  path = require('path'),
  shell = require('shelljs'),
  YAML = require('js-yaml'),
  
  ARTEFACT_DIR = path.resolve('out'),
  APP_NAME = shell.ls(path.resolve(ARTEFACT_DIR))[0],
  CONFIG_TEMPLATE_PATH = path.resolve('lib', 'templates', 'prod.yml'),
  CONFIG_FILE_NAME = 'serverless.yml',
  // timestamp will look like: 2012-11-04t14-51-06.157z
  TIMESTAMP = new Date().toISOString().toLowerCase().replace(/:/g,'-').replace(/\./, '-');

module.exports = function (done) {
  try {
    let ymlConfig = fs.readFileSync(CONFIG_TEMPLATE_PATH),
      jsonConfig = YAML.safeLoad(ymlConfig),
      updatedJSONConfig,
      updatedYAMLConfig;
  
    // update bucket name
    jsonConfig.nextApp.inputs.bucketName = `s3-${TIMESTAMP}`;
  
    // update lambda names
    jsonConfig.nextApp.inputs.name.defaultLambda = `default-${TIMESTAMP}`;
    jsonConfig.nextApp.inputs.name.apiLambda = `api-${TIMESTAMP}`;
  
    // update app name
    updatedJSONConfig = { [APP_NAME]: jsonConfig.nextApp};
  
    updatedYAMLConfig = YAML.safeDump(updatedJSONConfig, { lineWidth: -1 });
  
    fs.writeFileSync(path.resolve(ARTEFACT_DIR, APP_NAME, CONFIG_FILE_NAME), updatedYAMLConfig);
  } catch (e) {
    return done(e)
  }

  return done();
}
