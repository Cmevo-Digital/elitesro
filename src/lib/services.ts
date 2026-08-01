export const serviceDetails: Record<
  string,
  {
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    included: string[];
    faqs: { q: string; a: string }[];
    clientTypes: string[];
    useCases: string[];
    trustStats: { label: string; value: string }[];
    plans?: {
      name: string;
      tagline: string;
      alcoholic: string[];
      nonAlcoholic: string[];
    }[];
    plansNote?: string;
  }
> = {
  "mobilier-evenimente": {
    description:
      "Mobilier premium pentru evenimente elegante de orice dimensiune.",
    longDescription:
      "Gama noastră de mobilier pentru evenimente cuprinde piese selectate cu atenție pentru a crea un ambient impecabil. Fie că organizezi o nuntă intimă sau un corporate de anvergură, avem soluțiile potrivite.\n\nOferim diverse tipuri de mese și scaune, de la clasicele scaune Chiavari, perfecte pentru nunți elegante, la seturi lounge moderne pentru cocktailuri corporate. Fiecare piesă este verificată înainte de livrare, curățată profesional și ambalată pentru transport în siguranță.\n\nColaborăm cu cele mai diverse locații din București, Ilfov, Pitești și Ploiești, adaptându-ne la orice spațiu, de la săli de evenimente clasice la grădini private și spații neconvenționale.",
    features: [
      "Mese rotunde — 8, 10, 12 persoane",
      "Mese dreptunghiulare pentru banqueting",
      "Scaune Chiavari (aurii, albe, negre)",
      "Scaune Napoleon cu husă",
      "Lounge seturi — canapele, măsuțe, pouf",
      "Cocktail tables înalte",
      "Bar counters și pupitre",
      "Mese de onoare personalizate",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    included: [
      "Livrare la locație în intervalul agreat",
      "Montaj profesional de către echipa noastră",
      "Aranjare conform planului tău de sală",
      "Demontaj și preluare după eveniment",
      "Verificare calitate înainte de livrare",
    ],
    faqs: [
      {
        q: "Ce tipuri de scaune sunt disponibile?",
        a: "Avem scaune Chiavari (aurii, albe, negre), scaune Napoleon cu husă, scaune lounge și tabureți pentru cocktail. Toate sunt însoțite de huse și funde la cerere, în culoarea evenimentului tău.",
      },
      {
        q: "Pot alege culori diferite pentru țesături?",
        a: "Da, colaborăm cu ateliere locale pentru huse și fețe de masă personalizate. Poți alege orice culoare din paleta noastră, iar dacai ai nevoie de o nuanță specială, o comandăm special pentru tine.",
      },
      {
        q: "Câte persoane pot aranja cu mobilierul vostru?",
        a: "Configurăm evenimente între 50 și 150+ invitați. Pentru numere mai mari, discutăm în avans și adaptăm stocul disponibil. Recomandăm rezervarea cu minimum 2 săptămâni înainte pentru cantități mari.",
      },
    ],
    clientTypes: [
      "Cupluri care își planifică nunta și caută mobilier elegant pentru 50–150 invitați",
      "Organizatori de evenimente corporate care au nevoie de setup profesional pentru conferințe și gale",
      "Persoane care organizează petreceri private aniversare în spații închiriate sau grădini",
      "Planificatori de evenimente și wedding planners care externalizează logistica",
    ],
    useCases: [
      "Nuntă în Ilfov — 120 invitați, mobilier Chiavari, lounge zonă, masă de onoare personalizată",
      "Gala corporate în București — 80 invitați, mese rotunde, cocktail tables, pupitru vorbitori",
      "Aniversare în grădină privată — 60 invitați, mese dreptunghiulare, scaune cu husă, zonă lounge",
    ],
    trustStats: [
      { label: "Evenimente deservite", value: "350+" },
      { label: "Ani de experiență", value: "6+" },
      { label: "Piese în stoc", value: "2.500+" },
      { label: "Rata recomandări", value: "94%" },
    ],
  },
  "corturi-evenimente": {
    description:
      "Corturi și structuri premium pentru evenimente outdoor memorabile.",
    longDescription:
      "Corturile noastre transformă orice spațiu exterior într-un venue elegant și funcțional. Disponibile în diferite dimensiuni și configurații, cu posibilitate de climatizare și iluminat integrat.\n\nOferim corturi stretch, ideale pentru nunți și evenimente corporate datorită aspectului lor modern și curat — și corturi pagodă, perfecte pentru petreceri private și grădini. Toate structurile sunt fabricate din materiale de înaltă calitate, ignifuge și rezistente la intemperii.\n\nFiecare instalare este precedată de o verificare tehnică a locației și o evaluare meteo. Echipele noastre montează rapid și sigur, iar la final demontăm complet, lăsând spațiul curat.",
    features: [
      "Corturi stretch — forme organice, aspect modern",
      "Corturi pagodă — elegante, pentru grădini",
      "Pereți laterali transparenti (fereastră)",
      "Pereți laterali opaci",
      "Podele și platforme din lemn",
      "Climatizare — aer condiționat / încălzire",
      "Iluminat interior integrat",
      "Sisteme de ancorare sigure pentru orice teren",
    ],
    image:
      "https://images.unsplash.com/photo-1692166927778-056466153552?q=80&w=2340&auto=format&fit=crop",
    included: [
      "Transport și instalare profesională",
      "Ancorare sigură — verificare tehnică",
      "Raport meteo înainte de montaj",
      "Demontaj complet după eveniment",
      "Curățare și împachetare",
    ],
    faqs: [
      {
        q: "Ce se întâmplă dacă plouă sau bate vânt puternic?",
        a: "Corturile noastre sunt testate pentru condiții meteo normale și au sisteme de ancorare sigure. În caz de avertizare meteo severă, discutăm soluții alternative cu tine cu cel puțin 48h înainte. Nu am avut niciodată incidente majore.",
      },
      {
        q: "Cât timp durează montajul unui cort?",
        a: "Pentru un cort stretch de dimensiuni medii (6×8m), montajul durează aproximativ 3-4 ore cu o echipă de 2-3 oameni. Corturile mari (10×15m) necesită 5-6 ore și o echipă extinsă. În general, montăm cu o zi înainte.",
      },
      {
        q: "Pot instala cortul pe iarbă, beton sau pietriș?",
        a: "Da, avem soluții de ancorare pentru orice tip de teren. Pe iarbă folosim țăruși de ancorare adânci, pe beton folosim greutăți și sisteme de fixare fără găurire, iar pe pietriș adaptăm metoda în funcție de adâncimea stratului.",
      },
    ],
    clientTypes: [
      "Cupluri care doresc o nuntă outdoor în grădini sau proprietăți private",
      "Companii care organizează teambuilding-uri sau evenimente corporate în aer liber",
      "Persoane care aniversează evenimente private în spații exterioare neacoperite",
      "Organizatori de festivaluri și evenimente cultural-artistice în aer liber",
    ],
    useCases: [
      "Nuntă outdoor în Ilfov — cort stretch 10×12m, 130 invitați, podea și iluminat LED",
      "Teambuilding corporate în Pitești — cort pagodă 8×8m, party tematic, sistem audio",
      "Aniversare 50 ani în grădină privată — cort stretch 6×8m, 60 invitați, pereți transparenți",
    ],
    trustStats: [
      { label: "Corturi în stoc", value: "25+" },
      { label: "Evenimente outdoor", value: "200+" },
      { label: "Ani de experiență", value: "6+" },
      { label: "Suprafață acoperită", value: "1.200m²" },
    ],
  },
  "mese-scaune": {
    description:
      "Gamă completă de mese și scaune pentru orice configurație de eveniment.",
    longDescription:
      "De la mese banquet pentru cine formale la cocktail tables pentru recepții în picioare, avem exact ce ai nevoie pentru configurația evenimentului tău.\n\nStocul nostru cuprinde mese rotunde pentru 8, 10 și 12 persoane, mese dreptunghiulare pentru banqueting și mese înalte pentru cocktail. Scaunele sunt disponibile în mai multe stiluri — Chiavari, Napoleon, scaune lounge — și pot fi completate cu huse în culoarea evenimentului.\n\nToate mesele sunt verificate pentru stabilitate, iar scaunele sunt testate individual. Oferim și fețe de masă din bumbac premium, în alb, ivoriu și negru, plus opțiuni de personalizare.",
    features: [
      "Mese rotunde — 8, 10, 12 persoane",
      "Mese dreptunghiulare pentru banqueting",
      "Cocktail tables înalte",
      "Scaune Chiavari (aurii, albe, negre)",
      "Scaune Napoleon cu husă",
      "Scaune lounge și tabureți",
      "Fețe de masă din bumbac premium",
      "Huse pentru scaune și funde decorative",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1711305771490-2d39ba080f4b?q=80&w=1287&auto=format&fit=crop",
    included: [
      "Livrare și aranjare conform planului de sală",
      "Fețe de masă incluse la cerere",
      "Huse pentru scaune disponibile",
      "Configurare și ajustare pe loc",
      "Demontaj și preluare după eveniment",
    ],
    faqs: [
      {
        q: "Pot închiria doar scaune fără mese?",
        a: "Da, absolut. Poți închiria orice combinație dorești — doar mese, doar scaune, sau pachet complet. Prețul se calculează individual per piesă.",
      },
      {
        q: "Husele pentru scaune sunt incluse automat?",
        a: "Nu, husele se adaugă la comandă. Poți alege între huse standard (alb, ivoriu, negru) sau personalizate în culoarea evenimentului. Recomandăm husele pentru un aspect uniform și elegant.",
      },
      {
        q: "Ce dimensiuni au mesele rotunde?",
        a: "Mesele rotunde au diametrul de 180 cm și acomodează confortabil 8-10 persoane. Pentru 12 persoane recomandăm mese de 200 cm diametru (disponibile la cerere).",
      },
    ],
    clientTypes: [
      "Organizatori de evenimente care au nevoie de mobilier suplimentar pentru săli existente",
      "Cupluri care doresc un anumit stil de scaune și mese pentru nunta lor",
      "Companii care organizează cine de gală și cocktailuri corporate",
      "Persoane private care închiriază spații și au nevoie de mobilier complet",
    ],
    useCases: [
      "Nuntă cu 100 invitați — mese rotunde 10 persoane, scaune Chiavari aurii, fețe de masă albe",
      "Gală corporate în București — mix mese rotunde și cocktail tables, 80 participanți",
      "Petrecere aniversară în sală închiriată — 50 invitați, mese dreptunghiulare, scaune cu husă",
    ],
    trustStats: [
      { label: "Mese în stoc", value: "150+" },
      { label: "Scaune disponibile", value: "800+" },
      { label: "Evenimente deservite", value: "350+" },
      { label: "Stiluri diferite", value: "8" },
    ],
  },
  "vesela-tacamuri": {
    description:
      "Veselă completă pentru mese elegante — pahare, farfurii, tacâmuri.",
    longDescription:
      "Seturile noastre de veselă sunt perfect potrivite pentru evenimente premium. Fiecare piesă este verificată, curată și ambalată profesional pentru transport.\n\nOferim seturi complete pentru 50 până la 150+ invitați, incluzând farfurii pentru toate cursurile (aperitiv, fel principal, desert), pahare pentru vin roșu, vin alb, apă și șampanie, plus tacâmuri inox premium.\n\nVesela noastră provine de la producători europeni de renume și este menținută în condiții impecabile. După fiecare eveniment, fiecare piesă este spălată profesional, igienizată și ambalată individual.",
    features: [
      "Farfurii întinse (aperitiv)",
      "Farfurii plate (fel principal)",
      "Farfurii desert și boluri supă",
      "Pahare vin roșu și vin alb",
      "Pahare apă și șampanie",
      "Tacâmuri inox premium — set complet",
      "Boluri și platouri servire",
      "Carafe și decantoare",
    ],
    image:
      "https://images.unsplash.com/photo-1769230361493-f1f365a99878?q=80&w=2338&auto=format&fit=crop",
    included: [
      "Ambalare sigură și transport",
      "Inventar complet verificat înainte de livrare",
      "Înlocuire imediată pentru piese lipsă",
      "Preluare și inventariere după eveniment",
    ],
    faqs: [
      {
        q: "Vesela este spălată înainte de livrare?",
        a: "Da, fiecare piesă este spălată profesional și igienizată după fiecare eveniment. Ambalăm individual în folie protectoare pentru a preveni orice murdărire în timpul transportului.",
      },
      {
        q: "Ce se întâmplă dacă sparg ceva în timpul evenimentului?",
        a: "Acceptăm un procent rezonabil de spargeri (până la 5% din cantitate). Deteriorările peste acest prag se taxează la cost. Vă recomandăm să comandați cu 10-15% peste numărul de invitați pentru a acoperi eventualele incidente.",
      },
      {
        q: "Pot închiria doar pahare fără farfurii?",
        a: "Da, poți închiria orice combinație. De exemplu, doar pahare de șampanie pentru un cocktail sau doar tacâmuri pentru un eveniment care are deja veselă. Prețul se calculează per piesă.",
      },
    ],
    clientTypes: [
      "Organizatori de nunți care doresc un setup de masă complet și elegant",
      "Companii care organizează cine corporate și au nevoie de veselă premium",
      "Restaurante și săli de evenimente care externalizează serviciul de veselă",
      "Persoane private care închiriază un spațiu și nu au veselă inclusă",
    ],
    useCases: [
      "Nuntă cu 100 invitați — set complet farfurii + pahare + tacâmuri, 3 cursuri",
      "Cină de gală corporate — farfurii premium, pahare cristal, tacâmuri inox",
      "Petrecere aniversară — pahare șampanie și cocktail, boluri servire aperitive",
    ],
    trustStats: [
      { label: "Piese în stoc", value: "5.000+" },
      { label: "Seturi complete", value: "150+" },
      { label: "Evenimente deservite", value: "350+" },
      { label: "Garanție calitate", value: "100%" },
    ],
  },
  iluminat: {
    description:
      "Soluții de iluminat ambiental și tehnic pentru atmosfera perfectă.",
    longDescription:
      "Iluminatul este elementul care transformă un spațiu obișnuit într-un ambient memorabil. Oferim soluții complete, de la fairy lights la instalații LED profesionale.\n\nColaborăm cu designeri de evenimente pentru a crea scheme de iluminat personalizate, adaptate temei și culorilor evenimentului tău. Folosim echipamente profesionale de la producători de top, iar instalarea este realizată de electricieni autorizați.\n\nOferim atât iluminat ambiental (fairy lights, lumini calde, candelabre LED) cât și iluminat tehnic (spot-uri direcționale, lumini de accent pe mese și zone cheie). Pentru evenimente corporate, avem și soluții de iluminat pentru scenă și prezentări.",
    features: [
      "Fairy lights și string lights",
      "Spot-uri direcționale și de accent",
      "Lumini colorate RGB cu control wireless",
      "Candelabre LED și lampadare",
      "Instalații personalizate — logo luminos, perete luminos",
      "Iluminat pentru scenă și pupitru",
      "Lumini de jardină și ghirlande",
      "Sisteme de control — dimmere, programatoare",
    ],
    image:
      "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2340&auto=format&fit=crop",
    included: [
      "Instalare de electrician autorizat",
      "Cablare ascunsă — fără fire vizibile",
      "Test complet înainte de eveniment",
      "Asistență în timpul evenimentului",
      "Demontaj după eveniment",
    ],
    faqs: [
      {
        q: "Consumul de energie este inclus în preț?",
        a: "Nu, consumul de energie electrică este în sarcina organizatorului sau a locației. Noi estimăm consumul înainte de eveniment pentru a te asigura că locația are capacitatea necesară.",
      },
      {
        q: "Pot controla eu lumina în timpul evenimentului?",
        a: "Da, pentru majoritatea setup-urilor oferim control wireless prin telecomandă sau aplicație. Poți schimba culorile, intensitatea și scenele în timp real, fără să deranjezi instalarea.",
      },
    ],
    clientTypes: [
      "Cupluri care doresc o atmosferă romantică și elegantă la nuntă",
      "Companii care organizează gale și conferințe cu iluminat scenic profesionist",
      "Organizatori de evenimente private care vor un ambient personalizat",
      "Designeri de evenimente care externalizează instalarea și echipamentele",
    ],
    useCases: [
      "Nuntă în aer liber — fairy lights peste zona de dans, lumini calde pe mese, ghirlande în copaci",
      "Gala corporate — iluminat scenă, spot brand wall, lumini colorate pentru atmosferă",
      "Petrecere aniversară — lumini RGB cu control wireless, candelabre LED, spoturi de accent",
    ],
    trustStats: [
      { label: "Echipamente LED", value: "200+" },
      { label: "Instalări realizate", value: "300+" },
      { label: "Ani de experiență", value: "6+" },
      { label: "Electricieni autorizați", value: "3" },
    ],
  },
  "dj-sunet": {
    description:
      "DJ profesional și sisteme audio de înaltă calitate pentru evenimentul tău.",
    longDescription:
      "Muzica bună și sunetul clar sunt esențiale pentru orice eveniment reușit. Oferim atât sisteme audio pentru auto-operare cât și servicii complete de DJ cu experiență.\n\nEchipamentele noastre audio sunt de la producători renumiți — boxe active profesionale, mixere digitale, microfoane wireless și sisteme de monitorizare. Pentru evenimentele corporate, asigurăm și sonorizare pentru sală de conferință, cu microfoane de tip lavalieră și headset.\n\nDJ-ii noștri au experiență în nunți, evenimente corporate și petreceri private. Fiecare DJ pregătește un playlist personalizat în funcție de preferințele tale și de profilul invitaților, asigurând tranziții fluide între momentele evenimentului.",
    features: [
      "Sisteme audio profesionale — boxe active, subwoofer",
      "Mixer digital cu efecte",
      "Microfoane wireless — mână, lavalieră, headset",
      "DJ cu experiență — nunți, corporate, private",
      "Playlist personalizat în avans",
      "Iluminat de scenă sincronizat",
      "Sistem backup — echipament de rezervă",
      "Sonorizare sală conferință",
    ],
    image:
      "https://images.unsplash.com/photo-1665221965525-87fe35deabdd?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Soundcheck înainte de eveniment",
      "DJ profesionist pe toată durata",
      "Playlist personalizat — consultare prealabilă",
      "Echipament audio backup",
      "Microfoane pentru discursuri",
    ],
    faqs: [
      {
        q: "Pot alege muzica care se ascultă la eveniment?",
        a: "Da, înainte de eveniment facem o consultare detaliată despre preferințele muzicale. Trimiți o listă de melodii preferate și una de melodii de evitat, iar DJ-ul construiește playlistul în jurul acestor indicații.",
      },
      {
        q: "Ce se întâmplă dacă se strică echipamentul în timpul evenimentului?",
        a: "Avem echipament de rezervă la fiecare eveniment. În cazul unei defecțiuni, înlocuim componenta afectată în câteva minute. Tot personalul nostru tehnic este instruit pentru situații de urgență.",
      },
      {
        q: "Puteți sonoriza și spații mari precum săli de conferință sau grădini?",
        a: "Da, evaluăm acustica spațiului înainte și adaptăm configurația audio în consecință. Pentru spații mari sau exterioare, folosim boxe suplimentare și subwoofere pentru o acoperire uniformă.",
      },
    ],
    clientTypes: [
      "Cupluri care doresc muzică de calitate la nuntă și un DJ care întreține atmosfera",
      "Companii care organizează conferințe, gale sau petreceri corporate cu sonorizare profesională",
      "Organizatori de evenimente private care vor un sistem audio de calitate",
      "Persoane care au nevoie de microfoane și sonorizare pentru discursuri și prezentări",
    ],
    useCases: [
      "Nuntă cu 120 invitați — DJ + sistem audio premium, playlist personalizat, microfoane pentru discursuri",
      "Conferință corporate în București — sonorizare sală, microfoane lavalieră, sistem backup",
      "Petrecere aniversară în grădină — sistem audio outdoor, DJ, iluminat sincronizat",
    ],
    trustStats: [
      { label: "Evenimente sonorizate", value: "300+" },
      { label: "DJ în echipă", value: "4" },
      { label: "Microfoane disponibile", value: "12+" },
      { label: "Ani experiență", value: "6+" },
    ],
  },
  "cocktail-bar": {
    description:
      "Cocktail bar profesional pentru o experiență premium la evenimentul tău.",
    longDescription:
      "Un cocktail bar bine amenajat ridică nivelul oricărui eveniment. Barmanul nostru cu experiență pregătește cocktailuri clasice și signature, folosind ingrediente premium. Setup-ul elegant se integrează perfect în decorul evenimentului, devenind un punct de atracție pentru invitați.\n\nOferim atât bar mobil complet echipat (bar counter, refrigerare, accesorii) cât și serviciu de barman profesionist pentru toată durata evenimentului. Meniul se personalizează împreună cu tine — de la cocktailuri clasice precum Mojito și Pina Colada la creații originale signature, adaptate temei evenimentului.\n\nPentru evenimentele corporate, putem include și cocktailuri non-alcoolice premium, mocktailuri și blenduri fresh de sezon.",
    features: [
      "Bar counter profesional — design modern din lemn și metal",
      "Barman cu experiență — minimum 3 ani în domeniu",
      "Cocktailuri clasice — Mojito, Pina Colada, Whiskey Sour",
      "Cocktailuri signature — create special pentru eveniment",
      "Soft drinks, sucuri naturale și apă",
      "Mocktailuri non-alcoolice premium",
      "Pahare și accesorii de bar incluse",
      "Decorare bar — tema și culoarea evenimentului",
    ],
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Setup și decorare bar",
      "Barman pe toată durata evenimentului",
      "Pahare și accesorii de bar",
      "Demontaj și curățenie după eveniment",
      "Consultație prealabilă pentru meniu",
    ],
    faqs: [
      {
        q: "Cine asigură băuturile — eu sau voi?",
        a: "Noi asigurăm barmanul și toată logistica barului. Băuturile (alcool și non-alcool) pot fi asigurate de tine sau de noi — discutăm varianta cea mai convenabilă. Pentru pachetul Premium, băuturile de bază sunt incluse.",
      },
      {
        q: "Puteți face cocktailuri non-alcoolice?",
        a: "Da, avem o selecție de mocktailuri și blenduri fresh, perfecte pentru evenimente corporate sau pentru invitații care nu consumă alcool. Recomandăm să includem minim 2 opțiuni non-alcoolice în meniu.",
      },
      {
        q: "Cum alegem cocktailurile signature pentru eveniment?",
        a: "În consultarea prealabilă, discutăm despre tema și culorile evenimentului, preferințele tale și profilul invitaților. Pe baza acestor informații, barmanul nostru creează 2-3 rețete originale, pe care le testăm înainte de eveniment.",
      },
      {
        q: "Cât costă închirierea cocktail barului?",
        a: "Prețul este între 5 și 15 € de persoană, în funcție de locația evenimentului. Tariful acoperă doar închirierea cocktail barului — bar, echipament, barman și consultanța de meniu. Băuturile se calculează și se facturează separat, indiferent de pachetul ales (Silver, Gold sau Platinum).",
      },
      {
        q: "Care este diferența dintre pachetele Silver, Gold și Platinum?",
        a: "Silver cuprinde clasicele cerute la orice eveniment (Mojito, Margarita, Espresso Martini și altele), Gold adaugă rețete de bar de autor precum Paper Plane, Negroni sau Mai Tai, iar Platinum include meniul complet, cu preparate care cer tehnici și ingrediente premium — Smoked Old Fashioned, Ramos Gin Fizz sau Pălincă reinterpretată. Fiecare pachet vine cu propria listă de cocktailuri non-alcoolice.",
      },
    ],
    clientTypes: [
      "Cupluri care doresc un cocktail bar elegant la nunta lor",
      "Companii care organizează cocktailuri corporate și evenimente de networking",
      "Organizatori de petreceri private care vor un element special la eveniment",
      "Persoane care aniversează evenimente premium cu experiență gastronomică",
    ],
    useCases: [
      "Nuntă cu 100+ invitați — cocktail bar premium, 4 cocktailuri + mocktailuri, decorat în tema nunții",
      "Cocktail corporate în București — bar premium, 2 cocktailuri signature, mocktailuri, 80 invitați",
      "Aniversare privată — bar basic, 2 cocktailuri la alegere, barman 4 ore",
    ],
    trustStats: [
      { label: "Cocktailuri servite", value: "15.000+" },
      { label: "Barmani în echipă", value: "3" },
      { label: "Evenimente deservite", value: "150+" },
      { label: "Rețete signature create", value: "40+" },
    ],
    plans: [
      {
        name: "Silver",
        tagline: "Clasicele pe care le cere toată lumea",
        alcoholic: [
          "Pornstar Martini",
          "Margarita",
          "Espresso Martini",
          "Whiskey Sour",
          "Mojito",
          "Gin Basil Smash",
          "Cosmopolitan",
          "Sex on the Beach",
          "Hugo",
          "Aperol",
          "Gin Tonic",
          "Cuba Libre",
          "Daiquiri",
          "Limoncello Spritz",
        ],
        nonAlcoholic: [
          "Virgin Mojito",
          "Passion Fruit Lemonade",
          "Strawberry Basil Lemonade",
          "Peach Iced Tea",
          "Cucumber Cooler",
          "Hugo",
          "Gin Tonic N/A",
        ],
      },
      {
        name: "Gold",
        tagline: "Selecție extinsă, cu rețete de bar de autor",
        alcoholic: [
          "Paper Plane",
          "French 75",
          "Paloma",
          "Bramble",
          "Espresso Martini Salted Caramel",
          "Moscow Mule",
          "Blueberry Mule",
          "Gin Pear",
          "Negroni",
          "White Lady",
          "Army and Navy",
          "Mai Tai",
          "Flamingo",
          "Pina Colada",
          "Old Fashioned",
          "Devil's Margarita",
          "Spicy Paloma",
          "Strawberry Margarita",
        ],
        nonAlcoholic: [
          "Berry Basil Smash",
          "Mango Passion Spritz",
          "Pineapple Ginger Fizz",
          "Raspberry Lemon Collins",
          "Elderflower Apple Cooler",
          "Watermelon Mint Refresher",
        ],
      },
      {
        name: "Platinum",
        tagline: "Meniul complet, cu tehnici și ingrediente premium",
        alcoholic: [
          "Smoked Old Fashioned",
          "Clover Club",
          "Jungle Bird",
          "Lychee Martini",
          "Watermelon Sour Patch",
          "Dragon Colada",
          "Strawberry Negroni Sour",
          "Olivia",
          "Dragon Lady",
          "White Linen",
          "French 75 Cherry Blossom",
          "Blueberry Gin Sour",
          "Boulevardier",
          "New York Sour",
          "Blueberry Margarita",
          "El Diablo",
          "Clementine",
          "Pălincă reinterpretată",
          "Japanese Slipper",
          "Ramos Gin Fizz",
        ],
        nonAlcoholic: [
          "Yuzu Elderflower Fizz",
          "Blackberry Sage Cooler",
          "Lychee Rose Spritz",
          "Pear & Thyme Collins",
          "Grapefruit Rosemary Cooler",
          "Cucumber Matcha Fizz",
          "Pineapple Coconut Cooler",
          "Blueberry Lavender Lemonade",
        ],
      },
    ],
    plansNote:
      "Prețul pornește de la 5 € și ajunge la 15 € de persoană, în funcție de locația evenimentului. Tariful acoperă exclusiv închirierea cocktail barului (bar, echipament, barman și consultanță de meniu) — băuturile se achiziționează separat.",
  },
  "coffee-corner": {
    description:
      "Coffee corner cu barista și espressor profesional — cafea specialty servită la standard de cafenea.",
    longDescription:
      "Un coffee corner ține invitații treji și conversațiile pornite. Barista nostru prepară la comandă, în fața invitaților, cu espressor profesional și cafea specialty măcinată pe loc — nu termosuri și nu cafea la filtru lăsată să se răcească.\n\nMeniul acoperă tot ce se cere la un eveniment: espresso, americano, cappuccino, latte, flat white și cortado, plus variante cu gheață pentru evenimentele de vară. Avem lapte vegetal (ovăz, migdale, soia) pentru invitații cu intoleranțe, siropuri aromate, o selecție de ceaiuri și ciocolată caldă.\n\nStandul se pliază pe programul evenimentului — coffee break între sesiunile unei conferințe, colț de cafea după masa de prânz la o nuntă sau serviciu continuu la un open house. Setup-ul este compact, curat și se integrează în decor, iar la final lăsăm zona exact cum am găsit-o.",
    features: [
      "Espressor profesional cu două grupuri",
      "Barista cu experiență în specialty coffee",
      "Cafea proaspăt prăjită, măcinată pe loc",
      "Espresso, americano, cappuccino, latte, flat white, cortado",
      "Băuturi cu gheață — iced latte și cold brew",
      "Lapte vegetal — ovăz, migdale, soia",
      "Selecție de ceaiuri și ciocolată caldă",
      "Siropuri aromate — vanilie, caramel, alune",
    ],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Transport, montaj și demontaj",
      "Barista dedicat pe toată durata serviciului",
      "Consumabile — cafea, lapte, pahare, siropuri",
      "Consultanță pentru meniu și amplasarea standului",
      "Curățenia zonei după eveniment",
    ],
    faqs: [
      {
        q: "De ce aveți nevoie la locație pentru coffee corner?",
        a: "O priză de 220V pe un circuit care suportă espressorul, un spațiu de aproximativ 2×1 metri și acces la apă în apropiere. Dacă locația nu are apă la îndemână, venim cu rezervor propriu — spune-ne din timp ca să pregătim setup-ul potrivit.",
      },
      {
        q: "Aveți opțiuni pentru lapte vegetal?",
        a: "Da, avem lapte de ovăz, de migdale și de soia, incluse în serviciu fără cost suplimentar. Ovăzul este cel mai cerut, pentru că se comportă cel mai bine la spumare și merge perfect în cappuccino sau latte.",
      },
      {
        q: "Cât timp poate funcționa standul la un eveniment?",
        a: "Standard lucrăm în intervale de 3 până la 6 ore, dar ne adaptăm la programul evenimentului. Pentru conferințe configurăm serviciul pe pauzele de cafea, iar pentru nunți și petreceri private stabilim împreună intervalul în care are sens să fie deschis.",
      },
      {
        q: "Cât costă un coffee corner la eveniment?",
        a: "Prețul depinde de numărul de invitați, de durata serviciului și de locația evenimentului. Trimite-ne detaliile evenimentului și primești o ofertă personalizată în maximum 24 de ore lucrătoare, fără nicio obligație.",
      },
    ],
    clientTypes: [
      "Companii care organizează conferințe și au nevoie de coffee break-uri servite profesionist",
      "Cupluri care vor un colț de cafea pentru invitați, după masă sau spre finalul nunții",
      "Organizatori de petreceri private și brunch-uri care caută o alternativă la bar",
      "Echipe care organizează lansări de produs, open house-uri sau training-uri de o zi",
    ],
    useCases: [],
    trustStats: [],
  },
  "cabina-foto": {
    description:
      "Cabina foto interactivă cu imprimare instantă — amintiri de neuitat pentru toți invitații.",
    longDescription:
      "Cabina foto transformă orice eveniment într-o experiență interactivă și memorabilă. Invitații se pot fotografia cu props amuzante, iar pozele sunt imprimate instant și personalizate cu detaliile evenimentului tău. Un element de entertainment care mulțumește tuturor vârstelor.\n\nFolosim camere profesionale de înaltă rezoluție, iluminat studio integrat și imprimante foto profesionale cu timp de printare de 10-15 secunde. Template-ul este personalizat cu logo-ul, numele și data evenimentului — fiecare invitat pleacă acasă cu o amintire fizică.\n\nOferim și varianta digitală — pozele sunt încărcate automat într-o galerie online pe care o poți accesa și descărca după eveniment. Props-urile includ accesorii vesele și personalizate, de la pălării și mustăți la accesorii specifice temei evenimentului.",
    features: [
      "Cameră profesională de înaltă rezoluție",
      "Imprimare instantă — 10–15 secunde",
      "Template personalizat cu logo și data evenimentului",
      "Props și accesorii — pălării, mustăți, rame vesele",
      "Galerie online — poze încărcate automat",
      "Iluminat studio integrat — mereu perfect",
      "Fundal neutru sau personalizat",
      "Fotografii nelimitate pe toată durata",
    ],
    image:
      "https://images.unsplash.com/photo-1590446011295-f52a6ad8ad1b?q=80&w=1356&auto=format&fit=crop",
    included: [
      "Transport și instalare la locație",
      "Operator dedicat pe toată durata",
      "Consumabile — hârtie foto, cerneală",
      "Customizare template cu detaliile evenimentului",
      "Galerie online post-eveniment",
    ],
    faqs: [
      {
        q: "Câte poze se pot face într-o oră?",
        a: "În medie, 30-40 de sesiuni foto pe oră. Depinde de cât de mult se implică invitații. Pentru un eveniment de 4 ore cu 100 invitați, estimează 150-200 poze imprimate.",
      },
      {
        q: "Pot personaliza template-ul cu culorile evenimentului?",
        a: "Da, template-ul este complet personalizabil — logo, nume, dată, culori, fonturi. Trimitem o schiță înainte de eveniment pentru aprobare. Poți face oricâte modificări până ești mulțumit.",
      },
      {
        q: "Ce se întâmplă dacă se termină hârtia foto?",
        a: "Includem consumabile suficiente pentru evenimentul tău, calculând în funcție de numărul de invitați și durată. În cazul unui eveniment mai mare decât estimăm, avem rezervă de hârtie și cerneală pentru situații neprevăzute.",
      },
    ],
    clientTypes: [
      "Cupluri care doresc o activitate interactivă pentru invitați la nuntă",
      "Companii care organizează evenimente corporate și vor un element de branding",
      "Organizatori de petreceri private care caută divertisment pentru toate vârstele",
      "Persoane care aniversează evenimente și vor amintiri fizice pentru invitați",
    ],
    useCases: [
      "Nuntă cu 120 invitați — cabina foto premium, 5 ore, template cu numele mirilor, guest book",
      "Eveniment corporate — cabina foto cu logo companie, fundal branduit, galerie online",
      "Petrecere aniversară — cabina foto basic, 3 ore, props vesele, poze printate instant",
    ],
    trustStats: [
      { label: "Poze imprimate", value: "25.000+" },
      { label: "Evenimente deservite", value: "200+" },
      { label: "Satisfacție clienți", value: "96%" },
      { label: "Ani de experiență", value: "5+" },
    ],
  },
};
