console.log('articles');

const renderArticlesList = async() => {
    let html = '';
    const result = await axios.get('/authors_data');
    const data = result.data;
    data.forEach((item) => {
        html += `<li>${item.text}</li>`;
    });
    document.querySelector(".list").innerHTML = html;
}

const renderAuthorList = async() => {
    let html = '';

    const result = await axios.get('/authors_data');

    const data = result.data;
    //console.log(data);

    data.forEach((item) => {
        html += `<option value="${item.author}">${item.author}</option>`;
    });
    document.querySelector(".author").innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () =>{
    renderArticlesList();
    renderAuthorList();
})

const input = document.querySelector('.add_text');
const author = document.querySelector('select');

const getValue = ()=>{
    author.addEventListener('change', () => {
        console.log(author.value)
    });
}
getValue();



const addNewArticle = async() => {


    if(input.value && author.value ) {
        const addArticle = async() => {
            await axios.post('/articles_data', {text:input.value, author: author.value})
        }
        addArticle();
    }
}
document.querySelector('.save').addEventListener('click', () => {
    addNewArticle()
})