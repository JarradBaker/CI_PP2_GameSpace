// Declaring and assigning the submit button
const submitButton = document.getElementById('submit-btn');


// Adding an event listener to the button to run the function
submitButton.addEventListener('click', sendEmail);

/**
 * A function which takes the input boxes from the contacts page
 * and emails the responses through emailjs
 */
function sendEmail() {
    var parameters = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }; 

    const serviceID = 'service_2oq1xpu';
    const templateID = 'template_qetzcgr';

    emailjs.init("dsW5HOrQvkL62kH5a");

    emailjs.send(serviceID, templateID, parameters)
    .then(
        res => {
            document.getElementById('full-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            console.log(res);
            alert("Your message has been sent successfully!")
        }
    )
    .catch((err) => console.log(err));
}

