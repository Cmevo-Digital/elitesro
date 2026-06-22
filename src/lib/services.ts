export const serviceDetails: Record<
  string,
  {
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    included: string[];
  }
> = {
  "mobilier-evenimente": {
    description:
      "Mobilier premium pentru evenimente elegante de orice dimensiune.",
    longDescription:
      "Gama noastră de mobilier pentru evenimente cuprinde piese selectate cu atenție pentru a crea un ambient impecabil. Fie că organizezi o nuntă intimă sau un corporate de anvergură, avem soluțiile potrivite.",
    features: [
      "Mese rotunde și dreptunghiulare",
      "Scaune Chiavari și Napoleon",
      "Lounge seturi complete",
      "Cocktail tables și bar counters",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    included: [
      "Livrare la locație",
      "Montaj profesional",
      "Demontaj și preluare",
      "Verificare calitate înainte de livrare",
    ],
  },
  "corturi-evenimente": {
    description:
      "Corturi și structuri premium pentru evenimente outdoor memorabile.",
    longDescription:
      "Corturile noastre transformă orice spațiu exterior într-un venue elegant și funcțional. Disponibile în diferite dimensiuni și configurații, cu posibilitate de climatizare și iluminat.",
    features: [
      "Corturi stretch și pagodă",
      "Pereți laterali transparenți sau opaci",
      "Podele și platforme",
      "Climatizare la cerere",
    ],
    image:
      "https://images.unsplash.com/photo-1692166927778-056466153552?q=80&w=2340&auto=format&fit=crop",
    included: [
      "Transport și instalare profesională",
      "Ancorare sigură",
      "Verificare meteo",
      "Demontaj complet",
    ],
  },
  "mese-scaune": {
    description:
      "Gamă completă de mese și scaune pentru orice configurație de eveniment.",
    longDescription:
      "De la mese banquet pentru cine formale la cocktail tables pentru recepții în picioare, avem exact ce ai nevoie pentru configurația evenimentului tău.",
    features: [
      "Mese pentru 8, 10, 12 persoane",
      "Scaune în multiple stiluri",
      "Fețe de masă și huse",
      "Decoruri suport",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1711305771490-2d39ba080f4b?q=80&w=1287&auto=format&fit=crop",
    included: [
      "Livrare și aranjare",
      "Fețe de masă incluse la cerere",
      "Configurare conform plan",
      "Demontaj",
    ],
  },
  "vesela-tacamuri": {
    description:
      "Veselă completă pentru mese elegante — pahare, farfurii, tacâmuri.",
    longDescription:
      "Seturile noastre de veselă sunt perfect potrivite pentru evenimente premium. Fiecare piesă este verificată, curată și ambalată profesional pentru transport.",
    features: [
      "Farfurii pentru toate cursurile",
      "Pahare vin, apă, șampanie",
      "Tacâmuri inox premium",
      "Boluri și platouri",
    ],
    image:
      "https://images.unsplash.com/photo-1769230361493-f1f365a99878?q=80&w=2338&auto=format&fit=crop",
    included: [
      "Ambalare și transport sigur",
      "Inventar complet verificat",
      "Înlocuire imediată pentru lipsuri",
      "Preluare după eveniment",
    ],
  },
  iluminat: {
    description:
      "Soluții de iluminat ambiental și tehnic pentru atmosfera perfectă.",
    longDescription:
      "Iluminatul este elementul care transformă un spațiu obișnuit într-un ambient memorabil. Oferim soluții complete, de la fairy lights la instalații LED profesionale.",
    features: [
      "Fairy lights și string lights",
      "Spot-uri direcționale",
      "Lumini colorate RGB",
      "Instalații personalizate",
    ],
    image:
      "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2340&auto=format&fit=crop",
    included: [
      "Instalare de specialist",
      "Cablare ascunsă",
      "Test înainte de eveniment",
      "Asistență în timpul evenimentului",
    ],
  },
  "dj-sunet": {
    description:
      "DJ profesional și sisteme audio de înaltă calitate pentru evenimentul tău.",
    longDescription:
      "Muzica bună și sunetul clar sunt esențiale pentru orice eveniment reușit. Oferim atât sisteme audio pentru auto-operare cât și servicii complete de DJ cu experiență.",
    features: [
      "Sisteme audio profesionale",
      "DJ cu experiență în nunți și corporate",
      "Microfoane wireless",
      "Iluminat de scenă",
    ],
    image:
      "https://images.unsplash.com/photo-1665221965525-87fe35deabdd?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Soundcheck înainte de eveniment",
      "DJ pe toată durata",
      "Playlist personalizat",
      "Echipament backup",
    ],
  },
  "cocktail-bar": {
    description:
      "Cocktail bar profesional pentru o experiență premium la evenimentul tău.",
    longDescription:
      "Un cocktail bar bine amenajat ridică nivelul oricărui eveniment. Barmanul nostru cu experiență pregătește cocktailuri clasice și signature, folosind ingrediente premium. Setup-ul elegant se integrează perfect în decorul evenimentului, devenind un punct de atracție pentru invitați.",
    features: [
      "Bar counter și accesorii complete",
      "Barman profesionist cu experiență",
      "Cocktailuri clasice și signature",
      "Soft drinks și sucuri incluse",
    ],
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Setup și decorare bar",
      "Barman pe toată durata evenimentului",
      "Pahare și accesorii de bar",
      "Demontaj și curățenie",
    ],
  },
  "cabina-foto": {
    description:
      "Cabina foto interactivă cu imprimare instantă — amintiri de neuitat pentru toți invitații.",
    longDescription:
      "Cabina foto transformă orice eveniment într-o experiență interactivă și memorabilă. Invitații se pot fotografia cu props amuzante, iar pozele sunt imprimate instant și personalizate cu detaliile evenimentului tău. Un element de entertainment care mulțumește tuturor vârstelor.",
    features: [
      "Cameră profesională de înaltă rezoluție",
      "Imprimare instantă (10–15 secunde)",
      "Props și accesorii incluse",
      "Template personalizat cu logo și data evenimentului",
    ],
    image:
      "https://images.unsplash.com/photo-1590446011295-f52a6ad8ad1b?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Transport și instalare",
      "Operator dedicat pe toată durata",
      "Consumabile (hârtie foto, cerneală)",
      "Customizare template cu detaliile evenimentului",
    ],
  },
};
