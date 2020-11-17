'use strict';



let neighborhoods = [];

function Neighborhood (rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
}


Neighborhood.prototype.toHtml = function() {
  
  // Demo Part 1: Build it all with jQuery
  // let container = $('#div1').append(`
  // <h2>${this.name}</h2>
  // <p>${this.city}</p>
  // <p>${this.population}</p>
  // <p>${this.founded}</p>
  // `);  
  // return container;


  // Demo Part 2: Use jQuery to clone
  // let container = $('.template').clone();
  // container.removeClass('template');
  // container.find('.name').text(this.name);
  // container.find('.city').text(this.city);
  // container.find('.population').text(this.population);
  // container.find('.founded').text(this.founded);
  // container.find('.body').text(this.body);
  // return container;


  // Demo Part 3: Mustache
  //1- get the template from html
  let template = $('#neighborhood-template').html();
  console.log(template);
  console.log(this);
  let html = Mustache.render(template,this); //(string,object)
  return html;

};





neighborhoodDataSet.forEach(neighborhoodObject => {
  let newObj = new Neighborhood(neighborhoodObject);
  neighborhoods.push(newObj);
  let renderedObj = newObj.toHtml();
  $('#neighborhoods').append(renderedObj);
});

