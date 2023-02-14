const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Custom Journey Builder Activity</title>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/require.js"></script>
    <script type="text/javascript" src="js/postmonger.js"></script>
    <script type="text/javascript">
        (function() {
            var config = {
                baseUrl: "js",
            };

            var dependencies = [
                "customActivity"
            ];

            require(config, dependencies);
        })();
    </script>

    <!--Styles-->
    <style type="text/css">
        body {
            padding: 20px;
            margin: 0;
        }
        .step {
            display: none;
        }
        #step1 {
            display: block;
        }
    </style>

</head>
<body>
    <h3>Configuration JSON</h3>
    
<input type="text" id="name" placeholder="Name">
<input type="text" id="phone" placeholder="Phone">
<input type="text" id="template" placeholder="Template">



  </body>
</html>
`
