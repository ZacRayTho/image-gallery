const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const gallery = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/pic5.jpg"]
/* Declaring the alternative text for each image file */
const alt = ["Closeup of a human eye", "Closeup of a shell or rock", "purple and white flowers", "Walls of egyptian tomb", "A butterfly"]
/* Looping through images */
for (let x = 0; x < gallery.length; x++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', gallery[x]);
    newImage.setAttribute('alt', alt[x]);
    newImage.addEventListener("click", () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    })
    thumbBar.appendChild(newImage);
}




/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.className == "dark") {
        overlay.style.backgroundColor="rgba(0,0,0,.5";
        btn.className="light";
        btn.value="Lighten";
    }   else {
        overlay.style.backgroundColor="rgba(0,0,0,0";
        btn.className="dark";
        btn.value="Darken";
    }
})
