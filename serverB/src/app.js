const express = require("express");
const {HOST, PORT} = require("./conf/conf");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://127.0.0.1:8081');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authentication");
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.set("port", PORT);
app.listen(PORT, console.log(`Server running on http://${HOST}:${PORT}`));