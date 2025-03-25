import wineImage1 from '@/assets/wine_image1.png';
import wineImage2 from '@/assets/wine_image2.png';
import wineImage3 from '@/assets/wine_image3.png';
import wineImage4 from '@/assets/wine_image4.png';

export interface WineProduct {
  titel: string;
  volume: number;
  prijs: number;
  image: string;
  kleur: 'Rood' | 'Wit' | 'Rosé';
  land: string;
  streek: string;
  druivensoort: string;
  serveeradvies: string[];
  type: 'Mousserend' | 'Stil' | 'Versterkt';
}

export const dummyProducts: WineProduct[] = [
  {
    "titel": "Château Margaux",
    "volume": 75,
    "prijs": 35.55,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Kaas",
      "Vis"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Barolo Riserva",
    "volume": 75,
    "prijs": 28.56,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Duitsland",
    "streek": "Nahe",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil"
  },
  {
    "titel": "Sancerre Blanc",
    "volume": 75,
    "prijs": 38.91,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Douro",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil"
  },
  {
    "titel": "Rioja Gran Reserva",
    "volume": 75,
    "prijs": 45.19,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Chianti Classico",
    "volume": 75,
    "prijs": 43.13,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Stellenbosch",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Vis",
      "Aperitief"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Pouilly-Fumé",
    "volume": 75,
    "prijs": 35.86,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Spanje",
    "streek": "Catalonië",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas",
      "Vis"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Côtes du Rhône",
    "volume": 75,
    "prijs": 10.40,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis",
      "Aperitief"
    ],
    "type": "Stil"
  },
  {
    "titel": "Zinfandel Reserve",
    "volume": 75,
    "prijs": 18.39,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Colchagua Valley",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Vlees",
      "Kaas"
    ],
    "type": "Stil"
  },
  {
    "titel": "Malbec Mendoza",
    "volume": 75,
    "prijs": 49.93,
    "image": wineImage4,
    "kleur": "Rood",
    "land": "Zuid Afrika",
    "streek": "Swartland",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees",
      "Dessert"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Sauvignon Blanc Marlborough",
    "volume": 75,
    "prijs": 42.18,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Barossa Valley",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Amarone della Valpolicella",
    "volume": 75,
    "prijs": 20.31,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Frankrijk",
    "streek": "Languedoc",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Dessert",
      "Vis"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Brunello di Montalcino",
    "volume": 75,
    "prijs": 14.22,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Chili",
    "streek": "Colchagua Valley",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Gewürztraminer Alsace",
    "volume": 75,
    "prijs": 16.08,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Dao",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Tempranillo Roble",
    "volume": 75,
    "prijs": 36.97,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Spanje",
    "streek": "Rioja",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil"
  },
  {
    "titel": "Cabernet Sauvignon Napa",
    "volume": 75,
    "prijs": 19.50,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Dao",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Dessert",
      "Aperitief"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Rosé Provence",
    "volume": 75,
    "prijs": 20.38,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Barossa Valley",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Pinot Grigio Veneto",
    "volume": 75,
    "prijs": 23.12,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Aperitief",
      "Dessert"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Bordeaux Supérieur",
    "volume": 75,
    "prijs": 28.80,
    "image": wineImage1,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil"
  },
  {
    "titel": "Vinho Verde",
    "volume": 75,
    "prijs": 20.68,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Toscane",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Stil"
  },
  {
    "titel": "Torrontés Salta",
    "volume": 75,
    "prijs": 33.49,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Chablis Premier Cru",
    "volume": 75,
    "prijs": 43.47,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Frankrijk",
    "streek": "Champagne",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Syrah Barossa",
    "volume": 75,
    "prijs": 39.15,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Grenache Noir",
    "volume": 75,
    "prijs": 35.83,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Vis",
      "Dessert"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Montepulciano d'Abruzzo",
    "volume": 75,
    "prijs": 41.70,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Dessert"
    ],
    "type": "Stil"
  },
  {
    "titel": "Carmenère Reserva",
    "volume": 75,
    "prijs": 32.85,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Rheingau",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Merlot Stellenbosch",
    "volume": 75,
    "prijs": 34.93,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Douro",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil"
  },
  {
    "titel": "Vermentino Sardegna",
    "volume": 75,
    "prijs": 22.58,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Stil"
  },
  {
    "titel": "Nebbiolo Langhe",
    "volume": 75,
    "prijs": 5.36,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Portugal",
    "streek": "Alentejo",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil"
  },
  {
    "titel": "Cabernet Franc Loire",
    "volume": 75,
    "prijs": 13.39,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Swartland",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis",
      "Dessert"
    ],
    "type": "Stil"
  },
  {
    "titel": "Petite Sirah",
    "volume": 75,
    "prijs": 46.27,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Fiano di Avellino",
    "volume": 75,
    "prijs": 41.80,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Syrah",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Viognier Rhône",
    "volume": 75,
    "prijs": 39.15,
    "image": wineImage2,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "Hunter Valley",
    "druivensoort": "Merlot",
    "serveeradvies": [
      "Aperitief",
      "Kaas"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Riesling Mosel",
    "volume": 75,
    "prijs": 49.17,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Tavel Rosé",
    "volume": 75,
    "prijs": 48.90,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Margaret River",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Primitivo di Manduria",
    "volume": 75,
    "prijs": 43.24,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Chili",
    "streek": "Maipo Valley",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Stil"
  },
  {
    "titel": "Muscadet Sèvre et Maine",
    "volume": 75,
    "prijs": 38.99,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Madeira",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Stil"
  },
  {
    "titel": "Cava Brut",
    "volume": 75,
    "prijs": 31.18,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vlees"
    ],
    "type": "Stil"
  },
  {
    "titel": "Valpolicella Ripasso",
    "volume": 75,
    "prijs": 30.52,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Zuid Afrika",
    "streek": "Walker Bay",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Dessert",
      "Vlees"
    ],
    "type": "Stil"
  },
  {
    "titel": "Pinot Noir Oregon",
    "volume": 75,
    "prijs": 34.39,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Duitsland",
    "streek": "Franken",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert",
      "Vlees"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Txakolina",
    "volume": 75,
    "prijs": 19.90,
    "image": wineImage4,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Lombardije",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Blauburgunder Südtirol",
    "volume": 75,
    "prijs": 34.89,
    "image": wineImage3,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "Yarra Valley",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Vis"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Dolcetto d'Alba",
    "volume": 75,
    "prijs": 26.13,
    "image": wineImage4,
    "kleur": "Rosé",
    "land": "Spanje",
    "streek": "Rioja",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief",
      "Dessert"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Rosso di Montalcino",
    "volume": 75,
    "prijs": 39.03,
    "image": wineImage1,
    "kleur": "Rood",
    "land": "Portugal",
    "streek": "Madeira",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Vlees",
      "Aperitief"
    ],
    "type": "Stil"
  },
  {
    "titel": "Franciacorta",
    "volume": 75,
    "prijs": 45.67,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Duitsland",
    "streek": "Mosel",
    "druivensoort": "Tempranillo",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Lambrusco di Sorbara",
    "volume": 75,
    "prijs": 26.85,
    "image": wineImage3,
    "kleur": "Rosé",
    "land": "Italië",
    "streek": "Piemonte",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  },
  {
    "titel": "Soave Classico",
    "volume": 75,
    "prijs": 15.16,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Duitsland",
    "streek": "Pfalz",
    "druivensoort": "Riesling",
    "serveeradvies": [
      "Kaas"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Trebbiano d'Abruzzo",
    "volume": 75,
    "prijs": 28.50,
    "image": wineImage2,
    "kleur": "Wit",
    "land": "Italië",
    "streek": "Veneto",
    "druivensoort": "Pinot Noir",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Mousserend"
  },
  {
    "titel": "Aglianico del Vulture",
    "volume": 75,
    "prijs": 44.24,
    "image": wineImage3,
    "kleur": "Rood",
    "land": "Spanje",
    "streek": "Ribera del Duero",
    "druivensoort": "Cabernet Sauvignon",
    "serveeradvies": [
      "Vis",
      "Kaas"
    ],
    "type": "Stil"
  },
  {
    "titel": "Côtes de Provence",
    "volume": 75,
    "prijs": 22.71,
    "image": wineImage2,
    "kleur": "Rood",
    "land": "Italië",
    "streek": "Veneto",
    "druivensoort": "Sauvignon Blanc",
    "serveeradvies": [
      "Dessert"
    ],
    "type": "Stil"
  },
  {
    "titel": "Marsanne Roussanne",
    "volume": 75,
    "prijs": 19.56,
    "image": wineImage1,
    "kleur": "Wit",
    "land": "Australië",
    "streek": "McLaren Vale",
    "druivensoort": "Chardonnay",
    "serveeradvies": [
      "Aperitief"
    ],
    "type": "Versterkt"
  }
]
