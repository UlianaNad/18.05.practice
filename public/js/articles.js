console.log('articles');

const renderArticlesList = async() => {
    let html = '';
    const result = await axios.get('/articles_data');
    const data = result.data;
    data.forEach((item) => {
        html += `<li class="list-group-item">${item.id}. ${item.title}</li>`;
    });
    document.querySelector(".list").innerHTML = html;
}

const renderAuthorList = async() => {
    let html = '';

    const result = await axios.get('/authors_data');

    const data = result.data;
    //console.log(data);

    data.forEach((item) => {
        html += `<option  value="${item.id}">${item.author}</option>`;
    });
    document.querySelector(".author").innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () =>{
    renderArticlesList();
    renderAuthorList();
})

const input = document.querySelector('.add_text');
const title = document.querySelector('.add_title');
const author = document.querySelector('select');

const getValue = ()=>{
    author.addEventListener('change', () => {
        console.log(author.value, title.value)
    });
}
getValue();



const addNewArticle = async() => {
    if(input.value && author.value ) {
        const addArticle = async() => {
            await axios.post('/articles_data', {title:title.value, article:input.value, author: author.value})
        }
        addArticle();
    }
}
document.querySelector('.save').addEventListener('click', () => {
    addNewArticle()
})