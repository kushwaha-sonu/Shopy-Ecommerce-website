const signup = document.getElementById("signUp");
const signupcontainer = document.getElementById("signUpContainer");
const login = document.getElementById("logIn");
const logincontainer = document.getElementById("logInContainer");


signup.addEventListener("click", () => {
  signupcontainer.classList.remove("d-none");
  signupcontainer.classList.add("d-flex");
  logincontainer.classList.remove("d-flex");
  logincontainer.classList.add("d-none");
});

login.addEventListener("click", () => {
  signupcontainer.classList.remove("d-flex");
  signupcontainer.classList.add("d-none");
  logincontainer.classList.remove("d-none");
  logincontainer.classList.add("d-flex");
});

document.getElementById('signsubmit').addEventListener('click',()=>{
  alert("Account created successfully");
})

document.getElementById('loginsubmit').addEventListener('click',()=>{
  alert("login successfully");
})







// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


