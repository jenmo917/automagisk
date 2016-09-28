const express = require('express');
const app = express();
app.use('/', express.static(__dirname));

const port = 3000;
app.listen(port, function() {
  console.log("Server listening on port " + port);
});
