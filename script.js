const text = "]p4te,>x";
function alphabetPosition(text) {
  const empty = [];
  const strange = [];
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arr = text.toUpperCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (!alphabet.includes(arr[i])) {
      strange.push(arr[i]);
    } else {
      for (let j = 0; j < alphabet.length; j++) {
        if (arr[i] == alphabet[j]) {
          empty.push(alphabet.findIndex((j) => j == arr[i]) + 1);
        }
      }
    }
  }
  return empty.join(" ");
}
console.log(alphabetPosition(text));//16 20 5 24