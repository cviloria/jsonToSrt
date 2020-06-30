// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
document.getElementById('tansform').addEventListener('click', function(){

   console.log(document.getElementById('to_convert').value);
   const json=JSON.parse(document.getElementById('to_convert').value);
   // console.log(JSON.parse(json));
   let result='';
   let index=1;
   for(let i=0; i< json.length; i++){
     console.log(json[i]);
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

