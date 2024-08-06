module.exports = function check(str, bracketsConfig) {
let stack = [];
let openBrackets = [];
let closeBrackets = [];
let sameBrackets = new Set();

for (let i = 0; i < bracketsConfig.length; i++) {
  let config = bracketsConfig[i];
  openBrackets.push(config[0]);
  closeBrackets.push(config[1]);
  if (config[0] === config[1]) {
    sameBrackets.add(config[0]);
  }
}

for (let i = 0; i < str.length; i++) {
  let bracket = str[i];
  if (openBrackets.includes(bracket)) {
    if (sameBrackets.has(bracket) && stack[stack.length - 1] === bracket) {  
      stack.pop();
    }
     else {
      stack.push(bracket);
    }
  } else if (closeBrackets.includes(bracket)) {
    let index = closeBrackets.indexOf(bracket);
    if (stack.length === 0 || openBrackets[index] !==stack.pop()) {
      return false;
    }
    }  
}

return stack.length === 0;

}
