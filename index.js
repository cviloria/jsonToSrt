// Import stylesheets
import './style.css';

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
         if( (i +1)===json.length){

        result= result
                +index+'\n'
                +json[i].start_time+' --> '+json[i].end_time+'\n'
                +json[i].text+'\r';
        }else{
          result= result
                +index+'\n'
                +json[i].start_time+' --> '+json[i].end_time+'\n'
               +json[i].text+'\r\n\n';
        } 
     }else if(option=='option2'){
       if( (i +1)===json.length){

        result= result
                +index+'\n'
                +SecondsTohhmmss(json[i].ini)+' --> '+SecondsTohhmmss(json[i].fin)+'\n'
                +json[i].label+'\r';
        }else{
          result= result
                +index+'\n'
                +SecondsTohhmmss(json[i].ini)+' --> '+SecondsTohhmmss(json[i].fin)+'\n'
                +json[i].label+'\r\n\n';
        } 
     }

     index ++;
  } 
  // console.log(result);
  document.getElementById('to_result').innerHTML=result;


  var a = document.createElement("a");
a.href=`data:text/plain;charset=utf-8,`+encodeURIComponent(result)
a.download = "result.srt"
document.body.appendChild(a)
a.click()
document.body.removeChild(a)


})

function  SecondsTohhmmss (totalSeconds) {
   const hours   = Math.floor(totalSeconds / 3600);
   const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
   let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

   // round seconds
   seconds = Math.round(seconds * 100) / 100;

   let result = (hours < 10 ? '0' + hours : hours);
       result += ':' + (minutes < 10 ? '0' + minutes : minutes);
       result += ':' + (seconds  < 10 ? '0' + seconds : seconds);
   return result;
 }