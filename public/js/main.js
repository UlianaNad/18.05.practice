console.log('work');


const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
let articID = 1;




const renderTitle = async (articleId) => {
    const result =  await axios.get('/article/'+ articleId);
    
    const getArticlesData = async() =>{
        const result =  await axios.get('/articles_data');
        const data = result.data;

        data.forEach((item) => {
            const htmlTitle = `<div>${item.title}</div>`;
            const htmlText = `<div>${item.article}</div>`;
            
        if(item.id === articID){
            //console.log(item.id, articID)
            const authorID = item.authorID;
            window.global = authorID;
            //console.log(authorID)
            document.querySelector('.title').innerHTML = htmlTitle;
            document.querySelector('.text').innerHTML = htmlText;
           
            const getAuthorsData = async() =>{
                const result = await axios.get('/authors_data');
                const authorsData = result.data;
                // // console.log(authorsData)
                const authorName = authorsData.find(author => author.id === authorID);
                console.log(authorName.name);
                //console.log(authorID)
                if (authorName.id == authorID)
                {
                    const html = `<div>${authorName.name}</div>`;
                    document.querySelector('.authorName').innerHTML = html;
                }
            }
            getAuthorsData(); 
        }

        })
       
    }
    getArticlesData();
}
renderTitle(articID);

next.addEventListener('click', ()=>{
    articID = articID +1;
    renderTitle(articID);
})
previous.addEventListener('click', ()=>{
    articID = articID -1;
    renderTitle(articID);
})