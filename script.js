//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar side bar untuk menghlangnkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Data produk
const products = {
  1: {
    img1: "assets/img/1.jpg",
    img2: "assets/img/all.jpg",
    title: "SPANDUK",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. High resolution",
    contentDesc2: "2. Gratis desain",
    contentDesc3: "3. Revisi sampai fix",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Promo Rp 25.000",
  },
  2: {
    img1: "assets/img/2.jpg",
    img2: "assets/img/all.jpg",
    title: "ALBUM KENANGAN",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Hard cover (Laminating glosy/doff)",
    contentDesc2: "2. Isi art paper 150 gram (Glosy)",
    contentDesc3: "3. Finishing jilid spiral, lem panas",
    contentDesc4: "4. Isi 30 halaman",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Tambah halaman Rp 3.000",
    contentket2: "2. Ukuran max A4 (21 x 29,7)",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Promo Rp 85.000",
  },
  3: {
    img1: "assets/img/3.jpg",
    img2: "assets/img/all.jpg",
    title: "MAP FOLDER",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan tik",
    contentDesc2: "2. Ukuran 32,5 x 24 cm",
    contentDesc3: "3. Desain custom",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 3.000",
  },
  4: {
    img1: "assets/img/4.jpg",
    img2: "assets/img/all.jpg",
    title: "MAP RAPORT",
    speksifikasiTitle: "",
    contentDesc1: "",
    contentDesc2: "",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Plastik isi Rp 1.000/Lembar",
    contentket2: "2. Tambah bingkai + Rp 2.000",
    contentket3: "3. Tambah busa + Rp 2.500",
    contentket4: "4. Tambah logo warna + Rp 2.000/logo",
    contentket5: "",
    contentket6: "",
    price: "Rp 16.500",
  },
  5: {
    img1: "assets/img/5.jpg",
    img2: "assets/img/all.jpg",
    title: "BROSUR/FLYER",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan art paper 120 gsm",
    contentDesc2: "2. Cetak full color 1 sisi",
    contentDesc3: "3. Jumlah 1 rim (500 lbr)",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Harga grosir",
    contentket2: "2. Cetak lebih banyak harga lebih murah",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 250.000",
  },
  6: {
    img1: "assets/img/6.jpg",
    img2: "assets/img/all.jpg",
    title: "BROSUR SEKOLAH",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Ukuran A4",
    contentDesc2: "2. Bahan Art paper 120 grm",
    contentDesc3: "3. Cetak 2 sisi",
    contentDesc4: "4. Finishing lipat 3",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Cetak banyak harga lebih murah",
    contentket2: "2. Minimum cetak 4 rim",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Promo Rp 380.000",
  },
  7: {
    img1: "assets/img/7.jpg",
    img2: "assets/img/7_2.jpg",
    title: "STIKER LOGO",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan tahan air dan panas",
    contentDesc2: "2. Bahan tahan gores",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Gratis cutting",
    contentket2: "2. Ukuran max A4 (21x29,7)",
    contentket3: "3. Perlembar A3+",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 13.000",
  },
  8: {
    img1: "assets/img/8.jpg",
    img2: "assets/img/all.jpg",
    title: "GOODIEBAG",
    speksifikasiTitle: "Sablon 1 warna",
    contentDesc1: "100 -200 pcs = Rp 7.500",
    contentDesc2: "300 -400 pcs = Rp 7.000",
    contentDesc3: "500 -1000 pcs = Rp 6.000",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Sablon full color",
    contentket1: "100 -200 pcs = Rp 15.000",
    contentket2: "300 -400 pcs = Rp 13.500",
    contentket3: "500 -1000 pcs = Rp 12.000",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 6.000/Pcs",
  },
  9: {
    img1: "assets/img/9.jpg",
    img2: "assets/img/9_2.jpg",
    title: "CARBONLESS FORM",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. 2 ply (2 rangkap kertas)",
    contentDesc2: "2. Pilihan warna (Putih, Pink, Hijau, Kuning, Biru)",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 350.000/Rim",
  },
  10: {
    img1: "assets/img/10.jpg",
    img2: "assets/img/10_2.jpg",
    title: "CETAK KALENDER",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bisa dinding maupun meja",
    contentDesc2: "2. Gratis desain",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 1.000",
  },
  11: {
    img1: "assets/img/11.jpg",
    img2: "assets/img/all.jpg",
    title: "KOP SURAT",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Ukuran 21 x 30 cm",
    contentDesc2: "2. Bisa 1 warna, 2 warna, atau full color",
    contentDesc3: "3. Kertas HVS",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 80.000/rim",
  },
  12: {
    img1: "assets/img/12.jpg",
    img2: "assets/img/all.jpg",
    title: "PAYUNG LIPAT PROMOSI PREMIUM",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Diameter saat terbuka 98 cm",
    contentDesc2: "2. Panjang saat dilipat 25 cm",
    contentDesc3: "3. Panjang saat terbuka 52 cm",
    contentDesc4: "4. Ready berbagai warna",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "1. Free sablon logo",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 50.000/Pcs",
  },
  13: {
    img1: "assets/img/13.jpg",
    img2: "assets/img/all.jpg",
    title: "LANYARD",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan nylon ukuran 2 cm",
    contentDesc2: "2. Free sablon logo",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 8.000/Pcs",
  },
  14: {
    img1: "assets/img/14.jpg",
    img2: "assets/img/all.jpg",
    title: "NOTES DAN PULPEN",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan cover Artcarton 260 grm",
    contentDesc2: "2. HVS isi 50 halaman",
    contentDesc3: "3. Ukuran A5",
    contentDesc4: "4. Jilid spiral kawat",
    contentDesc5: "5. Pulpen Gel",
    contentDesc6: "6. Sablon logo",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 12.000/Pcs",
  },
  15: {
    img1: "assets/img/15.jpg",
    img2: "assets/img/all.jpg",
    title: "MUG PREMIUM SABLON",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Gratis desain",
    contentDesc2: "2. Gratis dus kemasan",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 17.000/Pcs",
  },
  16: {
    img1: "assets/img/16.jpg",
    img2: "assets/img/all.jpg",
    title: "TUMBLER",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Bahan stainless steel 304 (Food grade)",
    contentDesc2: "2. Kapasitas 500 ml",
    contentDesc3: "3. Dimensi 6.5 x 22,5 cm",
    contentDesc4: "4. Menggunakan mesin cetak grafir khusus",
    contentDesc5: "5. Dilengkapi saringan di dalam botol",
    contentDesc6: "6. Tahan panas 6 s/d 8 jam",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 62.000/Pcs",
  },
  17: {
    img1: "assets/img/17.jpg",
    img2: "assets/img/all.jpg",
    title: "CETAK UNDANGAN WISUDA",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Free design",
    contentDesc2: "2. Undangan dilengkapi dengan amplop",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 4.000/Pcs",
  },
  18: {
    img1: "assets/img/18.jpg",
    img2: "assets/img/all.jpg",
    title: "BUKU KEGIATAN RAMADHAN",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. Ukuran A5",
    contentDesc2: "2. Bahan cover Artcarton 230 grm",
    contentDesc3: "3. Mengkilap dan tinta tajam",
    contentDesc4: "4. Bahan isi HVS 75 grm putih premium",
    contentDesc5: "5. Isi 40 halaman",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Promo Rp 4.950",
  },
  19: {
    img1: "assets/img/19.jpg",
    img2: "assets/img/all.jpg",
    title: "HURUF TIMBUL",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1:
      "1. Bisa dibuat dari 3 macam bahan (Stainless, Acrylic, Kuningan)",
    contentDesc2: "",
    contentDesc3: "",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Mulai dari Rp 8.000/Cm",
  },

  // Tambahkan produk lain di sini
};

