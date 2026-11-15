/**
 * CIBERMISSIÓ: DETECTIUS DE LA XARXA
 * Tercer Cicle d'Educació Primària (5è i 6è)
 * 16 reptes curriculars per curs (2 preguntes per àrea)
 * Suport de síntesi de veu (Web Speech API)
 */

// --- LLISTA OFICIAL DE LES 8 ÀREES DEL CURRÍCULUM DE CATALUNYA ---
const OFFICIAL_AREAS = [
  { key: "medi", fullName: "Coneixement del Medi Natural, Social i Cultural", icon: "🌍", cssClass: "area-medi" },
  { key: "catala", fullName: "Llengua Catalana i Literatura", icon: "📚", cssClass: "area-catala" },
  { key: "castella", fullName: "Llengua Castellana i Literatura", icon: "📖", cssClass: "area-castella" },
  { key: "angles", fullName: "Llengua Estrangera (Anglès)", icon: "🌐", cssClass: "area-angles" },
  { key: "mates", fullName: "Matemàtiques", icon: "🔢", cssClass: "area-mates" },
  { key: "artistica", fullName: "Educació Artística (Plàstica i Música)", icon: "🎨", cssClass: "area-artistica" },
  { key: "ef", fullName: "Educació Física", icon: "🏃", cssClass: "area-ef" },
  { key: "valors", fullName: "Educació en Valors Cívics i Ètics", icon: "🤝", cssClass: "area-valors" }
];

