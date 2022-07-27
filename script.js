window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   
   
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilotCheck = Number(pilotNameInput.value);
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let copilotCheck = Number(coPilotNameInput);
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelCheck = Number(fuelLevelInput.value);
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoCheck = Number(cargoMassInput.value);

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value  === ""){
            alert("All fields are required!");

      } else if (isNaN(fuelCheck) === true || isNaN(cargoCheck) === true || isNaN(pilotCheck) === false || isNaN(copilotCheck) === false)  {
            alert("Please enter valid data types.");

      
         };
       

      
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/


//1. set up window load handler X

//2. set up a submit handler for the form

//3. cancel submission using event.preventDefault 

//4. validate that all fields have data

//5. check data types

//6. check fuel level and cargo mass, and report launch status

//7. use style rule to make the list visible

//8. fetch planet data

//9. randomly choose one planet

//10. display info on chosen planet