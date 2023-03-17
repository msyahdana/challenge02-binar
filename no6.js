function getAngkaTerbesarKedua(dataNumbers) {
  //cek validasi tipe data
  //jika tipe data bukan array maka akan mengembalikan "Error: invalid type data"
  if (dataNumbers === undefined) {
    return "Error: Where is the parameter?";
  }
  if (!Array.isArray(dataNumbers)) {
    return "Error: invalid type data";
  }

  // menghapus angka yang duptlikan menyimpan pada newDataNumbers
  const newDataNumbers = [...new Set(dataNumbers)];

  // mengurutkan angka terbesar dengan method sort dengan arrow function
  const sortedNumbers = newDataNumbers.sort((a, b) => b - a);

  // mengembalikan angka terbesar kedua pada sortedNumber index ke-1
  return sortedNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output = 8
console.log(getAngkaTerbesarKedua(0)); // output = "Error: invalid data type" karena bukan tipe data array
console.log(getAngkaTerbesarKedua()); // output = "Error: Where is the parameter?" karena tidak difenisikan/undefined
