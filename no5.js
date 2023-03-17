function getSplitName(personName) {
  // cek tipe data
  if (typeof personName !== "string") {
    return "Error : invalid type data";
  }

  // split personName berdasarkan spasi maka splitName akan menjadi array baru yang terdiri dari elemen-elemen yang dipisahkan spasi
  const splitName = personName.split(" ");

  // object untuk menampung 3 element yang telah di split
  const fullName = {
    firstName: splitName[0],
    middleName: splitName[1],
    lastName: splitName[2],
  };

  // cek apakah jumlah elemen dalam splitName valid
  // jika lebih dari 3 makan akan mengembalikan "Error : this function is only for 3 characters name"
  // jika jumlah elemen sama dengan 1 maka property middleName dan lastName pada object fullName akan diisi null
  // jika jumlah elemen sama dengan 2 maka property middleName pada object fullName akan diisi null dan lastName akan diisi element  array splitName indeks ke-1
  if (splitName.length > 3) {
    return "Error : this function is only for 3 characters name";
  } else if (splitName.length == 1) {
    //jika jumlah element
    fullName.middleName = null;
    fullName.lastName = null;
  } else if (splitName.length == 2) {
    fullName.middleName = null;
    fullName.lastName = splitName[1];
  }

  // kembalikan objek berisi nama yang sudah terpisah dan di cek
  return fullName;
}

console.log(getSplitName("Aldi Daniela Pranata")); //Output = {firstName: "Aldi", middleName: "Daniela", lastName: "Pranata"};
console.log(getSplitName("Dwi Kuncoro")); //Output = {firstName: "Dwi", middleName: "null", lastName: "Kuncoro"};
console.log(getSplitName("Aurora")); //Output = {firstName: "Aurora", middleName: "null", lastName: "null"};
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //Output = "Error : this function is only for 3 characters name";
console.log(getSplitName(0)); //Output = "Error : invalid type data"
