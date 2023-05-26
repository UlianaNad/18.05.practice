const express = require('express');

const multer = require('multer');
const fs = require('fs');

const articlesData = require('./data/articles.json');

const router = express.Router();

router.get('/articles', (req,res) => {
    res.render('articles.ejs');
});

router.get('/articles_data', (req,res) => {
    res.json(articlesData);
});

router.post('/articles_data', (req,res) => {
   
    let data1 = fs.readFileSync(__dirname + "/data/articles.json");
    let obj = JSON.parse(data1);
    //console.log(obj)
    //console.log(req.body)
    let counter = 1;

    for(let i = 0; i < obj.length; i++){
        counter++;
    }
    console.log(counter);
    let articleData = {
        "id":counter,
        "title": req.body.title,
        "article":req.body.article,
        "authorID": req.body.author
    }
    
    //obj.push(authorData);
    obj.push(articleData)

    const newData = JSON.stringify(obj, null, 4);
    fs.writeFileSync(__dirname + "/data/articles.json", newData, err => {
        if (err) throw err;
        console.log("article added");
    })
    res.json(newData);
});
module.exports = router;