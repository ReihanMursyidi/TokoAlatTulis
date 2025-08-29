const carouselData = [
    [
        {
            src: 'assets/12.jpg',
            caption: 'Aplikasi untuk manajemen data siswa sekolah berbasis web.'
        },
        {
            src: 'assets/4.1.jpg',
            caption: 'Fitur tambah, edit, hapus, dan lihat data siswa.'
        },
    ],
    [
        {
            src: 'assets/508577.jpg',
            caption: 'Tampilan awal aplikasi e-commerce.'
        },
        {
            src: 'assets/9.jpg',
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

function openCarousel(projectIndex, imageIndex) {
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

// Optional: Tutup modal jika klik di luar gambar
document.addEventListener('click', function(e) {
    const modal = document.getElementById('carouselModal').classList.add('active');
    if (modal.classList.contains('active') && !e.target.closest('.carousel-image,.carousel-controls, .carousel-caption')) {
        if (!e.target.classList.contains('carousel-close')) closeCarousel();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCarousel();
});