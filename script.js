window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let pilotNameInput = document.querySelector("input[name=pilotName]").value;
   let coPilotNameInput = document.querySelector("input[name=copilotName]").value;
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
   let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
   
   form.addEventListener("submit", function(event){
      
      
      




      
      
      
      event.preventDefault()


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