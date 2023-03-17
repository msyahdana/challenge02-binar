const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  // validasi tipe data
  if (!Array.isArray(dataPenjualan)) {
    return "Error: Invalid Type data";
  }

  // variabel totalPenjualan sebagai variabel counter untuk menjumlahkan setiap kali loop
  let totalPenjualan = 0;

  // looping dataPenjualan menggunakan forEach
  // menjumlahkan totalPenjualan dengan totalTerjual setiap kali looping
  dataPenjualan.forEach((penjualan) => {
    totalPenjualan += penjualan.totalTerjual;
  });

  // mengembalikan value dari totalPenjualan
  return totalPenjualan;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi)); // Output => 307