// Mendapatkan elemen modal
const modal = document.getElementById("modal");
const modalImg1 = document.getElementById("modal-img1");
const modalImg2 = document.getElementById("modal-img2");
const modalTitle = document.getElementById("modal-title");
const modalspekTitle = document.getElementById("spesifikasi-title");
const modalcontentDecs1 = document.getElementById("content-decs1");
const modalcontentDecs2 = document.getElementById("content-decs2");
const modalcontentDecs3 = document.getElementById("content-decs3");
const modalcontentDecs4 = document.getElementById("content-decs4");
const modalcontentDecs5 = document.getElementById("content-decs5");
const modalcontentDecs6 = document.getElementById("content-decs6");
const modalKetTitle = document.getElementById("keterangan-title");
const modalcontentKet1 = document.getElementById("content-ket1");
const modalcontentKet2 = document.getElementById("content-ket2");
const modalcontentKet3 = document.getElementById("content-ket3");
const modalcontentKet4 = document.getElementById("content-ket4");
const modalcontentKet5 = document.getElementById("content-ket5");
const modalcontentKet6 = document.getElementById("content-ket6");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close");

// Mendapatkan semua tombol detail
const detailButtons = document.querySelectorAll(".detail-btn");

// Menambahkan event listener ke setiap tombol detail
detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product");
    const product = products[productId];
    if (product) {
      modalImg1.src = product.img1;
      modalImg2.src = product.img2;
      modalTitle.textContent = product.title;
      modalspekTitle.textContent = product.speksifikasiTitle;
      modalcontentDecs1.textContent = product.contentDesc1;
      modalcontentDecs2.textContent = product.contentDesc2;
      modalcontentDecs3.textContent = product.contentDesc3;
      modalcontentDecs4.textContent = product.contentDesc4;
      modalcontentDecs5.textContent = product.contentDesc5;
      modalcontentDecs6.textContent = product.contentDesc6;
      modalKetTitle.textContent = product.keteranganTitle;
      modalcontentKet1.textContent = product.contentket1;
      modalcontentKet2.textContent = product.contentket2;
      modalcontentKet3.textContent = product.contentket3;
      modalcontentKet4.textContent = product.contentket4;
      modalcontentKet5.textContent = product.contentket5;
      modalcontentKet6.textContent = product.contentket6;

      modalPrice.textContent = `Harga : ${product.price}`;
      modal.style.display = "flex";
    }
  });
});

