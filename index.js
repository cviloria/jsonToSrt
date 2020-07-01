// Import stylesheets
import './style.css';
import moment from 'moment';
require("moment-duration-format");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
document.getElementById('tansform').addEventListener('click', function(){

   console.log(document.getElementById('to_convert').value);
   console.log(document.getElementsByName('exampleRadios'));
   var radios = document.getElementsByName('exampleRadios');
   var option='';
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        option=radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
   const json=JSON.parse(document.getElementById('to_convert').value);
   // console.log(JSON.parse(json));
   let result='';
   let index=1;
   for(let i=0; i< json.length; i++){
     console.log(json[i]);
     if(option=='option1'){
       
          result= result
                +index+'\r\n'
                +json[i].start_time+' --> '+json[i].end_time+'\r\n'
               +json[i].text+'\r\n\r\n';
        
     }else if(option=='option2'){
     
          result= result
                +index+'\r\n'
                +srtTimestamp(json[i].ini)+' --> '+srtTimestamp(json[i].fin)+'\r\n'
                +json[i].label+'\r\n\r\n';
        
     }

     index ++;
  } 
  // console.log(result);
  document.getElementById('to_result').innerHTML=result;

})
document.getElementById('download').addEventListener('click', function(){
 var result=document.getElementById('to_result').value;
 var a = document.createElement("a");
  a.href=`data:text/plain;charset=utf-8,`+encodeURIComponent(result)
  a.download = "result.srt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
});
 function  SecondsTohhmmss (totalSeconds) {
   //totalSeconds=totalSeconds.replace('.',',');
   const hours   = Math.floor(totalSeconds / 3600);
   const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
   let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

   // round seconds
   console.log('seconds',seconds*100)
   seconds = Math.round(seconds * 100) / 100;

   let result = (hours < 10 ? '0' + hours : hours);
       result += ':' + (minutes < 10 ? '0' + minutes : minutes);
       result += ':' + (seconds  < 10 ? '0' + seconds : seconds);
   return result;
 } 

function srtTimestamp(seconds) {
    var $milliseconds = seconds*1000;
    
   var $seconds = Math.floor($milliseconds / 1000);
   var $minutes = Math.floor($seconds / 60);
   var $hours = Math.floor($minutes / 60);
    $milliseconds = $milliseconds % 1000;
    $seconds = $seconds % 60;
    $minutes = $minutes % 60;
    return ($hours < 10 ? '0' : '') + $hours + ':'
         + ($minutes < 10 ? '0' : '') + $minutes + ':'
         + ($seconds < 10 ? '0' : '') + $seconds + ','
         + ($milliseconds < 100 ? '0' : '') + ($milliseconds < 10 ? '0' : '') + $milliseconds;
}



/*  function SecondsTohhmmss(totalSeconds){
  //return moment(totalSeconds).format('HH:mm:ss');
  return moment.duration(totalSeconds, "hour").format("hh:mm:ssss");
 } */