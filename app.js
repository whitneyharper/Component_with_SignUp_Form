(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })


    const emailValidation = document.getElementById('emailValidation')
    const emailFeedback = document.getElementById('emailFeedback')
   
  
    emailValidation.oninput = () => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        if(!re.test(emailValidation.value)){
        emailValidation.setCustomValidity("Invalid field.");
        emailValidation.classList.add('is-invalid');
        emailFeedback.innerText = "Looks like this is not an email";
        emailValidation.style.backgroundImage = "url('images/icon-error.svg')";
        } else {
        emailValidation.classList.remove('is-invalid'); 
        emailValidation.setCustomValidity("")
        }
    }

  })();