import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage.js';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const throttledOnTime = throttle(onPlay, 1000)
player.on('timeupdate', throttledOnTime);





     function onPlay({ seconds }) {
     localStorage.setItem(LOCALSTORAGE_KEY, seconds);
        // data is an object containing properties specific to that event
    };
   
    const saveData = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(saveData);
    player.setCurrentTime(saveData).then(function(seconds)
    {
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
               
                break;
    
            default:
              
                break;
        }
    });