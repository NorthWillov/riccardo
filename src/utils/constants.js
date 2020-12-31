import lunch from "../images/lunches/lunch.jpg";
import spaghetti from "../images/lunches/spaghetti.jpg";
import salad from "../images/lunches/salad.jpg";
import pancake from "../images/lunches/pancake.jpg";
import sweetpancake from "../images/lunches/sweetpancake.jpg";

export const MENU = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
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
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 9,
      name: "Wiosenna",
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
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 15,
      name: "Szpinakowa",
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
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    },
    {
      id: 22,
      name: "Fantazja",
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
      id: 2,
      name: "Schab z grilowanym boczkiem",
      price: 24.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 3,
      name: "Pierś z grilowanym boczkiem",
      price: 24.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 4,
      name: "Karkówka z grilla",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 5,
      name: "Dorsz (filet)",
      price: 28.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 6,
      name: "Schabowy",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 7,
      name: "Pierś z kurczaka",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 8,
      name: "Szwajcar (pierś lub schab z serem)",
      price: 24.9,
      image: lunch,
      meat: "schab",
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 9,
      name: "Zrazy wieprzowe",
      price: 25.5,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 10,
      name: "Pierś hawajska",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 11,
      name: "Placek po węgiersku 🌶",
      price: 24.9,
      image: lunch,
      second: "duszona kapusta",
    },
    {
      id: 12,
      name: "Schab chłopa",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 13,
      name: "De volaille",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 14,
      name: "Pierś z pieczarkami i serem",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 15,
      name: "Warzywa zasmażane z kurczakiem",
      price: 20.9,
      image: lunch,
      first: "ziemniaki opiekane",
    },
    {
      id: 16,
      name: "Pierś z jajkiem sadzonym",
      price: 23.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
    {
      id: 17,
      name: "Pierś w sosie śmietanowo-serowym",
      price: 24.9,
      image: lunch,
      first: "ziemniaki opiekane",
      second: "duszona kapusta",
    },
  ],
  makarons: [
    {
      id: 1,
      name: "Spaghetti Carbonarra",
      image: spaghetti,
      price: 21,
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      image: spaghetti,
      price: 21,
    },
    {
      id: 3,
      name: "Makaron Papparadelle z kurczakiem",
      image: spaghetti,
      price: 23.5,
    },
    {
      id: 4,
      name: "Makaron Pappardelle z krewetkami",
      image: spaghetti,
      price: 24.5,
    },
    {
      id: 5,
      name: "Makaron z pesto bazyliowym z kurczakiemi",
      image: spaghetti,
      price: 22.5,
    },
    {
      id: 6,
      name: "Makaron z pesto bazyliowym z krewetkami",
      image: spaghetti,
      price: 23.5,
    },
    {
      id: 7,
      name: "Makaron ze szpinakiem i kurczakiem",
      image: spaghetti,
      price: 22.5,
    },
    {
      id: 8,
      name: "Makaron ze szpinakiem i krewetkami",
      image: spaghetti,
      price: 24.5,
    },
  ],

  salads: [
    {
      id: 1,
      name: "Sałatka Cezar",
      desc: "z jajkiem oraz chrupiącym boczkiem i sosem musztardowym",
      image: salad,
      sous: "vinaigrette",
      price: 22.5,
    },
    {
      id: 2,
      name: "Sałatka Grecka",
      desc:
        "podstawowa, z kurczakiem, z krewetkami lub z wędzonym łososiem, polecamy sos vinaigrette",
      image: salad,
      sous: "vinaigrette",
      price: 23.5,
      meat: "podstawowa",
    },
    {
      id: 3,
      name: "Sałatka Kolorowa",
      desc:
        "mix sałat z kurczak w ziołach, pomarańcza, grejpfrut, orzechy i sosem vinaigrette",
      image: salad,
      sous: "vinaigrette",
      price: 21.5,
    },
    {
      id: 4,
      name: "Sałatka Brokułowa",
      desc: "z brokułami, jajkiem, pomidorem i sosem czosnkowym",
      image: salad,
      sous: "vinaigrette",
      price: 19.4,
    },
    {
      id: 5,
      name: "Sałatka z tuńczykiem",
      desc: "z ogórkiem, pomidorem, kukurydzą, groszkiem i sosem czosnkowym",
      image: salad,
      sous: "vinaigrette",
      price: 21.5,
    },
  ],

  pancakes: {
    sweet: [
      {
        id: 1,
        name: "Naleśniki z mascarpone 2 szt.",
        desc: "z owocami sezonowymi lub konfiturą owocową",
        image: sweetpancake,
        way: "z owocami sezonowymi",
        adds: "bita śmietana",
        price: 19,
      },
      {
        id: 2,
        name: "Naleśniki czekoladowo-bananowe 2 szt.",
        desc: "z nutellą i bananami",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 19,
      },
      {
        id: 3,
        name: "Naleśniki z twarożkiem i śmietaną 2 szt.",
        desc: "",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 18,
      },
      {
        id: 4,
        name: "Naleśniki Rafaello 2 szt.",
        desc: "z mascarpone i wiórkami kokosowymi",
        image: sweetpancake,
        adds: "bita śmietana",
        price: 19.4,
      },
      {
        id: 5,
        name: "Naleśniki z dżemem 2 szt.",
        desc: "truskawkowym lub wiśniowym",
        image: sweetpancake,
        jam: "dżem truskawkowy",
        adds: "bita śmietana",
        price: 17,
      },
    ],
    salt: [
      {
        id: 6,
        name: "Naleśnik kurczak w sosie curry 2 szt.",
        image: pancake,
        sous: "joghurt",
        price: 21.4,
      },
      {
        id: 7,
        name: "Naleśnik szynka, pieczarki, ser 2 szt.",
        image: pancake,
        sous: "joghurt",
        price: 20.4,
      },
      {
        id: 8,
        name: "Naleśnik ze szpinakiem i fetą 2 szt.",
        image: pancake,
        sous: "joghurt",
        price: 19.4,
      },
      {
        id: 9,
        name: "Naleśnik kurczak, cukinia i ser camembert 2 szt.",
        image: pancake,
        sous: "joghurt",
        price: 22,
      },
    ],
  },
};
