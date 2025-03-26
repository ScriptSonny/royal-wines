import drink from '@/assets/drink.png';

export interface OverigProduct {
  titel: string;
  volume: number;
  prijs: number;
  image: string;
  categorie: string;
}

export const dummyOverig: OverigProduct[] = [
  { "titel": "Lager Bier", "volume": 50, "prijs": 2.49, "image": drink, "categorie": "Bier" },
  { "titel": "Cola Classic", "volume": 33, "prijs": 1.29, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Tonic Water", "volume": 20, "prijs": 1.59, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Trappist Dubbel", "volume": 33, "prijs": 2.99, "image": drink, "categorie": "Bier" },
  { "titel": "Ginger Ale", "volume": 25, "prijs": 1.39, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Wheat Beer", "volume": 50, "prijs": 2.69, "image": drink, "categorie": "Bier" },
  { "titel": "Sinas", "volume": 30, "prijs": 1.19, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Energy Drink", "volume": 25, "prijs": 1.89, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Bock Bier", "volume": 75, "prijs": 3.49, "image": drink, "categorie": "Bier" },
  { "titel": "Radler", "volume": 50, "prijs": 2.29, "image": drink, "categorie": "Bier" },
  { "titel": "IJsthee Perzik", "volume": 33, "prijs": 1.49, "image": drink, "categorie": "Frisdrank" },
  { "titel": "IPA Hop", "volume": 75, "prijs": 3.99, "image": drink, "categorie": "Bier" },
  { "titel": "Fruitwater Aardbei", "volume": 50, "prijs": 1.79, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Craft Beer Blond", "volume": 33, "prijs": 2.59, "image": drink, "categorie": "Bier" },
  { "titel": "Alcoholvrije Cola", "volume": 33, "prijs": 1.19, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Mixdrank Rum-Cola", "volume": 25, "prijs": 3.19, "image": drink, "categorie": "Overig" },
  { "titel": "Cocktail Mojito", "volume": 20, "prijs": 3.49, "image": drink, "categorie": "Overig" },
  { "titel": "Vodka Energy", "volume": 25, "prijs": 3.69, "image": drink, "categorie": "Overig" },
  { "titel": "Whisky Cola", "volume": 30, "prijs": 3.89, "image": drink, "categorie": "Overig" },
  { "titel": "Bitter Lemon", "volume": 25, "prijs": 1.59, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Pilsener", "volume": 50, "prijs": 2.19, "image": drink, "categorie": "Bier" },
  { "titel": "Rosé Mix", "volume": 33, "prijs": 3.29, "image": drink, "categorie": "Overig" },
  { "titel": "Appelsap", "volume": 20, "prijs": 1.29, "image": drink, "categorie": "Frisdrank" },
  { "titel": "Cider Apple", "volume": 33, "prijs": 2.79, "image": drink, "categorie": "Overig" },
  { "titel": "Dark Ale", "volume": 75, "prijs": 4.19, "image": drink, "categorie": "Bier" }
]
