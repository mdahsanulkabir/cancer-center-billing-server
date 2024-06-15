const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello CMHCC routes \n");
});

module.exports = router