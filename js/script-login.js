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





/* DARK MODE PERSISTENCE*/
let darkModeState = false;

//Detected if darkmode is enabled on the OS
const getScheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle('dark', state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}


//Call function toggleDarkMode
//toggleDarkMode(getScheme.matches);
// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") === "true");


//Listen for change in the OS settings.
getScheme.addListener((evt) => toggleDarkMode(evt.matches));
