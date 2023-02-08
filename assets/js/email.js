const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', sendEmail);

/**
 * A function which takes the input boxes from the contacts page and 
 * sets it as parameters, declares the serviceID, templateID, and api 
 * key for emailjs, and emails the responses through emailjs. 
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
        }
    )
    .catch((err) => console.log(err));

    alert('Contact form submitted!');
}

