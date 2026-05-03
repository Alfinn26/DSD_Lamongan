function openModal(bidang){
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    const data = {

        kepemimpinan: `
            <h2>Kepemimpinan & Pembinaan</h2>
            <p>Pelatihan kepemimpinan dasar dan upgrading anggota.</p>
            <img src="https://picsum.photos/400/250?1">
        `,

        kepanduan: `
            <h2>Teknik Kepanduan</h2>
            <p>Kegiatan perkemahan dan latihan baris-berbaris.</p>
            <img src="https://picsum.photos/400/250?2">
        `,

        kegiatan: `
            <h2>Kegiatan</h2>
            <p>Event sekolah dan lomba antar pelajar.</p>
            <img src="https://picsum.photos/400/250?3">
        `,

        evaluasi: `
            <h2>Penelitian & Evaluasi</h2>
            <p>Evaluasi program kerja dan pengembangan organisasi.</p>
            <img src="https://picsum.photos/400/250?4">
        `,

        islami: `
            <h2>Kehidupan Islami</h2>
            <p>Kajian rutin dan kegiatan keagamaan.</p>
            <img src="https://picsum.photos/400/250?5">
        `,

        media: `
            <h2>Media & Informasi</h2>
            <p>Dokumentasi kegiatan dan publikasi organisasi.</p>
            <img src="https://picsum.photos/400/250?6">
        `
    };

    content.innerHTML = data[bidang];
    modal.style.display = "flex";
}

window.onclick = function(e){
    const modal = document.getElementById("modal");
    if(e.target == modal){
        modal.style.display = "none";
    }
}
