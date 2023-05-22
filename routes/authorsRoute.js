const express = require('express');

const fs = require('fs');

const authorsData = require('./data/authors.json');
const router = express.Router();

router.get('/authors', (req,res) => {
    res.render('authors.ejs');
});

router.get('/authors_data', (req,res) => {
    //console.log(data);
    res.json(authorsData);
});





router.post('/authors_data', (req,res) => {
    ///console.log(req.body);
    
    let data1 = fs.readFileSync(__dirname + "/data/authors.json");
    let obj = JSON.parse(data1);
    //console.log(obj)

    let counter = 0;

    for(let i = 0; i < obj.length; i++){
        counter++;
    }
    console.log(counter);


    let authorData = {
        "id":'',
        "author": req.body.author,
    }
    //console.log(authorData)
    obj.push(authorData);

    const newData = JSON.stringify(obj, null, 2);
    fs.writeFileSync(__dirname + "/data/authors.json", newData, err => {
        if (err) throw err;
        console.log("author added");
    })
    res.json(newData);
});

module.exports = router;