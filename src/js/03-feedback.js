
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage.js';
const LOCALSTORAGE_KEY = "feedback-form-state";
const saveData = {};

const form = document.querySelector(".feedback-form");  


form.addEventListener("submit", onFormSubmit);
const throttledOnFormInput = throttle(onInput, 500);
form.addEventListener('input', throttledOnFormInput);

function onInput(evt)  {
const { name, value } = evt.target;
   let saveData = load(LOCALSTORAGE_KEY);
    saveData = saveData ? saveData : {};
  saveData[name] = value;
   save(LOCALSTORAGE_KEY, saveData);
  
  }
 




function onFormSubmit(evt) {
  evt.preventDefault();
const { elements: { email, message }} = evt.target; 
 evt.target.reset();
remove(LOCALSTORAGE_KEY);
 
}

  
updateInput ();
function updateInput() {
const saveData = load(LOCALSTORAGE_KEY);
if(!saveData){
  return; }
  
    Object.entries(saveData).forEach(([name, value]) => {
      form.elements[name].value = value;
    })
    
 
  }



 
 



