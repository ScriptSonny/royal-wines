import drink from '@/assets/drink.png';

export interface OverigProduct {
  title: string;
  volume: number;
  price: number;
  image: string;
  categorie: string;
}

export const dummyOverig: OverigProduct[] = [
  { "title": "Lager Bier", "volume": 50, "price": 2.49, "image": drink, "categorie": "Bier" },
  { "title": "Cola Classic", "volume": 33, "price": 1.29, "image": drink, "categorie": "Frisdrank" },
  { "title": "Tonic Water", "volume": 20, "price": 1.59, "image": drink, "categorie": "Frisdrank" },
  { "title": "Trappist Dubbel", "volume": 33, "price": 2.99, "image": drink, "categorie": "Bier" },
  { "title": "Ginger Ale", "volume": 25, "price": 1.39, "image": drink, "categorie": "Frisdrank" },
  { "title": "Wheat Beer", "volume": 50, "price": 2.69, "image": drink, "categorie": "Bier" },
  { "title": "Sinas", "volume": 30, "price": 1.19, "image": drink, "categorie": "Frisdrank" },
  { "title": "Energy Drink", "volume": 25, "price": 1.89, "image": drink, "categorie": "Frisdrank" },
  { "title": "Bock Bier", "volume": 75, "price": 3.49, "image": drink, "categorie": "Bier" },
  { "title": "Radler", "volume": 50, "price": 2.29, "image": drink, "categorie": "Bier" },
  { "title": "IJsthee Perzik", "volume": 33, "price": 1.49, "image": drink, "categorie": "Frisdrank" },
  { "title": "IPA Hop", "volume": 75, "price": 3.99, "image": drink, "categorie": "Bier" },
  { "title": "Fruitwater Aardbei", "volume": 50, "price": 1.79, "image": drink, "categorie": "Frisdrank" },
  { "title": "Craft Beer Blond", "volume": 33, "price": 2.59, "image": drink, "categorie": "Bier" },
  { "title": "Alcoholvrije Cola", "volume": 33, "price": 1.19, "image": drink, "categorie": "Frisdrank" },
  { "title": "Mixdrank Rum-Cola", "volume": 25, "price": 3.19, "image": drink, "categorie": "Overig" },
  { "title": "Cocktail Mojito", "volume": 20, "price": 3.49, "image": drink, "categorie": "Overig" },
  { "title": "Vodka Energy", "volume": 25, "price": 3.69, "image": drink, "categorie": "Overig" },
  { "title": "Whisky Cola", "volume": 30, "price": 3.89, "image": drink, "categorie": "Overig" },
  { "title": "Bitter Lemon", "volume": 25, "price": 1.59, "image": drink, "categorie": "Frisdrank" },
  { "title": "Pilsener", "volume": 50, "price": 2.19, "image": drink, "categorie": "Bier" },
  { "title": "Rosé Mix", "volume": 33, "price": 3.29, "image": drink, "categorie": "Overig" },
  { "title": "Appelsap", "volume": 20, "price": 1.29, "image": drink, "categorie": "Frisdrank" },
  { "title": "Cider Apple", "volume": 33, "price": 2.79, "image": drink, "categorie": "Overig" },
  { "title": "Dark Ale", "volume": 75, "price": 4.19, "image": drink, "categorie": "Bier" }
]
