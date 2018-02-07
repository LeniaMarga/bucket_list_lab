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
}

// View.prototype.render = function(country) {
//
// }

module.exports = View;
