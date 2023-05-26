console.log('authors');

const render = async() => {
    let html = '';

    const result = await axios.get('/authors_data');

    const data = result.data;
    //console.log(data);

    data.forEach((item) => {
        html += `<li>${item.author}</li>`;
    });
    document.querySelector(".list").innerHTML = html;

}



const addNewAuthor = async () => {
    const input = document.querySelector('.input');
    if(input.value){
        const addAuthor = async() => {
            await axios.post('/authors_data', {author:input.value})
        }
        addAuthor();
    }
    render();
}

document.addEventListener('DOMContentLoaded', () =>{
    render();
})

document.querySelector('.save').addEventListener('click', () => {
    addNewAuthor();
})