// Menutup modal saat tombol close diklik
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Menutup modal saat klik di luar konten modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Mendapatkan elemen slider dan slide
const slidesContainer = document.querySelector(".slides");
let startX,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;
const slides = Array.from(document.querySelectorAll(".slide"));

// Menambahkan event listener untuk memulai drag
slidesContainer.addEventListener("touchstart", startDrag);
slidesContainer.addEventListener("mousedown", startDrag);

// Menambahkan event listener untuk mengakhiri drag
slidesContainer.addEventListener("touchend", endDrag);
slidesContainer.addEventListener("mouseup", endDrag);
slidesContainer.addEventListener("mouseleave", endDrag);

// Menambahkan event listener untuk menggerakkan slide selama drag
slidesContainer.addEventListener("touchmove", drag);
slidesContainer.addEventListener("mousemove", drag);

function startDrag(event) {
  startX = getPositionX(event);
  animationID = requestAnimationFrame(animation);
  slidesContainer.classList.add("grabbing");
}

function endDrag() {
  slidesContainer.classList.remove("grabbing");
  cancelAnimationFrame(animationID);

  // Menggeser slide berdasarkan jarak geser
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();
}

function drag(event) {
  if (startX === undefined) return;
  const currentPosition = getPositionX(event);
  currentTranslate = prevTranslate + currentPosition - startX;
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (startX !== undefined) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -slidesContainer.clientWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
