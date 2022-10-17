/* 
Credit til Anders Christensen
*/
const onSubmit = (e) => {

    e.preventDefault();

    const resultElement = document.querySelector('.valid');

    let postObj = {
        "email" : e.target.elements.email.value,
        "message" : e.target.elements.message.value
    } 

fetch('https://modelin.webmcdm.dk/contacts', {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }   
})
.then((response) => {
    console.log('--->', response, response.ok)
    
    return response.json()
})
.then(response => {
    console.log('--->hey')
    resultElement.textContent = response.result
})
}
  
const contactForm = document.querySelector('.contact-container');
contactForm.addEventListener('submit', onSubmit)

// Show and remove validation message start
function showValidation() {
    document.querySelector('.valid').style.display = 'flex';
}

function removeValidation() {
    setTimeout(function(){
        document.querySelector('.valid').style.display = 'none';
    }
    , 3000); 
    }
// Show and remove validation message end 