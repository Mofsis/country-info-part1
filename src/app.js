import axios from 'axios';

async function getCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all")
        console.log(result);

        const data = result.data
        const listOfCountries = document.getElementById("list")

        const countries = data.sort((a,b) => a.population - b.population)
            .map((country) => {
                return `<li class="region-${country.region}"><img class="flag" src="${country.flag}" alt="flag">${country.name}
                <p class="pop">Has a population of ${country.population} people</p>
            </li> `;
            });

        listOfCountries.innerHTML = `${countries.join('')}`;
    } catch (e) {
        console.error(e);
    }
}

getCountries();

let nav = document.getElementById("navbar");

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        nav.style.opacity = ".7";
        nav.style.padding = "1px";
    } else {
        nav.style.opacity = "1";
        nav.style.padding = "5px";
    }
}
