export const BRAND = {
  name: "Elites",
  fullName: "Elites Events",
  tagline: "Fiecare detaliu, la locul lui.",
  domain: "elites.ro",
  phone: "+40 772 274 347",
  phoneRaw: "+40772274347",
  whatsapp: "40772274347",
  email: "contact@elites.ro",
  locations: ["București", "Ilfov", "Pitești", "Ploiești", "Dâmbovița"],
  locationsShort: "București · Ilfov · Pitești · Ploiești · Dâmbovița",
  social: {
    instagram: "https://www.instagram.com/elitesro.events",
    facebook: "https://www.facebook.com/elitesro.events",
    googleReviews: "https://share.google/Za3cMusKXl1BFLUJY",
  },
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}?text=Bun%C4%83%20ziua%2C%20a%C8%99%20dori%20o%20ofert%C4%83%20pentru%20evenimentul%20meu.`;

export const NAV_LINKS = [
  { label: "Servicii", href: "/servicii/" },
  { label: "Evenimente", href: "/evenimente/" },
  { label: "Portofoliu", href: "/portofoliu/" },
  { label: "Blog", href: "/blog/" },
  { label: "Despre Noi", href: "/despre-noi/" },
  { label: "FAQ", href: "/intrebari-frecvente/" },
];

export const SERVICES = [
  {
    slug: "cabina-foto",
    title: "Cabina Foto",
    short:
      "Cabina foto interactivă cu imprimare instantă — distracție garantată și amintiri pentru toți invitații.",
    icon: "camera",
    active: true,
  },
  {
    slug: "dj-sunet",
    title: "DJ & Sisteme Audio",
    short:
      "Echipament profesional și DJ cu experiență — sunet clar, energie potrivită.",
    icon: "music",
    active: true,
  },
  {
    slug: "cocktail-bar",
    title: "Cocktail Bar",
    short:
      "Cocktail bar profesional pentru evenimente — cocktailuri signature, barman cu experiență, setup elegant.",
    icon: "cocktail",
    active: true,
  },
  {
    slug: "coffee-corner",
    title: "Coffee Corner",
    short:
      "Colț de cafea cu barista și espressor profesional — specialty coffee servit la standard de cafenea.",
    icon: "coffee",
    active: true,
  },
  {
    slug: "mobilier-evenimente",
    title: "Mobilier Evenimente",
    short:
      "Mese, scaune, lounge seturi și cocktail tables — alese pentru estetică și confort.",
    icon: "armchair",
    active: false,
  },
  {
    slug: "corturi-evenimente",
    title: "Corturi & Structuri",
    short:
      "Corturi premium pentru nunți, corporate și evenimente private în aer liber.",
    icon: "tent",
    active: false,
  },
  {
    slug: "mese-scaune",
    title: "Mese, Scaune & Cocktail",
    short: "Gama completă de mobilier pentru orice configurație de eveniment.",
    icon: "utensils",
    active: false,
  },
  {
    slug: "vesela-tacamuri",
    title: "Veselă, Pahare & Tacâmuri",
    short:
      "Seturi complete pentru mese elegante. Fiecare piesă curată, verificată, impecabilă.",
    icon: "glass-water",
    active: false,
  },
  {
    slug: "iluminat",
    title: "Iluminat & Atmosferă",
    short:
      "Lumini de ambient, fairy lights, spot-uri direcționale — atmosfera care face diferența.",
    icon: "lightbulb",
    active: false,
  },
];

export const EVENT_TYPES = [
  {
    slug: "nunti",
    title: "Nunți",
    description:
      "Creăm ambianța perfectă pentru ziua ta cea mai importantă. De la masa de onoare la ultimul scaun din sală.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    href: "/evenimente/nunti/",
  },
  {
    slug: "corporate",
    title: "Corporate",
    description:
      "Conferințe, gale, teambuilding-uri sau lansări de produs. Executăm profesional, la orice scară.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    href: "/evenimente/corporate/",
  },
  {
    slug: "private",
    title: "Private",
    description:
      "Aniversări, petreceri private, reuniuni — evenimente personale tratate cu aceeași atenție la detalii.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    href: "/evenimente/private/",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Am apelat la Elites pentru nunta noastră de 120 de persoane. Totul a fost livrat la timp, montat perfect, iar cortul arăta exact cum îmi imaginasem. M-am bucurat de ziua mea fără să mă gândesc o secundă la logistică.",
    name: "Andreea & Mihai",
    event: "Nuntă",
    location: "Ilfov",
  },
  {
    quote:
      "Am organizat gala anuală a companiei noastre cu ajutorul lor. 80 de invitați, mobilier de sală, sistem audio și iluminat — totul gestionat impecabil. Vom colabora din nou cu siguranță.",
    name: "Radu C.",
    event: "Eveniment Corporate",
    location: "București",
  },
  {
    quote:
      "Prețul a fost corect, iar calitatea a depășit așteptările. Veselă impecabilă, corect ambalată, livrată cu o zi înainte. Exact ce ai nevoie când organizezi o petrecere de familie.",
    name: "Elena M.",
    event: "Eveniment Privat",
    location: "Pitești",
  },
  {
    quote:
      "Profesioniști adevărați. Au montat tot cortul și mobilierul în câteva ore, fără niciun incident. Evenimentul nostru outdoor a arătat ca o producție de lux.",
    name: "Ionuț & Diana",
    event: "Nuntă Outdoor",
    location: "Ilfov",
  },
  {
    quote:
      "Recomand cu drag! Sistemul de sunet a fost perfect, DJ-ul a citit perfect atmosfera, și echipa a fost foarte serioasă cu montajul și demontajul.",
    name: "Cristina P.",
    event: "Aniversare Privată",
    location: "București",
  },
];

export const FAQS = [
  {
    q: "Livrați și montați echipamentele sau trebuie să le ridic eu?",
    a: "Livrăm, montăm și demontăm tot — în locația ta, conform programului agreat. Nu trebuie să ridici niciun scaun.",
  },
  {
    q: "Cu cât timp înainte trebuie să fac rezervarea?",
    a: "Recomandăm cel puțin 4–6 săptămâni pentru evenimente mari. Totuși, acceptăm și comenzi mai apropiate de data evenimentului, în funcție de disponibilitate.",
  },
  {
    q: "Operați și în afara Bucureștiului?",
    a: "Da. Operăm activ în București, Ilfov, Pitești, Ploiești și Dâmbovița. Contactează-ne pentru alte locații și evaluăm împreună.",
  },
  {
    q: "Există un număr minim de invitați pentru a colabora cu voi?",
    a: "Lucrăm cu evenimente între 50 și 150+ invitați. Nu avem un minim strict — contactează-ne și discutăm.",
  },
  {
    q: "Oferta este gratuită?",
    a: "Da, complet gratuită și fără nicio obligație. Completezi formularul sau ne scrii pe WhatsApp și primești oferta în maxim 24 de ore lucrătoare.",
  },
  {
    q: "Puteți gestiona toate serviciile evenimentului meu?",
    a: "Oferim direct cabină foto, DJ & sisteme audio, cocktail bar și coffee corner. Pentru alte nevoi ale evenimentului avem și parteneri de încredere, astfel încât să coordonăm totul sub același standard de calitate.",
  },
  {
    q: "Cum se face plata?",
    a: "Lucrăm cu un avans la confirmare și restul înainte de eveniment. Detaliile sunt stabilite transparent în contract, fără costuri ascunse.",
  },
];

export const EXTRA_FAQS = [
  {
    q: "Puteți amenaja și în locații proprii (grădini, proprietăți private)?",
    a: "Da. Lucrăm în orice locație din zonele noastre de operare — fie că e o sală de evenimente, o grădină privată sau un spațiu neconvențional. Evaluăm fezabilitatea montajului în prealabil.",
  },
  {
    q: "Ce se întâmplă dacă un echipament se deteriorează la eveniment?",
    a: "Toate echipamentele sunt asigurate și verificate înainte de livrare. În caz de deteriorare accidentală, discutăm soluțiile în mod transparent — menționăm condițiile exact în contract.",
  },
  {
    q: "Puteți livra și monta în aceeași zi cu evenimentul?",
    a: "De regulă livrăm cu o zi înainte. Pentru instalări complexe (corturi, sisteme audio) avem nevoie de minimum 24h. Discutăm programul exact la confirmare.",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2340&auto=format&fit=crop",
    alt: "Nuntă elegantă — amenajare outdoor",
    category: "nunti",
  },
  {
    src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2148&auto=format&fit=crop",
    alt: "Eveniment corporate — setup profesional",
    category: "corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1695393386569-cf141ff2c552?q=80&w=2340&auto=format&fit=crop",
    alt: "Cort premium",
    category: "corturi",
  },
  {
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1287&auto=format&fit=crop",
    alt: "Masă elegantă — veselă premium",
    category: "mobilier",
  },
  {
    src: "https://images.unsplash.com/photo-1618106494700-4b0049e83ed8?q=80&w=1287&auto=format&fit=crop",
    alt: "Eveniment outdoor — cort și mobilier",
    category: "corturi",
  },
  {
    src: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2340&auto=format&fit=crop",
    alt: "Evenimente private - majorat",
    category: "private",
  },
  {
    src: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2340&auto=format&fit=crop",
    alt: "Iluminat ambiental — atmosferă premium",
    category: "iluminat",
  },
  {
    src: "https://images.unsplash.com/photo-1670529776180-60e4132ab90c?w=900&auto=format&fit=crop&q=60",
    alt: "Decor nuntă — amenajare elegantă",
    category: "nunti",
  },
  {
    src: "/images/portfolio/van-1.png",
    alt: "Transport logistică, echipamente și mobilier",
    category: "private",
  },
];