// --- BANC DE 16 REPTES PER CURS (2 PREGUNTES PER ÀREA) ---
const CURRICULUM_DATA = {
  5: {
    gradeTitle: "5è de Primària (Nivell Cadet)",
    challenges: [
      // 1. MEDI NATURAL, SOCIAL I CULTURAL (2 preguntes)
      {
        id: "medi_1",
        areaKey: "medi",
        areaName: "Coneixement del Medi Natural, Social i Cultural",
        questionNumInArea: 1,
        icon: "🌍",
        areaClass: "area-medi",
        tag: "Geografia i Relleu de Catalunya",
        question: "Quin és el cim més alt de tot Catalunya i quina alçada té aproximadament en metres?",
        searchTip: "Obre una pestanya i cerca el punt més elevat del territori català, situat als Pirineus.",
        hint: "Paraules clau recomanades: <code>cim més alt de catalunya metres</code> o <code>sostre de catalunya pirineus</code>.",
        acceptedAnswers: ["pica d'estats", "pica destats", "la pica d'estats", "pica d estats", "3143"],
        curiosity: "Molt bé! La Pica d'Estats té exactament 3.143 metres d'altitud i està situada al Parc Natural de l'Alt Pirineu (al Pallars Sobirà), a la frontera amb França.",
        inputPlaceholder: "Ex: Pica d'Estats (o l'alçada)",
        lang: "ca"
      },
      {
        id: "medi_2",
        areaKey: "medi",
        areaName: "Coneixement del Medi Natural, Social i Cultural",
        questionNumInArea: 2,
        icon: "🌍",
        areaClass: "area-medi",
        tag: "Parcs Naturals i Ecosistemes",
        question: "Com s'anomena l'únic Parc Nacional que hi ha a Catalunya, famós pels seus més de 200 estanys d'alta muntanya i el pic dels Encantats?",
        searchTip: "Investiga els espais naturals protegits de Catalunya amb la màxima categoria de protecció ambiental (Parc Nacional).",
        hint: "Paraules clau recomanades: <code>únic parc nacional de catalunya estanys</code>.",
        acceptedAnswers: ["aiguestortes", "aigüestortes", "aiguestortes i estany de sant maurici", "aigüestortes i estany de sant maurici", "parc nacional d'aigüestortes"],
        curiosity: "Molt bona recerca! El Parc Nacional d'Aigüestortes i Estany de Sant Maurici va ser creat el 1955 i té paisatges d'origen glacial impressionants.",
        inputPlaceholder: "Ex: Aigüestortes i Estany de Sant Maurici",
        lang: "ca"
      },

      // 2. LLENGUA CATALANA I LITERATURA (2 preguntes)
      {
        id: "catala_1",
        areaKey: "catala",
        areaName: "Llengua Catalana i Literatura",
        questionNumInArea: 1,
        icon: "📚",
        areaClass: "area-catala",
        tag: "Novel·la Catalana Universal",
        question: "Quina gran escriptora catalana del segle XX és l'autora de la cèlebre novel·la 'La plaça del Diamant'?",
        searchTip: "Busca informació sobre l'autora d'aquesta obra ambientada al barri de Gràcia de Barcelona que té per protagonista la Colometa.",
        hint: "Paraules clau recomanades: <code>autora La plaça del Diamant</code> o <code>escriptora catalana Colometa</code>.",
        acceptedAnswers: ["merce rodoreda", "mercè rodoreda", "rodoreda"],
        curiosity: "Excel·lent! Mercè Rodoreda (1908-1983) és l'escriptora catalana més traduïda del món i un referent indiscutible de la nostra literatura.",
        inputPlaceholder: "Nom i cognom de l'escriptora",
        lang: "ca"
      },
      {
        id: "catala_2",
        areaKey: "catala",
        areaName: "Llengua Catalana i Literatura",
        questionNumInArea: 2,
        icon: "📚",
        areaClass: "area-catala",
        tag: "Teatre Català Clàssic",
        question: "Quin dramaturg català va escriure les cèlebres obres de teatre 'Terra Baixa' (amb el personatge d'en Manelic) i el musical 'Mar i Cel'?",
        searchTip: "Cerca el gran autor teatral de la Renaixença catalana que té un monument molt conegut a la plaça del Pi de Barcelona.",
        hint: "Paraules clau recomanades: <code>autor Terra Baixa Mar i Cel dramaturg català</code>.",
        acceptedAnswers: ["angel guimera", "àngel guimerà", "guimera", "guimerà"],
        curiosity: "Molt ben trobat! Àngel Guimerà (1845-1924) va ser un dels principals exponents de la Renaixença de les lletres catalanes i les seves obres continuen omplint teatres.",
        inputPlaceholder: "Nom i cognom del dramaturg",
        lang: "ca"
      },

      // 3. LLENGUA CASTELLANA I LITERATURA (2 preguntes)
      {
        id: "castella_1",
        areaKey: "castella",
        areaName: "Llengua Castellana i Literatura",
        questionNumInArea: 1,
        icon: "📖",
        areaClass: "area-castella",
        tag: "Clásicos Universales",
        question: "¿Qué famoso caballero andante creado por Miguel de Cervantes confundió molinos de viento con gigantes?",
        searchTip: "Investiga el personaje principal de la novela más universal de la literatura en castellano, acompañado de su escudero Sancho Panza.",
        hint: "Palabras clave recomendadas: <code>caballero molinos de viento gigantes cervantes</code>.",
        acceptedAnswers: ["don quijote", "don quijote de la mancha", "quijote", "el quijote", "alonso quijano"],
        curiosity: "¡Gran investigación! 'El ingenioso hidalgo Don Quijote de la Mancha' fue publicado en 1605 y es una de las obras cumbres de la literatura mundial.",
        inputPlaceholder: "Escribe el nombre del caballero",
        lang: "es"
      },
      {
        id: "castella_2",
        areaKey: "castella",
        areaName: "Llengua Castellana i Literatura",
        questionNumInArea: 2,
        icon: "📖",
        areaClass: "area-castella",
        tag: "Fábulas y Moralejas",
        question: "¿Qué escritor alavés del siglo XVIII es famoso por escribir fábulas en verso con moraleja como 'La cigarra y la hormiga' y 'La zorra y las uvas'?",
        searchTip: "Busca al principal fabulista de la literatura española de la Ilustración, autor de las célebres 'Fábulas morales'.",
        hint: "Palabras clave recomendadas: <code>autor fabulas cigarra hormiga fabulista español siglo XVIII</code>.",
        acceptedAnswers: ["felix maria samaniego", "félix maría de samaniego", "samaniego", "felix maria de samaniego"],
        curiosity: "¡Excelente! Félix María de Samaniego (1745-1801) compuso estas fábulas para instruir a los alumnos del Real Seminario Patriótico Vascongado.",
        inputPlaceholder: "Escribe el apellido del autor",
        lang: "es"
      },

      // 4. LLENGUA ESTRANGERA (ANGLÈS) (2 preguntes)
      {
        id: "angles_1",
        areaKey: "angles",
        areaName: "Llengua Estrangera (Anglès)",
        questionNumInArea: 1,
        icon: "🌐",
        areaClass: "area-angles",
        tag: "World Capitals in English",
        question: "Which city is the capital of Australia? (Warning: it is NOT Sydney and it is NOT Melbourne!)",
        searchTip: "Search for the official political capital city of Australia.",
        hint: "Search query recommendation: <code>capital city of Australia</code>.",
        acceptedAnswers: ["canberra"],
        curiosity: "Great job! Canberra was selected as the capital city of Australia in 1908 as a compromise between the two biggest rival cities, Sydney and Melbourne.",
        inputPlaceholder: "Type the capital city",
        lang: "en"
      },
      {
        id: "angles_2",
        areaKey: "angles",
        areaName: "Llengua Estrangera (Anglès)",
        questionNumInArea: 2,
        icon: "🌐",
        areaClass: "area-angles",
        tag: "Animals & Nature in English",
        question: "What is the largest living mammal and animal on Planet Earth? (Write its name in English)",
        searchTip: "Search for the largest marine animal in the world, which can weigh up to 200 tonnes.",
        hint: "Keywords in English: <code>largest mammal animal on earth ocean</code>.",
        acceptedAnswers: ["blue whale", "the blue whale", "whale"],
        curiosity: "Awesome! The Blue Whale (Balaenoptera musculus) can reach up to 30 metres in length and its tongue alone can weigh as much as an elephant!",
        inputPlaceholder: "Type the animal name in English",
        lang: "en"
      },

      // 5. MATEMÀTIQUES (2 preguntes)
      {
        id: "mates_1",
        areaKey: "mates",
        areaName: "Matemàtiques",
        questionNumInArea: 1,
        icon: "🔢",
        areaClass: "area-mates",
        tag: "Mesures i Arquitectura",
        question: "Quants metres d'alçada fa exactament la coneguda Torre Glòries de Barcelona (antiga Torre Agbar)?",
        searchTip: "Cerca la fitxa tècnica i l'alçada exacta en metres d'aquest gratacel dissenyat per Jean Nouvel.",
        hint: "Paraules clau recomanades: <code>Torre Glòries alçada metres Barcelona</code>.",
        acceptedAnswers: ["144", "144 metres", "144m", "144 m"],
        curiosity: "Molt exacte! Fa 144 metres d'alçada i té 38 plantes. A la nit s'il·lumina amb milers de llums LED de colors.",
        inputPlaceholder: "Ex: 144 (la xifra en metres)",
        lang: "ca"
      },
      {
        id: "mates_2",
        areaKey: "mates",
        areaName: "Matemàtiques",
        questionNumInArea: 2,
        icon: "🔢",
        areaClass: "area-mates",
        tag: "Geometria i Angles",
        question: "Quants graus sumen SEMPRE els tres angles interiors de qualsevol triangle pla en geometria euclidiana?",
        searchTip: "Investiga la propietat fonamental de la suma dels angles interns d'un triangle.",
        hint: "Paraules clau recomanades: <code>suma dels angles interiors d'un triangle graus</code>.",
        acceptedAnswers: ["180", "180 graus", "180°", "cent vuitanta"],
        curiosity: "Perfecte! La suma dels tres angles de qualsevol triangle sempre és igual a 180 graus (equivalent a un angle pla), una propietat geomètrica universal.",
        inputPlaceholder: "Ex: 180 (només la xifra)",
        lang: "ca"
      },

      // 6. EDUCACIÓ ARTÍSTICA (PLÀSTICA I MÚSICA) (2 preguntes)
      {
        id: "artistica_1",
        areaKey: "artistica",
        areaName: "Educació Artística (Plàstica i Música)",
        questionNumInArea: 1,
        icon: "🎨",
        areaClass: "area-artistica",
        tag: "Pintura i Surrealisme",
        question: "Quin genial pintor surrealista empordanès té el seu famós Teatre-Museu a la ciutat de Figueres, coronat per ous gegants a la façana?",
        searchTip: "Investiga els grans artistes surrealistes catalans del segle XX i el museu de Figueres.",
        hint: "Paraules clau recomanades: <code>pintor surrealista català museu ous Figueres</code>.",
        acceptedAnswers: ["salvador dali", "salvador dalí", "dali", "dalí"],
        curiosity: "Magnífic! Salvador Dalí va néixer a Figueres i va convertir l'antic teatre municipal en un museu surrealista ple d'enginy i escultures sorprenents.",
        inputPlaceholder: "Nom i cognom del pintor",
        lang: "ca"
      },
      {
        id: "artistica_2",
        areaKey: "artistica",
        areaName: "Educació Artística (Plàstica i Música)",
        questionNumInArea: 2,
        icon: "🎨",
        areaClass: "area-artistica",
        tag: "Instruments Tradicionals Catalans",
        question: "Com s'anomena l'instrument tradicional de vent-fusta de doble canya que és el solista principal de la cobla en la dansa de la sardana?",
        searchTip: "Investiga els instruments autòctons catalans que formen la cobla (tenora, tible, flabiol...).",
        hint: "Paraules clau recomanades: <code>instrument principal vent fusta cobla sardana</code>.",
        acceptedAnswers: ["tenora", "la tenora"],
        curiosity: "Molt ben investigat! La tenora és considerada un dels instruments més expressius de la música tradicional catalana, perfeccionada al segle XIX per Pep Ventura.",
        inputPlaceholder: "Ex: Tenora",
        lang: "ca"
      },

      // 7. EDUCACIÓ FÍSICA (2 preguntes)
      {
        id: "ef_1",
        areaKey: "ef",
        areaName: "Educació Física",
        questionNumInArea: 1,
        icon: "🏃",
        areaClass: "area-ef",
        tag: "Història de l'Esport",
        question: "En quin any es van celebrar els Jocs Olímpics a Barcelona, que van comptar amb la cèlebre mascota del gosset 'Cobi' dissenyada per Xavier Mariscal?",
        searchTip: "Cerca la data de la gran cita olímpica celebrada a la ciutat de Barcelona.",
        hint: "Paraules clau recomanades: <code>Jocs Olímpics de Barcelona any Cobi</code>.",
        acceptedAnswers: ["1992", "l'any 1992", "any 1992", "92"],
        curiosity: "Molt bona cerca! Els Jocs Olímpics de Barcelona 1992 van transformar la ciutat obrint-la al mar i van ser considerats els millors de la història.",
        inputPlaceholder: "Ex: 1992 (l'any de 4 xifres)",
        lang: "ca"
      },
      {
        id: "ef_2",
        areaKey: "ef",
        areaName: "Educació Física",
        questionNumInArea: 2,
        icon: "🏃",
        areaClass: "area-ef",
        tag: "Reglament d'Esports d'Equip",
        question: "Quants jugadors o jugadores per equip hi ha a la pista al mateix temps durant un partit oficial d'handbol (incloent-hi el porter/a)?",
        searchTip: "Cerca el reglament oficial bàsic de la federació d'handbol sobre el nombre de jugadors a pista.",
        hint: "Paraules clau recomanades: <code>quants jugadors pista equip handbol reglament</code>.",
        acceptedAnswers: ["7", "7 jugadors", "set"],
        curiosity: "Exacte! Un equip d'handbol juga a la pista amb 7 components: 6 jugadors de camp i 1 porter/a, a més dels reserves a la banqueta.",
        inputPlaceholder: "Escriu el nombre de jugadors",
        lang: "ca"
      },

      // 8. EDUCACIÓ EN VALORS CÍVICS I ÈTICS (2 preguntes)
      {
        id: "valors_1",
        areaKey: "valors",
        areaName: "Educació en Valors Cívics i Ètics",
        questionNumInArea: 1,
        icon: "🤝",
        areaClass: "area-valors",
        tag: "Drets Humans i Infància",
        question: "En quin dia i mes se celebra a escala internacional el 'Dia Universal dels Drets dels Infants' promogut per l'ONU?",
        searchTip: "Cerca la data commemorativa de l'aprovació de la Convenció sobre els Drets de l'Infant.",
        hint: "Paraules clau recomanades: <code>Dia Universal dels Drets dels Infants data dia mes</code>.",
        acceptedAnswers: ["20 de novembre", "20 novembre", "20-11", "20/11"],
        curiosity: "Totalment cert! El 20 de novembre es commemora la Convenció dels Drets de l'Infant de 1989, garantint el dret a la salut, educació, protecció i expressió de tots els nens i nenes.",
        inputPlaceholder: "Ex: 20 de novembre",
        lang: "ca"
      },
      {
        id: "valors_2",
        areaKey: "valors",
        areaName: "Educació en Valors Cívics i Ètics",
        questionNumInArea: 2,
        icon: "🤝",
        areaClass: "area-valors",
        tag: "Pau i Justícia Social",
        question: "Quin líder sud-africà va rebre el Premi Nobel de la Pau el 1993 per la seva lluita incansable contra el racisme i el règim de l'apartheid?",
        searchTip: "Investiga el primer president negre de Sud-àfrica després de passar 27 anys a la presó.",
        hint: "Paraules clau recomanades: <code>Premi Nobel de la Pau Sud-àfrica apartheid president</code>.",
        acceptedAnswers: ["nelson mandela", "mandela"],
        curiosity: "Extraordinari! Nelson Mandela (1918-2013) és un símbol mundial de reconciliació, perdó i lluita pacífica pels drets humans.",
        inputPlaceholder: "Nom i cognom del líder",
        lang: "ca"
      }
    ],
    finalMystery: {
      question: "Per aconseguir el teu diploma oficial de 5è, desxifra l'enigma final: Com s'anomena la immensa xarxa informàtica mundial interconnectada que estàs utilitzant ara mateix per cercar tota aquesta informació?",
      hint: "Paraules clau: <code>xarxa informàtica mundial internet arpanet</code>.",
      acceptedAnswers: ["internet", "la xarxa", "la xarxa internet", "web"],
      curiosity: "FELICITATS! Internet connecta milers de milions de persones a tot el món i és la biblioteca d'informació més gran de la humanitat!"
    }
  },

  6: {
    gradeTitle: "6è de Primària (Nivell Expert)",
    challenges: [
      // 1. MEDI NATURAL, SOCIAL I CULTURAL (2 preguntes)
      {
        id: "medi_1",
        areaKey: "medi",
        areaName: "Coneixement del Medi Natural, Social i Cultural",
        questionNumInArea: 1,
        icon: "🌍",
        areaClass: "area-medi",
        tag: "Hidrografia de Catalunya",
        question: "Quin és el riu més llarg que neix i desemboca ÍNTEGRAMENT a Catalunya, amb més de 200 km des d'Ulldeter fins a la Mediterrània?",
        searchTip: "Alerta: No val l'Ebre perquè neix a Cantàbria! Busca el riu català complet més llarg.",
        hint: "Paraules clau recomanades: <code>riu més llarg neix i desemboca a Catalunya Ulldeter</code>.",
        acceptedAnswers: ["ter", "el ter", "riu ter", "el riu ter"],
        curiosity: "Excel·lent deducció! El riu Ter fa 208 km de recorregut, neix a Ulldeter (Setcases, Ripollès) a 2.400 m d'alçada i desemboca a l'Estartit (Baix Empordà).",
        inputPlaceholder: "Escriu el nom del riu",
        lang: "ca"
      },
      {
        id: "medi_2",
        areaKey: "medi",
        areaName: "Coneixement del Medi Natural, Social i Cultural",
        questionNumInArea: 2,
        icon: "🌍",
        areaClass: "area-medi",
        tag: "Geologia i Vulcanisme",
        question: "Com s'anomena el con volcànic més jove de la península Ibèrica, situat al Parc Natural de la Zona Volcànica de la Garrotxa, que té un gran tall visible?",
        searchTip: "Investiga els volcans de Santa Pau i Olot a la Garrotxa (croscat, santa margarida...).",
        hint: "Paraules clau recomanades: <code>volca mes jove peninsula iberica garrotxa croscat</code>.",
        acceptedAnswers: ["croscat", "el croscat", "volca croscat", "volcà croscat"],
        curiosity: "Brillant! El volcà Croscat va tenir la seva última erupció fa uns 11.000 anys. El seu con té 160 metres d'alçada i el tall o gredaire permet veure'n l'estructura interna.",
        inputPlaceholder: "Nom del volcà",
        lang: "ca"
      },

      // 2. LLENGUA CATALANA I LITERATURA (2 preguntes)
      {
        id: "catala_1",
        areaKey: "catala",
        areaName: "Llengua Catalana i Literatura",
        questionNumInArea: 1,
        icon: "📚",
        areaClass: "area-catala",
        tag: "Normativització Lingüística",
        question: "Com s'anomena el prestigiós lingüista barceloní que va publicar les 'Normes ortogràfiques' l'any 1913 i va codificar la llengua catalana moderna?",
        searchTip: "Busca qui va dirigir la creació del 'Diccionari General de la Llengua Catalana'.",
        hint: "Paraules clau recomanades: <code>normes ortogràfiques 1913 lingüista català diccionari</code>.",
        acceptedAnswers: ["pompeu fabra", "fabra", "pompeu fabra i poch"],
        curiosity: "Extraordinari! Pompeu Fabra (1868-1948) és recordat com el 'seny ordenador de la llengua catalana' i la seva obra va permetre la recuperació del català com a llengua de cultura.",
        inputPlaceholder: "Nom i cognom del lingüista",
        lang: "ca"
      },
      {
        id: "catala_2",
        areaKey: "catala",
        areaName: "Llengua Catalana i Literatura",
        questionNumInArea: 2,
        icon: "📚",
        areaClass: "area-catala",
        tag: "Poesia Épica Catalana",
        question: "Quin gran poeta de Folgueroles (Osona), sacerdot i autor dels grans poemes èpics 'L'Atlàntida' i 'Canigó', és una de les màximes figures de la Renaixença?",
        searchTip: "Investiga el poeta romàntic català que va escriure cançons populars com 'El noi de la mare' o l'oda 'A Barcelona'.",
        hint: "Paraules clau recomanades: <code>autor Canigó L'Atlàntida poeta Folgueroles</code>.",
        acceptedAnswers: ["jacint verdaguer", "verdaguer", "mossèn cinto verdaguer", "jacint verdaguer i santalo"],
        curiosity: "Molt exacte! Jacint Verdaguer (1845-1902), conegut popularment com a 'Mossèn Cinto', va donar una dimensió universal a la poesia en llengua catalana.",
        inputPlaceholder: "Nom i cognom del poeta",
        lang: "ca"
      },

      // 3. LLENGUA CASTELLANA I LITERATURA (2 preguntes)
      {
        id: "castella_1",
        areaKey: "castella",
        areaName: "Llengua Castellana i Literatura",
        questionNumInArea: 1,
        icon: "📖",
        areaClass: "area-castella",
        tag: "Generación del 27",
        question: "¿Qué célebre poeta y dramaturgo andaluz de la Generación del 27 escribió la obra teatral 'La casa de Bernarda Alba' y el poemario 'Romancero Gitano'?",
        searchTip: "Busca al ilustre escritor granadino que fue gran amigo del pintor Salvador Dalí.",
        hint: "Palabras clave recomendadas: <code>autor La casa de Bernarda Alba Romancero Gitano poeta</code>.",
        acceptedAnswers: ["federico garcia lorca", "federico garcía lorca", "garcia lorca", "garcía lorca", "lorca"],
        curiosity: "¡Magnífica respuesta! Federico García Lorca (1898-1936) es una de las voces poéticas y teatrales más aclamadas de la literatura universal en español.",
        inputPlaceholder: "Nombre y apellidos del autor",
        lang: "es"
      },
      {
        id: "castella_2",
        areaKey: "castella",
        areaName: "Llengua Castellana i Literatura",
        questionNumInArea: 2,
        icon: "📖",
        areaClass: "area-castella",
        tag: "Lírica y Poesía en Prosa",
        question: "¿Qué famoso libro poético en prosa escrito por el Premio Nobel Juan Ramón Jiménez narra las vivencias del poeta con un burrito llamado Platero?",
        searchTip: "Investiga el título de la obra que comienza con la célebre frase: 'Platero es pequeño, peludo, suave; tan blando por fuera...'.",
        hint: "Palabras clave recomendadas: <code>obra juan ramon jimenez burrito suave peludo</code>.",
        acceptedAnswers: ["platero y yo", "platero"],
        curiosity: "¡Gran lectura! 'Platero y yo', publicado en 1914, recrea poéticamente la vida del pueblo andaluz de Moguer a través de la amistad con el tierno burrito.",
        inputPlaceholder: "Título del libro",
        lang: "es"
      },

      // 4. LLENGUA ESTRANGERA (ANGLÈS) (2 preguntes)
      {
        id: "angles_1",
        areaKey: "angles",
        areaName: "Llengua Estrangera (Anglès)",
        questionNumInArea: 1,
        icon: "🌐",
        areaClass: "area-angles",
        tag: "British Prehistory & Heritage",
        question: "What is the name of the famous prehistoric megalithic monument consisting of a ring of standing stones in Wiltshire, England?",
        searchTip: "Investigate ancient monuments in the United Kingdom built thousands of years ago.",
        hint: "Keywords in English: <code>prehistoric stone circle monument Wiltshire England</code>.",
        acceptedAnswers: ["stonehenge"],
        curiosity: "Well done! Stonehenge is a UNESCO World Heritage site aligned with the sunrise on the summer solstice and sunset on the winter solstice.",
        inputPlaceholder: "Write the name of the monument",
        lang: "en"
      },
      {
        id: "angles_2",
        areaKey: "angles",
        areaName: "Llengua Estrangera (Anglès)",
        questionNumInArea: 2,
        icon: "🌐",
        areaClass: "area-angles",
        tag: "Solar System in English",
        question: "Which planet in our solar system is known as the 'Red Planet' due to the iron oxide on its surface? (Write its name in English)",
        searchTip: "Search for the fourth planet from the Sun in our Solar System.",
        hint: "Keywords in English: <code>fourth planet solar system known as red planet</code>.",
        acceptedAnswers: ["mars"],
        curiosity: "Great job! Mars is named after the Roman god of war and is home to Olympus Mons, the largest volcano in the entire solar system!",
        inputPlaceholder: "Type the planet name in English",
        lang: "en"
      },

      // 5. MATEMÀTIQUES (2 preguntes)
      {
        id: "mates_1",
        areaKey: "mates",
        areaName: "Matemàtiques",
        questionNumInArea: 1,
        icon: "🔢",
        areaClass: "area-mates",
        tag: "Geometria i Teoremes",
        question: "Quin filòsof i matemàtic de l'antiga Grècia dóna nom al teorema que demostra que en un triangle rectangle: a² + b² = c² (la hipotenusa al quadrat)?",
        searchTip: "Investiga els teoremes bàsics de la geometria clàssica sobre triangles rectangles.",
        hint: "Paraules clau recomanades: <code>teorema hipotenusa catets triangle rectangle matemàtic</code>.",
        acceptedAnswers: ["pitagores", "pitàgores", "pitagoras", "pitágoras", "pitàgores de samos"],
        curiosity: "Molt exacte! Pitàgores de Samos (segle VI aC) va fundar l'escola pitagòrica i el seu teorema és un pilar indispensable del càlcul i la trigonometria.",
        inputPlaceholder: "Nom del matemàtic grec",
        lang: "ca"
      },
      {
        id: "mates_2",
        areaKey: "mates",
        areaName: "Matemàtiques",
        questionNumInArea: 2,
        icon: "🔢",
        areaClass: "area-mates",
        tag: "Nombres Irracionals i el Nombre Pi",
        question: "El nombre Pi (π) expressa la relació entre el perímetre d'una circumferència i el seu diàmetre. Quins són els seus primers QUATRE decimals després de la coma?",
        searchTip: "Cerca el valor del nombre Pi amb almenys 4 xifres decimals (3,...). Escriu només els 4 dígits decimals.",
        hint: "Paraules clau recomanades: <code>decimals del nombre pi 4 xifres</code>.",
        acceptedAnswers: ["1415", "1416", "3,1415", "3.1415", "3,1416", "3.1416"],
        curiosity: "Molt precís! El nombre Pi és infinit i irracional: 3,14159265... i és essencial per calcular l'àrea i perímetre de cercles i esferes.",
        inputPlaceholder: "Ex: 1415 (els 4 decimals)",
        lang: "ca"
      },

      // 6. EDUCACIÓ ARTÍSTICA (PLÀSTICA I MÚSICA) (2 preguntes)
      {
        id: "artistica_1",
        areaKey: "artistica",
        areaName: "Educació Artística (Plàstica i Música)",
        questionNumInArea: 1,
        icon: "🎨",
        areaClass: "area-artistica",
        tag: "Música i Pau Universal",
        question: "Quin cèlebre violoncel·lista català va pronunciar el discurs 'I am a Catalan' i va interpretar 'El cant dels ocells' davant l'ONU el 1971?",
        searchTip: "Investiga sobre el músic nascut al Vendrell reconegut com un dels millors violoncel·listes de tots els temps.",
        hint: "Paraules clau recomanades: <code>violoncelista català El cant dels ocells ONU 1971 Pau</code>.",
        acceptedAnswers: ["pau casals", "pau casals i defilló", "casals"],
        curiosity: "Impressionant! Pau Casals (1876-1973) va rebre la Medalla de la Pau de les Nacions Unides pel seu compromís ferm amb la llibertat i la convivència pacífica.",
        inputPlaceholder: "Nom i cognom del músic",
        lang: "ca"
      },
      {
        id: "artistica_2",
        areaKey: "artistica",
        areaName: "Educació Artística (Plàstica i Música)",
        questionNumInArea: 2,
        icon: "🎨",
        areaClass: "area-artistica",
        tag: "Arquitectura i Modernisme",
        question: "Quin genial arquitecte català, màxim exponent del Modernisme, va dissenyar el temple de la Sagrada Família, la Casa Batlló i el Park Güell?",
        searchTip: "Investiga l'arquitecte de Reus cèlebre per les seves formes ondulades i inspirades en la natura.",
        hint: "Paraules clau recomanades: <code>arquitecte Sagrada Familia Park Güell modernisme</code>.",
        acceptedAnswers: ["antoni gaudi", "antoni gaudí", "gaudi", "gaudí", "antoni gaudí i cornet"],
        curiosity: "Fabulós! Antoni Gaudí (1852-1926) va revolucionar l'arquitectura mundial i set de les seves obres són Patrimoni de la Humanitat per la UNESCO.",
        inputPlaceholder: "Nom i cognom de l'arquitecte",
        lang: "ca"
      },

      // 7. EDUCACIÓ FÍSICA (2 preguntes)
      {
        id: "ef_1",
        areaKey: "ef",
        areaName: "Educació Física",
        questionNumInArea: 1,
        icon: "🏃",
        areaClass: "area-ef",
        tag: "Atletisme i Tradicions Populars",
        question: "Com s'anomena la tradicional cursa popular d'atletisme de 10 km que se celebra cada 31 de desembre a Barcelona per acomiadar l'any?",
        searchTip: "Investiga el personatge llegendari català que té 'tant de nassos com dies té l'any'.",
        hint: "Paraules clau recomanades: <code>cursa atletisme Barcelona 31 desembre nassos</code>.",
        acceptedAnswers: ["cursa dels nassos", "la cursa dels nassos", "els nassos"],
        curiosity: "Molt ben trobat! La Cursa dels Nassos s'inspira en la tradició de l'Home dels Nassos i aplega milers de corredors disfressats i esportistes d'elit.",
        inputPlaceholder: "Nom de la cursa",
        lang: "ca"
      },
      {
        id: "ef_2",
        areaKey: "ef",
        areaName: "Educació Física",
        questionNumInArea: 2,
        icon: "🏃",
        areaClass: "area-ef",
        tag: "Competicions d'Atletisme",
        question: "Quants quilòmetres i metres exactes té la distància oficial d'una cursa de Marató d'atletisme? (Escriu la xifra amb coma, ex: 42,195 km)",
        searchTip: "Cerca la distància oficial de la marató olímpica fixada des dels Jocs de Londres 1908.",
        hint: "Paraules clau recomanades: <code>distància exacta oficial marato metres quilometres</code>.",
        acceptedAnswers: ["42,195", "42.195", "42,195 km", "42.195 km", "42 km i 195 m", "42195"],
        curiosity: "Totalment exacte! La marató fa exactament 42 quilòmetres i 195 metres (26 milles i 385 iardes), distància que separa el Castell de Windsor de l'estadi White City a Londres.",
        inputPlaceholder: "Ex: 42,195 km",
        lang: "ca"
      },

      // 8. EDUCACIÓ EN VALORS CÍVICS I ÈTICS (2 preguntes)
      {
        id: "valors_1",
        areaKey: "valors",
        areaName: "Educació en Valors Cívics i Ètics",
        questionNumInArea: 1,
        icon: "🤝",
        areaClass: "area-valors",
        tag: "Sostenibilitat Global",
        question: "Quants Objectius de Desenvolupament Sostenible (ODS) va fixar l'Organització de les Nacions Unides (ONU) en l'Agenda 2030?",
        searchTip: "Cerca la xifra total d'objectius per acabar amb la pobresa i combatre el canvi climàtic.",
        hint: "Paraules clau recomanades: <code>quants objectius desenvolupament sostenible ODS Agenda 2030</code>.",
        acceptedAnswers: ["17", "disset", "17 ods"],
        curiosity: "Bona recerca! Són exactament 17 ODS amb 169 fites destinades a protegir les persones, el medi ambient i la prosperitat del planeta.",
        inputPlaceholder: "Ex: 17 (escriu la xifra)",
        lang: "ca"
      },
      {
        id: "valors_2",
        areaKey: "valors",
        areaName: "Educació en Valors Cívics i Ètics",
        questionNumInArea: 2,
        icon: "🤝",
        areaClass: "area-valors",
        tag: "Dret a l'Educació i Igualtat",
        question: "Quina jove activista pakistanesa va guanyar el Premi Nobel de la Pau amb només 17 anys per defensar el dret universal de totes les nenes a anar a l'escola?",
        searchTip: "Cerca la persona més jove de la història a rebre un Premi Nobel de la Pau (2014).",
        hint: "Paraules clau recomanades: <code>activista pakistanesa nenes escola Premi Nobel de la Pau 17 anys</code>.",
        acceptedAnswers: ["malala", "malala yousafzai", "yousafzai"],
        curiosity: "Inspirador! Malala Yousafzai és un referent mundial de valentia. Com ella va dir: 'Un nen, un mestre, un llibre i un llapis poden canviar el món'.",
        inputPlaceholder: "Nom de l'activista",
        lang: "ca"
      }
    ],
    finalMystery: {
      question: "Resol l'enigma final de 6è: Com s'anomenava la matemàtica britànica considerada la primera programadora d'ordinadors de la història pel seu treball sobre la màquina de Babbage?",
      hint: "Paraules clau recomanades: <code>primera programadora informatica historia filla lord byron</code>.",
      acceptedAnswers: ["ada lovelace", "ada byron", "lovelace", "augusta ada king"],
      curiosity: "FELICITATS ABSOLUTES! Ada Lovelace (1815-1852) va comprendre que els ordinadors podien fer molt més que mers càlculs numèrics. Ets un autèntic Mestre/a de la Recerca!"
    }
  }
};

