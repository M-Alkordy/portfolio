/* get fetch */
let experiences;
fetch('http://127.0.0.1:8000/api/videos')
.then(res => res.json())
.then(res => console.log(res))

/* post fetch */
const userName = document.querySelector('#name')
const email = document.querySelector('#email')
const content = document.querySelector('#content')
const form = document.querySelector('.form')
let json_name;
let json_email;
let json_content;
userName.addEventListener('change' , ()=>{
    json_name=userName.value
})

email.addEventListener('change' , ()=>{
    json_email= email.value
})
content.addEventListener('change' , ()=>{
    json_content=content.value
})

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    fetch('http://localhost:8000/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: json_name,
            email: json_email,
            content:json_content
        })
        })
    .then(res => res.json())
    .then(res => console.log(res));
})


/* put fetch */

const id = document.querySelector('#id')
const title = document.querySelector('#title')
const sendId = document.querySelector('#sendId')
const getElement = () =>{
    fetch(`https://dummyjson.com/products/${id.value}`)
        .then(res => res.json())
        .then(res => {
            title.value=res.title
        });
}

const putElement = () =>{
    console.log(title.value)
    fetch(`https://dummyjson.com/products/${id.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title.value
            })
        })
    .then(res => res.json())
    .then(console.log);
    axios.put(`https://dummyjson.com/products/${id.value}`,{
        title:title.value})
    .then(res => res.data)
    .then(console.log);
}


/* delete fetch */
const deleteElement=() => {
    fetch(`https://dummyjson.com/products/${id.value}`, {
        method: 'DELETE',
        })
    .then(res => res.json())
    .then(console.log);
}

