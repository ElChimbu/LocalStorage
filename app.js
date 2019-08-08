//Avoid the recharge of the form by default

let form = document.getElementById("formList");

form.addEventListener("submit", e => {
    e.preventDefault();
})


//Class

class Animal{
    constructor(type, name, age, gender, breed, cont){
        this.type = type;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.cont = cont;
    }
 }

 //Variables

 var cont = 0;
 var array = []

//Functions

 function myFunction(){
    var type = document.querySelector('#type').value;
    var name = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var gender = document.querySelector('#gender').value;
    var breed = document.querySelector('#breed').value;
    
    cont = cont + 1;
    
    var newAnimals = new Animal(type, name, age, gender, breed, cont);
    array.push(newAnimals);
    
    localStorage.setItem(`Animal`, JSON.stringify(array))    

    refreshDOM();
}
    

function refreshDOM(){
    var List = document.querySelector('#animalList');
     var get = JSON.parse(localStorage.getItem(`Animal`));
     console.log(typeof(get));

     get.forEach(data => {
        return List.innerHTML = `
       <div class="card bg-light mb-3" style="max-width: 18rem;">
       <div class="card-header">${data.type}</div>
       <div class="card-body">
         <h5 class="card-title">Name: ${data.name}</h5>
         <h5 class="card-title">Age: ${data.age}</h5>
         <h5 class="card-title">Gender: ${data.gender}</h5>
         <h5 class="card-title">Breed: ${data.breed}</h5>
        </div>
       `  
    });

    /*
     get.map( data =>{
       return List.innerHTML = `
       <div class="card bg-light mb-3" style="max-width: 18rem;">
       <div class="card-header">${data.type}</div>
       <div class="card-body">
         <h5 class="card-title">Name: ${data.name}</h5>
         <h5 class="card-title">Age: ${data.age}</h5>
         <h5 class="card-title">Gender: ${data.gender}</h5>
         <h5 class="card-title">Breed: ${data.breed}</h5>
        </div>
       `  
     })
     */
    }




document.addEventListener('DOMContentLoaded', refreshDOM)

