const searchChar = "o";
const text = "Once Upon a Time";


function charCount(myChar, str) {
  var cnt = 0;
  var lower = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (lower.charAt(i) === myChar) {
      cnt++;
    }
  }
  return cnt;
}

const result = charCount(searchChar, text);
console.log('result', result);