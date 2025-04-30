// Sayfa kaydırıldığında footer'ı görünür hale getirme
window.onscroll = function () {
  let footer = document.querySelector(".animated-footer");

  if (
    document.body.scrollTop > 181 ||
    document.documentElement.scrollTop > 181
  ) {
    footer.style.bottom = "0"; // Footer'ı görünür yap
  } else {
    footer.style.bottom = "-100%"; // Footer'ı gizle
  }
};
// localStorage kullanarak ziyaret sayısını sakla
const visitCountKey = "visitCount";

// localStorage'dan mevcut ziyaret sayısını al
let visitCount = localStorage.getItem(visitCountKey);

// Eğer daha önce ziyaret edilmemişse, sıfırdan başlat
if (!visitCount) {
  visitCount = 0;
} else {
  visitCount = parseInt(visitCount, 10);
}

// Ziyaret sayısını artır
visitCount++;

// Yeni sayıyı localStorage'a kaydet
localStorage.setItem(visitCountKey, visitCount);

// Ziyaret sayısını ekranda göster
document.getElementById("visit-count").textContent = visitCount;
