document.addEventListener("DOMContentLoaded", () => {

    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const clock = document.getElementById("clock");
        if (clock) clock.textContent = timeStr;
    }
    updateClock();
    setInterval(updateClock, 1000);

    const slider = document.getElementById("slider");
    if (slider) {
        window.addEventListener("scroll", () => {
            const y = window.scrollY;
            slider.style.transform = `translateY(${y * 0.3}px)`;
        });
    }

    const slides = document.querySelectorAll("#slider .slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let current = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-yellow-400", i === index);
            dot.classList.toggle("bg-gray-400", i !== index);
        });
        current = index;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0) {
        showSlide(current);
        startAutoPlay();

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                stopAutoPlay();
                nextSlide();
                startAutoPlay();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                stopAutoPlay();
                prevSlide();
                startAutoPlay();
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                stopAutoPlay();
                showSlide(i);
                startAutoPlay();
            });
        });
    }

    const tiltCards = document.querySelectorAll(".tilt");
    tiltCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -12;
            const rotateY = ((x / rect.width) - 0.5) * 12;
            card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
        });
    });

    const reveals = document.querySelectorAll(".scroll-reveal");

    function handleReveal() {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }
    handleReveal();
    window.addEventListener("scroll", handleReveal);

    const heroCards = document.querySelectorAll(".hero-card");
    const heroModal = document.getElementById("heroModal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.getElementById("closeModal");

    const heroInfo = document.getElementById("heroInfo");
    const skinSelector = document.getElementById("skinSelector");
    const skinFull = document.getElementById("skinFull");

    const viewSkinsBtn = document.getElementById("viewSkins");
    const returnInfoBtn = document.getElementById("returnInfo");
    const returnSkinsBtn = document.getElementById("returnSkins");
    const skinImage = document.getElementById("skinImage");

    const prevSkinBtn = document.getElementById("prevSkin");
    const nextSkinBtn = document.getElementById("nextSkin");
    const skinGrid = document.getElementById("skinGrid");

    let skinList = [];
    let currentSkinIndex = 0;


    const canvas = document.getElementById("particles");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();

        let particles = Array.from({
            length: 70
        }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2.5 + 0.8,
            dx: (Math.random() - 0.5) * 1.2,
            dy: (Math.random() - 0.5) * 1.2,
            color: "rgba(255,215,0,0.8)"
        }));

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(drawParticles);
        }
        drawParticles();

        window.addEventListener("resize", resizeCanvas);
    }

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formStatus.classList.remove("hidden");
            setTimeout(() => formStatus.classList.add("hidden"), 3000);
            contactForm.reset();
        });
    }
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});

function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const clock = document.getElementById("clock");
    if (clock) clock.textContent = timeStr;
}
updateClock();
setInterval(updateClock, 1000);

const tracks = [
    "assets/audio/track1.mp3",
    "assets/audio/track2.mp3",
    "assets/audio/track3.mp3",
    "assets/audio/track4.mp3",
    "assets/audio/track5.mp3",
    "assets/audio/track6.mp3",
    "assets/audio/track7.mp3",
    "assets/audio/track8.mp3",
    "assets/audio/track9.mp3",
    "assets/audio/track10.mp3",
    "assets/audio/track11.mp3",
    "assets/audio/track12.mp3",
    "assets/audio/track13.mp3",
    "assets/audio/track14.mp3",
    "assets/audio/track15.mp3",
    "assets/audio/track16.mp3",
    "assets/audio/track17.mp3",
    "assets/audio/track18.mp3",
    "assets/audio/track19.mp3",
    "assets/audio/track20.mp3",
    "assets/audio/track21.mp3",
    "assets/audio/track22.mp3",
    "assets/audio/track23.mp3",
    "assets/audio/track24.mp3",
    "assets/audio/track25.mp3",
    "assets/audio/track26.mp3",
    "assets/audio/track27.mp3"
];

let current = 0;
const player = document.getElementById("bgmPlayer");
player.src = tracks[current];
player.play();
player.addEventListener("ended", () => {
    current = (current + 1) % tracks.length;
    player.src = tracks[current];
    player.play();
});