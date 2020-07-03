const text = "Hello World and Coders";
 
function reverseEachWord(str) {
  return str.split('').reverse().join('');
}
 
const result = reverseEachWord(text);
console.log('result', result);