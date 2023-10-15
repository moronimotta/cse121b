const templesElement = document.querySelector("#temples");
let templeList = [];

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.style.width = "400px";
    img.style.height = "250px"; 
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
};

const reset = () => {
  templesElement.innerHTML = "";
};

const sortBy = (temples) => {
  reset();
  let filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.toLowerCase().includes("utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.toLowerCase().includes("utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "abc":
        displayTemples(temples.sort((a, b) => a.templeName.localeCompare(b.templeName)));
        break;
    case "all":
      displayTemples(temples);
      break;
  }
};

getTemples();
document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));
