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

    <script  src="js/jquery.min.js"></script>
    <script  src="js/require.js"></script>
    <script  src = "js/postmonger.js"></script>

    
  </head>
  <body>
    <h3>Configuration JSON</h3>
    
<textarea id = "configuration"></textarea>


  </body>
</html>
`
