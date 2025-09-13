// HTML'deki canvas elementini seçme
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Oyunun ekran boyutlarını belirleme
canvas.width = 900;
canvas.height = 600;

// Klavye basışlarını takip etmek için bir nesne
const keys = {
    ArrowLeft: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false
};

// Klavye tuşuna basıldığında
window.addEventListener('keydown', (e) => {
    // Tuşun varlığını kontrol et ve true yap
    if (keys[e.key] !== undefined) {
        keys[e.key] = true;
    }
});

// Klavye tuşu bırakıldığında
window.addEventListener('keyup', (e) => {
    // Tuşun varlığını kontrol et ve false yap
    if (keys[e.key] !== undefined) {
        keys[e.key] = false;
    }
});

// Oyunun ana döngüsü
function gameLoop(timestamp) {
    // 1. Durum güncellemesi
    update();

    // 2. Ekrana çizim yapma
    draw();

    // Bir sonraki kare için tekrar gameLoop'u çağırma
    requestAnimationFrame(gameLoop);
}

// Oyundaki nesnelerin durumunu güncelleyen fonksiyon
function update() {
    // Örneğin, klavye basışlarını kontrol etme
    if (keys.ArrowLeft) {
        // Sol ok tuşu basılıysa yapılacak işlemler
        console.log('Sol tuş basılı');
    }
    if (keys.ArrowUp) {
        // Yukarı ok tuşu basılıysa yapılacak işlemler
        console.log('Yukarı tuş basılı');
    }
    // Diğer tuşlar için de kontrol eklenecek
}

// Ekrana çizim yapan fonksiyon
function draw() {
    // Canvas'ı temizleme
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Buraya çizim kodları gelecek
    // Örneğin, bir dikdörtgen çizelim
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);
}

// Oyunu başlatma
gameLoop();
