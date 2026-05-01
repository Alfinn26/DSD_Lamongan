const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function(){
    preview.innerHTML = "";

    Array.from(upload.files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function(e){
            const img = document.createElement("img");
            img.src = e.target.result;
            preview.appendChild(img);
        }

        reader.readAsDataURL(file);
    });
});
