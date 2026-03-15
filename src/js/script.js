
const form = document.querySelector("form");


const savedFirstName = document.querySelector("#savedFirstName");
const savedLastName = document.querySelector("#savedLastName");
const savedEmail = document.querySelector("#savedEmail");
const savedCountry = document.querySelector("#savedCountry");
const savedAccountType = document.querySelector("#savedAccountType");
const savedAbout = document.querySelector("#savedAbout");

const savedUserPanel = document.querySelector("#savedUserPanel");
const noSavedUser = document.querySelector("#noSavedUser");

const loadUserBtn = document.querySelector("#loadUserBtn");
const clearUserBtn = document.querySelector("#clearUserBtn");



form.addEventListener("submit", function(event) {

    event.preventDefault();

    
    const firstName = document.querySelectorAll(".form-control")[0].value;
    const lastName = document.querySelectorAll(".form-control")[1].value;
    const email = document.querySelectorAll(".form-control")[2].value;
    const password = document.querySelectorAll(".form-control")[3].value;
    const country = document.querySelector(".form-select").value;
    const about = document.querySelector("textarea").value;

    const accountType = document.querySelector('input[name="accountType"]:checked').nextElementSibling.textContent;

    
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        country: country,
        accountType: accountType,
        about: about
    };

    
    const userJSON = JSON.stringify(user);
    localStorage.setItem("registeredUser", userJSON);

    displayUser(user);

    alert("Registration Saved!");
});



function loadUser() {

    const savedString = localStorage.getItem("registeredUser");

    if (!savedString) {
        return;
    }

    const savedUser = JSON.parse(savedString);

    displayUser(savedUser);
}



function displayUser(userObj) {

    savedFirstName.textContent = userObj.firstName;
    savedLastName.textContent = userObj.lastName;
    savedEmail.textContent = userObj.email;
    savedCountry.textContent = userObj.country;
    savedAccountType.textContent = userObj.accountType;
    savedAbout.textContent = userObj.about;

    savedUserPanel.classList.remove("d-none");
    noSavedUser.classList.add("d-none");
}



function clearUser() {

    localStorage.removeItem("registeredUser");

    savedUserPanel.classList.add("d-none");
    noSavedUser.classList.remove("d-none");
}



loadUserBtn.addEventListener("click", loadUser);
clearUserBtn.addEventListener("click", clearUser);



loadUser();