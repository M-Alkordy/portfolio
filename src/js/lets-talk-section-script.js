const messageBox = document.querySelector(".message-box");

messageBox.addEventListener("click", () => {
    messageBox.querySelector("textarea").focus();
})

const formEle = document.querySelector(".form");

formEle.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEle);
    const data = Object.fromEntries(formData);
   
    fetch('http://localhost:8000/api/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
})