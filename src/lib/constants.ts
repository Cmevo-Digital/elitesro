export const BRAND = {
  name: "Elites",
  fullName: "Elites Events",
  tagline: "Fiecare detaliu, la locul lui.",
  domain: "elites.ro",
  phone: "+40 725 868 615",
  phoneRaw: "+40725868615",
  whatsapp: "40725868615",
  email: "contact@elites.ro",
  locations: ["București", "Ilfov", "Pitești"],
  locationsShort: "București · Ilfov · Pitești",
  social: {
    instagram: "https://instagram.com/elites.ro",
    facebook: "https://facebook.com/elites.ro",
  },
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}?text=Bun%C4%83%20ziua%2C%20a%C8%99%20dori%20o%20ofert%C4%83%20pentru%20evenimentul%20meu.`;

export const NAV_LINKS = [
  { label: "Servicii", href: "/servicii" },
  { label: "Evenimente", href: "/evenimente/nunti" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export const SERVICES = [
  {
    slug: "mobilier-evenimente",
    title: "Mobilier Evenimente",
    short: "Mese, scaune, lounge seturi și cocktail tables — alese pentru estetică și confort.",
    icon: "armchair",
  },
  {
    slug: "corturi-evenimente",
    title: "Corturi & Structuri",
    short: "Corturi premium pentru nunți, corporate și evenimente private în aer liber.",
    icon: "tent",
  },
  {
    slug: "mese-scaune",
    title: "Mese, Scaune & Cocktail",
    short: "Gama completă de mobilier pentru orice configurație de eveniment.",
    icon: "utensils",
  },
  {
    slug: "vesela-tacamuri",
    title: "Veselă, Pahare & Tacâmuri",
    short: "Seturi complete pentru mese elegante. Fiecare piesă curată, verificată, impecabilă.",
    icon: "glass-water",
  },
  {
    slug: "iluminat",
    title: "Iluminat & Atmosferă",
    short: "Lumini de ambient, fairy lights, spot-uri direcționale — atmosfera care face diferența.",
    icon: "lightbulb",
  },
  {
    slug: "dj-sunet",
    title: "DJ & Sisteme Audio",
    short: "Echipament profesional și DJ cu experiență — sunet clar, energie potrivită.",
    icon: "music",
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
    href: "/evenimente/nunti",
  },
  {
    slug: "corporate",
    title: "Corporate",
    description:
      "Conferințe, gale, teambuilding-uri sau lansări de produs. Executăm profesional, la orice scară.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    href: "/evenimente/corporate",
  },
  {
    slug: "private",
    title: "Private",
    description:
      "Aniversări, petreceri private, reuniuni — evenimente personale tratate cu aceeași atenție la detalii.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    href: "/evenimente/private",
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
    q: "Livreați și montați echipamentele sau trebuie să le ridic eu?",
    a: "Livrăm, montăm și demontăm tot — în locația ta, conform programului agreat. Nu trebuie să ridici niciun scaun.",
  },
  {
    q: "Cu cât timp înainte trebuie să fac rezervarea?",
    a: "Recomandăm cel puțin 4–6 săptămâni pentru evenimente mari. Totuși, acceptăm și comenzi mai apropiate de data evenimentului, în funcție de disponibilitate.",
  },
  {
    q: "Operați și în afara Bucureștiului?",
    a: "Da. Operăm activ în București, Ilfov și Pitești. Contactează-ne pentru alte locații și evaluăm împreună.",
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
    a: "Avem parteneri de încredere pentru servicii complete — foto/video, cocktail bar și planning. Putem coordona totul sub același standard de calitate.",
  },
  {
    q: "Cum se face plata?",
    a: "Lucrăm cu un avans la confirmare și restul înainte de eveniment. Detaliile sunt stabilite transparent în contract, fără costuri ascunse.",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    alt: "Nuntă elegantă — amenajare sală",
    category: "nunti",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    alt: "Eveniment corporate — setup profesional",
    category: "corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1200&auto=format&fit=crop",
    alt: "Cort premium outdoor — nuntă",
    category: "corturi",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    alt: "Masă elegantă — veselă premium",
    category: "mobilier",
  },
  {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
    alt: "Eveniment outdoor — cort și mobilier",
    category: "corturi",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop",
    alt: "Iluminat ambiental — atmosferă premium",
    category: "iluminat",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200&auto=format&fit=crop",
    alt: "Decor nuntă — detalii florale",
    category: "nunti",
  },
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop",
    alt: "Recepție corporativă",
    category: "corporate",
  },
];
