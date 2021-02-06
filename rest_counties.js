fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));

const displayCountry = countries => {
    const countriesDiv = document.getElementById('All-country');
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country';
        const countryInfo = `    
        <h3 class="country-name">${country.name}</h3>
        <h4 class="capital-name">${country.capital}</h4>
        <button onclick="displayEveryCountryDtl('${country.name}')"> Details </button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayEveryCountryDtl = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => infoDetails(data[0]))
}
const infoDetails = country => {
    console.log(country);
    const specificDtl = document.getElementById('specific-info');
    specificDtl.innerHTML = `
        <h1>Country:${country.name}</h1>
        <h1>Population:${country.population}</h1>
        <h1>Area:${country.area}</h1>
        <img src="${country.flag}">
    `

    
    const allCountry = document.getElementById('All-country');
    allCountry.style.display = 'none';
    const speInfo = document.getElementById('specific-info');
    speInfo.style.display = 'block';
}