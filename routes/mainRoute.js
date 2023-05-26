const express = require('express');


const articlesData = require('./data/articles.json');

const router = express.Router();


router.get('/article/:id', (req,res) => {
  //console.log(req.params)
  let id = Number( req.params.id);
  if(id){
        
    let articles = articlesData;

    const article = articles.find(item => Number(item.id) === id);
    //console.log(article)
    res.json(article)
    return;
  }
 
   
});
router.get('/read_article/:id', (req,res) => {
  res.render("main.ejs");   
});



module.exports = router;