// --- ESTAT GLOBAL DE L'APLICACIÓ ---
const state = {
  currentGrade: 5,
  soundEnabled: true,
  agentName: "Agent Investigador/a",
  completedByGrade: {
    5: {},
    6: {}
  },
  finalMysterySolved: {
    5: false,
    6: false
  }
};

// --- MÒDUL DE SÍNTESI DE VEU (WEB SPEECH API) ---
class VoiceNarrator {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.isSpeaking = false;
    this.voices = [];
    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.updateGlobalVoiceBtn(false);
    }
  }

  getVoiceForLang(langCode) {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }

    if (langCode === "ca") {
      // Cerca català
      const caVoice = this.voices.find(v => v.lang.startsWith("ca") || v.lang.includes("Catalan") || v.lang.includes("Valencian"));
      if (caVoice) return caVoice;
      // Fallback a espanyol
      const esVoice = this.voices.find(v => v.lang.startsWith("es"));
      if (esVoice) return esVoice;
    } else if (langCode === "es") {
      const esVoice = this.voices.find(v => v.lang.startsWith("es"));
      if (esVoice) return esVoice;
    } else if (langCode === "en") {
      const enVoice = this.voices.find(v => v.lang.startsWith("en"));
      if (enVoice) return enVoice;
    }

    return this.voices[0] || null;
  }

  speakText(text, lang = "ca", onComplete = null) {
    if (!this.synth) {
      alert("El teu navegador no disposa de suport de síntesi de veu.");
      return;
    }

    this.stop(); // atura lectures anteriors

    const cleanText = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    const voice = this.getVoiceForLang(lang);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === "ca" ? "ca-ES" : (lang === "es" ? "es-ES" : "en-GB");
    }

    utterance.rate = 0.95; // ritme còmode per a primària
    utterance.pitch = 1.05;

    this.isSpeaking = true;
    this.updateGlobalVoiceBtn(true);

    utterance.onend = () => {
      this.isSpeaking = false;
      this.updateGlobalVoiceBtn(false);
      if (onComplete) onComplete();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.updateGlobalVoiceBtn(false);
    };

    this.synth.speak(utterance);
  }

  updateGlobalVoiceBtn(isSpeaking) {
    const btn = document.getElementById("btn-read-page");
    const label = document.getElementById("read-page-text");
    if (!btn || !label) return;

    if (isSpeaking) {
      btn.classList.add("speaking");
      label.textContent = "Atura la veu ⏹️";
    } else {
      btn.classList.remove("speaking");
      label.textContent = "Escolta la missió";
    }
  }

  toggleFullPageSpeech() {
    if (this.isSpeaking) {
      this.stop();
      return;
    }

    const data = CURRICULUM_DATA[state.currentGrade];
    const speechIntro = `Benvinguts a Cibermissió Detectius de la Xarxa. Curs: ${data.gradeTitle}. Hi ha 16 reptes d'investigació a internet, amb dues preguntes per a cadascuna de les 8 àrees oficials del currículum de Catalunya. Pots escoltar cada repte fent clic al botó d'escolta de cada fitxa. Bona investigació!`;

    this.speakText(speechIntro, "ca");
  }
}

