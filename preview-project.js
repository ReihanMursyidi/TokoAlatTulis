const carouselData = [
    [
        {
            src: 'assets/daftar_siswa (2).png',
            caption: 'Aplikasi untuk manajemen data siswa sekolah berbasis web.'
        },
        {
            src: 'assets/form_tambah_siswa.png',
            caption: 'Fitur untuk menambah data siswa baru.'
        },
        {
            src: 'assets/detail_siswa.png',
            caption: 'Fitur untuk melihat detail informasi siswa.'
        },
    ],
    [
        {
            src: 'assets/dashboard_ecommerce.png',
            caption: 'Tampilan awal aplikasi e-commerce.'
        },
        {
            src: 'assets/halaman_produk.png',
            caption: 'Platform e-commerce untuk penjualan alat tulis secara online.'
        },
        {
            src: 'assets/12.jpg',
            caption: 'Fitur katalog produk, keranjang belanja, dan pembayaran.'
        }
    ],
    [
        {
            src: 'assets/14.jpg',
            caption: 'Chatbot Telegram yang memberikan informasi akademik menggunakan NLP.'
        },
        {
            src: 'assets/12.jpg',
            caption: 'Fitur tanya jawab otomatis tentang jadwal kuliah, nilai, dan informasi kampus.'
        }
    ]
];

let currentProject = 0;
let currentCarousel = 0;

function openCarousel(projectIndex, imageIndex, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    currentProject = projectIndex;
    currentCarousel = imageIndex;
    document.getElementById('carouselModal').classList.add('active');
    showCarouselImage();
}

function closeCarousel() {
    document.getElementById('carouselModal').classList.remove('active');
}

function showCarouselImage() {
    const images = carouselData[currentProject];
    const data = images[currentCarousel];
    document.getElementById('carouselImage').src = data.src;
    document.getElementById('carouselCaption').textContent = data.caption;
    document.getElementById('carouselIndicator').textContent =
        `${ currentCarousel + 1 } / ${ images.length }`;
}

function prevImage() {
    const images = carouselData[currentProject];
    currentCarousel = (currentCarousel - 1 + images.length) % images.length;
    showCarouselImage();
}

function nextImage() {
    const images = carouselData[currentProject];
    currentCarousel = (currentCarousel + 1) % images.length;
    showCarouselImage();
}

document.addEventListener('click', function(e) {
  const modal = document.getElementById('carouselModal');
  if (!modal) return; // kalau modal belum ada, langsung keluar

  if (modal.classList.contains('active')) {
    const insideModal = e.target.closest('#carouselModal');
    const isCloseBtn = e.target.classList.contains('carousel-close');
    if (!insideModal && !isCloseBtn) {
      closeCarousel();
    }
  }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCarousel();
});