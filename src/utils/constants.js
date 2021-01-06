import pizza_wege from "../images/pizza_wege.png";
import pizza_saporito from "../images/pizza_saporito.png";
import pizza_ricco from "../images/pizza_ricco.png";
import lunch_schabChlopa from "../images/lunches/lunch_schabChlopa.png";
import lunch_zrazy from "../images/lunches/lunch_zrazy.png";
import makaron_carbonarra from "../images/lunches/makaron_carbonarra.png";
import salad_grecka from "../images/lunches/salad_grecka.png";
import lunch from "../images/lunches/lunch.jpg";
import spaghetti from "../images/lunches/spaghetti.jpg";
import salad from "../images/lunches/salad.jpg";
import pancake from "../images/lunches/pancake.jpg";
import sweetpancake from "../images/lunches/sweetpancake.jpg";
import potatoPancakes from "../images/lunches/potatoPancakes.jpg";
import riccardo from "../images/lunches/riccardo.png";
import camembert from "../images/lunches/camembert.jpg";
import fries from "../images/lunches/fries.jpg";
import ketchup from "../images/lunches/ketchup.jpg";
import tomatoSouse from "../images/lunches/tomatoSouse.jpeg";
import garlicSouse from "../images/lunches/garlicSouse.jpg";
import halfedSouse from "../images/lunches/halfedSouse.jpg";
import coke from "../images/lunches/coke.jpg";
import appleJuice from "../images/lunches/appleJuice.jpg";
import fanta from "../images/lunches/fanta.jpg";
import orangeJuice from "../images/lunches/orangeJuice.jpg";
import sprite from "../images/lunches/sprite.jpg";
import tea from "../images/lunches/tea.jpg";
import water from "../images/lunches/water.jpg";

