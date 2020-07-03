const text = "Hello World and Coders";
const aaa ="abc";

function reverseEachWord(str) {
  return str.split('').reverse().join('').split(" ").reverse().join(" ");
}
 
const result = reverseEachWord(text);
console.log('result', result);