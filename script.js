const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const content = document.getElementById("modalContent");

const data = {

    kepemimpinan: `
        <h2>Kepemimpinan & Pembinaan</h2>
        <p>Pelatihan kepemimpinan dan upgrading anggota.</p>

        <div class="slider">
            <img src="img/kepemimpinan1.jpg">
            <img src="img/kepemimpinan2.jpg">
            <img src="img/kepemimpinan3.jpg">
        </div>
    `,

    kepanduan: `
        <h2>Teknik Kepanduan</h2>
        <p>Kegiatan perkemahan dan latihan.</p>

        <div class="slider">
            <img src="img/kepanduan1.jpg">
            <img src="img/kepanduan2.jpg">
        </div>
    `,

    kegiatan: `
        <h2>Kegiatan</h2>
        <p>Event dan lomba pelajar.</p>

        <div class="slider">
            <img src="img/kegiatan1.jpg">
            <img src="img/kegiatan2.jpg">
        </div>
    `,

    evaluasi: `
        <h2>Penelitian & Evaluasi</h2>
        <p>Evaluasi program kerja.</p>

        <div class="slider">
            <img src="img/evaluasi1.jpg">
            <img src="img/evaluasi2.jpg">
        </div>
    `,

    islami: `
        <h2>Kehidupan Islami</h2>
        <p>Kajian dan kegiatan keagamaan.</p>

        <div class="slider">
            <img src="img/islami1.jpg">
            <img src="img/islami2.jpg">
        </div>
    `,

    media: `
        <h2>Media & Informasi</h2>
        <p>Dokumentasi dan publikasi.</p>

        <div class="slider">
            <img src="img/media1.jpg">
            <img src="img/media2.jpg">
        </div>
    `
};

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }

});

function revealOnScroll(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// EVENT KHUSUS (WORK DI HP)
cards.forEach(card => {
    card.addEventListener("click", () => {
        const bidang = card.getAttribute("data-bidang");
        if(data[bidang]){
            content.innerHTML = data[bidang];
            modal.style.display = "flex";
        }
    });
});

// TUTUP MODAL
modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
