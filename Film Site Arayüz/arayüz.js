function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var password = document.getElementById("password").value;

  // Basit bir kullanıcı adı ve şifre doğrulaması (örnek)
  if (firstName === "" || lastName === "" || password === "") {
    alert("Lütfen tüm alanları doldurun.");
  } else {
    // Başarılı giriş mesajını göster
    document.getElementById("successMessage").style.display = "block";

    // Bir süre sonra yeni sayfaya yönlendir
    setTimeout(function () {
      window.location.href = "../Film SiteF/film.html"; // Başarılı giriş sonrası yönlendirme
    }, 1000); // 1 saniye sonra yönlendir
  }
}

// Kar tanelerinin sayısını ayarlayalım
const numberOfSnowflakes = 100;

// Kar tanesini oluşturacak fonksiyon
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Kar tanelerinin rastgele boyutları
  const size = Math.random() * 5 + 2; // Boyutlar 2px ile 7px arasında
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Kar tanelerinin yatay rastgele pozisyonu
  snowflake.style.left = `${Math.random() * 100}vw`;

  // Kar tanelerinin rastgele animasyon süresi ve hızları
  const animationDuration = Math.random() * 3 + 3; // Animasyon süresi 3s ile 6s arasında
  const animationDelay = Math.random() * 5 + "s"; // Animasyon gecikmesi 0s ile 5s arasında
  snowflake.style.animationDuration = `${animationDuration}s`;
  snowflake.style.animationDelay = animationDelay;

  document.querySelector(".snow").appendChild(snowflake);

  // Kar tanesini silme işlemi
  snowflake.addEventListener("animationiteration", () => {
    snowflake.remove();
    createSnowflake(); // Yeni bir kar tanesi ekle
  });
}

// Kar tanelerini yaratmak
for (let i = 0; i < numberOfSnowflakes; i++) {
  createSnowflake();
}