const narrator = new VoiceNarrator();

// --- EFECTES DE SO (WEB AUDIO API PURA) ---
class SoundManager {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    // Melodia d'èxit alegre (Do -> Mi -> Sol -> Do)
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.1);
    osc.frequency.setValueAtTime(783.99, now + 0.2);
    osc.frequency.setValueAtTime(1046.50, now + 0.3);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc.start(now);
    osc.stop(now + 0.55);
  }

  playError() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.frequency.setValueAtTime(280, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.25);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playFanfare() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 880, 1046.50];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + (idx * 0.12);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.35);
    });
  }
}

const sounds = new SoundManager();

// --- ANIMACIÓ DE CONFETTI ---
class ConfettiManager {
  constructor() {
    this.canvas = document.getElementById("confetti-canvas");
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(durationMs = 3500) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    this.particles = [];
    const colors = ["#f59e0b", "#3b82f6", "#10b981", "#ec4899", "#8b5cf6", "#ef4444", "#facc15"];

    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: -20 - Math.random() * 50,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        velX: (Math.random() - 0.5) * 4,
        velY: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    const startTime = performance.now();
    const animate = (time) => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        p.x += p.velX;
        p.y += p.velY;
        p.rot += p.rotSpeed;

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      });

      if (time - startTime < durationMs) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    };

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.animationId = requestAnimationFrame(animate);
  }
}

