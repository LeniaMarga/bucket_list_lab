const View = require('./views/view');
const Request = require('./services/request.js');

const view = new View();
const request = new Request("http://restcountries.eu/rest/v2");
const bucketList = new Request("http://localhost:3000/api/countries")


const getCountriesRequestComplete = function(allCountries) {
    view.populateDropdown(allCountries);
};



const getSelectedCountryComplete = function(){
  view.updateFromOurAPI();
}


const app = function(){
  request.get(getCountriesRequestComplete);
  bucketList.get(getSelectedCountryComplete);

}

document.addEventListener("DOMContentLoaded", app);
