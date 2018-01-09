// Write your JavaScript code here!
/* calculate weight on other planets
   allows for input of custom planets 
*/
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

//appends an option element for each planet
planets.reverse().forEach(function(planet) {
    var newOption = document.createElement('option');
    var eachPlanet = document.createTextNode(planet[0]);

    newOption.appendChild(eachPlanet);
    document.getElementById('planets').appendChild(newOption);
});

function plutoToggleVisibility() {
    var checkBox = document.getElementById('pluto-checkbox');
    var selectElement = document.getElementById('planets');

    if (checkBox.checked === true) {
        selectElement[11].style.display = 'initial';
    }
    else {
        selectElement[11].style.display = 'none';
        selectElement.value = '';
    }
};
//toggles display for input fields for custom planets
function planetToggleVisibility() {
    var checkBox = document.getElementById('planets-checkbox');
    var customInput = document.getElementById('custom-section');

    if (checkBox.checked === true) {
        customInput.style.display = 'block';
    }
    else {
        customInput.style.display = 'none';
    }
};

function calculateWeight(weight, planetName) {
    
    //match selected planet to array for multipler value
    for (var i = 0; i < planets.length; i++) {
    
        if (planets[i][0] == planetName) {
            var result = (weight * planets[i][1]);
            return result;
        }
    }
};

function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;

    var selectElement = document.getElementById('planets');
    //stores text of selected option element in variable
    var planetName = selectElement.options[selectElement.selectedIndex].text;
    //returns function if no planet has been selected
    if (selectElement.selectedIndex == 0) {
        return;
    }
    
    var weightResult = calculateWeight(userWeight, planetName);
    var textOutput = document.getElementById('output');

    textOutput.innerHTML = 'If you were on ' + planetName + ', you would weigh ' + weightResult + 'lbs!'
    document.getElementById('user-weight').value = '';
};

function pushCustomPlanet() {
    var planetInput = document.getElementById('planet-name').value;
    var multiplierInput = document.getElementById('planet-multiplier').value;

    var newOption = document.createElement('option');
    var eachPlanet = document.createTextNode(planetInput);

    planets.push([planetInput, parseFloat(multiplierInput)]);
    //store new planets in global planet variable for calculations

    newOption.appendChild(eachPlanet);
    document.getElementById('planets').appendChild(newOption);
    //add planet values to select element

    document.getElementById('planet-name').value = '';
    document.getElementById('planet-multiplier').value = '';
    //reset input values
};



