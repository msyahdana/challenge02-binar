const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "tere liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  //validasi tipe data
  if (!Array.isArray(dataPenjualan)) {
    return "Invalid data Type";
  }
  // menetapkan variabel counter untuk mencari total modal, total keuntungan, dan terjualTerbanyak
  // menetapkan variabel untuk menyimpan data produk buku terlaris dan penulis buku terlaris
  let totalModal = 0;
  let totalKeuntungan = 0;
  let terjualTerbanyak = 0;
  let produkBukuTerlaris;
  let penulisBukuTerlaris;

  // menjumlahkan totalKeuntungan, totalModal, dan mencari penulis/produk buku terlaris dengan forEach
  dataPenjualan.forEach((data) => {
    totalKeuntungan += (data.hargaJual - data.hargaBeli) * data.totalTerjual;
    totalModal += (data.totalTerjual + data.sisaStok) * data.hargaBeli;

    // jika value pada property totalTerjual lebih besar dari terjualTerbanyak
    // maka value pada property namaProduct akan di masukan ke produkBukuTerlaris
    // dan value pada property penulis akan di masukan ke penulisBukuTerlaris
    // dan value terjualTerbanyak sama dengan value totalTerjual
    if (data.totalTerjual > terjualTerbanyak) {
      produkBukuTerlaris = data.namaProduct;
      penulisBukuTerlaris = data.penulis;
      terjualTerbanyak = data.totalTerjual;
    }
  });

  // mencari persentase keuntungan dan membuatnya menjadi bilangan bula dengan method toFixed(0)
  const persentaseKeuntungan = `${((totalKeuntungan / totalModal) * 100).toFixed(0)}%`;

  // mengformat totalKeuntungan dan totalModal agar sesuai dengan menggunakan method toLocaleSteing()
  const formattedTotalKeuntungan = `Rp.${totalKeuntungan.toLocaleString("id-ID")}`;
  const formattedTotalModal = `Rp.${totalModal.toLocaleString("id-ID")}`;

  // mengembalikan data dengan tipe object
  return {
    totalKeuntungan: formattedTotalKeuntungan,
    totalModal: formattedTotalModal,
    persentaseKeuntungan: persentaseKeuntungan,
    produkBukuTerlaris: produkBukuTerlaris,
    penulisBukuTerlaris: penulisBukuTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