const confetti = new ConfettiManager();

// --- VALIDACIÓ FLEXIBLE DE RESPOSTES ---
function normalizeString(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // treu accents
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"«»]/g, " ") // treu puntuació
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswerMatches(userAnswer, acceptedList) {
  const normUser = normalizeString(userAnswer);
  if (!normUser) return false;

  return acceptedList.some(acc => {
    const normAcc = normalizeString(acc);
    if (normUser === normAcc) return true;
    if (normUser.includes(normAcc) && normAcc.length >= 3) return true;
    return false;
  });
}

// --- RENDERITZACIÓ DE LES FITXES A TOTA L'AMPLADA (STACK) ---
function renderChallenges() {
  const container = document.getElementById("challenges-grid");
  const data = CURRICULUM_DATA[state.currentGrade];
  if (!container || !data) return;

  container.innerHTML = "";

  data.challenges.forEach((item, index) => {
    const isCompleted = !!state.completedByGrade[state.currentGrade][item.id];

    const card = document.createElement("article");
    card.className = `challenge-card ${item.areaClass} ${isCompleted ? "completed" : ""}`;
    card.id = `card-${item.id}`;

    card.innerHTML = `
      <div class="challenge-header">
        <div class="area-meta">
          <div class="area-icon-wrap" aria-hidden="true">${item.icon}</div>
          <div class="area-header-info">
            <span class="area-badge">${item.areaName}</span>
            <span class="area-question-num">Pregunta ${item.questionNumInArea} de 2 &bull; Repte #${index + 1} de 16</span>
          </div>
        </div>

        <div class="header-actions-right">
          <button type="button" class="btn-speak-challenge" data-challenge-id="${item.id}" title="Escolta aquest repte en veu alta">
            <span>🗣️ Escolta</span>
          </button>
          <span class="status-pill ${isCompleted ? "done" : ""}" id="status-pill-${item.id}">
            ${isCompleted ? "✓ Resolta" : "Pendent"}
          </span>
        </div>
      </div>

      <div class="challenge-body">
        <span class="mission-tag">🎯 Missió: ${item.tag}</span>
        <h3 class="question-text">${item.question}</h3>

        <div class="search-context-callout">
          <strong>🔍 Què has de fer?</strong> ${item.searchTip}
        </div>

        <div class="hint-toggle-wrapper">
          <button type="button" class="btn-hint" data-hint-id="hint-${item.id}">
            <span>💡 Pista de cerca</span>
          </button>
          <div class="hint-box" id="hint-${item.id}">
            ${item.hint}
          </div>
        </div>

        <div class="answer-section">
          ${isCompleted ? `
            <div class="feedback-msg success show">
              🎉 <strong>Molt bé!</strong> ${item.curiosity}
            </div>
          ` : `
            <div class="input-row">
              <input type="text"
                     class="answer-input"
                     id="input-${item.id}"
                     placeholder="${item.inputPlaceholder}"
                     autocomplete="off"
                     aria-label="La teva resposta per a ${item.areaName}">
              <button type="button" class="btn-verify" data-challenge-id="${item.id}">
                Comprova la resposta
              </button>
            </div>
            <div class="source-field-box">
              <label for="source-${item.id}">🔗 On o en quina web ho has trobat? (Opcional):</label>
              <input type="text" class="source-input" id="source-${item.id}" placeholder="Ex: Vikídia, Viquipèdia en català, museu o web oficial...">
            </div>
            <div class="feedback-msg" id="feedback-${item.id}"></div>
          `}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Assignar esdeveniments per a la veu de cada repte
  container.querySelectorAll(".btn-speak-challenge").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-challenge-id");
      speakChallenge(id);
    });
  });

  // Assignar esdeveniments per a pistes
  container.querySelectorAll(".btn-hint").forEach(btn => {
    btn.addEventListener("click", () => {
      const hintId = btn.getAttribute("data-hint-id");
      const box = document.getElementById(hintId);
      if (box) box.classList.toggle("active");
    });
  });

  // Assignar esdeveniments per comprovar respostes
  container.querySelectorAll(".btn-verify").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-challenge-id");
      verifyChallenge(id);
    });
  });

  // Suport de la tecla Enter
  container.querySelectorAll(".answer-input").forEach(input => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const id = input.id.replace("input-", "");
        verifyChallenge(id);
      }
    });
  });

  renderBadges();
  updateProgressUI();
  checkFinalMysteryUnlock();
}

// --- LECTURA EN VEU ALTA D'UN REPTE CONCRET ---
function speakChallenge(challengeId) {
  const data = CURRICULUM_DATA[state.currentGrade];
  const challenge = data.challenges.find(c => c.id === challengeId);
  if (!challenge) return;

  const isCompleted = !!state.completedByGrade[state.currentGrade][challengeId];

  let textToRead = "";
  if (challenge.lang === "es") {
    textToRead = `Área: ${challenge.areaName}. Misión: ${challenge.tag}. Pregunta: ${challenge.question}. ¿Qué debes hacer?: ${challenge.searchTip}`;
    if (isCompleted) {
      textToRead += `. ¡Resuelta!: ${challenge.curiosity}`;
    }
  } else if (challenge.lang === "en") {
    textToRead = `Subject: ${challenge.areaName}. Question: ${challenge.question}. Search instruction: ${challenge.searchTip}`;
    if (isCompleted) {
      textToRead += `. Solved!: ${challenge.curiosity}`;
    }
  } else {
    textToRead = `Àrea: ${challenge.areaName}. Pregunta ${challenge.questionNumInArea} de dues. Missió: ${challenge.tag}. Pregunta: ${challenge.question}. Què has de fer?: ${challenge.searchTip}`;
    if (isCompleted) {
      textToRead += `. Resposta superada!: ${challenge.curiosity}`;
    }
  }

  narrator.speakText(textToRead, challenge.lang || "ca");
}

// --- RENDERITZACIÓ DE LES INSÍGNIES AMB NOMS COMPLETS ---
function renderBadges() {
  const container = document.getElementById("badges-container");
  const data = CURRICULUM_DATA[state.currentGrade];
  if (!container || !data) return;

  container.innerHTML = "";

  OFFICIAL_AREAS.forEach(area => {
    // Compta quantes preguntes d'aquesta àrea s'han resolt (sobre 2)
    const challengesInArea = data.challenges.filter(c => c.areaKey === area.key);
    const solvedInArea = challengesInArea.filter(c => !!state.completedByGrade[state.currentGrade][c.id]).length;
    const isFullyEarned = solvedInArea === challengesInArea.length && challengesInArea.length > 0;

    const chip = document.createElement("div");
    chip.className = `badge-chip ${isFullyEarned ? "earned" : ""}`;
    chip.innerHTML = `
      <div class="badge-left">
        <span>${area.icon}</span>
        <span>${area.fullName}</span>
      </div>
      <span class="badge-count">${solvedInArea}/${challengesInArea.length}</span>
    `;
    container.appendChild(chip);
  });
}

// --- COMPROVACIÓ D'UN REPTE ---
function verifyChallenge(challengeId) {
  const data = CURRICULUM_DATA[state.currentGrade];
  const challenge = data.challenges.find(c => c.id === challengeId);
  const input = document.getElementById(`input-${challengeId}`);
  const feedback = document.getElementById(`feedback-${challengeId}`);

  if (!challenge || !input || !feedback) return;

  const userVal = input.value.trim();

  if (!userVal) {
    feedback.className = "feedback-msg error show";
    feedback.innerHTML = "⚠️ Si us plau, escriu una resposta abans de comprovar!";
    sounds.playError();
    return;
  }

  const isCorrect = checkAnswerMatches(userVal, challenge.acceptedAnswers);

  if (isCorrect) {
    state.completedByGrade[state.currentGrade][challengeId] = true;
    sounds.playSuccess();
    confetti.start(1500);

    // Llegir felicitació breu
    const praise = challenge.lang === "es" ? "¡Correcto! Muy bien investigado." : (challenge.lang === "en" ? "Correct! Well done." : "Molt bé! Resposta correcta.");
    narrator.speakText(praise, challenge.lang || "ca");

    renderChallenges();
    saveToStorage();
  } else {
    sounds.playError();
    feedback.className = "feedback-msg error show";
    feedback.innerHTML = `❌ Gairebé! Aquesta no és la resposta correcta. Revisa la pista de paraules clau i fes una cerca més precisa a internet.`;
  }
}

// --- ACTUALITZACIÓ DEL PROGRÉS ---
function updateProgressUI() {
  const data = CURRICULUM_DATA[state.currentGrade];
  const completedCount = Object.keys(state.completedByGrade[state.currentGrade]).length;
  const total = data.challenges.length; // 16
  const percent = Math.round((completedCount / total) * 100);

  const fill = document.getElementById("progress-fill");
  const percentText = document.getElementById("progress-percentage");
  const badgesVal = document.getElementById("badges-val");
  const scoreVal = document.getElementById("score-val");

  if (fill) fill.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent}%`;
  if (badgesVal) badgesVal.textContent = `${completedCount}/${total}`;

  // 100 punts per repte (16 * 100 = 1600 punts) + 400 enigma = 2000
  let score = completedCount * 100;
  if (state.finalMysterySolved[state.currentGrade]) {
    score += 400;
  }
  if (scoreVal) scoreVal.textContent = score;

  const remaining = total - completedCount;
  const lockCounter = document.getElementById("lock-counter-text");
  if (lockCounter) {
    lockCounter.textContent = remaining > 0
      ? `Et falten ${remaining} preguntes per resoldre`
      : `Tots els 16 reptes completats! Enigma preparat`;
  }
}

// --- DESBLOQUEIG DE L'ENIGMA FINAL ---
function checkFinalMysteryUnlock() {
  const data = CURRICULUM_DATA[state.currentGrade];
  const completedCount = Object.keys(state.completedByGrade[state.currentGrade]).length;
  const isAllDone = completedCount >= data.challenges.length;

  const mysterySection = document.getElementById("final-mystery-section");
  const lockView = document.getElementById("mystery-lock-view");
  const unlockedView = document.getElementById("mystery-unlocked-view");
  const mysteryBody = document.getElementById("mystery-body-content");

  if (!mysterySection || !lockView || !unlockedView || !mysteryBody) return;

  if (isAllDone) {
    mysterySection.classList.remove("locked");
    lockView.classList.add("hidden");
    unlockedView.classList.remove("hidden");

    const finalData = data.finalMystery;
    const isMysterySolved = !!state.finalMysterySolved[state.currentGrade];

    mysteryBody.innerHTML = `
      <div class="mystery-body-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <p class="mystery-question" style="margin:0;">🕵️ ${finalData.question}</p>
          <button type="button" class="btn-speak-challenge" id="btn-speak-mystery">
            🗣️ Escolta l'enigma
          </button>
        </div>
        <div class="hint-box active" style="margin-bottom: 15px;">
          💡 <strong>Pista final:</strong> ${finalData.hint}
        </div>

        ${isMysterySolved ? `
          <div class="feedback-msg success show" style="margin-bottom: 15px;">
            🎉 ${finalData.curiosity}
          </div>
          <button type="button" class="btn btn-primary" id="btn-show-diploma-again" style="width: 100%;">
            🏆 Veure i Imprimir el meu DIPLOMA OFICIAL
          </button>
        ` : `
          <div class="input-row">
            <input type="text"
                   class="answer-input"
                   id="mystery-input"
                   placeholder="Escriu la resposta del gran enigma...">
            <button type="button" class="btn btn-primary" id="btn-verify-mystery">
              Desxifrar Codi
            </button>
          </div>
          <div class="feedback-msg" id="mystery-feedback"></div>
        `}
      </div>
    `;

    const verifyBtn = document.getElementById("btn-verify-mystery");
    const mysteryInput = document.getElementById("mystery-input");
    const showDiplomaBtn = document.getElementById("btn-show-diploma-again");
    const speakMysteryBtn = document.getElementById("btn-speak-mystery");

    if (speakMysteryBtn) {
      speakMysteryBtn.addEventListener("click", () => {
        narrator.speakText(`Gran Enigma Final. ${finalData.question}`, "ca");
      });
    }

    if (verifyBtn && mysteryInput) {
      verifyBtn.addEventListener("click", verifyMysteryAnswer);
      mysteryInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") verifyMysteryAnswer();
      });
    }

    if (showDiplomaBtn) {
      showDiplomaBtn.addEventListener("click", openDiplomaModal);
    }
  } else {
    mysterySection.classList.add("locked");
    lockView.classList.remove("hidden");
    unlockedView.classList.add("hidden");
  }
}

function verifyMysteryAnswer() {
  const input = document.getElementById("mystery-input");
  const feedback = document.getElementById("mystery-feedback");
  const finalData = CURRICULUM_DATA[state.currentGrade].finalMystery;

  if (!input || !feedback) return;

  const val = input.value.trim();
  if (!val) {
    feedback.className = "feedback-msg error show";
    feedback.innerHTML = "⚠️ Escriu una resposta per desxifrar el codi secret!";
    sounds.playError();
    return;
  }

  if (checkAnswerMatches(val, finalData.acceptedAnswers)) {
    state.finalMysterySolved[state.currentGrade] = true;
    sounds.playFanfare();
    confetti.start(5000);
    saveToStorage();
    checkFinalMysteryUnlock();
    updateProgressUI();

    narrator.speakText(`Enhorabona! Has desxifrat el codi de l'enigma final. Aquí tens el teu diploma de gran mestre en investigació!`, "ca");

    setTimeout(() => {
      openDiplomaModal();
    }, 1200);
  } else {
    sounds.playError();
    feedback.className = "feedback-msg error show";
    feedback.innerHTML = "❌ Codi incorrecte! Revisa bé la pista i torna a investigar.";
  }
}

// --- MODAL DEL DIPLOMA ---
function openDiplomaModal() {
  const modal = document.getElementById("diploma-modal");
  const nameDisplay = document.getElementById("diploma-name-display");
  const gradeDisplay = document.getElementById("diploma-grade-display");
  const dateDisplay = document.getElementById("diploma-date");

  if (!modal) return;

  if (nameDisplay) nameDisplay.textContent = state.agentName || "Agent Investigador/a";
  if (gradeDisplay) gradeDisplay.textContent = `${state.currentGrade}è de Primària`;
  if (dateDisplay) {
    const today = new Date();
    dateDisplay.textContent = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  }

  modal.classList.remove("hidden");
  sounds.playSuccess();
}

function closeDiplomaModal() {
  const modal = document.getElementById("diploma-modal");
  if (modal) modal.classList.add("hidden");
}

function speakDiploma() {
  const name = state.agentName || "Agent Investigador/a";
  const grade = `${state.currentGrade}è de Primària`;
  const text = `Diploma de Mèrit del Departament d'Educació Digital. Gran mestre o mestra en investigació i cerca a internet. Concedit a: ${name}, per haver superat amb èxit els 16 reptes de recerca digital en les 8 àrees curriculars oficials de ${grade} de Catalunya. Aprovat amb excel·lència!`;
  narrator.speakText(text, "ca");
}

// --- LOCAL STORAGE ---
function saveToStorage() {
  try {
    const saveData = {
      grade: state.currentGrade,
      agentName: state.agentName,
      soundEnabled: state.soundEnabled,
      completedByGrade: state.completedByGrade,
      finalMysterySolved: state.finalMysterySolved
    };
    localStorage.setItem("cibermissio_recerca_16_data", JSON.stringify(saveData));
  } catch (e) {}
}

function loadFromStorage() {
  try {
    const saved = localStorage.getItem("cibermissio_recerca_16_data");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.agentName) state.agentName = parsed.agentName;
      if (parsed.completedByGrade) state.completedByGrade = parsed.completedByGrade;
      if (parsed.finalMysterySolved) state.finalMysterySolved = parsed.finalMysterySolved;
      if (typeof parsed.soundEnabled === "boolean") state.soundEnabled = parsed.soundEnabled;
    }
  } catch (e) {}
}

