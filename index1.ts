// Variabel dengan berbagai tipe data primitif yang unik
let isUserActive: boolean = true;
let userNickname: string = "uniqueUser456";
let userAge: number = 28;
let userHeight: number = 1.82;
let welcomeMessage: string = "Greetings from ChatGPT!";
let currentTemperature: number = 22.0;
let userLoggedIn: boolean = true;
let userScore: number = 120;
let accountBalance: number = 5000.50;
let userAddress: string = "456 Another St";
let adminStatus: boolean = false;
let yearOfBirth: number = 1996;
let favoriteColorChoice: string = "red";
let emailVerified: boolean = true;
let itemQuantity: number = 25;
let upperLimit: number = 150;
let lowerLimit: number = 10;
let itemName: string = "Smartphone";
let currentTaxRate: number = 0.10;
let deliveryCost: number = 15;
let priceDiscount: number = 7.5;
let currentCalendarYear: number = 2024;
let projectTitle: string = "My Unique TypeScript Project";
let userAccessLevel: boolean = false;
let loyaltyPoints: number = 300;
let favoriteShade: string = "purple";

// Mencetak semua variabel
console.log(`isUserActive: ${isUserActive}`);
console.log(`userNickname: ${userNickname}`);
console.log(`userAge: ${userAge}`);
console.log(`userHeight: ${userHeight}`);
console.log(`welcomeMessage: ${welcomeMessage}`);
console.log(`currentTemperature: ${currentTemperature}`);
console.log(`userLoggedIn: ${userLoggedIn}`);
console.log(`userScore: ${userScore}`);
console.log(`accountBalance: ${accountBalance}`);
console.log(`userAddress: ${userAddress}`);
console.log(`adminStatus: ${adminStatus}`);
console.log(`yearOfBirth: ${yearOfBirth}`);
console.log(`favoriteColorChoice: ${favoriteColorChoice}`);
console.log(`emailVerified: ${emailVerified}`);
console.log(`itemQuantity: ${itemQuantity}`);
console.log(`upperLimit: ${upperLimit}`);
console.log(`lowerLimit: ${lowerLimit}`);
console.log(`itemName: ${itemName}`);
console.log(`currentTaxRate: ${currentTaxRate}`);
console.log(`deliveryCost: ${deliveryCost}`);
console.log(`priceDiscount: ${priceDiscount}`);
console.log(`currentCalendarYear: ${currentCalendarYear}`);
console.log(`projectTitle: ${projectTitle}`);
console.log(`userAccessLevel: ${userAccessLevel}`);
console.log(`loyaltyPoints: ${loyaltyPoints}`);
console.log(`favoriteShade: ${favoriteShade}`);

// Method untuk melakukan operasi aritmatika
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// Contoh penggunaan metode
console.log(`Penjumlahan: ${add(7, 14)}`); // 21
console.log(`Pengurangan: ${subtract(20, 6)}`); // 14
console.log(`Perkalian: ${multiply(5, 8)}`); // 40
console.log(`Pembagian: ${divide(30, 5)}`); // 6
