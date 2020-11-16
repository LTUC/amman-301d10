'use strict';

// $('button').click(function(){
//     console.log('stop clicking me!!')
// });

// $('button').on('click',function(){
//     console.log('stop clicking me!!');
//     $('ul').toggleClass('on');
// });

// $('ul').on('click',function(){
//     console.log('ul is clicked!!');
//     let value = $(this).text();
//     console.log(typeof value);
// })


// $('ul li').on('click',function(){
//     console.log('li is clicked!!');
//     console.log($(this).text());
// })

// $('ul').on('click','li',function(){
//     console.log('li is clicked!!');
//     console.log($(this).text());
// })


// $('select').on('change',function(){
//     // console.log('changed');
//     console.log($(this).val());
//     // console.log(this.value);

// })

// $('select').on('change',function(){
//     // console.log('changed');
//     console.log($(this).val());
//     // console.log(this.value);

// })

$.ajax('./people.json')
.then(data=>{
    console.log(data); // array of objects
    data.forEach((val,idx)=>{
        let newPerson = new Person(val);
        // console.log(newPerson);
        newPerson.render();
    })
    $('.person-template').first().remove();
})

function Person(data) {
    this.name = data.name;
}

Person.prototype.render = function () {
    // console.log('prototype ',this.name);
    // $('ul').append(`<li> ${this.name} </li>`);

    //Cloning
    let personTemplate = $('.person-template').first().clone();
    // personTemplate.removeClass('person-template');
    // console.log(personTemplate.html());
    // personTemplate.text(this.name);
    personTemplate.find('.ppl').text(this.name);
    $('ul').append(personTemplate);

}