// --- INICIALITZACIÓ ---
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();

  // Nom de l'agent
  const nameInput = document.getElementById("agent-name-input");
  if (nameInput) {
    nameInput.value = state.agentName;
    nameInput.addEventListener("input", (e) => {
      state.agentName = e.target.value.trim() || "Agent Investigador/a";
      saveToStorage();
    });
  }

  // Selector de cursos (5è o 6è)
  const btn5 = document.getElementById("btn-grade-5");
  const btn6 = document.getElementById("btn-grade-6");

  function switchGrade(grade) {
    state.currentGrade = grade;
    if (grade === 5) {
      btn5.classList.add("active");
      btn5.setAttribute("aria-checked", "true");
      btn6.classList.remove("active");
      btn6.setAttribute("aria-checked", "false");
    } else {
      btn6.classList.add("active");
      btn6.setAttribute("aria-checked", "true");
      btn5.classList.remove("active");
      btn5.setAttribute("aria-checked", "false");
    }
    narrator.stop();
    renderChallenges();
  }

  if (btn5) btn5.addEventListener("click", () => switchGrade(5));
  if (btn6) btn6.addEventListener("click", () => switchGrade(6));

  // Botó de lectura global per veu
  const readPageBtn = document.getElementById("btn-read-page");
  if (readPageBtn) {
    readPageBtn.addEventListener("click", () => {
      narrator.toggleFullPageSpeech();
    });
  }

  // Botó de consells de veu
  const listenTipsBtn = document.getElementById("btn-listen-tips");
  if (listenTipsBtn) {
    listenTipsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const tipsText = "Guia de cerca: Consell 1: Fes servir paraules clau sense frases llargues. Consell 2: Comprova dues fonts fiables com Viquipèdia o Vikídia. Consell 3: Posa cometes per a títols exactes. Consell 4: Fes servir cercadors com Qwant Junior.";
      narrator.speakText(tipsText, "ca");
    });
  }

  // Botó de so
  const soundBtn = document.getElementById("btn-toggle-sound");
  if (soundBtn) {
    soundBtn.textContent = state.soundEnabled ? "🔊" : "🔇";
    soundBtn.addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      soundBtn.textContent = state.soundEnabled ? "🔊" : "🔇";
      saveToStorage();
    });
  }

  // Acordió de consells
  const tipsCard = document.querySelector(".tips-accordion");
  const tipsBtn = document.getElementById("tips-toggle-btn");
  if (tipsCard && tipsBtn) {
    tipsBtn.addEventListener("click", () => {
      tipsCard.classList.toggle("open");
    });
  }

  // Botó reiniciar missió del curs actual
  const resetBtn = document.getElementById("btn-quick-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm(`Vols reiniciar el progrés dels 16 reptes de ${state.currentGrade}è de primària?`)) {
        state.completedByGrade[state.currentGrade] = {};
        state.finalMysterySolved[state.currentGrade] = false;
        saveToStorage();
        renderChallenges();
      }
    });
  }

  // Modal de diploma
  const closeDiplomaBtn = document.getElementById("close-diploma-btn");
  const continuePlayingBtn = document.getElementById("btn-continue-playing");
  const printDiplomaBtn = document.getElementById("btn-print-diploma");
  const readDiplomaBtn = document.getElementById("btn-read-diploma");

  if (closeDiplomaBtn) closeDiplomaBtn.addEventListener("click", closeDiplomaModal);
  if (continuePlayingBtn) continuePlayingBtn.addEventListener("click", closeDiplomaModal);
  if (printDiplomaBtn) {
    printDiplomaBtn.addEventListener("click", () => {
      window.print();
    });
  }
  if (readDiplomaBtn) {
    readDiplomaBtn.addEventListener("click", speakDiploma);
  }

  // Render inicial
  renderChallenges();
});
