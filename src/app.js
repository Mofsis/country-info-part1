import axios from 'axios';

async function getCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all")
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

getCountries();


const listOfCountries = document.getElementById("list")
fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
        const countries = data.sort((a,b) => a.population - b.population)
            .map((country) => {
            return `<li class="region-${country.region}"><img class="flag" src="${country.flag}" alt="flag">${country.name}
                <p class="pop">Has a population of ${country.population} people</p>
            </li> `;
        });

        listOfCountries.innerHTML = `${countries.join('')}`;
    });



