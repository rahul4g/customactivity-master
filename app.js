const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/', routes.index );



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


