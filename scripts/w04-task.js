/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Moroni Motta",
    photo: "./images/photo-1.jpg",
    favoriteFoods: ["Pizza", "Sushi", "Pasta", "Tacos"],
    hobbies: ["Reading", "Writing", "Coding", "Gaming"],
    placesLived: [],
};

myProfile.placesLived.push({
    place: "Uganda",
    length: "2 years",
},
{
    place: "Brazil",
    length: "23 years",
});

document.querySelector("#name").innerHTML = myProfile.name;
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
}
);




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


