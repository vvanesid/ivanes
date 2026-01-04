const collabCards = document.querySelectorAll(".collab-card");
const collabModal = document.getElementById("collabModal");
const closeCollab = document.getElementById("closeCollab");
const collabTitle = document.getElementById("collabTitle");
const collabImage = document.getElementById("collabImage");
const prevCollab = document.getElementById("prevCollab");
const nextCollab = document.getElementById("nextCollab");
const collabThumbs = document.getElementById("collabThumbs");
const bgmPlayer = document.getElementById("bgmPlayer");
const themePlayer = document.getElementById("themePlayer");
const backUniversal = document.getElementById("backUniversal");
const collabSkins = {
    "Sanrio": [
        "assets/images/collab/sanrio/kuromi2.jpg",
        "assets/images/collab/sanrio/cinnamoroll2.jpg",
        "assets/images/collab/sanrio/melody2.jpg",
        "assets/images/collab/sanrio/pompom2.jpg"
    ],
    "Sword Art Online": [
        "assets/images/collab/sao/asuna1.jpg",
        "assets/images/collab/sao/kirito1.jpg",
        "assets/images/collab/sao/asuna2.jpg",
        "assets/images/collab/sao/kirito2.jpg"
    ],
    "Sailor Moon": [
        "assets/images/collab/sailor/sailormoon.jpg",
        "assets/images/collab/sailor/sailormoon2.jpg",
        "assets/images/collab/sailor/sailormoon3.jpg"
    ],
    "Ultraman (Netflix)": [
        "assets/images/collab/ultraman/ultramans.jpg",
        "assets/images/collab/ultraman/ultraman1.jpg",
        "assets/images/collab/ultraman/florentino.jpg"
    ],
    "Bleach": [
        "assets/images/collab/bleach/byakuya.jpg",
        "assets/images/collab/bleach/toshiro.jpg",
        "assets/images/collab/bleach/ichigo.jpg"
    ],
    "Jujutsu Kaisen": [
        "assets/images/collab/jujutsu/gojo.jpg",
        "assets/images/collab/jujutsu/megumi.jpg",
        "assets/images/collab/jujutsu/nobara.jpg",
        "assets/images/collab/jujutsu/itadori.jpg"
    ],
    "Kimetsu no Yaiba": [
        "assets/images/collab/kimetsu/tanjiro.jpg",
        "assets/images/collab/kimetsu/nezuko.jpg",
        "assets/images/collab/kimetsu/zenitsu.jpg",
        "assets/images/collab/kimetsu/inosuke.jpg"
    ],
    "Tensura": [
        "assets/images/collab/tensura/rimuru.jpg",
        "assets/images/collab/tensura/milim.jpg",
        "assets/images/collab/tensura/shion.jpg"
    ],
    "Hunter X Hunter": [
        "assets/images/collab/hxh/gon.jpg",
        "assets/images/collab/hxh/killua.jpg",
        "assets/images/collab/hxh/kurapika.jpg"
    ],
    "Detective Conan": [
        "assets/images/collab/conan/kaito.jpg",
        "assets/images/collab/conan/conan4.jpg",
        "assets/images/collab/conan/conan5.jpg",
        "assets/images/collab/conan/conan6.jpg"
    ],
    "One Punch Man": [
        "assets/images/collab/onepunch/raz.jpg",
        "assets/images/collab/onepunch/genos.jpg",
        "assets/images/collab/onepunch/tatsumaki.jpg"
    ]
};

const collabThemes = {
    "Sanrio": "assets/audio/collab/sanrio.mp3",
    "Sword Art Online": "assets/audio/collab/sao.mp3",
    "Sailor Moon": "assets/audio/collab/sailor.mp3",
    "Ultraman (Netflix)": "assets/audio/collab/ultraman.mp3",
    "Bleach": "assets/audio/collab/bleach.mp3",
    "Jujutsu Kaisen": "assets/audio/collab/jujutsu.mp3",
    "Kimetsu no Yaiba": "assets/audio/collab/kimetsu.mp3",
    "Tensura": "assets/audio/collab/tensura.mp3",
    "Hunter X Hunter": "assets/audio/collab/hxh.mp3",
    "Detective Conan": "assets/audio/collab/conan.mp3",
    "One Punch Man": "assets/audio/collab/opm.mp3"
};

let currentCollab = "";
let currentIndex = 0;

collabCards.forEach(card => {
    card.addEventListener("click", () => {
        currentCollab = card.dataset.collab;
        collabTitle.textContent = currentCollab;
        currentIndex = 0;
        collabImage.src = collabSkins[currentCollab][currentIndex];
        collabModal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");


        collabThumbs.innerHTML = "";
        collabSkins[currentCollab].forEach((skin, i) => {
            const thumb = document.createElement("img");
            thumb.src = skin;
            thumb.className = "w-20 h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-yellow-400";
            thumb.addEventListener("click", () => {
                currentIndex = i;
                collabImage.src = collabSkins[currentCollab][currentIndex];
                highlightActiveThumb();
            });
            collabThumbs.appendChild(thumb);
        });
        highlightActiveThumb();
    });
});


closeCollab.addEventListener("click", () => {
    collabModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
});

prevCollab.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + collabSkins[currentCollab].length) % collabSkins[currentCollab].length;
    collabImage.src = collabSkins[currentCollab][currentIndex];
    highlightActiveThumb();
});

nextCollab.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % collabSkins[currentCollab].length;
    collabImage.src = collabSkins[currentCollab][currentIndex];
    highlightActiveThumb();
});

function highlightActiveThumb() {
    const thumbs = collabThumbs.querySelectorAll("img");
    thumbs.forEach((thumb, i) => {
        if (i === currentIndex) {
            thumb.classList.add("border-yellow-400");
        } else {
            thumb.classList.remove("border-yellow-400");
        }
    });
}

function playTheme(collabName, event) {
  event.stopPropagation();

  bgmPlayer.pause();

  themePlayer.pause();
  themePlayer.currentTime = 0;
  themePlayer.src = collabThemes[collabName];
  themePlayer.classList.remove("hidden");
  themePlayer.play();

  backUniversal.classList.remove("hidden");
}

themePlayer.addEventListener("ended", () => {
  themePlayer.classList.add("hidden");
  backUniversal.classList.add("hidden");
  bgmPlayer.currentTime = 0;
  bgmPlayer.play();
});

backUniversal.addEventListener("click", () => {
  themePlayer.pause();
  themePlayer.classList.add("hidden");
  backUniversal.classList.add("hidden");
  bgmPlayer.currentTime = 0;
  bgmPlayer.play();
});


function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();