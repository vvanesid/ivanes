const heroData = {
    "Airi": {
        desc: "Airi adalah ninja gesit dengan kemampuan mobilitas tinggi.",
        role: "Warrior/Assassin",
        lane: "Side Lane",
        skins: ["assets/images/Airi/airi1.jpg", "assets/images/Airi/airi.jpg", "assets/images/Airi/airi2.jpg", "assets/images/Airi/airi3.jpg", "assets/images/Airi/airi4.jpg", "assets/images/Airi/airi5.jpg", "assets/images/Airi/airi6.jpg", "assets/images/Airi/airi7.jpg"]
    },
    "Violet": {
        desc: "Marksman lincah dengan serangan jarak jauh mematikan.",
        role: "Marksman",
        lane: "Abyssal Lane",
        skins: ["assets/images/Violet/violet.jpg", "assets/images/Violet/violet3.jpg", "assets/images/Violet/violet2.jpg", "assets/images/Violet/violet4.jpg", "assets/images/Violet/violetcyber.jpg"]
    },
    "Butterfly": {
        desc: "Assassin dengan kemampuan eksekusi cepat dan reset skill.",
        role: "Assassin",
        lane: "Jungle",
        skins: ["assets/images/Butterfly/bf.jpg", "assets/images/Butterfly/bf2.jpg", "assets/images/Butterfly/bf3.jpg", "assets/images/Butterfly/bf4.jpg"]
    },
    "Lauriel": {
        desc: "Mage elegan dengan damage area dan mobilitas tinggi.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Lauriel/lauriel.jpg", "assets/images/Lauriel/lauriel2.jpg", "assets/images/Lauriel/lauriel3.jpg", "assets/images/Lauriel/lauriel4.jpg", "assets/images/Lauriel/lauriel5.jpg", "assets/images/Lauriel/lauriel6.jpg"]
    },
    "Illumia": {
        desc: "Mage dengan kontrol area dan burst damage kuat.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Illumia/illumia.jpg", "assets/images/Illumia/illumia2.jpg", "assets/images/Illumia/illumia3.jpg", "assets/images/Illumia/illumia4.jpg"]
    },
    "Mina": {
        desc: "Tank dengan kemampuan crowd control dan sustain tinggi.",
        role: "Tank",
        lane: "Side Lane",
        skins: ["assets/images/Mina/mina.jpeg", "assets/images/Mina/mina2.jpg", "assets/images/Mina/mina3.jpg", "assets/images/Mina/mina4.jpg"]
    },
    "Natalya": {
        desc: "Mage dengan burst damage tinggi dan skill area.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Natalya/natalya1.jpg", "assets/images/Natalya/natalya3.jpg", "assets/images/Natalya/natalya.jpg"]
    },
    "Yena": {
        desc: "Warrior dengan dua stance dan combo fleksibel.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/Yena/yena.jpg", "assets/images/Yena/yena2.jpg", "assets/images/Yena/yena3.jpg", "assets/images/Yena/yena4.jpg"]
    },
    "Liliana": {
        desc: "Mage dengan transformasi ke rubah—fleksibel jarak dekat dan jauh.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Liliana/liliana.jpg", "assets/images/Liliana/liliana2.jpg"]
    },
    "Tel'Annas": {
        desc: "Marksman dengan serangan jarak jauh dan scaling kuat.",
        role: "Marksman",
        lane: "Abyssal Lane",
        skins: ["assets/images/Tel'Annas/telanas.jpg", "assets/images/Tel'Annas/telanas2.jpg", "assets/images/Tel'Annas/telanas3.jpg"]
    },
    "Veres": {
        desc: "Warrior dengan lifesteal dan crowd control.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/Veres/veres.jpg", "assets/images/Veres/veres2.jpg", "assets/images/Veres/veres3.jpg", "assets/images/Veres/veres4.jpg"]
    },
    "Qi": {
        desc: "Warrior dengan knockback dan sustain.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/Qi/qi.jpg", "assets/images/Qi/qi2.jpg", "assets/images/Qi/qi3.jpg"]
    },
    "Amily": {
        desc: "Duelist kuat dengan mobilitas tinggi.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/Amily/amily.jpg", "assets/images/Amily/amily2.jpg", "assets/images/Amily/amily3.jpg"]
    },
    "Arum": {
        desc: "Mage/Tank dengan spirit beast untuk crowd control.",
        role: "Mage/Tank",
        lane: "Side Lane",
        skins: ["assets/images/arum/arum.jpg", "assets/images/arum/arum2.jpg", "assets/images/arum/arum3.jpg", "assets/images/arum/arum4.jpg", "assets/images/arum/arum5.jpg", "assets/images/arum/arum6.jpg"]
    },
    "Diaochan": {
        desc: "Mage dengan skill area dan crowd control beku.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Diaochan/diaochan.jpg", "assets/images/Diaochan/diaochan2.jpg", "assets/images/Diaochan/diaochan3.jpg", "assets/images/Diaochan/diaochan4.jpg", "assets/images/Diaochan/diaochan5.jpg"]
    },
    "Krixi": {
        desc: "Mage dengan skill area dan burst damage.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/Krixi/krixi.jpg", "assets/images/Krixi/krixi2.jpg", "assets/images/Krixi/krixi3.jpg", "assets/images/Krixi/krixi4.jpg", "assets/images/Krixi/krixi5.jpg", "assets/images/Krixi/krixi6.jpg", "assets/images/Krixi/krixi7.jpg"]
    }
};

