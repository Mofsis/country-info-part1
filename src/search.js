
import axios from 'axios';

let inputCountry = (e) => {
    e.preventDefault();
    const input = document.getElementById("search-input");
    console.log(inputCountry);
    searchCountries(input.value);
}

const listener = document.getElementById("button");
listener.addEventListener("click", inputCountry)

let selectedCountry = ""
async function searchCountries(country) {
    try {
        const countryInput= `https://restcountries.com/v2/name/${country}`;
        selectedCountry = country;
        const result = await axios.get(countryInput);
        console.log(result);

        let valuta = `${result.data[0].currencies[0].name}'s`
        if (result.data[0].currencies.length === 2) {
            valuta = `${result.data[0].currencies[0].name}'s and ${result.data[0].currencies[1].name}'s`
        }

        const searchCountryInfo = document.getElementById("search-function")
        document.getElementById("search-function").style.opacity = "1";
        document.getElementById("input-warning").style.opacity = "0";

        searchCountryInfo.innerHTML = `
        <h3><img class="flagtwo" src="${result.data[0].flag}" alt="flag">${result.data[0].name}</h3> 
        <p>${result.data[0].name} is situated in ${result.data[0].subregion}. It has a population of ${result.data[0].population} people</p>
        <p>The capital is ${result.data[0].capital} and you can pay with ${valuta}</p>
        <p>They speak ${result.data[0].languages[0].name}</p>`

    } catch (e) {
        document.getElementById("input-warning").style.opacity = "1";
        document.getElementById("input-warning").innerHTML = "Country name is invalid";
        document.getElementById("search-function").style.opacity = "0";
    }
}

