const View = function(){
  this.countries = [];
};

// View.prototype.add = function(country) {
//   this.countries.push(country);
//   // this.render(country);
// }

View.prototype.populateDropdown = function(countries) {
  var select = document.querySelector('#countries-dropdown');

  countries.forEach(function (item, index) {
    item.index = index;
    var option = document.createElement('option');
    option.value = index;
    option.text = item.name;
    select.appendChild(option);
  })

  // this.countries = countries;

  select.addEventListener('change', function(event){
    var index = this.value;
    var country = countries[index];

    updateInfo(country);

  });

  const updateInfo = function(country){
    const ul = document.querySelector('#list-item');
    const liName = document.createElement('li');
    const liPopulation = document.createElement('li');
    const liCapital = document.createElement('li');
    liName.innerText = country.name;
    ul.appendChild(liName);
    liPopulation.innerText = country.population;
    ul.appendChild(liPopulation);
    liCapital.innerText = country.capital;
    ul.appendChild(liCapital);
  };
}



// View.prototype.render = function(country) {
//
// }

module.exports = View;
