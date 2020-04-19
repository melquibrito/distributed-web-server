const express = require("express");
const {HOST, PORT} = require("./conf/conf");
const routes = require("./routes/routes");

const app = express();
app.use('/', express.static('http://127.0.0.1:8082/assets'));
app.use(routes);
app.set("port", PORT);
app.listen(PORT, console.log(`Server running on http://${HOST}:${PORT}`));