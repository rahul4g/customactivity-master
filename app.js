const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Custom Journey Builder Activity</title>

    <script type="application/json" src="js/jquery.min.js"></script>
    <script type="application/json" src="js/require.js"></script>
    <script type="application/json" src="js/customActivity.js"></script>
    <script type="text/javascript">
      (function () {
        var config = {
          baseUrl: "js",
        };

        var dependencies = ["customActivity"];

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
    <div id="step1" class="step">
      Select your SMS message:
      <select id="select1">
        <option value="">Select an option</option>
        <option value="someMessage">Some SMS</option>
        <option value="anotherMessage">Another SMS</option>
        <option value="thirdMessage">Third SMS</option>
        <option value="unknownMessage">Unknown SMS</option>
      </select>

      <button id="toggleLastStep">Toggle Last Step</button>
    </div>
    <div id="step2" class="step">
      Here's a second page with some info on it.
    </div>
    <div id="step3" class="step">
      You chose the message:
      <div id="message"></div>
    </div>
    <div id="step4" class="step">
      Hey, here's a fourth step, just for you. Toggle this on or off from step
      1.
    </div>
  </body>
</html>
`
