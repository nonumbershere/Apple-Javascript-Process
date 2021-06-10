
function kill(application_name) {
  var app = new Application(application_name);
  if(app) return app.quit();
}

function run(app_name) {
  var app_nam = app_name;
  var app = new Application(app_nam);
  return app.activate();
}

kill("Safari");
