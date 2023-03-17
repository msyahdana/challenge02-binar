function changeWord(selectedText, changedText, text) {
  //Method replace() akan mencari selectedText di dalam text dan menggantinya dengan changedText dan mengembalikan string baru.
  return text.replace(selectedText, changedText);
}

const kalimat1 = `Andini sangat mencintai kamu selamanya`;
const kalimat2 = `Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu`;

console.log(changeWord("mencintai", `membenci`, kalimat1)); // Output => "Andini sangat membenci kamu selamanya"
console.log(changeWord("bromo", `semeru`, kalimat2)); //Output => "Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu"
