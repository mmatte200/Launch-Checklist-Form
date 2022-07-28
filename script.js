window.addEventListener("load", function(){

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(
         function(data){
            let missionTargetNode = document.getElementById("missionTarget")
            let randomPlanet = data[Math.floor(Math.random() * data.length)];
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
<ul>
   <li>Name: ${randomPlanet.name}</li>
   <li>Diameter: ${randomPlanet.diameter}</li>
   <li>Star: ${randomPlanet.star}</li>
   <li>Distance from Earth: ${randomPlanet.distance}</li>
   <li>Number of Moons: ${randomPlanet.moons}</li>
</ul>
<img src="${randomPlanet.image}">
            `;
      
            


            
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilotCheck = Number(pilotNameInput.value);
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let copilotCheck = Number(coPilotNameInput);
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelCheck = Number(fuelLevelInput.value);
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoCheck = Number(cargoMassInput.value);
      let itemStatusNode = document.getElementById("itemStatus");
      let pilotStatusNode = document.getElementById("pilotStatus");
      let copilotStatusNode = document.getElementById("copilotStatus");
      let fuelStatusNode = document.getElementById("fuelStatus");
      let cargoStatusNode = document.getElementById("cargoStatus");
      let launchStatusNode = document.getElementById("launchStatus");
      

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value  === ""){
            alert("All fields are required!");

      } else if (isNaN(fuelCheck) === true || isNaN(cargoCheck) === true || isNaN(pilotCheck) === false || isNaN(copilotCheck) === false)  {
            alert("Please enter valid data types.");
      
         } else {
            itemStatusNode.style.visibility = "visible";
            pilotStatusNode.innerHTML = `Pilot Name: ${pilotNameInput.value}`;
            copilotStatusNode.innerHTML = `Co-pilot Name: ${coPilotNameInput.value}`;
               if (fuelCheck < 10000) {
                  fuelStatusNode.innerHTML = "Not enough fuel for the journey.";
                  launchStatusNode.innerHTML = "Shuttle Not Ready For Launch";
                  launchStatusNode.style.color = "red";
               } else if (fuelCheck >= 10000) {
                  fuelStatusNode.innerHTML = `Fuel Level Check Passed`;
                  
               } if (cargoCheck <= 10000){
                  cargoStatusNode.innerHTML = `Cargo Mass Check Passed`
                  launchStatusNode.innerHTML = "Shuttle Ready For Launch";
                  launchStatusNode.style.color = "Green";

               } else {
                  cargoStatusNode.innerHTML = `Too Much Mass For Takeoff`
                  launchStatusNode.innerHTML = "Shuttle Not Ready For Launch";
                  launchStatusNode.style.color = "red";

               };
            };

         });
      });
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