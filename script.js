const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const content = document.getElementById("modalContent");

const data = {
    kepemimpinan: `
        <h2>Kepemimpinan & Pembinaan</h2>
        <p>Pelatihan kepemimpinan dan upgrading anggota.</p>
        <img src="https://picsum.photos/400/250?1">
    `,
    kepanduan: `
        <h2>Teknik Kepanduan</h2>
        <p>Perkemahan dan latihan kedisiplinan.</p>
        <img src="https://picsum.photos/400/250?2">
    `,
    kegiatan: `
        <h2>Kegiatan</h2>
        <p>Event sekolah dan lomba pelajar.</p>
        <img src="https://picsum.photos/400/250?3">
    `,
    evaluasi: `
        <h2>Penelitian & Evaluasi</h2>
        <p>Evaluasi program kerja organisasi.</p>
        <img src="https://picsum.photos/400/250?4">
    `,
    islami: `
        <h2>Kehidupan Islami</h2>
        <p>Kajian dan kegiatan keagamaan.</p>
        <img src="https://picsum.photos/400/250?5">
    `,
    media: `
        <h2>Media & Informasi</h2>
        <p>Publikasi dan dokumentasi kegiatan.</p>
        <img src="https://picsum.photos/400/250?6">
    `
};

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
