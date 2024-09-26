// Karakter Utama: Pahlawan Arion
let heroName: string = "Arion";
let heroAge: number = 30;
let isHeroReadyForBattle: boolean = true;

console.log(`Pahlawan: ${heroName}, Umur: ${heroAge}, Siap bertarung: ${isHeroReadyForBattle}`);

// Sumber Daya Kerajaan
let goldAmount: number = 5000;
let foodSupply: number = 120;
let soldierCount: number = 200;

console.log(`Sumber Daya Kerajaan - Emas: ${goldAmount}, Makanan: ${foodSupply}, Prajurit: ${soldierCount}`);

// Petualangan Pahlawan
let additionalGold: number = 1500;
let experiencePoints: number = 75;

// Menambah emas dari hasil petualangan
goldAmount += additionalGold;
console.log(`Emas kerajaan setelah petualangan: ${goldAmount}`);

// Menyimpan jumlah pengalaman bertarung yang didapat Arion
console.log(`Pahlawan Arion mendapatkan ${experiencePoints} XP dari petualangan.`);

// Misi Penyembuhan: Mengurangi kesehatan prajurit
function kurangiKesehatan(jumlahPrajurit: number, poinKesehatanHilang: number): void {
    let healthPerSoldier: number = 100;
    let totalHealthLoss: number = jumlahPrajurit * poinKesehatanHilang;
    
    // Menghitung kesehatan setelah kehilangan poin
    let remainingHealth: number = healthPerSoldier - poinKesehatanHilang;

    // Menampilkan hasil berdasarkan kesehatan
    if (remainingHealth <= 0) {
        console.log(`Prajurit tidak dapat bertarung, kesehatan mereka habis.`);
    } else {
        console.log(`Kesehatan per prajurit setelah pertempuran: ${remainingHealth}`);
    }

    // Menampilkan total kesehatan yang hilang
    console.log(`Total poin kesehatan yang hilang untuk ${jumlahPrajurit} prajurit: ${totalHealthLoss}`);
}

// Mengurangi kesehatan prajurit yang terluka
kurangiKesehatan(50, 5);
