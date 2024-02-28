feather.replace();


// tombol like

// var featherIcon = document.getElementById('heart');

//   featherIcon.addEventListener('click', function() {
//     // Ubah warna ikon menjadi merah saat ikon diklik
//     featherIcon.style.color = 'red';
//     featherIcon.style.fill = 'red';
//   });

var featherIcon = document.getElementById('heart');
var originalColor = featherIcon.style.color;
var originalFill = featherIcon.style.fill;  // Simpan warna asli

featherIcon.addEventListener('click', function() {
// Periksa apakah warna saat ini adalah warna asli
    if (featherIcon.style.color === originalColor) {
      // Jika iya, ubah warna menjadi merah
      featherIcon.style.color = 'red';
      featherIcon.style.fill = 'red';

    } else {
      // Jika tidak, kembalikan ke warna asli
      featherIcon.style.color = originalColor;
      featherIcon.style.fill = originalColor;
    }
 });