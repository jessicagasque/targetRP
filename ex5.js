function inverteString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  

const minhaString = "Hello, Target!";
const stringInvertida = inverteString(minhaString);
console.log(stringInvertida); // "!tegraT ,olleH"
