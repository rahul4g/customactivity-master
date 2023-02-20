const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
var routes = require('./routes');
var activity    = require('./routes/activity');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

//app.get('/', routes.index );

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});*/


app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/journeybuilder/save/', activity.save );
app.post('/journeybuilder/validate/', activity.validate );
app.post('/journeybuilder/publish/', activity.publish );
app.post('/journeybuilder/execute/', activity.execute );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