export const MENU = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
      type: "pizza",
      price: {
        "20cm": 9.5,
        "28cm": 16.9,
        "50cm": 32.5,
      },
      ingredients: ["sos", "ser", "oregano"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 2,
      name: "Massima",
      type: "pizza",
      price: {
        "20cm": 14.5,
        "28cm": 17.9,
        "50cm": 34.5,
      },
      ingredients: ["sos", "ser", "pieczarki", "cebula"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 3,
      name: "Capricciosa",
      type: "pizza",
      price: {
        "20cm": 14.5,
        "28cm": 20.9,
        "50cm": 40.5,
      },
      ingredients: ["sos", "ser", "szynka", "pieczarki"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 4,
      name: "Bambino",
      type: "pizza",
      price: {
        "20cm": 15.5,
        "28cm": 20.9,
        "50cm": 40.5,
      },
      ingredients: ["sos", "ser", "szynka", "ananas"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 5,
      name: "Salami",
      type: "pizza",
      price: {
        "20cm": 15.5,
        "28cm": 20.9,
        "50cm": 41.9,
      },
      ingredients: ["sos", "ser", "salami", "papryka", "ogórek"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 6,
      name: "Tono",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 20.9,
        "50cm": 42.5,
      },
      ingredients: ["sos", "ser", "tuńczyk", "czerwona cebula", "feta"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 7,
      name: "Gamberetto",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 22.9,
        "50cm": 43.5,
      },
      ingredients: ["sos", "ser", "szynka", "krewetki", "ananas"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 8,
      name: "Wegetariana",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 21.9,
        "50cm": 43.5,
      },
      ingredients: [
        "sos",
        "ser",
        "pieczarki",
        "papryka",
        "oliwki",
        "ruccola",
        "kukurydza",
        "pomidory",
      ],
      image: pizza_wege,
    },
    {
      id: 9,
      name: "Wiosenna",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 21.9,
        "50cm": 43.5,
      },
      ingredients: ["sos", "ser", "brokuły", "cukinia", "krewetki", "czosnek"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 10,
      name: "Broccoli",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 21.9,
        "50cm": 43.5,
      },
      ingredients: ["sos", "ser", "brokuły", "pomidor", "feta", "parmezan"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 11,
      name: "Pepperone 🌶",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 22.5,
        "50cm": 44.5,
      },
      ingredients: [
        "sos",
        "ser",
        "bekon",
        "papryka jalapeño",
        "pieczarki",
        "cebula",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 12,
      name: "Forte 🌶",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 44.5,
      },
      ingredients: [
        "sos",
        "ser",
        "salami",
        "kiełbasa pepperoni",
        "papryka jalapeño",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 13,
      name: "Wiejska 🌶",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 44.5,
      },
      ingredients: ["sos", "ser", "kiełbasa", "cebula", "pieczarki", "tabasco"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 14,
      name: "Saporito",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 46.5,
      },
      ingredients: [
        "sos",
        "ser",
        "szynka",
        "kurczak",
        "pieczarki",
        "ogórek",
        "oregano",
      ],
      image: pizza_saporito,
    },
    {
      id: 15,
      name: "Szpinakowa",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 46.5,
      },
      ingredients: [
        "sos",
        "ser",
        "szpinak",
        "kurczak",
        "pomidory suszone",
        "parmezan",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 16,
      name: "Frutti di Mare",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 49.5,
      },
      ingredients: ["sos", "ser", "owoce morze", "kapary", "czosnek", "oliwki"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 17,
      name: "Jalapeño 🌶",
      type: "pizza",
      price: {
        "20cm": 17.5,
        "28cm": 23.5,
        "50cm": 49.5,
      },
      ingredients: [
        "sos",
        "ser",
        "szynka",
        "bekon",
        "papryka jalapeño",
        "czosnek",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 18,
      name: "Calzone (Pierog)",
      type: "pizza",
      size: "28cm",
      dough: "średnie",
      price: 23.5,
      ingredients: ["sos", "ser", "kurczak", "szynka", "pieczarki"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 19,
      name: "Miscela",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 45.5,
      },
      ingredients: ["sos", "ser", "pieczarki", "szynka", "bekon", "oliwki"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 20,
      name: "Salmone",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 46.9,
      },
      ingredients: ["sos", "ser", "łosoś wędzony", "ruccola", "parmezan"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 21,
      name: "Ricco",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 23.5,
        "50cm": 46.9,
      },
      ingredients: [
        "sos",
        "ser",
        "bekon",
        "kiełbasa",
        "pieczarki",
        "kukurydza",
        "cebula",
      ],
      image: pizza_ricco,
    },
    {
      id: 22,
      name: "Fantazja",
      type: "pizza",
      price: {
        "20cm": 18.5,
        "28cm": 25.5,
        "50cm": 50.9,
      },
      ingredients: ["sos", "ser"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 23,
      name: "Riccardo",
      type: "pizza",
      price: {
        "20cm": 17.5,
        "28cm": 25.5,
        "50cm": 50.9,
      },
      ingredients: [
        "sos",
        "ser",
        "kurczak",
        "kurki",
        "cebula",
        "ser pleśniowy",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 24,
      name: "Wołowina",
      type: "pizza",
      price: {
        "20cm": 17.5,
        "28cm": 25.5,
        "50cm": 50.9,
      },
      ingredients: [
        "sos",
        "ser",
        "wołowina",
        "feta",
        "czerwona cebula",
        "ogórek kiszony",
      ],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 25,
      name: "Bekonowe Jaja",
      type: "pizza",
      price: {
        "20cm": 16.5,
        "28cm": 21.9,
        "50cm": 43.9,
      },
      ingredients: ["sos", "ser", "bekon", "szczypior", "jaja"],
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
  ],

  pizzasIngredients: [
    { name: "ananas", price: 2 },
    { name: "bekon", price: 3 },
    { name: "brokuły", price: 2 },
    { name: "cebula", price: 2 },
    { name: "czerwona cebula", price: 2 },
    { name: "cukinia", price: 2 },
    { name: "czosnek", price: 2 },
    { name: "feta", price: 3 },
    { name: "kukurydza", price: 2 },
    { name: "kapary", price: 2 },
    { name: "kiełbasa", price: 3 },
    { name: "kurczak", price: 3 },
    { name: "krewetki", price: 6 },
    { name: "łosoś wędzony", price: 6 },
    { name: "ogórek", price: 2 },
    { name: "oliwki", price: 2 },
    { name: "owoce morza", price: 6 },
    { name: "pieczarki", price: 2 },
    { name: "papryka", price: 2 },
    { name: "pomidory", price: 2 },
    { name: "papryka jalapeño", price: 2 },
    { name: "pomidory suszone", price: 2 },
    { name: "parmezan", price: 3 },
    { name: "ruccola", price: 2 },
    { name: "ser", price: 3 },
    { name: "szynka", price: 3 },
    { name: "salami", price: 3 },
    { name: "ser pleśniowy", price: 3 },
    { name: "tuńczyk", price: 6 },
  ],

  lunches: [
    {
      id: 26,
      name: "Schab z grilowanym boczkiem",
      type: "lunch",
      price: 24.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 27,
      name: "Pierś z grilowanym boczkiem",
      type: "lunch",
      price: 24.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 28,
      name: "Karkówka z grilla",
      type: "lunch",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 29,
      name: "Dorsz (filet)",
      type: "lunch",
      price: 28.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 30,
      name: "Schabowy",
      type: "lunch",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 31,
      name: "Pierś z kurczaka",
      type: "lunch",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 32,
      name: "Szwajcar (pierś lub schab z serem)",
      type: "lunch",
      price: 24.9,
      image: lunch,
      meat: "schab",
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 33,
      name: "Zrazy wieprzowe",
      type: "lunch",
      price: 25.5,
      image: lunch_zrazy,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 34,
      name: "Pierś hawajska",
      type: "lunch",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 35,
      name: "Placek po węgiersku 🌶",
      type: "lunch",
      price: 24.9,
      image: lunch,
      second: "duszona kapusta",
    },
    {
      id: 36,
      name: "Schab chłopa",
      type: "lunch",
      price: 24.9,
      image: lunch_schabChlopa,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 37,
      name: "De volaille",
      type: "lunch",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 38,
      name: "Pierś z pieczarkami i serem",
      type: "lunch",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 39,
      name: "Warzywa zasmażane z kurczakiem",
      type: "lunch",
      price: 20.9,
      image: lunch,
      first: "ziemniaki opiekane",
    },
    {
      id: 40,
      name: "Pierś z jajkiem sadzonym",
      type: "lunch",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 41,
      name: "Pierś w sosie śmietanowo-serowym",
      type: "lunch",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
  ],

  makarons: [
    {
      id: 42,
      name: "Spaghetti Carbonarra",
      type: "makaron",
      image: makaron_carbonarra,
      price: 21,
    },
    {
      id: 43,
      name: "Spaghetti Bolognese",
      type: "makaron",
      image: spaghetti,
      price: 21,
    },
    {
      id: 44,
      name: "Makaron Papparadelle z kurczakiem",
      type: "makaron",
      image: spaghetti,
      price: 23.5,
    },
    {
      id: 45,
      name: "Makaron Pappardelle z krewetkami",
      type: "makaron",
      image: spaghetti,
      price: 24.5,
    },
    {
      id: 46,
      name: "Makaron z pesto bazyliowym z kurczakiemi",
      type: "makaron",
      image: spaghetti,
      price: 22.5,
    },
    {
      id: 47,
      name: "Makaron z pesto bazyliowym z krewetkami",
      type: "makaron",
      image: spaghetti,
      price: 23.5,
    },
    {
      id: 48,
      name: "Makaron ze szpinakiem i kurczakiem",
      type: "makaron",
      image: spaghetti,
      price: 22.5,
    },
    {
      id: 49,
      name: "Makaron ze szpinakiem i krewetkami",
      type: "makaron",
      image: spaghetti,
      price: 24.5,
    },
  ],

  salads: [
    {
      id: 50,
      name: "Sałatka Cezar",
      type: "salad",
      desc: "z jajkiem oraz chrupiącym boczkiem i sosem musztardowym",
      image: salad,
      sous: "vinaigrette",
      price: 22.5,
    },
    {
      id: 51,
      name: "Sałatka Grecka",
      type: "salad",
      desc:
        "podstawowa, z kurczakiem, z krewetkami lub z wędzonym łososiem, polecamy sos vinaigrette",
      image: salad_grecka,
      sous: "vinaigrette",
      price: 23.5,
      meat: "podstawowa",
    },
    {
      id: 52,
      name: "Sałatka Kolorowa",
      type: "salad",
      desc:
        "mix sałat z kurczak w ziołach, pomarańcza, grejpfrut, orzechy i sosem vinaigrette",
      image: salad,
      sous: "vinaigrette",
      price: 21.5,
    },
    {
      id: 53,
      name: "Sałatka Brokułowa",
      type: "salad",
      desc: "z brokułami, jajkiem, pomidorem i sosem czosnkowym",
      image: salad,
      sous: "vinaigrette",
      price: 19.4,
    },
    {
      id: 54,
      name: "Sałatka z tuńczykiem",
      type: "salad",
      desc: "z ogórkiem, pomidorem, kukurydzą, groszkiem i sosem czosnkowym",
      image: salad,
      sous: "vinaigrette",
      price: 21.5,
    },
  ],

  pancakes: {
    sweet: [
      {
        id: 55,
        name: "Naleśniki z mascarpone 2 szt.",
        type: "sweetPancake",
        desc: "z owocami sezonowymi lub konfiturą owocową",
        image: sweetpancake,
        way: "z owocami sezonowymi",
        adds: "bita śmietana",
        price: 19,
      },
      {
        id: 56,
        name: "Naleśniki czekoladowo-bananowe 2 szt.",
        type: "sweetPancake",
        desc: "z nutellą i bananami",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 19,
      },
      {
        id: 57,
        name: "Naleśniki z twarożkiem i śmietaną 2 szt.",
        type: "sweetPancake",
        desc: "",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 18,
      },
      {
        id: 58,
        name: "Naleśniki Rafaello 2 szt.",
        type: "sweetPancake",
        desc: "z mascarpone i wiórkami kokosowymi",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 19.4,
      },
      {
        id: 59,
        name: "Naleśniki z dżemem 2 szt.",
        type: "sweetPancake",
        desc: "truskawkowym lub wiśniowym",
        image: sweetpancake,
        jam: "dżem truskawkowy",
        adds: "bita śmietana",
        price: 17,
      },
    ],
    salt: [
      {
        id: 60,
        name: "Naleśnik kurczak w sosie curry 2 szt.",
        type: "saltPancake",
        image: pancake,
        sous: "joghurt",
        price: 21.4,
      },
      {
        id: 61,
        name: "Naleśnik szynka, pieczarki, ser 2 szt.",
        type: "saltPancake",
        image: pancake,
        sous: "joghurt",
        price: 20.4,
      },
      {
        id: 62,
        name: "Naleśnik ze szpinakiem i fetą 2 szt.",
        type: "saltPancake",
        image: pancake,
        sous: "joghurt",
        price: 19.4,
      },
      {
        id: 63,
        name: "Naleśnik kurczak, cukinia i ser camembert 2 szt.",
        type: "saltPancake",
        image: pancake,
        sous: "joghurt",
        price: 22,
      },
    ],
  },

  starters: [
    {
      id: 64,
      name: "Placuszki ziemniaczane z sosem grzybowym",
      desc: "4 szt.",
      image: potatoPancakes,
      price: 18.5,
    },
    {
      id: 65,
      name: "Placuszki ziemniaczane ze śmietaną i cukrem",
      desc: "4 szt.",
      image: potatoPancakes,
      price: 15,
    },
    {
      id: 66,
      name: "Przekąska Riccardo",
      desc: "grillowana cukinia, pomidor, ser mozzarella, sos vinaigrette",
      image: riccardo,
      price: 15,
    },
    {
      id: 67,
      name: "Zapiekany camembert",
      desc: "z żurawiną",
      image: camembert,
      price: 14,
    },
    {
      id: 68,
      name: "Frytki",
      desc: "200g",
      image: fries,
      price: 7,
    },
  ],

  souses: [
    { id: 69, name: "Ketchup", image: ketchup, price: 1 },
    { id: 70, name: "Sos pomidorowy", image: tomatoSouse, price: 1 },
    { id: 71, name: "Sos pomidorowy 🌶 (ostry)", image: tomatoSouse, price: 1 },
    { id: 72, name: "Sos czosnkowy", image: garlicSouse, price: 1 },
    { id: 73, name: "Sos pół na pół", image: halfedSouse, price: 1 },
  ],

  drinks: [
    { id: 74, name: "Coca-Cola 0,5l", image: coke, price: 5.5 },
    { id: 75, name: "Fanta 0,5l", image: fanta, price: 5.5 },
    { id: 76, name: "Sprite 0,5l", image: sprite, price: 5.5 },
    {
      id: 77,
      name: "Woda mineralna gazowana 0,5l",
      image: water,
      price: 3,
    },
    {
      id: 78,
      name: "Woda mineralna niegazowana 0,5l",
      image: water,
      price: 3,
    },
    {
      id: 79,
      name: "Fuzetea cytrynowa 0,5l",
      image: tea,
      price: 5.5,
    },
    {
      id: 80,
      name: "Sok Cappy pomarańczowy 0,33l",
      image: orangeJuice,
      price: 4.5,
    },
    {
      id: 81,
      name: "Sok Cappy jabłkowy 0,33l",
      image: appleJuice,
      price: 4.5,
    },
  ],
};
