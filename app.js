let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'",yesNo).toLowerCase();
let searchResults;
switch(searchType){
  case 'yes':
    searchResults = searchByName(people);
    console.log(searchResults);
    break;
  case 'no':
   searchResults = searchByTraits(people);
   console.log(searchResults);
    break;
    default:
  app(people); 
    break;
}

  function searchByTraits(people){
   while(mySearch.length > 1){
  let mySearch;
   let myPrompt = prompt('Please enter trait you would like to filter by');
   switch(myPrompt)
   {
     case 'gender':
       mySearch = searchByGender(people);
       displayPeople(mySearch);
       break;
      case "height":
      mySearch = searchByHeight(people);
      displayPeople(mySearch);
      break;
      case "weight":
        mySearch = searchByWeight(people);
        displayPeople(mySearch);
        break;
      case "eyeColor":
        mySearch = searchByEyeColor(people);
        displayPeople (mySearch);
        break; 
      case 'default' :
        return mySearch;
   }   
   }
  } 
    
// Call the mainMenu function ONLY after you find the SINGLE person you are looking for
// Menu function to call once you find who you are looking for
function mainMenu(person, people){
/* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
if(!person){
  alert("Could not find that individual.");
  return app(people); // restart
}
let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
switch(displayOption){
  case "info":
  personInformation();
  break;
  case "family":
  // TODO: get person's family
  break;
  case "descendants":
  // TODO: get person's descendants
  break;
  case "restart":
  app(people); // restart
  break;
  case "quit":
  return; // stop execution
  default:
  return mainMenu(person, people); // ask again
  
}

function searchByName(people){
let firstName = promptFor("What is the person's first name?", chars);
let lastName = promptFor("What is the person's last name?", chars);
let foundPerson = people.filter(function(person){
  if(person.firstName === firstName && person.lastName === lastName){
    return true;
  }
  else{
    return false;
  }
})
// TODO: find the person using the name they entered
return foundPerson;
}
function searchByGender(people){
let genderFilterChoice = prompt("Please enter the gender you would like to filter by.");
let filteredPeople = people.filter(function(person) {
  if(person.gender === genderFilterChoice){
    return true;
  }else{
    return false;
  }
});
return filteredPeople;
}
function searchByEyeColor(people){
let eyeColorFilterChoice = prompt('Please enter the eye color you would like to filter by.');
let filteredPeople = people.filter(function(person) {
  if(person.eyeColor === eyeColorFilterChoice){
    return true;
  }else{
    return false;
  }
});
return filteredPeople;
}
function searchByHeight(people){ 
let heightFilterChoice = prompt('Please enter the height you would like to filter by');
let filteredPeople = people.filter(function(person) {
  if(person.height == heightFilterChoice){
    return true;
  
  }else{
    return false;
  }

});
return filteredPeople;
}
function searchByWeight(people){
let weightFilterChoice = prompt('Please enter the weight you would like to filter by');
let filteredPeople = people.filter(function(person)  {
  if(person.weight == weightFilterChoice){
    return true;
  
  }else{
    return false;
  }

});
return filteredPeople;
}
// alerts a list of people
function displayPeople(people){
alert(people.map(function(person){
  return person.firstName + " " + person.lastName;
}).join("\n"));
}





let findPerson  = people.filter(function(person){

  if (person < 10) {
      return foundPerson;
  } else {
      return findperson(person - 1);
  }


});
console.log()



// print all of the information about a person:
// height, weight, age, name, occupation, eye color.
// TODO: finish getting the rest of the information to display

//question 1: how can we use person.[x].searchByHeight to get it to print that info in this formula below?



function personInformation(person){
 

  let displayPerson ;
  
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";

  

  alert(personInfo);

}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
// helper function to pass in as default promptFor validation
function chars(input){
return true; // default validation only
}
}
