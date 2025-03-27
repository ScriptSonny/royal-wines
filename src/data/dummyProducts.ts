import wineImage1 from '@/assets/wine_image1.png';
import wineImage2 from '@/assets/wine_image2.png';
import wineImage3 from '@/assets/wine_image3.png';
import wineImage4 from '@/assets/wine_image4.png';

export interface WineProduct {
  title: string;
  volume: number;
  price: number;
  image: string;
  kleur: 'Rood' | 'Wit' | 'Rosé';
  land: string;
  streek: string;
  druivensoort: string;
  serveeradvies: string[];
  type: 'Mousserend' | 'Stil' | 'Versterkt';
  categorie: 'Wijn';
  isSale?: boolean;
  salesPrice?: number;
}

export const dummyProducts: WineProduct[] = [
  {
    "title": "Château Margaux",
    "volume": 75,
    "price": 35.55,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Kaas",
      "Vis"
    ],
    "type": "Mousserend",
    "categorie": "Wijn",
    "salesPrice": 30.99,
    "isSale": true,
  },
  {
    "title": "Barolo Riserva",
    "volume": 75,
    "price": 28.56,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Duitsland",
    "streek": "Nahe",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Sancerre Blanc",
    "volume": 75,
    "price": 38.91,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Douro",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Rioja Gran Reserva",
    "volume": 75,
    "price": 45.19,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Chianti Classico",
    "volume": 75,
    "price": 43.13,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Stellenbosch",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Vis",
      "Aperitief"
    ],
    "type": "Mousserend",
    "categorie": "Wijn",
    "salesPrice": 36.99,
    "isSale": true,
  },
  {
    "title": "Pouilly-Fumé",
    "volume": 75,
    "price": 35.86,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Spanje",
    "streek": "Catalonië",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas",
      "Vis"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Côtes du Rhône",
    "volume": 75,
    "price": 10.40,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis",
      "Aperitief"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Zinfandel Reserve",
    "volume": 75,
    "price": 18.39,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Colchagua Valley",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Vlees",
      "Kaas"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Malbec Mendoza",
    "volume": 75,
    "price": 49.93,
    "image": wineImage4,
    "kleur": "Rood",
    "land": "Zuid Afrika",
    "streek": "Swartland",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees",
      "Dessert"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Sauvignon Blanc Marlborough",
    "volume": 75,
    "price": 42.18,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Barossa Valley",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Amarone della Valpolicella",
    "volume": 75,
    "price": 20.31,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Frankrijk",
    "streek": "Languedoc",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Dessert",
      "Vis"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Brunello di Montalcino",
    "volume": 75,
    "price": 14.22,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Chili",
    "streek": "Colchagua Valley",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Gewürztraminer Alsace",
    "volume": 75,
    "price": 16.08,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Dao",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Mousserend",
    "categorie": "Wijn",
    "salesPrice": 12.99,
    "isSale": true,
  },
  {
    "title": "Tempranillo Roble",
    "volume": 75,
    "price": 36.97,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Spanje",
    "streek": "Rioja",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Cabernet Sauvignon Napa",
    "volume": 75,
    "price": 19.50,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Dao",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Dessert",
      "Aperitief"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Rosé Provence",
    "volume": 75,
    "price": 20.38,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Barossa Valley",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Pinot Grigio Veneto",
    "volume": 75,
    "price": 23.12,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Aperitief",
      "Dessert"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Bordeaux Supérieur",
    "volume": 75,
    "price": 28.80,
    "image": wineImage1,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil",
    "categorie": "Wijn",
    "salesPrice": 25.99,
    "isSale": true,
  },
  {
    "title": "Vinho Verde",
    "volume": 75,
    "price": 20.68,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Toscane",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Torrontés Salta",
    "volume": 75,
    "price": 33.49,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Chablis Premier Cru",
    "volume": 75,
    "price": 43.47,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Frankrijk",
    "streek": "Champagne",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Syrah Barossa",
    "volume": 75,
    "price": 39.15,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Grenache Noir",
    "volume": 75,
    "price": 35.83,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Vis",
      "Dessert"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Montepulciano d'Abruzzo",
    "volume": 75,
    "price": 41.70,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Dessert"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Carmenère Reserva",
    "volume": 75,
    "price": 32.85,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Rheingau",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Merlot Stellenbosch",
    "volume": 75,
    "price": 34.93,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Douro",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Vermentino Sardegna",
    "volume": 75,
    "price": 22.58,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Nebbiolo Langhe",
    "volume": 75,
    "price": 5.36,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil",
    "categorie": "Wijn",
    "salesPrice": 3.99,
    "isSale": true,
  },
  {
    "title": "Cabernet Franc Loire",
    "volume": 75,
    "price": 13.39,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Swartland",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis",
      "Dessert"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Petite Sirah",
    "volume": 75,
    "price": 46.27,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Fiano di Avellino",
    "volume": 75,
    "price": 41.80,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Viognier Rhône",
    "volume": 75,
    "price": 39.15,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Aperitief",
      "Kaas"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Riesling Mosel",
    "volume": 75,
    "price": 49.17,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Tavel Rosé",
    "volume": 75,
    "price": 48.90,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Primitivo di Manduria",
    "volume": 75,
    "price": 43.24,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Muscadet Sèvre et Maine",
    "volume": 75,
    "price": 38.99,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Madeira",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Cava Brut",
    "volume": 75,
    "price": 31.18,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil",
    "categorie": "Wijn",
    "salesPrice": 25.99,
    "isSale": true,
  },
  {
    "title": "Valpolicella Ripasso",
    "volume": 75,
    "price": 30.52,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Walker Bay",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Dessert",
      "Vlees"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Pinot Noir Oregon",
    "volume": 75,
    "price": 34.39,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert",
      "Vlees"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Txakolina",
    "volume": 75,
    "price": 19.90,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Lombardije",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Blauburgunder Südtirol",
    "volume": 75,
    "price": 34.89,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Yarra Valley",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Dolcetto d'Alba",
    "volume": 75,
    "price": 26.13,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Spanje",
    "streek": "Rioja",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief",
      "Dessert"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Rosso di Montalcino",
    "volume": 75,
    "price": 39.03,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Madeira",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Franciacorta",
    "volume": 75,
    "price": 45.67,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Mosel",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Lambrusco di Sorbara",
    "volume": 75,
    "price": 26.85,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Italië",
    "streek": "Piemonte",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn"
  },
  {
    "title": "Soave Classico",
    "volume": 75,
    "price": 15.16,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Duitsland",
    "streek": "Pfalz",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Mousserend",
    "categorie": "Wijn"
  },
  {
    "title": "Trebbiano d'Abruzzo",
    "volume": 75,
    "price": 28.50,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Veneto",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Mousserend",
    "categorie": "Wijn",
    "salesPrice": 24.99,
    "isSale": true,
  },
  {
    "title": "Aglianico del Vulture",
    "volume": 75,
    "price": 44.24,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Côtes de Provence",
    "volume": 75,
    "price": 22.71,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Italië",
    "streek": "Veneto",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil",
    "categorie": "Wijn"
  },
  {
    "title": "Marsanne Roussanne",
    "volume": 75,
    "price": 19.56,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt",
    "categorie": "Wijn",
    "salesPrice": 16.00,
    "isSale": true,
  }
]
