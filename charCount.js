const searchChar = "o";
const text = "Once Upon a Time";


function charCount(myChar, str) {
  var cnt = 0;
    for(var i = 0; i< str.length; i++){
      var lower = str.toLowerCase();
        if(lower.charAt(i) == myChar){
            cnt ++;
        }
        
    }
    return cnt;
}

const result = charCount(searchChar, text);
console.log('result', result);