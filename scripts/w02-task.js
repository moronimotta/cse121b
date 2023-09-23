/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
var fullName = "Moroni Motta";
var currentYear = new Date().getFullYear();
var profilePicture = "./images/photo-1.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');

var imageElement = document.getElementById("profile-picture");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);




/* Step 5 - Array */
favFoods = ["Strongonoff", "Lasanha", "Pizza", "Pasta"];
foodElement.innerHTML = `${favFoods}`;
var favorite_food = "Sushi";
favFoods.push(favorite_food);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