let currentHero = null;
let currentSkinIndex = 0;

document.querySelectorAll(".hero-card").forEach(card => {
    card.addEventListener("click", () => {
        const heroName = card.dataset.hero;
        const data = heroData[heroName];
        if (!data) return;

        document.getElementById("heroName").textContent = heroName;
        document.getElementById("heroDesc").textContent = data.desc;
        document.getElementById("heroRole").textContent = data.role;
        document.getElementById("heroLane").textContent = data.lane;
        document.getElementById("heroImage").src = data.skins[0];

        const skinGrid = document.getElementById("skinGrid");
        skinGrid.innerHTML = "";
        data.skins.forEach((skin, i) => {
            const img = document.createElement("img");
            img.src = skin;
            img.alt = `${heroName} skin ${i+1}`;
            img.className = "rounded-lg shadow cursor-pointer hover:scale-105 transition";
            img.addEventListener("click", () => {
                currentHero = heroName;
                currentSkinIndex = i;
                document.getElementById("skinImage").src = skin;
                document.getElementById("skinSelector").classList.add("hidden");
                document.getElementById("skinFull").classList.remove("hidden");
            });
            skinGrid.appendChild(img);
        });

        document.getElementById("heroModal").classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        document.getElementById("heroInfo").classList.remove("hidden");
        document.getElementById("skinSelector").classList.add("hidden");
        document.getElementById("skinFull").classList.add("hidden");
        currentHero = heroName;
        currentSkinIndex = 0;
    });
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("heroModal").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
});

document.getElementById("viewSkins").addEventListener("click", () => {
    document.getElementById("heroInfo").classList.add("hidden");
    document.getElementById("skinSelector").classList.remove("hidden");
});

document.getElementById("returnInfo").addEventListener("click", () => {
    document.getElementById("skinSelector").classList.add("hidden");
    document.getElementById("heroInfo").classList.remove("hidden");
});

document.getElementById("prevSkin").addEventListener("click", () => {
    if (!currentHero) return;
    const skins = heroData[currentHero].skins;
    currentSkinIndex = (currentSkinIndex - 1 + skins.length) % skins.length;
    document.getElementById("skinImage").src = skins[currentSkinIndex];
});

document.getElementById("nextSkin").addEventListener("click", () => {
    if (!currentHero) return;
    const skins = heroData[currentHero].skins;
    currentSkinIndex = (currentSkinIndex + 1) % skins.length;
    document.getElementById("skinImage").src = skins[currentSkinIndex];
});

document.getElementById("returnSkins").addEventListener("click", () => {
    document.getElementById("skinFull").classList.add("hidden");
    document.getElementById("skinSelector").classList.remove("hidden");
});