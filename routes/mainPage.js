const express = require('express');

const multer = require('multer');

const data = require('./data/data.json');

const router = express.Router();

router.get('/main_page', (req,res) => {
    res.render('mainPage.ejs');
    //console.log(data)
});



module.exports = router;