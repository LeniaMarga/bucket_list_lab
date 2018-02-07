const View = require('./views/view');
const Request = require('./services/request.js');

const view = new View();
const request = new Request("http://restcountries.eu/rest/v2");
const bucketList = new Request("http://localhost:3000/api/countries")

const getCountriesRequestComplete = function(allCountries) {

    view.populateDropdown(allCountries);

};


const app = function(){
  request.get(getCountriesRequestComplete);
}

document.addEventListener("DOMContentLoaded", app);
