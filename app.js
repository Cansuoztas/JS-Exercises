// const text1 = "JavaScript coding  ChAllenge",
//   text2 = "JavaScript-coding-challenge",
//   text3 = "javaScriptCodingChallenge";

// const text = "JavaScript coding challenge";

// const converter = (str) => {
//   return str
//     .split(" ")
//     .map((w, i) => {
//       if (i == 0) {
//         return w.toLowerCase();
//       }
//       return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
//     })
//     .join("");
// };

// console.log(converter(text));

/*************2.Exercises*********/
function passwordGenerator() {
  let password = [];
  let specialCharacters = "!@#$%^&*(_+~|}{[]:;?><,./-=";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 3; i++) {
    password.push(Math.floor(Math.random() * 10));
  }
  for (let i = 0; i < 2; i++) {
    password.push(specialCharacters[Math.floor(Math.random() * 27)]);
  }
  password.push(letters[Math.floor(Math.random() * 26)]);
  password.push(letters[Math.floor(Math.random() * 26) + 26]);
  for (let i = 0; i < 3; i++) {
    password.push(letters[Math.floor(Math.random() * 52)]);
  }
  console.log(password.join(""));
  for (let i = password.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = password[i];
    password[i] = password[j];
    password[j] = temp;
  }
  return password.join("");
}
