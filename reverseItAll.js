const text = "Hello World and Coders";
 
function reverseItAll(str) {
  return str.split('').reverse().join('');
}
 
const result = reverseItAll(text);
console.log('result', result);