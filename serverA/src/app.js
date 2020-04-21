const express = require("express");
const {HOST, PORT, distributer} = require("./conf/conf");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", distributer);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authentication");
    next();
});

app.use('/assets/aria', express.static(__dirname + '/public/aria/web'));
app.use('/assets', express.static(__dirname + '/public'));

app.set("port", PORT);
app.listen(PORT, console.log(`Server running on http://${HOST}:${PORT}`));
