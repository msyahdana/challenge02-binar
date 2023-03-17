function isValidPassword(givenPassword) {
  // validasi terhadap tipe data parameter
  // Mengecek jika givenPassword tidak diberikan masukan/tidak di definisikan alias (undefined) maka akan mengembalikan string "Error: Bro where is the parameter?"
  // Mengecek jika tipe data givenPassword tidak sama dengan string maka akan mengembalikan string "Error: Invalid data type!"
  if (givenPassword === undefined) {
    return "Error: Where is the parameter?";
  } else if (typeof givenPassword !== "string") {
    return "Error: Parameter must be a string";
  } else if (givenPassword.length <= 8) {
    return false;
  }

  // regular expression untuk mengecek format givenPassword harus ada uppercase, lowercase, dan angka
  const regexUpperCase = /[A-Z]/;
  const regexLowerCase = /[a-z]/;
  const regexNumber = /[0-9]/;

  // mengembalikan true jika semuanya bernilai true, jika salah satunya bernilai false maka akan mengembalikan false
  return regexUpperCase.test(givenPassword) && regexLowerCase.test(givenPassword) && regexNumber.test(givenPassword) ? true : false;
}

// Expected result

//ketika Funtion tersebut dipanggil
console.log(isValidPassword("Meong2021"));
// Output => true
// karena memenuhi syarat terdiri dari 8 huruf, ada huruf besar, ada huruf kecil, dan ada angka

console.log(isValidPassword("meong2021"));
// Output => false
// karena tidak ada huruf besar

console.log(isValidPassword("@eong"));
// Output => false
// karena tidak ada angka dan panjang stringnya hanya 5

console.log(isValidPassword("Meong2"));
// Output => false
// karena panjang stringnya hanya 6

console.log(isValidPassword(0));
// Output => "Error: Parameter must be a string"
// karena tipe datanya bukan string

console.log(isValidPassword());
// Output => "Error: Where is the parameter?"
// karena tidak difenisikan/undefined
