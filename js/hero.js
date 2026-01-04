const heroData = {
    "Airi": {
        desc: "Airi adalah ninja gesit dengan kemampuan mobilitas tinggi.",
        role: "Warrior/Assassin",
        lane: "Side Lane",
        skins: ["assets/images/airi/airi1.jpg", "assets/images/airi/airi.jpg", "assets/images/airi/airi2.jpg", "assets/images/airi/airi3.jpg", "assets/images/airi/airi4.jpg", "assets/images/airi/airi5.jpg", "assets/images/airi/airi6.jpg", "assets/images/airi/airi7.jpg"]
    },
    "Violet": {
        desc: "Marksman lincah dengan serangan jarak jauh mematikan.",
        role: "Marksman",
        lane: "Abyssal Lane",
        skins: ["assets/images/violet/violet.jpg", "assets/images/violet/violet3.jpg", "assets/images/violet/violet2.jpg", "assets/images/violet/violet4.jpg", "assets/images/violet/violetcyber.jpg"]
    },
    "Butterfly": {
        desc: "Assassin dengan kemampuan eksekusi cepat dan reset skill.",
        role: "Assassin",
        lane: "Jungle",
        skins: ["assets/images/butterfly/bf.jpg", "assets/images/butterfly/bf2.jpg", "assets/images/butterfly/bf3.jpg", "assets/images/butterfly/bf4.jpg"]
    },
    "Lauriel": {
        desc: "Mage elegan dengan damage area dan mobilitas tinggi.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/lauriel/lauriel.jpg", "assets/images/lauriel/lauriel2.jpg", "assets/images/lauriel/lauriel3.jpg", "assets/images/lauriel/lauriel4.jpg", "assets/images/lauriel/lauriel5.jpg", "assets/images/lauriel/lauriel6.jpg"]
    },
    "Illumia": {
        desc: "Mage dengan kontrol area dan burst damage kuat.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/illumia/illumia.jpg", "assets/images/illumia/illumia2.jpg", "assets/images/illumia/illumia3.jpg", "assets/images/illumia/illumia4.jpg"]
    },
    "Mina": {
        desc: "Tank dengan kemampuan crowd control dan sustain tinggi.",
        role: "Tank",
        lane: "Side Lane",
        skins: ["assets/images/mina/mina.jpeg", "assets/images/mina/mina2.jpg", "assets/images/mina/mina3.jpg", "assets/images/mina/mina4.jpg"]
    },
    "Natalya": {
        desc: "Mage dengan burst damage tinggi dan skill area.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/natalya/natalya1.jpg", "assets/images/natalya/natalya3.jpg", "assets/images/natalya/natalya.jpg"]
    },
    "Yena": {
        desc: "Warrior dengan dua stance dan combo fleksibel.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/yena/yena.jpg", "assets/images/yena/yena2.jpg", "assets/images/yena/yena3.jpg", "assets/images/yena/yena4.jpg"]
    },
    "Liliana": {
        desc: "Mage dengan transformasi ke rubah—fleksibel jarak dekat dan jauh.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/liliana/liliana.jpg", "assets/images/liliana/liliana2.jpg"]
    },
    "Tel'Annas": {
        desc: "Marksman dengan serangan jarak jauh dan scaling kuat.",
        role: "Marksman",
        lane: "Abyssal Lane",
        skins: ["assets/images/telanas/telanas.jpg", "assets/images/telanas/telanas2.jpg", "assets/images/telanas/telanas3.jpg"]
    },
    "Veres": {
        desc: "Warrior dengan lifesteal dan crowd control.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/veres/veres.jpg", "assets/images/veres/veres2.jpg", "assets/images/veres/veres3.jpg", "assets/images/veres/veres4.jpg"]
    },
    "Qi": {
        desc: "Warrior dengan knockback dan sustain.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/qi/qi.jpg", "assets/images/qi/qi2.jpg", "assets/images/qi/qi3.jpg"]
    },
    "Amily": {
        desc: "Duelist kuat dengan mobilitas tinggi.",
        role: "Warrior",
        lane: "Side Lane",
        skins: ["assets/images/amily/amily.jpg", "assets/images/amily/amily2.jpg", "assets/images/amily/amily3.jpg"]
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
        skins: ["assets/images/diaochan/diaochan.jpg", "assets/images/diaochan/diaochan2.jpg", "assets/images/diaochan/diaochan3.jpg", "assets/images/diaochan/diaochan4.jpg", "assets/images/diaochan/diaochan5.jpg"]
    },
    "Krixi": {
        desc: "Mage dengan skill area dan burst damage.",
        role: "Mage",
        lane: "Mid Lane",
        skins: ["assets/images/krixi/krixi.jpg", "assets/images/krixi/krixi2.jpg", "assets/images/krixi/krixi3.jpg", "assets/images/krixi/krixi4.jpg", "assets/images/krixi/krixi5.jpg", "assets/images/krixi/krixi6.jpg", "assets/images/krixi/krixi7.jpg"]
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