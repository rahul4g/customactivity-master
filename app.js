const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
var routes = require('./routes');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

//app.get('/', routes.index );

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});*/


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

