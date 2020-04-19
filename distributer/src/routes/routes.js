const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");

router.get('/', function (req, res) {return res.redirect('/aria/home')});
router.get('/:entity/home', controller.fetchPage);
router.get('/:origin/*', controller.fetchFile);

module.exports = router;