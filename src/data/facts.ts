export interface Fact {
  id: string;
  text: string;
  category: string;
  source?: string;
  emoji: string;
}

export const CATEGORIES = [
  { id: "all", label: "Wszystkie", emoji: "🌍", color: "from-violet-500 to-purple-600" },
  { id: "history", label: "Historia", emoji: "📜", color: "from-amber-500 to-orange-600" },
  { id: "science", label: "Nauka", emoji: "🔬", color: "from-blue-500 to-cyan-600" },
  { id: "nature", label: "Przyroda", emoji: "🌿", color: "from-green-500 to-emerald-600" },
  { id: "space", label: "Kosmos", emoji: "🚀", color: "from-indigo-500 to-violet-600" },
  { id: "animals", label: "Zwierzeta", emoji: "🐾", color: "from-pink-500 to-rose-600" },
  { id: "technology", label: "Technologia", emoji: "💻", color: "from-sky-500 to-blue-600" },
  { id: "human", label: "Cialo czlowieka", emoji: "🧠", color: "from-red-500 to-rose-600" },
  { id: "food", label: "Jedzenie", emoji: "🍕", color: "from-yellow-500 to-amber-600" },
  { id: "geography", label: "Geografia", emoji: "🗺️", color: "from-teal-500 to-green-600" },
  { id: "art", label: "Sztuka & Kultura", emoji: "🎨", color: "from-fuchsia-500 to-pink-600" },
  { id: "sports", label: "Sport", emoji: "⚽", color: "from-orange-500 to-red-600" },
  { id: "music", label: "Muzyka", emoji: "🎵", color: "from-pink-500 to-fuchsia-600" },
  { id: "movies", label: "Filmy & Seriale", emoji: "🎬", color: "from-red-500 to-orange-600" },
  { id: "poland", label: "Polska", emoji: "🇵🇱", color: "from-red-600 to-rose-700" },
  { id: "psychology", label: "Psychologia", emoji: "🧠", color: "from-purple-500 to-violet-600" },
  { id: "math", label: "Matematyka", emoji: "🔢", color: "from-blue-600 to-indigo-700" },
  { id: "languages", label: "Jezyki swiata", emoji: "🗣️", color: "from-cyan-500 to-teal-600" },
  { id: "mythology", label: "Mitologia", emoji: "⚡", color: "from-amber-600 to-yellow-700" },
  { id: "kids", label: "Dla dzieci", emoji: "🌈", color: "from-pink-400 to-fuchsia-500" },
];

export const FACTS_DB: Fact[] = [
  // Historia
  {
    id: "h1",
    text: "Kleopatra zyla blizej naszych czasow niz ery budowy piramid. Urodzila sie w 69 p.n.e., podczas gdy Wielka Piramida w Gizie powstala ok. 2560 p.n.e. - roznica to ponad 2400 lat!",
    category: "history",
    emoji: "🏛️",
  },
  {
    id: "h2",
    text: "Najkrotsza wojna w historii trwala zaledwie 38-45 minut. Byl to konflikt brytyjsko-zanzibaryjski z 27 sierpnia 1896 roku.",
    category: "history",
    emoji: "⚔️",
  },
  {
    id: "h3",
    text: "Oxford University jest starszy od Aztekow. Nauczanie w Oksfordzie rozpoczelo sie ok. 1096 roku, zas Aztekowie zalozyli Tenochtitlan dopiero w 1325 roku.",
    category: "history",
    emoji: "📚",
  },
  {
    id: "h4",
    text: "Mamuty wlochate wciaz zyly, gdy Egipcjanie budowali Wielka Piramide. Ostatnia populacja mamutow wyginela na wyspie Wrangla ok. 1700 p.n.e.",
    category: "history",
    emoji: "🦣",
  },
  {
    id: "h5",
    text: "Fax wynaleziono w 1843 roku - 33 lata przed wynalezieniem telefonu. Jego tworcy byl Szkot Alexander Bain.",
    category: "history",
    emoji: "📠",
  },
  {
    id: "h6",
    text: "Tytul Cezara byl uzywany w Europie do XX wieku: w formie Kaiser (Niemcy) i Car (Rosja) - obydwa slowa pochodza od imienia Juliusza Cezara.",
    category: "history",
    emoji: "👑",
  },
  {
    id: "h7",
    text: "Maria Sklodowska-Curie jest jedyna osoba uhonorowana Noblem w dwoch roznych dziedzinach naukowych - fizyce (1903) i chemii (1911).",
    category: "history",
    emoji: "🏆",
  },
  {
    id: "h8",
    text: "Napoleon Bonaparte byl stosunkowo wysokim mezczynia jak na swoje czasy - mierzyl ok. 168 cm, co odpowiadalo przecietnej wysokosci owczesnych Francuzow.",
    category: "history",
    emoji: "🎩",
  },
  {
    id: "h9",
    text: "Starozytni Grecy i Rzymianie nie mieli slowa oznaczajacego kolor niebieski. Homer w Iliadzie opisuje morze jako 'koloru wina'.",
    category: "history",
    emoji: "🌊",
  },
  {
    id: "h10",
    text: "Wikingowie nigdy nie nosili helmow z rogami. Ten mit popularyzowala opera z XIX wieku - archeolodzy znalezli tylko jeden helm z rogami, uzywany do ceremonii religijnych.",
    category: "history",
    emoji: "🪖",
  },
  {
    id: "h11",
    text: "Wielki Mur Chinski nie jest widoczny golym okiem z kosmosu - to popularny mit. Jego szerokosc to zaledwie ok. 5-8 metrow, co jest niewidoczne z orbity.",
    category: "history",
    emoji: "🧱",
  },
  {
    id: "h12",
    text: "Pierwsza bitwa z uzyciem samolotow bojowych miala miejsce w 1911 roku podczas wojny italsko-tureckiej. Wloch Giulio Gavotti zrzucil granaty recznie z samolotu.",
    category: "history",
    emoji: "✈️",
  },

  // Nauka
  {
    id: "s1",
    text: "Woda moze istniec jednoczesnie w stanie cieklym, stalym i gazowym - zjawisko to nazywa sie punktem potrojnym i zachodzi w temperaturze 0,01 st. C przy cisnieniu 611,73 Pa.",
    category: "science",
    emoji: "💧",
  },
  {
    id: "s2",
    text: "Atomy tworzace twoje cialo maja miliardy lat. Wiekszosc atomow wodoru w twoim ciele pochodzi z Wielkiego Wybuchu sprzed 13,8 miliarda lat.",
    category: "science",
    emoji: "⚛️",
  },
  {
    id: "s3",
    text: "Mion nigdy sie nie psuje. W egipskich grobowcach znaleziono jadalne probki miodu liczace ponad 3000 lat. Jego pH i wlasciwosci higroskopijne uniemozliwiaja wzrost bakterii.",
    category: "science",
    emoji: "🍯",
  },
  {
    id: "s4",
    text: "Szklo tak naprawde nie jest cialem stalym ani cieczem - to amorficzne cialo stale. Teoria, ze stare okna sa grubsze na dole przez powolny przeplyw szkla, jest mitem.",
    category: "science",
    emoji: "🪟",
  },
  {
    id: "s5",
    text: "Blyskawica uderza w powierzchnie Ziemi ok. 100 razy na sekunde, czyli okolo 8 milionow razy dziennie na calej planecie.",
    category: "science",
    emoji: "⚡",
  },
  {
    id: "s6",
    text: "Banany sa radioaktywne - zawieraja izotop potasu K-40. Stworzono nawet jednostke dawki promieniowania: BED (Banana Equivalent Dose).",
    category: "science",
    emoji: "🍌",
  },
  {
    id: "s7",
    text: "Gorace wody zazwyczaj zamarzaja szybciej niz zimne - zjawisko to znane jest jako efekt Mpemby i do dzis nie ma jednoznacznego naukowego wyjasnienia.",
    category: "science",
    emoji: "🧊",
  },
  {
    id: "s8",
    text: "Najostrzejszym narzedziem na swiecie jest noz obsydianowy - jego krawedz ma grubosc jednego atomu. Stosuje sie go w chirurgii okulistycznej.",
    category: "science",
    emoji: "🔬",
  },
  {
    id: "s9",
    text: "Gdyby usunac cala przestrzen z atomow tworzacych cialo kazdego czlowieka na Ziemi, cala ludzkoscc zmiescilaby sie w szescienie o boku ok. 2,2 cm.",
    category: "science",
    emoji: "🔭",
  },
  {
    id: "s10",
    text: "Prawa reka jest dominujaca u 90% ludzkosci od ponad 500 000 lat - dowodza tego slady uzywania narzedzi u neandertalczykow.",
    category: "science",
    emoji: "🧬",
  },

  // Kosmos
  {
    id: "sp1",
    text: "Slonce stanowi 99,86% masy calego Ukladu Slonecznego. Reszta - czyli planety, ksiezyce, komety i asteroidy - to zaledwie 0,14%.",
    category: "space",
    emoji: "☀️",
  },
  {
    id: "sp2",
    text: "Jeden dzien na Wenus trwa dluzej niz rok na Wenus. Pelna rotacja Wenus wokol wlasnej osi zajmuje 243 dni Ziemi, ale okraza Slonce w 225 dniach Ziemi.",
    category: "space",
    emoji: "🪐",
  },
  {
    id: "sp3",
    text: "Odciski stop astronautow na Ksiezycu moga przetrwac miliony lat - Ksiezyc nie ma atmosfery ani wiatru, ktore moglby je zetrzec.",
    category: "space",
    emoji: "🌕",
  },
  {
    id: "sp4",
    text: "Gwiazda neutronowa jest tak gesta, ze lyzeczka jej materii wazylaby ok. 10 miliardow ton - mniej wiecej tyle, ile gora Everest.",
    category: "space",
    emoji: "⭐",
  },
  {
    id: "sp5",
    text: "W przestrzeni kosmicznej panuje absolutna cisza - dzwiek nie moze rozchodzic sie w prozni. Wybuchy gwiazd sa nieslyszalne.",
    category: "space",
    emoji: "🌌",
  },
  {
    id: "sp6",
    text: "Wielka Czerwona Plama na Jowiszu to antycyklon trwajacy co najmniej 350 lat. Jest tak duzy, ze zmiescilby sie w nim dwie Ziemie.",
    category: "space",
    emoji: "🔴",
  },
  {
    id: "sp7",
    text: "Voyager 1, wystrzelony w 1977 roku, jest najdalej od Ziemi wysunieta sonda stworzona przez czlowieka. Wciaz wysyla sygnaly docierajace do Ziemi po ok. 22 godzinach.",
    category: "space",
    emoji: "🛸",
  },
  {
    id: "sp8",
    text: "Na Marsie znajduje sie najwyzszy wulkan w Ukladzie Slonecznym - Olympus Mons, majacy 22 km wysokosci (prawie 3x wiecej niz Everest) i 600 km srednicy.",
    category: "space",
    emoji: "🌋",
  },
  {
    id: "sp9",
    text: "Droga Mleczna i Galaktyka Andromedy zderza sie ze soba - zderzenie nastapi za ok. 4,5 miliarda lat. Jednak gwiazdy sa tak daleko od siebie, ze kolizje poszczegolnych gwiazd beda rzadkoscia.",
    category: "space",
    emoji: "🌠",
  },

  // Przyroda
  {
    id: "n1",
    text: "Drzewa komunikuja sie ze soba pod ziemia za pomoca sieci grzybni - tzw. 'lesnego internetu'. Drzewa-matki przesylaja przez nia skladniki odzywcze do mlodych sadzonek.",
    category: "nature",
    emoji: "🌲",
  },
  {
    id: "n2",
    text: "Posidonia oceanica rosnaca u wybrzezy Ibizy moze miec ponad 100 000 lat - to jeden z najstarszych zywych organizmow na Ziemi.",
    category: "nature",
    emoji: "🌿",
  },
  {
    id: "n3",
    text: "Podkowiasto-ogoniasty krab ma niebieska krew, bogata w miedz zamiast zelaza. Jego krew wykrywa endotoksyny bakteryjne i jest ceniona w medycynie do testowania lekow.",
    category: "nature",
    emoji: "🦀",
  },
  {
    id: "n4",
    text: "Osmiornica moze zmieniac nie tylko kolor, ale tez teksture skory w ciagu milisekund - podszywajac sie pod rozne gatunki zwierzat i elementy otoczenia.",
    category: "nature",
    emoji: "🐙",
  },
  {
    id: "n5",
    text: "Ziarna kawy to pestki owocow krzewu kawowego. 'Kawowe owoce' (coffee cherry) sa slodkie i jadalne - smakuja jak owoce tropikalne z nutka wisnii.",
    category: "nature",
    emoji: "☕",
  },
  {
    id: "n6",
    text: "Truskawka nie jest botanicznie owocem - jest struktura zwana 'owocem rzekomym'. Prawdziwe owoce truskawki to malutkie, twarde ziarnka na jej powierzchni.",
    category: "nature",
    emoji: "🍓",
  },
  {
    id: "n7",
    text: "Antarktyda zawiera ok. 61% wszystkich zasobow slodkiej wody na Ziemi - zamrozonej w lodowcach. Gdyby wszystkie lody stoplaly, poziom morza wzroslby o ok. 60 metrow.",
    category: "nature",
    emoji: "❄️",
  },
  {
    id: "n8",
    text: "Korzenie drzewa figowego moga siegac do 120 metrow w glab ziemi - to jeden z rekordow swiatowych wsrod drzew. Drzewa te zyja nawet 2000 lat.",
    category: "nature",
    emoji: "🌳",
  },

  // Zwierzeta
  {
    id: "a1",
    text: "Osmiornica ma trzy serca i niebieska krew. Dwa serca pompuja krew przez skrzela, a trzecie - przez reszte ciala. Gdy plynie, serce glowne zatrzymuje bicie.",
    category: "animals",
    emoji: "🐙",
  },
  {
    id: "a2",
    text: "Mrowki nigdy nie spia. Zamiast snu maja setki krotkich, kilkusekundowych drzemek w ciagu doby, lacznie trwajacych ok. 4-5 godzin.",
    category: "animals",
    emoji: "🐜",
  },
  {
    id: "a3",
    text: "Flamingo jest rozowy ze wzgledu na pigment astaksantyna z alg i krewetek, ktore zjada. Na diecie pozbawionej tych pokarmow - bieleje.",
    category: "animals",
    emoji: "🦩",
  },
  {
    id: "a4",
    text: "Slonie sa jedynymi zwierzetami poza ludzmi, ktore maja rytual pogrzebowy. Stoja przy zwlokach padlego towarzysza i dotykaja je trabami przez wiele godzin.",
    category: "animals",
    emoji: "🐘",
  },
  {
    id: "a5",
    text: "Szczury smieja sie! Gdy je laskoczesz, wydaja ultradzwiekowe piski podobne do smiechu i chetnie wracaja do miejsca, gdzie byly laskotane.",
    category: "animals",
    emoji: "🐀",
  },
  {
    id: "a6",
    text: "Kozy maja prostokatne zenice. Ten ksztalt daje im pole widzenia 320-340 stopni, co pozwala dostrzegac drapiezniki prawie zewszad.",
    category: "animals",
    emoji: "🐐",
  },
  {
    id: "a7",
    text: "Meduzy nie maja mozgu, serca ani krwi. Ich cialo sklada sie w 95% z wody, ale sa w stanie przezyc nawet w skrajnych warunkach srodowiskowych.",
    category: "animals",
    emoji: "🪼",
  },
  {
    id: "a8",
    text: "Pingwiny lataja... w wodzie. Ich skrzydla ewoluowaly jako platwy - pod woda poruszaja sie z predkoscia do 25 km/h i moga skakac na wysokosc 1,8 metra.",
    category: "animals",
    emoji: "🐧",
  },
  {
    id: "a9",
    text: "Hipopotamy wydzielaja naturalny krem SPF z pory skory - rozowy plyn zwany 'krwawym potem' chroni je przed promieniowaniem UV i ma wlasciwosci antybakteryjne.",
    category: "animals",
    emoji: "🦛",
  },
  {
    id: "a10",
    text: "Slon jest jedynym ssakiem, ktory nie moze skakac. Jego budowa ciala - masa i anatomia nog - fizycznie uniemozliwia odbicie obu tylnych kkonczyn jednoczesnie.",
    category: "animals",
    emoji: "🐘",
  },

  // Technologia
  {
    id: "t1",
    text: "Pierwszy e-mail w historii wyslal Ray Tomlinson do samego siebie w 1971 roku. Nie pamieta, co napisal - byc moze byl to losowy ciag klawiszy testowych.",
    category: "technology",
    emoji: "📧",
  },
  {
    id: "t2",
    text: "Pierwszy komputerowy blad (bug) to dosłownie robak. W 1947 roku Grace Hopper znalazla martwa cme wcisnieta w przekaznik komputera Harvard Mark II i wkleila ja do dziennika.",
    category: "technology",
    emoji: "🐛",
  },
  {
    id: "t3",
    text: "Nokia byla poczatkowo firma produkujaca papier. Zalozona w 1865 roku w Finlandii, zajmowala sie papiernictwem, guma i elektronika, zanim stala sie gigantem telefonii.",
    category: "technology",
    emoji: "📱",
  },
  {
    id: "t4",
    text: "GIF obchodzil swoje urodziny zanim pojawil sie internet. Format GIF stworzono w 1987 roku, a World Wide Web powstala dopiero w 1991 roku.",
    category: "technology",
    emoji: "🎬",
  },
  {
    id: "t5",
    text: "Amazon zaczal jako ksiegarnia internetowa w garazu Jeffa Bezosa. Pierwsza sprzedana przez niego ksiazka byla 'Fluid Concepts and Creative Analogies' w 1995 roku.",
    category: "technology",
    emoji: "📦",
  },
  {
    id: "t6",
    text: "Haslo najczesciej uzywane na swiecie to wciaz '123456'. Pojawia sie w milionach ujawnionych baz danych z naruszeniami bezpieczenstwa.",
    category: "technology",
    emoji: "🔐",
  },
  {
    id: "t7",
    text: "YouTube zakladali byli pracownicy PayPala, a poczatkowo mial byc serwisem randkowym! Jego pierwszym filmem bylo nagranie z ogrodu zoologicznego zamieszczone w 2005 roku.",
    category: "technology",
    emoji: "▶️",
  },
  {
    id: "t8",
    text: "Kod kreskowy wynaleziono w 1951 roku, ale sklepy zaczely go uzywac dopiero w 1974 roku. Pierwszym produktem zeskanowanym w supermarkecie byla paczka gumy do zucia Wrigley.",
    category: "technology",
    emoji: "📊",
  },

  // Cialo czlowieka
  {
    id: "hb1",
    text: "Twoj mozg produkuje ok. 12-25 W elektrycznosci - wystarczajaco, zeby zasilic slaba zarowke LED. Podczas intensywnego myslenia aktywnosc elektryczna wzrasta.",
    category: "human",
    emoji: "🧠",
  },
  {
    id: "hb2",
    text: "Szkielet czlowieka jest silniejszy niz beton - gramowy fragment kosci udowej wytrzymuje ponad 1700 kg nacisku przed zlamaniem.",
    category: "human",
    emoji: "🦴",
  },
  {
    id: "hb3",
    text: "Zoladek wytwarza nowa wyscioline sluzowa co dwa tygodnie. Bez niej strawilby sam siebie - kwas solny w zoladku ma pH ok. 1,5-2.",
    category: "human",
    emoji: "🫃",
  },
  {
    id: "hb4",
    text: "Twoje oczy widza obraz do gory nogami - mozg odwraca go na wlasciwa strone. Gdy zaklada sie specjalne odwracajace okulary, mozg po kilku dniach znow odwraca obraz.",
    category: "human",
    emoji: "👁️",
  },
  {
    id: "hb5",
    text: "Czlowiek ma ok. 37 bilionow komorek ciala, ale zamieszkuje je 10x wiecej bakterii i innych mikroorganizmow - glownie w jelitach, tworza tzw. mikrobiom.",
    category: "human",
    emoji: "🦠",
  },
  {
    id: "hb6",
    text: "Przez cale zycie serce pompuje ok. 200 milionow litrow krwi - wystarczajaco, aby napelnic 3 supertankowce naftowe.",
    category: "human",
    emoji: "❤️",
  },
  {
    id: "hb7",
    text: "Twoja skora jest najwiekszym organem ciala - u doroslego czlowieka waazy ok. 4 kg i ma powierzchnie ok. 2 metrow kwadratowych.",
    category: "human",
    emoji: "🫁",
  },
  {
    id: "hb8",
    text: "Czlowiek jest jedynym zwierzeciem, ktore placze ze wzruszenia. Lzy emocjonalne zawieraja wiecej hormonow niz lzy powodowane podraznieniem oka.",
    category: "human",
    emoji: "😢",
  },

  // Jedzenie
  {
    id: "f1",
    text: "Czekolada byla waluta. Majowie i Aztekowie uzywali ziaren kakao jako srodka platniczego - mozna bylo za nie kupic niewolnika lub indyka.",
    category: "food",
    emoji: "🍫",
  },
  {
    id: "f2",
    text: "Pizza Margherita wziela nazwe od krolowej Wloch, Malgorzaty Sabaudzkiej. W 1889 roku pizzaiolo Raffaele Esposito przyrzadzil dla niej pizze w barwach flagi Wloch.",
    category: "food",
    emoji: "🍕",
  },
  {
    id: "f3",
    text: "Frytki nie pochodza z Francji, lecz z Belgii. Mieszkancy Belgii smazyli ryby, a zima, gdy rzeki zamarzaly, smazyli ziemniaki - stad 'french fries'.",
    category: "food",
    emoji: "🍟",
  },
  {
    id: "f4",
    text: "Ketchup wynaleziono w XVIII w. w Chinach jako sos rybny (ke-tsiap). Pomidory dodano dopiero ok. 1812 roku w USA przez Jamesa Mease'a.",
    category: "food",
    emoji: "🍅",
  },
  {
    id: "f5",
    text: "Kawa przed odkryciem Ameryki przez Europejczykow nie byla znana w Europie. Do Europy dotarla ok. 1600 roku - wczesniej Europejczycy pili glownie piwo i wino.",
    category: "food",
    emoji: "☕",
  },
  {
    id: "f6",
    text: "Lody waniliowe sa najpopularniejszym smakiem lodow na swiecie, mimo ze wanilia jest drugim najdrozszym przyprawem (po szafranie). Kwiaty wanilii kwitna tylko jeden dzien.",
    category: "food",
    emoji: "🍦",
  },

  // Geografia
  {
    id: "g1",
    text: "Kanada posiada ok. 60% wszystkich jezior na swiecie. Jest ich ponad 3 miliony - wiecej niz we wszystkich pozostalych krajach razem wziectych.",
    category: "geography",
    emoji: "🍁",
  },
  {
    id: "g2",
    text: "Australie zamieszkuje wiecej kangurow niz ludzi - ok. 48 mln kangurow vs. 26 mln ludzi. Kangury to oficjalny symbol Australii i pojawiaja sie na herbie.",
    category: "geography",
    emoji: "🦘",
  },
  {
    id: "g3",
    text: "Rosja jest tak rozlegla, ze ma az 11 stref czasowych. Gdy w Moskwie jest poluddnie, na Kamczatce jest juz noc nastepnego dnia.",
    category: "geography",
    emoji: "🗺️",
  },
  {
    id: "g4",
    text: "Watykan jest najmniejszym panstwem swiata - ma powierzchnie 0,44 km2 i ok. 800 obywateli, ale wlasne banki, poczte, radio i kolej.",
    category: "geography",
    emoji: "🏛️",
  },
  {
    id: "g5",
    text: "Sahara nie jest najwieksza pustynia na swiecie - jest nia Antarktyda. Pustynia to teren o opadach ponizej 250 mm rocznie, a Antarktyda spełnia ten warunek.",
    category: "geography",
    emoji: "🏔️",
  },
  {
    id: "g6",
    text: "Polska ma setki zamkow i ruin zamkowych - wiecej niz wiele krajow Europy Zachodniej. Niestety wiekszosc to ruiny po zniszczeniach II wojny swiatowej.",
    category: "geography",
    emoji: "🏰",
  },

  // Sztuka & Kultura
  {
    id: "ar1",
    text: "Mona Lisa nie ma brwi ani rzes. Wygoliwanie brwi bylo modne we Florencji w epoce renesansu, gdy Leonardo ja malowal.",
    category: "art",
    emoji: "🖼️",
  },
  {
    id: "ar2",
    text: "Beethoven byl prawie calkowicie gluchy, gdy tworzy IX Symfonie - jedno z najwiekszych arcydziel muzyki klasycznej. Odczuwal wibracje podlogi podczas dyrygowania.",
    category: "art",
    emoji: "🎵",
  },
  {
    id: "ar3",
    text: "Gwiazdista noc Van Gogha powstala, gdy artysta przebywal w zakladzie psychiatrycznym w Saint-Remy. Namalowal ja patrzac przez zakratowane okno swojej celi.",
    category: "art",
    emoji: "🌌",
  },
  {
    id: "ar4",
    text: "Lego jest najwiekszym producentem opon na swiecie - produkuje rocznie ok. 318 milionow miniaturowych kolek LEGO, znacznie wiecej niz Michelin czy Bridgestone.",
    category: "art",
    emoji: "🧱",
  },
  {
    id: "ar5",
    text: "William Shakespeare wymyslil ponad 1700 slow jezyka angielskiego, m.in.: bedroom, generous, lonely, obscene, swagger, zany. Wiele z nich uzywamy do dzis.",
    category: "art",
    emoji: "✍️",
  },

  // Sport
  {
    id: "spt1",
    text: "Golf byl grany na Ksiezycu. W 1971 roku astronauta Alan Shepard uderzyl pilke golfowa na Ksiezycu - poleciec mogla setki metrow przy niskiej grawitacji.",
    category: "sports",
    emoji: "⛳",
  },
  {
    id: "spt2",
    text: "Oryginalny maraton nie mial dystansu 42,195 km. Dystans standaryzowano podczas Igrzysk Olimpijskich w Londynie w 1908 roku, zeby trasa konczyla sie przed loza krolewska.",
    category: "sports",
    emoji: "🏃",
  },
  {
    id: "spt3",
    text: "Siatkowke wynaleziono w 1895 roku jako sport dla starszych biznesmenow - mial byc mniej intensywny niz koszykowka, wynaleziona 4 lata wczesniej.",
    category: "sports",
    emoji: "🏐",
  },
  {
    id: "spt4",
    text: "Usain Bolt podczas swojego rekordu swiata (9,58 s) na 100 m biegu nie osiagnal predkosci maksymalnej na 100. metrze - zrobil to na 65. metrze.",
    category: "sports",
    emoji: "🏅",
  },
  {
    id: "spt5",
    text: "Szachy wymyslono w Indiach ok. V-VI w. n.e. Pierwotna nazwa gry to 'chaturanga', a figury reprezentowaly cztery oddzialy armii hinduskiej.",
    category: "sports",
    emoji: "♟️",
  },

  // Muzyka
  {
    id: "mu1",
    text: "Mozart zaczal komponowac w wieku 5 lat. Jego pierwsze znane dzielo - menuet B-dur - pochodzi z 1761 roku. Do 6. roku zycia gral juz przed europejskimi dworami krolewskimi.",
    category: "music",
    emoji: "🎹",
  },
  {
    id: "mu2",
    text: "'Happy Birthday to You' przez ponad 80 lat byla wlasnoscia Warner Music, ktora pobierala licencje za kazde uzytkie w filmie. W 2016 roku sad orzekl, ze utwor nalezy do domeny publicznej.",
    category: "music",
    emoji: "🎂",
  },
  {
    id: "mu3",
    text: "Freddie Mercury mial wyjatkowy zakres glosu - ok. 4 oktawy. Naukowcy potwierdzili, ze jego glos mial unikalne drżenie charakterystyczne dla spiewakow operowych, mimo ze nigdy nie uczyl sie spiewu klasycznego.",
    category: "music",
    emoji: "🎤",
  },
  {
    id: "mu4",
    text: "Beethoven byl calkowicie gluchy, gdy ukoncyzl IX Symfonie w 1824 roku. Na premierze odwrocono go twarzą do publicznosci, zeby widzial oklaski - sam ich nie slyszal.",
    category: "music",
    emoji: "🎼",
  },
  {
    id: "mu5",
    text: "'Yesterday' Paula McCartneya jest najczesciej nagrywaną piosenka w historii - zarejestrowano ponad 2200 roznych wykonan przez innych artystow. McCartney wymyslil melodie we snie i przez kilka dni myslal, ze ja skradzl.",
    category: "music",
    emoji: "🎸",
  },
  {
    id: "mu6",
    text: "Winylow sprzedano w 2020 roku wiecej niz plyt CD po raz pierwszy od 1987 roku. Plyta winylowa przezywa renesans - sprzedaz rosnie kazdego roku od 2007.",
    category: "music",
    emoji: "💿",
  },
  {
    id: "mu7",
    text: "Gitara elektryczna wynaleziona w 1931 roku przez Adolpha Rickenbackera i George'a Beauchamp'a sluzyla pierwotnie gitarzystom hawajskim - dopiero pozniej stala sie fundamentem muzyki rockowej.",
    category: "music",
    emoji: "🎸",
  },
  {
    id: "mu8",
    text: "W Afryce Zachodniej istnieje tradycja 'talking drums' - bebny potrafia imitowac tony i rytm mowy, pozwalajac na komunikacje na odleglosc wielu kilometrow. Przekazywano w ten sposob wiadomosci szybciej niz goniec konny.",
    category: "music",
    emoji: "🥁",
  },
  {
    id: "mu9",
    text: "Muzyka klasyczna moze zwiekszyc wydajnosc roslin - badania pokazuja, ze truskawki rosnące przy muzyce Mozarta sa wieksze i slodsze niz w ciszy. Zjawisko to nazwano 'efektem Mozarta'.",
    category: "music",
    emoji: "🌱",
  },
  {
    id: "mu10",
    text: "Najdluzszy oficjalnie nagrany utwór muzyczny to 'Longplayer' Jema Finera - kompozycja zaprojektowana tak, zeby grac bez powtorzenia przez 1000 lat. Rozpoczela sie 1 stycznia 2000 roku.",
    category: "music",
    emoji: "⏱️",
  },

  // Filmy & Seriale
  {
    id: "mv1",
    text: "Dzwiek miecza swietlnego z 'Gwiezdnych Wojen' stworzyl Ben Burtt, miksujac hum starego projektora filmowego z zakloceniami telewizyjnymi. Odkryl go przypadkowo, gdy mikrofon przechwytal zaklocenia telewizora podczas chodzenia po pokoju.",
    category: "movies",
    emoji: "⚔️",
  },
  {
    id: "mv2",
    text: "Film 'Interstellar' (2014) mial tak dokladna symulacje czarnej dziury, ze fizycy opublikowali na jej podstawie artykul naukowy w piśmie 'Classical and Quantum Gravity'. Nowa wiedza o akrecji materii do czarnej dziury.",
    category: "movies",
    emoji: "🌌",
  },
  {
    id: "mv3",
    text: "'Titanic' (1997) kosztowal w produkcji wiecej niz budowa oryginalnego statku. Budzet filmu to ok. 200 mln USD, a sam Titanic kosztowal 7,5 mln USD w 1912 roku (ok. 200 mln w cenach z 1997).",
    category: "movies",
    emoji: "🚢",
  },
  {
    id: "mv4",
    text: "Kultowy 'Krzyk Wilhelma' pojawia sie w ponad 400 filmach i serialach od 1951 roku - m.in. w 'Gwiezdnych Wojnach', 'Wladcy Pierscienii' i serii Indiana Jones. To swego rodzaju wielopokoleniowy insider dla filmowcow.",
    category: "movies",
    emoji: "😱",
  },
  {
    id: "mv5",
    text: "Forrest Gump mial byc grany przez Johna Travoltę, Billa Murraya i Chevy'ego Chase'a - wszyscy odmowili. Tom Hanks wziąl procent od zyskow zamiast honorarium i zarobil ok. 40 mln USD.",
    category: "movies",
    emoji: "🏃",
  },
  {
    id: "mv6",
    text: "'Breaking Bad' jest jedynym serialem w historii, ktory osiągal wzrost ogladalnosci we wszystkich 5 sezonach. Finalowy odcinek obejrzalo 10,3 mln widzow - 6 razy wiecej niz premiera pierwszego sezonu.",
    category: "movies",
    emoji: "📺",
  },
  {
    id: "mv7",
    text: "Krolowa Sniegu i Siedmiu Krasnolukcow (1937) Disneya byla nazywana 'szalenstwem Disneya' przez Hollywood - nikt nie wierzyl, ze pelnometrazowa animacja moze odniesc sukces. Zarobila 8 mln USD przy budzecie 1,5 mln.",
    category: "movies",
    emoji: "🏰",
  },
  {
    id: "mv8",
    text: "Efekt dźwiekowy kroku dinozaurow w 'Parku Jurajskim' (1993) stworzono z odglosow konia chodzącego po blocie. Ryk T-Rexa to miks odglosow slonia, tygrysa i aligatora.",
    category: "movies",
    emoji: "🦖",
  },
  {
    id: "mv9",
    text: "'Pulp Fiction' (1994) Quentina Tarantino mial budzet 8 mln USD i zarobil ponad 213 mln. Tarantino napisal scenariusz wspolnie z Rogerem Avarym w 3,5 tygodnia, siedzac w kawiarni.",
    category: "movies",
    emoji: "🎬",
  },
  {
    id: "mv10",
    text: "Aktor Robin Williams improwizował tak wiele swoich kwestii, ze rezyserzy musieli ustawiac dwie kamery jednoczesnie - zadna scena nie wyglądala tak samo dwa razy.",
    category: "movies",
    emoji: "🎭",
  },

  // Polska
  {
    id: "pl1",
    text: "Zamek w Malborku jest najwiekszym zamkiem na swiecie pod wzgledem powierzchni zabudowy - ok. 143 000 m2. Budowali go Krzyzacy przez ponad 150 lat i do 1457 roku byl siedziba ich Wielkiego Mistrza.",
    category: "poland",
    emoji: "🏰",
  },
  {
    id: "pl2",
    text: "Polska Konstytucja z 3 maja 1791 roku byla pierwsza w Europie i druga na swiecie (po USA z 1787 roku). Wyprzedzala Konstytucje Francji o kilka miesięcy.",
    category: "poland",
    emoji: "📜",
  },
  {
    id: "pl3",
    text: "Polska jest na 5. miejscu na swiecie pod wzgledem produkcji jablek - wytwarza ok. 4 mln ton rocznie. Co szóste jablko jedzone w Europie pochodzi z Polski.",
    category: "poland",
    emoji: "🍎",
  },
  {
    id: "pl4",
    text: "Zubr europejski wygiąl sie w Polsce w 1921 roku. Gatunek odtworzono hodowlano z 12 ocalałych osobnikow - dzisiaj w naturze zyje ok. 6000 zubrow, glownie w Puszczy Bialowieskiej.",
    category: "poland",
    emoji: "🦬",
  },
  {
    id: "pl5",
    text: "Polska jest najwiekszym europejskim producentem bursztynu - dostarcza ok. 80% swiatowego wydobycia. Baltycki bursztyn liczył sobie ok. 40-50 milionow lat i bywa nazywany 'zlotym Baltyku'.",
    category: "poland",
    emoji: "💎",
  },
  {
    id: "pl6",
    text: "Husaria polska byla uznawana za jedna z najpotezniejszych formacji kawaleryjskich w historii. W 1683 roku podczas Bitwy pod Wiedniem dokonała najwiekszej szarzy kawalerii w historii - ok. 20 000 jezdzców.",
    category: "poland",
    emoji: "⚔️",
  },
  {
    id: "pl7",
    text: "Krakow jest jednym z niewielu europejskich miast, ktore przezyly II wojne swiatowa prawie bez zniszczeń - Sowieci posunegli sie tak szybko w 1945 roku, ze Niemcy nie zdazyli go wysadzic.",
    category: "poland",
    emoji: "🏙️",
  },
  {
    id: "pl8",
    text: "Polska ma ponad 9000 jezior. Zaledwie 100 km2 jezior mniej niz Szwecja, ktora jest 3 razy wieksza. Pojezierze Mazurskie zwane jest 'Krain Tysiqca Jezior'.",
    category: "poland",
    emoji: "🏞️",
  },
  {
    id: "pl9",
    text: "Pierogi, choc uchodzą za polskie danie narodowe, mają prawdopodobnie chińskie lub wschodnioeuropejskie korzenie. Do Polski mogly trafic wraz z misjonarzami lub kupcami z Azji w XIII wieku.",
    category: "poland",
    emoji: "🥟",
  },
  {
    id: "pl10",
    text: "Polska ma 17 obiektow na liscie swiatowego dziedzictwa UNESCO - m.in. Stare Miasto w Krakowie, Puszcza Bialowieska, Kopalnia Soli w Wieliczce i oboz Auschwitz-Birkenau.",
    category: "poland",
    emoji: "🌍",
  },

  // Historia – dodatkowe
  {
    id: "h13",
    text: "Krzysztof Kolumb nigdy nie postawil nogi na kontynencie polnocnoamerykanskim. Dotarl jedynie na wyspy Karaibskie i wybrzeza Ameryki Srodkowej i Poludniowej - do swojej smierci byl przekonany, ze odkryl droge do Azji.",
    category: "history",
    emoji: "🧭",
  },
  {
    id: "h14",
    text: "W 1518 roku w Strasburgu wybuchla 'taneczna epidemia' - setki ludzi tancowalo bez przerwy przez tygodnie, czesc az do smierci z wyczerpania. Do dzis nie znamy przyczyny tego zjawiska.",
    category: "history",
    emoji: "💃",
  },
  {
    id: "h15",
    text: "Kleopatra mowila po egipsku - byla pierwszym wladca z greckiej dynastii ptolemejskiej, ktory nauczyl sie jezyka swoich poddanych. Mowila tez po etiopsku, aramejsku i kilku innych językach.",
    category: "history",
    emoji: "👑",
  },
  {
    id: "h16",
    text: "Albert Einstein odrzucil propozycje zostania prezydentem Izraela w 1952 roku, twierdzac ze brakuje mu naturalnego talentu do kontaktow z ludzmi i pelnienia oficjalnych funkcji.",
    category: "history",
    emoji: "🧪",
  },
  {
    id: "h17",
    text: "Pierwsza fotografia czlowieka to przypadek. Louis Daguerre fotografowal paryska ulice w 1838 roku tak dlugo (ok. 10 min), ze wszyscy przechodnie sie 'zamazali' - ale jeden czyszczacy buty stoyal na tyle dlugo, ze zostal uwieczniony.",
    category: "history",
    emoji: "📷",
  },
  {
    id: "h18",
    text: "Starozytni Grecy i Rzymianie nie wiedzieli, ze krew krazy w ciele. Wierzyli, ze zyly transportuja powietrze, a serce jest siedziba duszy. Dopiero William Harvey udowodnil krazenie krwi w 1628 roku.",
    category: "history",
    emoji: "🫀",
  },
  {
    id: "h19",
    text: "Nie istnieje zadna historyczna dokumentacja, ze Newton 'odkryl' grawitacje przez spadajace jablko. Ta historia pochodzi z jego wlasnych wspomnien pod koniec zycia i mogla byc uproszczeniem.",
    category: "history",
    emoji: "🍎",
  },
  {
    id: "h20",
    text: "Wielka Plaga w Atenach (430-426 p.n.e.) zabila szacunkowo 25% populacji miasta i prawdopodobnie zmienila bieg historii - zabila m.in. wodza Peryklesa i znacznie osłabila Ateny w wojnie z Sparta.",
    category: "history",
    emoji: "⚕️",
  },

  // Nauka – dodatkowe
  {
    id: "s11",
    text: "Mrówki waza mniej wiecej tyle samo co cala ludzkość. Szacuje sie, ze ich laczna biomasa jest rownoważna biomasie wszystkich 8 miliardow ludzi - a jest ich 20 000 bilionow sztuk.",
    category: "science",
    emoji: "🐜",
  },
  {
    id: "s12",
    text: "DNA jednego czlowieka, rozciagiete w linii prostej, siegneloby od Ziemi do Slonca i z powrotem ok. 300 razy. Kazda z ok. 37 bilionow komorek ciala zawiera ok. 2 metry DNA.",
    category: "science",
    emoji: "🧬",
  },
  {
    id: "s13",
    text: "Dzwiek podrozuje 4x szybciej w wodzie niz w powietrzu (ok. 1480 m/s vs. 343 m/s). W stali porusza sie az 5100 m/s - dlatego przykladajac ucho do szyn kolejowych mozna uslyszec pociag znacznie wczesniej niz dotarloby powietrzne echo.",
    category: "science",
    emoji: "🔊",
  },
  {
    id: "s14",
    text: "Czlowiek jest jedynym gatunkiem, ktory sie rumieni. Karol Darwin nazywal rumieniec 'najciekawszym i najludzkim sposrod wszystkich wyrazen'. Zadne zwierze nie robi tego mimowolnie z powodow spolecznych.",
    category: "science",
    emoji: "😊",
  },
  {
    id: "s15",
    text: "Promieniowanie rentgenowskie odkryto przez przypadek. Wilhelm Röntgen w 1895 roku zauwazyл, ze fluorescencyjny ekran po drugiej stronie pokoju swieci, gdy eksperymentowal z promieniami katodowymi.",
    category: "science",
    emoji: "☢️",
  },
  {
    id: "s16",
    text: "Temperatura w centrum Slonca wynosi ok. 15 mln stopni Celsjusza - ale korona sloneczna (zewnetrzna atmosfera) jest paradoksalnie milion razy goretsza. Naukowcy wciaz nie wiedzą dlaczego.",
    category: "science",
    emoji: "☀️",
  },
  {
    id: "s17",
    text: "Penicyline odkryl Alexander Fleming przez przypadek w 1928 roku - zniszczala petryfilke z bakteriami, ktora zapomniał zamknac. To odkrycie uratowalo szacunkowo 200 milionow ludzkich zyc.",
    category: "science",
    emoji: "💊",
  },
  {
    id: "s18",
    text: "Kwantowy komputer moze byc jednoczesnie w milionach stanow naraz - zjawisko superpozycji. Komputer kwantowy Google w 2019 roku rozwiazal zadanie w 200 sekund, ktore tradycyjny komputer liczyłby 10 000 lat.",
    category: "science",
    emoji: "💻",
  },

  // Kosmos – dodatkowe
  {
    id: "sp10",
    text: "Na Saturnie pada deszcz diamentow. Cisnienie atmosferyczne zamienia metan w wegiel, ktory scisniety jeszcze mocniej tworzy diamenty - po czym 'padają' one w glab planety.",
    category: "space",
    emoji: "💎",
  },
  {
    id: "sp11",
    text: "Ksiezyc oddala sie od Ziemi o ok. 3,8 cm rocznie. Za ok. 600 mln lat bedzie tak daleko, ze nie bedziemy mogli obserwowac calkowitych zaсmiеń Slonca - Ksiezyc bedzie za maly, zeby je zaslonic.",
    category: "space",
    emoji: "🌙",
  },
  {
    id: "sp12",
    text: "Jowisz jest tak wielki, ze wszystkie pozostale planety Ukladu Slonecznego zmiescily sie w nim razem z zapasem. Jego masa stanowi 2,5-krotnosc masy wszystkich pozostalych planet lacznie.",
    category: "space",
    emoji: "🪐",
  },
  {
    id: "sp13",
    text: "W przestrzeni kosmicznej pachnie... spalonymi rzeczami. Astronauci opisuja zapach przestrzeni kosmicznej (wyczuwalny na skafandrach po EVA) jako mix spalonego metalu, owoców i barbecue.",
    category: "space",
    emoji: "👃",
  },
  {
    id: "sp14",
    text: "Na Marsie rok trwa prawie 2 razy dluzej niz na Ziemi - 687 dni. Marsjanska doba (sol) trwa 24 godziny i 39 minut. Laziki NASA musial byc programowany z uwzglednieniem tej roznicy.",
    category: "space",
    emoji: "🔴",
  },
  {
    id: "sp15",
    text: "Najszybszy obiekt stworzony przez czlowieka to sonda Parker Solar Probe - w 2018 roku osiagnela predkosc ok. 690 000 km/h zbliżajac sie do Slonca. To rownoważne przelocie z Warszawy do Nowego Jorku w 3 sekundy.",
    category: "space",
    emoji: "🚀",
  },

  // Przyroda – dodatkowe
  {
    id: "n9",
    text: "Sloneczniki NIE podazaja za Sloncem po osiągnieciu dojrzalosci - to mit dotyczacy tylko mlodych roslin. Dojrzale sloneczniki zwrocone sa stale na wschod, co przyciaga owady ogrzane porannym sloncem.",
    category: "nature",
    emoji: "🌻",
  },
  {
    id: "n10",
    text: "Koala ma linie papilarne nieodroznialne od ludzkich - nawet pod mikroskopem. To jedyne znane zwierze poza naczelnymi z tak skomplikowanymi odciskami palcow, przez co zdarzaly sie pomyłki na australijskich miejscach zbrodni.",
    category: "nature",
    emoji: "🐨",
  },
  {
    id: "n11",
    text: "Najstarsze zyjace drzewo na swiecie to sosna oscista 'Metuzalem' w Gorach Bialych w Kalifornii - ma ponad 5000 lat. Rosla juz kiedy budowniczy wznosili piramidy w Egipcie.",
    category: "nature",
    emoji: "🌲",
  },
  {
    id: "n12",
    text: "Bursztyn to skamieniala zywica drzew sprzed milionow lat. W niektórych kawalkach zachowane sa owady, ktore wpadly do zywicy 50-100 milionow lat temu - z ich DNA naukowcy probuja odczytac genetic danych wymarлych gatunkow.",
    category: "nature",
    emoji: "🪲",
  },
  {
    id: "n13",
    text: "Blyskawica moze podgrzac powietrze wokol siebie do 30 000 stopni Celsjusza - pieciokrotnie wiecej niz powierzchnia Slonca. To gwaltowne ogrzanie powietrza i ekspansja powoduja grzmot.",
    category: "nature",
    emoji: "⚡",
  },
  {
    id: "n14",
    text: "Rafa koralowa jest najwiekszym zywym tworem na Ziemi widocznym z kosmosu - Wielka Rafa Koralowa ma dl. ok. 2300 km i jest domem dla 25% wszystkich gatunkow morskich, mimo ze zajmuje zaledwie 0,1% powierzchni oceanow.",
    category: "nature",
    emoji: "🐠",
  },

  // Zwierzęta – dodatkowe
  {
    id: "a11",
    text: "Zolwie moga oddychac... przez zad. W procesie kloakalnej wymiany gazowej zolwie wodne pobieraja tlen przez blone sluzowa kloaki podczas zimowego snu pod woda - nie muszac wypływac na powierzchnie.",
    category: "animals",
    emoji: "🐢",
  },
  {
    id: "a12",
    text: "Wiewiorki sadziają wiecej drzew niz myslisz. Zapominaja o ok. 74% ukrytych zolędzi i orzechow - wiele z nich kiełkuje i wyrasta w drzewa. Wiewiorki nieswiadomie sa jednymi z glownych lesnikow planety.",
    category: "animals",
    emoji: "🐿️",
  },
  {
    id: "a13",
    text: "Niedźwiedzie polarne maja czarna skore - ich futro jest bezbarwne i przezroczyste, a nie biale. Czarna skora lepiej pochłania cieplo sloneczne, co pomaga im przezywac w arktycznym klimacie.",
    category: "animals",
    emoji: "🐻‍❄️",
  },
  {
    id: "a14",
    text: "Slimaki moga spac przez 3 lata z rzędu. Gdy warunki sa niekorzystne (susza, zimno), slimak chowa sie w muszle i wpada w stan uśpienia (estywacja), czekajac na lepsze czasy.",
    category: "animals",
    emoji: "🐌",
  },
  {
    id: "a15",
    text: "Slon jest jedynym ssakiem, ktory nie moze skakac. Jego masa i budowa stawow fizycznie uniemozliwiaja odbicie wszystkich czterech ng jednoczesnie od ziemi.",
    category: "animals",
    emoji: "🐘",
  },
  {
    id: "a16",
    text: "Delfiny nadaja unikalnym 'imiona' swoim dzieciom zaraz po urodzeniu - sekwencje gwizd, ktore odpowiadaja tylko temu konkretnemu osobnikowi. Inne delfiny uzywaja jego 'imienia' przez cale zycie.",
    category: "animals",
    emoji: "🐬",
  },
  {
    id: "a17",
    text: "Krokodyle poykaja kamienie jako balast - pomoga im nurkować głębiej i utrzymywac rownowagie pod woda. W zoladkach starych krokodyli znaleziono do kilkudziesieciu kilogramow kamieni.",
    category: "animals",
    emoji: "🐊",
  },
  {
    id: "a18",
    text: "Pszczoly podejmuja decyzje demokratycznie. Gdy roj szuka nowej siedziby, pszczoly-zwiadowcy tancza, reklamujac odkryte miejsca. Im dluzej i intensywniej tancza, tym lepsze miejsce. Wygrywa opcja z najdluzszym tańcem.",
    category: "animals",
    emoji: "🐝",
  },

  // Technologia – dodatkowe
  {
    id: "t9",
    text: "Pierwsza kamera internetowa obserwowala ekspres do kawy. W 1991 roku naukowcy z Cambridge zamontowali kamere skierowana na ekspres, zeby nie wchodzic na 3. pietro po prozni po zimna kawe.",
    category: "technology",
    emoji: "☕",
  },
  {
    id: "t10",
    text: "Jeden dysk twardy z 1956 roku (IBM 350 RAMAC) wazyl tone i mogl przechowywac 5 MB. Dzis przecietna karta SD miesci 512 GB - 100 000 razy wiecej w urzadzeniu wielkosci paznokcia.",
    category: "technology",
    emoji: "💾",
  },
  {
    id: "t11",
    text: "Roboty na Marsie nie moga byc sterowane w czasie rzeczywistym - opoznienie sygnalu miedzy Ziemia a Marsem wynosi od 3 do 22 minut (zalezne od pozycji planet). Kazda komenda musi byc zaplanowana z wyprzedzeniem.",
    category: "technology",
    emoji: "🤖",
  },
  {
    id: "t12",
    text: "Pierwszy smartfon nie byl iPhonen - byl nim IBM Simon z 1994 roku, ktory mial ekran dotykowy, e-mail, faks i kalendarz. Apple iPhone pojawil sie 13 lat pozniej.",
    category: "technology",
    emoji: "📱",
  },
  {
    id: "t13",
    text: "GitHub przechowuje kopi calego swojego kodu w arktycznym bunkrze w Norwegii (Arctic Code Vault) - na specjalnej tasmie filmowej, zaprojektowanej na 1000 lat. To zabezpieczenie przed globalną katastrofą.",
    category: "technology",
    emoji: "❄️",
  },
  {
    id: "t14",
    text: "Google przechowuje taka ilosc danych, ze gdyby wydrukować je na papierze, stos siegalby do Słonca i z powrotem. Codziennie firma przetwarza ok. 20 eksabajtow danych.",
    category: "technology",
    emoji: "🔍",
  },

  // Ciało człowieka – dodatkowe
  {
    id: "hb9",
    text: "Naczynia krwionosne w ludzkim ciele, ulozzone w linii prostej, miałyby dlugosc ok. 100 000 km - wystarczajaca do okrazenia Ziemi 2,5 razy lub dotarcia do Ksiezyca i z powrotem.",
    category: "human",
    emoji: "🩸",
  },
  {
    id: "hb10",
    text: "Śmiech jest zarazliwy neurologicznie - wyspecjalizowane neurony lustrzane w mozgu automatycznie reaguja na dzwiek cudzego smiechu, wywolujac impulsy do roześmiania się. Dlatego 'smiechy z puszki' w serialach komedowych dzialają.",
    category: "human",
    emoji: "😂",
  },
  {
    id: "hb11",
    text: "Slina zawiera naturalny srodek przeciwbolowy silniejszy od morfiny - opiorfine. Odkryta w 2006 roku substancja 6 razy skuteczniej blokuje bol u myszy niz morfina, ale w ludzkiej slinie jest jej zbyt malo.",
    category: "human",
    emoji: "👅",
  },
  {
    id: "hb12",
    text: "Kazda komorka w twoim ciele zawiera kompletne DNA - ok. 3 miliardy par zasad. Gdyby DNA z jednej komorki napisac jako ksiazke, potrzeba by 3300 ksiazek po 1000 stron kazda.",
    category: "human",
    emoji: "🔬",
  },
  {
    id: "hb13",
    text: "Ludzkie oko moze rozrozniac ok. 10 milionow roznych kolorow. Jednak ok. 8% mężczyzn i 0,5% kobiet ma jakis rodzaj ślepoty barw - najczesciej pomylenie czerwieni z zielenia.",
    category: "human",
    emoji: "👁️",
  },
  {
    id: "hb14",
    text: "Twoje wlosy rosna szybciej latem niz zima - cieplo przyspiesza metabolizm i cyrkulacje krwi w skore glowy. Wlos rosnie srednio ok. 15 cm rocznie i latem nawet o 20% szybciej.",
    category: "human",
    emoji: "💇",
  },

  // Jedzenie – dodatkowe
  {
    id: "f7",
    text: "Miod jest jedynym pokarmem, ktory sie nie psuje. W egipskich grobowcach znaleziono jadalne probki liczace ponad 3000 lat. Jego pH i wlasciwosci higroskopijne uniemozliwiaja wzrost bakterii.",
    category: "food",
    emoji: "🍯",
  },
  {
    id: "f8",
    text: "Orzeszki ziemne to nie orzechy - sa to rosliny strączkowe, bliskie krewne grochu i fasoli. Rosną pod ziemia. Podobnie: migdaly to pestki owocow, a orzechy wodne to nie orzechy, lecz jadalne bulwy.",
    category: "food",
    emoji: "🥜",
  },
  {
    id: "f9",
    text: "Ogurek jest botanicznie owocem - podobnie jak pomidor, dynia i awokado. Botanicznie owoc to dojrzala zalaznia rosliny z nasionami. W sensie kulinarnym to warzywo, ale nauka ma inne zdanie.",
    category: "food",
    emoji: "🥒",
  },
  {
    id: "f10",
    text: "Wasabi, ktore je sie w wiekszosci restauracji sushi poza Japonia, to w 99% przypadkow chrzan z zielonym barwnikiem. Prawdziwe wasabi jest niezwykle drogie i trudne w uprawie - rosnie tylko w czystych potokach gorskich.",
    category: "food",
    emoji: "🌿",
  },
  {
    id: "f11",
    text: "Brokuły to 'sztuczna' roslina - zostaly wyhodowane przez czlowieka ze zwyklej dzikiej kapusty w starozytnym Rzymie ok. 2000 lat temu. Podobnie kalafior, jarmuz i brukselka pochodza z tego samego przodka - Brassica oleracea.",
    category: "food",
    emoji: "🥦",
  },
  {
    id: "f12",
    text: "Pierwsze piwo warzono ok. 7000 lat temu w Mezopotamii. Robotnicy budujacy egipskie piramidy dostawali jako wynagrodzenie m.in. 4-5 litrow piwa dziennie - bylo bezpieczniejsze od wody i dostarczalo kalorii.",
    category: "food",
    emoji: "🍺",
  },
  {
    id: "f13",
    text: "Czekolada biała technicznie nie jest czekolada - nie zawiera kakao w proszku (masy kakaowej), tylko maslo kakaowe z cukrem i mlekiem. Wielu producentow i regulatorow nie uznaje jej za 'prawdziwa czekolade'.",
    category: "food",
    emoji: "🍫",
  },
  {
    id: "f14",
    text: "Chili powoduje 'palenie' dlatego, ze kapsaicyna laczy sie z tymi samymi receptorami bolowymi co cieplo. Mozg interpretuje sygnal jako oparzelnie - ale fizycznie zadna szkoda nie nastepuje. Stad uczucie jest intensywne, lecz bezpieczne.",
    category: "food",
    emoji: "🌶️",
  },
  {
    id: "f15",
    text: "Cebula sprawia, ze placze sie z innego powodu niz ostry smak. Przy krojeniu komorki uwalnaja enzym alliinaze, ktory wchodzi w reakcje i tworzy gaz drażniący oczy. Chlodzenie cebuli przed krojeniem spowalnia te reakcje.",
    category: "food",
    emoji: "🧅",
  },
  {
    id: "f16",
    text: "Makaron wynalezli Chinczycy, nie Wlosi. Najstarszy znany makaron - liczacy ok. 4000 lat - znaleziono w Chinach. Legenda o Marku Polo przywożacym makaron z Chin jest prawdopodobnie mitem.",
    category: "food",
    emoji: "🍝",
  },

  // Geografia – dodatkowe
  {
    id: "g7",
    text: "Ziemia nie jest idealna kula - jest splaszczona na biegunach i wybrzmiona na rowniku. Najwyzszy punkt mierzony od srodka Ziemi to nie Everest, lecz wulkan Chimborazo w Ekwadorze (ze wzgledu na wybrzuszenie rownikowe).",
    category: "geography",
    emoji: "🌐",
  },
  {
    id: "g8",
    text: "W Finlandii jest wiecej saun niz samochodow - ok. 3,3 mln saun na 5,5 mln mieszkancow. Sauna jest integralna czescia kultury finskiej od ponad 2000 lat i ma status dziedzictwa kulturowego UNESCO.",
    category: "geography",
    emoji: "🧖",
  },
  {
    id: "g9",
    text: "Ocean Spokojny jest tak wielki, ze zmiescilyby sie w nim wszystkie kontynenty razem wzięte. Jego powierzchnia wynosi ok. 165 mln km2, podczas gdy laczona powierzchnia wszystkich ladow to ok. 149 mln km2.",
    category: "geography",
    emoji: "🌊",
  },
  {
    id: "g10",
    text: "Argentyna pochodzi od lacinskiego 'argentum' (srebro) - Hiszpanie mysleli, ze znajda tu ogromne zloza srebra. W rzeczywistosci srebra prawie nie znalezli, ale nazwa pozostala.",
    category: "geography",
    emoji: "🇦🇷",
  },
  {
    id: "g11",
    text: "W norweskim Longyearbyen prawo zabrania umierac - ze wzgledu na permafrost ciala nie rozkladaja sie. Chorych i umierajacych przenosi sie na kontynent. Ostatni pogrzeb odbyl sie tu w 1950 roku.",
    category: "geography",
    emoji: "⚰️",
  },
  {
    id: "g12",
    text: "Islandia jest jednym z nielicznych krajow swiata bez komarow. Wulkaniczne warunki klimatyczne i brak odpowiednich stojacych zbiornikow wody przez odpowiednie pory roku uniemozliwiaja im rozmnazanie.",
    category: "geography",
    emoji: "🌋",
  },
  {
    id: "g13",
    text: "Amazonia wytwarza ok. 20% tlenu na Ziemi - dlatego nazywana jest 'plucami Ziemi'. W ciagu ostatnich 50 lat wycięto jednak ponad 17% puszczy amazonskiej, co ma globalny wplyw na klimat.",
    category: "geography",
    emoji: "🌿",
  },
  {
    id: "g14",
    text: "Kanada posiada najdluzsza linie brzegowa na swiecie - ok. 202 080 km (wlaczajac wyspy). Gdyby isc wzduż niej 8 godzin dziennie, droga zajelyby ponad 17 lat.",
    category: "geography",
    emoji: "🍁",
  },

  // Sztuka & Kultura – dodatkowe
  {
    id: "ar6",
    text: "Muzeum Luwr jest najwiekszym muzeum sztuki na swiecie - ma ponad 35 000 dziel na wystawie. Gdyby poswiecic kazdemu eksponatowi 30 sekund, ogladanie wszystkich zajelo by ponad 100 dni.",
    category: "art",
    emoji: "🏛️",
  },
  {
    id: "ar7",
    text: "Leonardo da Vinci byl nie tylko malarzem - zaprojektowal m.in. pierwszego humanoidalnego robota (ok. 1495), lotadlo, czolg i przenośny most. Wiekszosc jego wynalazkow nie zostala zrealizowana za jego zycia.",
    category: "art",
    emoji: "🤖",
  },
  {
    id: "ar8",
    text: "'Cisza' Johna Cage'a (4'33'') to utwr, w ktorym wykonawca przez 4 minuty i 33 sekundy nic nie gra. Cage twierdzil, ze kazdy dzwiek z otoczenia - kaszel, szept, wentylacja - staje się kompozycja.",
    category: "art",
    emoji: "🎵",
  },
  {
    id: "ar9",
    text: "Harry Potter zostal odrzucony przez 12 wydawcow zanim Bloomsbury go przyjelo. J.K. Rowling pisala go bedac samotna matka, częściowo w kawiarni bo nie miala ogrzewania w mieszkaniu.",
    category: "art",
    emoji: "📚",
  },
  {
    id: "ar10",
    text: "Rembrandt nalowal ok. 100 autoportretow - wiecej niz jakikolwiek inny artysta w historii. Stanowia one cos w rodzaju wizualnego dziennika jego zycia od mlodosci po starosc.",
    category: "art",
    emoji: "🖼️",
  },
  {
    id: "ar11",
    text: "Ksiazki z serii 'Wybierz swoja przygode' (Choose Your Own Adventure) sa jednymi z najlepiej sprzedajacych sie ksiazek dla dzieci w historii - ponad 250 mln sprzedanych egzemplarzy w 38 językach.",
    category: "art",
    emoji: "📖",
  },
  {
    id: "ar12",
    text: "Wielka Biblioteka Aleksandryjska nie splonela w jednym pozarze - to mit. Stopniowo chylila sie ku upadkowi przez kilkaset lat z powodu zmniejszajacego sie finansowania krolewskiego i politycznych zamieszek.",
    category: "art",
    emoji: "🔥",
  },
  {
    id: "ar13",
    text: "Kolor pomaranczowy ma nazwe od owocu, nie odwrotnie. Przed pojawieniem sie pomaranczy w Europie (ok. XV w.) Anglicy nazywali ten kolor 'żoltoczerwonym'. Slowo 'orange' pochodzi od arabskiego 'naranj'.",
    category: "art",
    emoji: "🍊",
  },

  // Sport – dodatkowe
  {
    id: "spt6",
    text: "Pierwsza olimpiada nowozytna (1896) byla otwarta dla amatorow - i dosłownie tak bylo. Niektorzy sportowcy dowiedzieli sie o zawodach bedac juz w Atenach i zapisali sie na miejscu. Turystow dopuszczono do startu.",
    category: "sports",
    emoji: "🏛️",
  },
  {
    id: "spt7",
    text: "Rekord meczu tenisowego to 11 godzin i 5 minut - Isner vs. Mahut na Wimbledonie 2010, rozgrywany przez 3 dni. Wynik w setcie decydujacym: 70-68. Dla perspektywy: przecietny mecz NBA trwa ok. 2 godziny.",
    category: "sports",
    emoji: "🎾",
  },
  {
    id: "spt8",
    text: "Maraton olimpijski z 1904 roku byl najdziwniejszym w historii. Zwyciezca przejechał wiekszość trasy samochodem i zostal zdyskwalifikowany. Medal dostal Thomas Hicks, ktory biegl na strychninie i koniaku - legalne 'srodki pobudzajace' tamtych czasow.",
    category: "sports",
    emoji: "🏅",
  },
  {
    id: "spt9",
    text: "Na igrzyskach olimpijskich w 1900 roku rozegrano konkurs strzelania do zywych gołebi. Belgijczyk Leon de Lunden zastzrelil 21 ptakow i zdobyl zloto. Nigdy wiecej nie wlaczono tej dyscypliny do programu olimpijskiego.",
    category: "sports",
    emoji: "🕊️",
  },
  {
    id: "spt10",
    text: "Pilka nozna ma oficjalne zasady od 1863 roku - jest jednym z mlodszych wsrod wielkich sportow. Cricket ma zasady z 1744, a baseball z 1845. Jednak pilka nozna stala sie najpopularniejszym sportem na swiecie w niecale 100 lat.",
    category: "sports",
    emoji: "⚽",
  },
  {
    id: "spt11",
    text: "Michael Jordan byl wyeliminowany z szkolnej druzyny koszykarskiej w 10. klasie. Zamiast rezygnowac, treczowal codziennie przed szkola. 'Kiedy bylem na lawce rezerwowych, motywowalo mnie to do dalszej pracy' - mowil pozniej.",
    category: "sports",
    emoji: "🏀",
  },
  {
    id: "spt12",
    text: "Tour de France w pierwszych edycjach (1903-1904) byl pelen skandali. Kolarze jeździli noca, skracali trasy i wsiadali do samochodow. Na pierwszym wyścigu zdyskwalifikowano czterech z pieciu czolowych zawodnikow.",
    category: "sports",
    emoji: "🚴",
  },

  // Historia – dodatkowe
  {
    id: "h21",
    text: "Biblioteka Aleksandryjska wcale nie splonela w jednym wielkim pozarze - podupadala stopniowo przez stulecia wskutek braku finansowania i kolejnych incydentow. To mit, ze jeden pozar zniszczyl caly antyczny dorobek wiedzy.",
    category: "history",
    emoji: "📚",
  },
  {
    id: "h22",
    text: "Pierwsza restauracja swiata otwarta w Paryzu w 1765 roku. Slowo 'restauracja' pochodzi od podawanego tam bulionu 'restaurujacego' (przywracajacego sily). Wczesniej mozna bylo jesc tylko w tawernach lub u prywatnych kucharzy.",
    category: "history",
    emoji: "🍽️",
  },
  {
    id: "h23",
    text: "Dinozaury wyginely 66 milionow lat temu, ale nie wszystkie - ptaki sa ewolucyjnymi potomkami dinozaurow i formalnie klasyfikowane sa jako dinozaury w systematyce biologicznej.",
    category: "history",
    emoji: "🦕",
  },
  {
    id: "h24",
    text: "Szachy wynaleziono w Indiach ok. VI w. n.e. - gra zwala sie 'chaturanga' i reprezentowala cztery galezie armii. Do Europy dotarla przez Persje i swiat arabski, co tlumaczycz nazwy figur.",
    category: "history",
    emoji: "♟️",
  },
  {
    id: "h25",
    text: "W starozytnym Egipcie zabicie kota - nawet przypadkowe - moglo grozic kara smierci. Herodot opisuje przypadek gdy Grek przypadkowo zabił kota i zostal zlinczowany przez tlum, mimo ze byl obcokrajowcem.",
    category: "history",
    emoji: "🐱",
  },

  // Nauka – dodatkowe
  {
    id: "s19",
    text: "Ludzki nos moze odrozniac ponad 1 bilion roznych zapachow - to znacznie wiecej niz wczesniej sadzono. Wczesniejsze szacunki mowily tylko o 10 000 zapachach, co koryguja badania z 2014 roku.",
    category: "science",
    emoji: "👃",
  },
  {
    id: "s20",
    text: "Piorun nagrzewa powietrze do ok. 30 000 K - to 5 razy wiecej niz temperatura powierzchni Slonca (ok. 5800 K). Szybkie rozszerzenie tego supergoracego powietrza tworzy grzmot.",
    category: "science",
    emoji: "⚡",
  },
  {
    id: "s21",
    text: "Ogien nie ma cienia. Cien powstaje gdy przedmiot blokuje swiatlo, ale ogien sam jest zrodlem swiatla - nie ma masy ani krawedzi zdolnej do rzucenia cienia.",
    category: "science",
    emoji: "🔥",
  },
  {
    id: "s22",
    text: "Calkowitosci wydobytego zlota w historii ludzkosci zmiescilyby sie w szesciu basenach olimpijskich - to ok. 190 000 ton. Zloto jest tak rzadkie, ze wszystko co wydobyto od tysiecy lat zajmuje wzglednie male miejsce.",
    category: "science",
    emoji: "🥇",
  },
  {
    id: "s23",
    text: "Kazdy czlowiek rodzi sie ze zdolnoscia do nauki dowolnego jezyka. Po 6-7 miesiacu zycia dziecko traci zdolnosc rozrozniania dzwiekow spoza jezyka swojej kultury - mechanizm zwany 'przycinaniem percepcyjnym'.",
    category: "science",
    emoji: "👶",
  },

  // Przyroda – dodatkowe
  {
    id: "n15",
    text: "Drzewa komunikuja sie przez podziemna siec grzybnii. Biologowie nazywaja ja 'wood wide web'. Drzewa przekazuja przez nia skladniki odzywcze, sygnaly chemiczne, a nawet 'karmia' chore sasiednie drzewa.",
    category: "nature",
    emoji: "🌲",
  },
  {
    id: "n16",
    text: "Flamingowie sa biale z natury - ich rozowy kolor pochodzi wylacznie z beta-karotenow w spozywaych glonach i krewetkach. Hodowlane flamingi bez odpowiedniej diety powoli bieleją.",
    category: "nature",
    emoji: "🦩",
  },
  {
    id: "n17",
    text: "Grzyb Armillaria ostoyae w Oregonie ma powierzchnie ok. 965 hektarow i szacowany wiek ok. 8650 lat - jest to prawdopodobnie najwiekszy i najstarszy organizm na Ziemi. Wiekszosc grzyba ukryta jest pod ziemia.",
    category: "nature",
    emoji: "🍄",
  },
  {
    id: "n18",
    text: "Teccze sa w rzeczywistosci pelna kolami - widzimy je jako luki tylko dlatego, ze linia horyzontu je przecina. Z samolotu lub z szczytu wodospadu mozna zobaczyc cala kolista tecze.",
    category: "nature",
    emoji: "🌈",
  },
  {
    id: "n19",
    text: "Bursztyn to skamieniale zywice drzew sprzed milionow lat. Zawarte w bursztynie owady i roslinnosc moga miec nawet 100 milionow lat i sa jednymi z najlepiej zachowanych skamienielin na swiecie.",
    category: "nature",
    emoji: "🟡",
  },

  // Kosmos – dodatkowe
  {
    id: "sp16",
    text: "Pulsary - wirajace gwiazdy neutronowe - sa tak precyzyjnymi zegarami, ze moga sluzyc jako kosmiczne GPS-y dla sond kosmicznych. Sa dokladniejsze niz ziemskie zegary atomowe.",
    category: "space",
    emoji: "⭐",
  },
  {
    id: "sp17",
    text: "Pluton ma piec ksiezycow, a jego najwiekszy - Charon - jest tak duzy wzgledem Plutona (ponad polowe jego sredni cy), ze obydwa obiekty kraza wokol wspolnego srodka masy lezacego poza Plutonem.",
    category: "space",
    emoji: "🪐",
  },
  {
    id: "sp18",
    text: "Galaktyka Andromedy zmierza wprost w strone Drogi Mlecznej z predkoscia ok. 110 km/s. Zderzenie nastapi za ok. 4,5 miliarda lat, ale szanse na kolizje konkretnych gwiazd sa minimalne - za duze odleglosci.",
    category: "space",
    emoji: "🌌",
  },
  {
    id: "sp19",
    text: "Na Saturnie pada diamentowy deszcz. Pioruny zamieniaja metan w sadze, ktora pod gigantycznym cisnieniem przeksztalca sie w grafit, a glebiej w diamenty, ktore opadaja do wnetrza planety.",
    category: "space",
    emoji: "💎",
  },
  {
    id: "sp20",
    text: "Kosmonauta Walerij Poljakow spedzil na stacji kosmicznej Mir 437 dni z rzedu (1994-1995) - to najdluzszy nieprzerwany pobyt czlowieka w kosmosie. Po ladowaniu nie mogl chodzic przez kilka tygodni.",
    category: "space",
    emoji: "🧑‍🚀",
  },

  // Zwierzeta – dodatkowe
  {
    id: "a19",
    text: "Koala ma odciski palcow niemal identyczne z ludzkimi. Nawet doswiadczeni eksperci sa dowi maja trudnosci z ich odroznieniem pod mikroskopem - to jedyne zwierze poza naczelnymi z tak podobnymi liniami papilarnymi.",
    category: "animals",
    emoji: "🐨",
  },
  {
    id: "a20",
    text: "Meduza Turritopsis dohrnii jest biologicznie niesmiertelna - gdy sie zestarzeje lub zostanie raniona, moze cofnac sie do stadium polipa i zaczac zycie od nowa. Naukowcy nazywaja ten proces 'odwrotem ontogenetycznym'.",
    category: "animals",
    emoji: "🪼",
  },
  {
    id: "a21",
    text: "Slonie potrafia rozpoznawac siebie w lustrze - to oznaka samoswiadomosci. Ta zdolnosc poza czlowiekiem posiadaja tylko szympansy, delfiny, orki i sroki. Slonie pokazuja tez empatię i oplakuja swoich zmarlych.",
    category: "animals",
    emoji: "🐘",
  },
  {
    id: "a22",
    text: "Niektore gatunki papug zyja ponad 80 lat - dluzej niz srednia ludzka dlugosc zycia w wielu krajach. Ara szkarlatna moze zyc nawet 100 lat. Dlatego papugi czesto 'przezyja' swoich wlascicieli.",
    category: "animals",
    emoji: "🦜",
  },
  {
    id: "a23",
    text: "Krowy maja najlepszych przyjaciol - badania naukowe wykazaly, ze krowy tworza silne wiezi z konkretnymi innymi krowami i wyraznie stresuja sie (wzrost tetna, gorzsze mleko), gdy sa od nich separowane.",
    category: "animals",
    emoji: "🐄",
  },

  // Technologia – dodatkowe
  {
    id: "t15",
    text: "Pierwszy spam e-mailowy wyslano w 1978 roku - Gary Thuerk z DEC wyslal niezamowiona reklame do 393 adresatow w sieci ARPANET. Za to historyczne 'osiagniecie' poniosl oficjalny reprymend.",
    category: "technology",
    emoji: "📧",
  },
  {
    id: "t16",
    text: "Zasada dzialania GPS jest nierozerwalna od teorii wzglednosci Einsteina. Bez korekt uwzgledniajacych relatywistyczne rozmieszenie czasu, GPS bladzilby o kilometry dziennie przez roznice grawitacyjne i predkosci.",
    category: "technology",
    emoji: "📡",
  },
  {
    id: "t17",
    text: "Pierwszy twardy dysk komputerowy z 1956 roku mial pojemnosc 3,75 MB i wazyl ok. tone (razem z szafa). Przechowywał tyle danych, ile wspolczesny plik JPEG srednij jakosci.",
    category: "technology",
    emoji: "💾",
  },
  {
    id: "t18",
    text: "Kod sterujacy lazikiem Curiosity na Marsie napisany byl m.in. w jezyku Python. To czyni Pythona jedynym jezykiem programowania aktualnie dzialajacym na innej planecie.",
    category: "technology",
    emoji: "🤖",
  },
  {
    id: "t19",
    text: "Kod binarny (0 i 1) nie jest jedyna mozliwa podstawa informatyki. W ZSRR w latach 60. budowano komputery trójkowe (ternarne, -1/0/1) - Setun mial pewne przewagi wydajnosciowe i byl uzywany na uczelniach.",
    category: "technology",
    emoji: "🖥️",
  },

  // Cialo czlowieka – dodatkowe
  {
    id: "hb15",
    text: "Ludzki mozg produkuje tyle energii elektrycznej, ze moze zasilic mala zarowke LED. Przecietna moc mozgu to ok. 20 watow - mniej niz tradycyjna zarowka, ale wystarczajaco duzo by zasilic smartfona.",
    category: "human",
    emoji: "💡",
  },
  {
    id: "hb16",
    text: "Kosci sa 5 razy silniejsze niz stal (na jednostke masy). Kosc udowa wytrzymuje statycznie ciezar ok. 8 ton - tyle co czolg. Ale lamiemy je latwiej, bo sa duzo lejsze niz stal.",
    category: "human",
    emoji: "🦴",
  },
  {
    id: "hb17",
    text: "Twoj zoladek produkuje nowa warstwe sluzu co dwa tygodnie, inaczej stopiłby sam siebie. Kwas zoladkowy ma pH ponizej 2, podobne do kwasu akumulatorowego - moze rozkladic metalowe monety.",
    category: "human",
    emoji: "🫀",
  },
  {
    id: "hb18",
    text: "Prawa i lewa reka maja zupelnie inny ekosystem bakteryjny. Badania wykazaly, ze ok. 85% bakterii na obu rekach jednej osoby jest roznych gatunkow - nawet po myciu sytuacja sie nie zmienia.",
    category: "human",
    emoji: "🤲",
  },
  {
    id: "hb19",
    text: "Ludzkie ucho moze slyszec roznice miedzy dzwiekami odleglymi o zaledwie 10 mikrosekund (0,00001 sekundy). Ten zmysl pozwala nam precyzyjnie okreslic kierunek i odleglosc zrodla dzwieku.",
    category: "human",
    emoji: "👂",
  },

  // Jedzenie – dodatkowe
  {
    id: "f17",
    text: "Banany technicznie sa jagodami botanicznie, a truskawki - nie. W botanice jagoda to owoc z nasionami wewnatrz miesistego osylka. Banana spelnaia ten warunek, truskawka nie - bo jej nasiona sa na zewnatrz.",
    category: "food",
    emoji: "🍌",
  },
  {
    id: "f18",
    text: "Ketchup byl w XIX w. sprzedawany jako lekarstwo na choroby watroby, biegunke i zoltaczke. Dopiero na poczatku XX w. stal sie popularnym sosem kuchennym, tracac etykiete farmaceutyku.",
    category: "food",
    emoji: "🍅",
  },
  {
    id: "f19",
    text: "Czekolada byla przez wieki napojem, nie slodycza stala. Majowie i Aztekowie pili gorzka, niesodzona czekolade mieszana z papryka i przyprawami - zupelnie inna niz wspolczesna czekolada mleczna.",
    category: "food",
    emoji: "🍫",
  },
  {
    id: "f20",
    text: "Jogurt zyje - zawiera miliardy zywych bakterii kwasu mlekowego. Jeden sloik jogurtu moze zawierac wiecej komorek bakteryjnych niz jest ludzi na calej Ziemi.",
    category: "food",
    emoji: "🥛",
  },
  {
    id: "f21",
    text: "Najdrozsza pizza na swiecie kosztowala ok. 12 000 dolarow i byla podawana w restauracji Industry Kitchen w Nowym Jorku. Ozdobiona byle jadalne zloto 24 karatowe, kawior beluga i trufle biale.",
    category: "food",
    emoji: "🍕",
  },

  // Geografia – dodatkowe
  {
    id: "g15",
    text: "Australia jest jedynym kontynentem, ktory jest rownoczesnie calkowicie jednym krajem. Caly kontynent zamieszkuje jeden narod-panstwo, bez zadnych innych suwerennych panstw na laladzie stalym.",
    category: "geography",
    emoji: "🦘",
  },
  {
    id: "g16",
    text: "Kanadyjskie jeziora zawieraja ok. 20% swiatowych zasobow slodkiej wody. Sama prowincja Ontario ma wiecej jezior niz wszystkie inne kraje swiata razem wziete.",
    category: "geography",
    emoji: "🍁",
  },
  {
    id: "g17",
    text: "Rosja rozciaga sie przez 11 stref czasowych - kiedy na zachodzie kraju jest 9 rano, na wschodzie (Kamchatka) jest juz 8 wieczor. Kraj zajmuje ok. 11% ladowej powierzchni Ziemi.",
    category: "geography",
    emoji: "🗺️",
  },
  {
    id: "g18",
    text: "Grenlandia jest technicznie najwieksza wyspa na swiecie, ale mniejsza niz Australia - ktora jednak jest klasyfikowana jako kontynent. Granica miedzy 'wyspa' a 'kontynentem' jest umowna.",
    category: "geography",
    emoji: "🧊",
  },
  {
    id: "g19",
    text: "Wiekszy obszar Afryki lezy w polnocnej polkuli niz w poludniowej - to powszechny mit, ze Afryka jest symetrycznie 'rownikowym' kontynentem. Równik przecina Afryke w 1/3 od dolu.",
    category: "geography",
    emoji: "🌍",
  },

  // Sztuka & Kultura – dodatkowe
  {
    id: "ar14",
    text: "Van Gogh sprzedal za zycia tylko jeden obraz - 'Czerwone winnice' za 400 frankow belgijskich. Dzis jego prace sa warte setki milionow dolarow, a 'Gwiezdzista noc' jest jednym z najczesciej reprodukowanych obrazow swiata.",
    category: "art",
    emoji: "🌻",
  },
  {
    id: "ar15",
    text: "Shakespeare wymyslil ponad 1700 slow, ktore weszly do jezyka angielskiego: 'bedroom', 'lonely', 'generous', 'obscene', 'critic', 'negotiate'. Bez Szekspira jezyk angielski bylby calkowicie inny.",
    category: "art",
    emoji: "🎭",
  },
  {
    id: "ar16",
    text: "Guernica Picassa (3,49 x 7,76 m) zostala namalowana w zaledwie 35 dni w odpowiedzi na bombardowanie baskijskiego miasta przez nazistowskie lotnictwo w 1937 roku. Obraz jest jednym z najslynniejszych antywojjennych dziel.",
    category: "art",
    emoji: "🖼️",
  },
  {
    id: "ar17",
    text: "Biblioteka Kongresu USA z 17 milionami ksiazek jest najwieksza biblioteka na swiecie. Gdyby ulozyc je w jeden rzad, ciag siegnalby ok. 1349 km - z Waszyngtonu do Chicago i z powrotem.",
    category: "art",
    emoji: "📖",
  },
  {
    id: "ar18",
    text: "Kopula katedry Santa Maria del Fiore we Florencji przez 130 lat czekala na swoj dach - nie wiedziano jak ja zbudowac. Brunelleschi opracowal rewolucyjna metode bez zewnetrznego rusztowania dopiero w 1420 roku.",
    category: "art",
    emoji: "⛪",
  },

  // Sport – dodatkowe
  {
    id: "spt13",
    text: "Badminton ma najszybszy serwis sposrod wszystkich sportow swiatowych - lotka moze leciec z predkoscia 493 km/h (rekord Lee Chong Weia z 2013 roku), szybciej niz pilka tenisowa, hokejowa czy squashowa.",
    category: "sports",
    emoji: "🏸",
  },
  {
    id: "spt14",
    text: "Baseballowa rekawica nie byla czescia gry od poczatku - profesjonalni gracze grali golymi rekami do ok. 1870 roku. Pierwsza rekawica nie miala palcow i wygladala jak zwykla rekawiczka.",
    category: "sports",
    emoji: "⚾",
  },
  {
    id: "spt15",
    text: "Curling - rzucanie kamieniami na lodzie - jest jednym z najstarszych sportow teamowych. Pierwsze udokumentowane rozgrywki w Szkocji pochodza z 1511 roku, starsze niz wiele wspolczesnych 'tradycyjnych' sportow.",
    category: "sports",
    emoji: "🥌",
  },
  {
    id: "spt16",
    text: "Olimpiada w 1904 roku w St. Louis: zwyciezca maratonu Fred Lorz (zdyskwalifikowany) przejezdzal czesc trasy samochodem. Prawdziwy zwyciezca Thomas Hicks biegl 'wspomagany' strychniną i brandy - obie substancje byly wtedy legalne.",
    category: "sports",
    emoji: "🏃",
  },
  {
    id: "spt17",
    text: "Tenis wymaga od profesjonalistow przebiegniecja ok. 3 km podczas jednego meczu - ale suma szybkich sprintow wynosi lacznie kilkadziesiat kilometrow. Nadgarstki tenisistow generuja sile 5-krotnie wyzszza niz ciezar rakiety.",
    category: "sports",
    emoji: "🎾",
  },

  // Muzyka – dodatkowe
  {
    id: "mu11",
    text: "Najdluzej trwajacy utow muzyczny - 'Organ2/ASLSP (As SLow aS Possible)' Johna Cage'a - jest wykonywany w kosciele w Halberstadzie w Niemczech i ma trwac 639 lat. Rozpoczal sie w 2001, koniec planowany na 2640 rok.",
    category: "music",
    emoji: "🎹",
  },
  {
    id: "mu12",
    text: "Jimi Hendrix nigdy nie uczyl sie muzyki formalnie i nie umial czytac nut. Swoj rewolucyjny styl na gitarze rozwinal calkowicie intuicyjnie, grajac lewą reką na prawostronnej gitarze odwróconej do gory nogami.",
    category: "music",
    emoji: "🎸",
  },
  {
    id: "mu13",
    text: "Slowo 'karaoke' pochodzi z japonskiego i znaczy dosłownie 'pusta orkiestra' (kara = pusty, oke = skrót od okesutora = orkiestra). Wynalazca karaoke - Daisuke Inoue - nigdy nie opatentował swojego wynalazku.",
    category: "music",
    emoji: "🎤",
  },
  {
    id: "mu14",
    text: "Beethoven komponowal muzyke po tym, jak calkowicie ogluhl - w tym slynna IX Symfonie z Oda do radosci. Podczas prawykonania IX Symfonii dyrygowal mimo ze nic nie slyszal i trzeba go bylo odwrocic, by zobaczyc oklaski.",
    category: "music",
    emoji: "🎼",
  },
  {
    id: "mu15",
    text: "Gitara elektryczna wynaleziona w 1931 roku - jej tworca Adolph Rickenbacker nazwal ja 'Frying Pan' (patelnia) od ksztaltu okraglego rezonatora. Wczesne modele mialy metalowe cialo i brzmienie bardzo rozne od wspolczesnych gitar.",
    category: "music",
    emoji: "🎵",
  },

  // Filmy & Seriale – dodatkowe
  {
    id: "mv11",
    text: "Najdrozej wycenianym filmem wszech czasow po korekcie o inflacje jest 'Kleopatra' z 1963 roku - produkcja kosztowala ok. 339 mln dolarow w dzisiejszych cenach. Niemal zbankrutowala studio 20th Century Fox.",
    category: "movies",
    emoji: "🎬",
  },
  {
    id: "mv12",
    text: "John Williams skomponowal muzyke do wiekszosci kultowych filmow Hollywood: Star Wars, Indiana Jones, Jaws, E.T., Jurassic Park, Harry Potter, Schindler's List, Oskar, Saving Private Ryan... Zdobyl 5 Oscarow i 54 nominacje.",
    category: "movies",
    emoji: "🎶",
  },
  {
    id: "mv13",
    text: "Film 'Ben-Hur' z 1959 roku wymagal 8 miesiecy krecenia samej sceny wyscigu rydwanow i zatrudnil 15 000 statystow. Wypadki na planie byly liczne - slynny mit o smierci kaskadera jest jednak niesprawdzony.",
    category: "movies",
    emoji: "🏆",
  },
  {
    id: "mv14",
    text: "Pulp Fiction Tarantino (1994) bylo nakrecone niechronologicznie - sceny nie odpowiadaja kolejnosci wydarzen. Ten zabieg narracyjny stal sie inspiracja dla setek pozniejszych filmow i pokazal, ze publika lubi byc wyzwana intelektualnie.",
    category: "movies",
    emoji: "🎥",
  },
  {
    id: "mv15",
    text: "Kostium Dartha Vadera z pierwszych Gwiezdnych Wojen (1977) kosztowal 10 000 dolarow. Dzis oryginalne rekwizyty z tej sagi sa warte miliony na aukcjach - helm Vadera sprzedano za ponad 900 000 dolarow.",
    category: "movies",
    emoji: "🦹",
  },

  // Polska – dodatkowe
  {
    id: "pl11",
    text: "Polska jest piatym co do wielkosci eksporterem mebli na swiecie i najwiekszym w UE. IKEA kupuje ok. 18% swoich produktow wlasnie w Polsce. Przemysl meblarski zatrudnia w Polsce ok. 170 000 osob.",
    category: "poland",
    emoji: "🛋️",
  },
  {
    id: "pl12",
    text: "Polska nazwa 'Polska' pochodzi od slowianskiego slowa 'pole' - oznaczajacego rownie lub otwarte pole. Pola uprawne i laki byly dominujacym elementem krajobrazu wczesnych ziem polskich zamieszkiwanych przez plemia Polan.",
    category: "poland",
    emoji: "🌾",
  },
  {
    id: "pl13",
    text: "W Polsce urodzil sie tworca jezyka Esperanto - Ludwik Lazarz Zamenhof (1859-1917) z Bialystoku. Stworzyl miedzynarodowy jezyk Esperanto jako narzedzie pokoju miedzy narodami w wieloetnicznym miescie.",
    category: "poland",
    emoji: "🗣️",
  },
  {
    id: "pl14",
    text: "Stare Miasto w Warszawie jest w ok. 85% rekonstrukcja. Po zniszczeniu przez Niemcow w 1944 roku odbudowano je na podstawie wedut Canaletta i archiwalnych fotografii - UNESCO wpisalo je jako przykladowa rekonstrukcje dziedzictwa.",
    category: "poland",
    emoji: "🏰",
  },
  {
    id: "pl15",
    text: "Polska ma az 17 wpisow na Liste Swiatowego Dziedzictwa UNESCO - m.in. kopalnie soli w Wieliczce, Bialowieza, Stare Miasto Krakowa i Auschwitz. To jeden z najwyzszych wskaznikow w Europie Srodkowej.",
    category: "poland",
    emoji: "🇵🇱",
  },

  // Psychologia
  {
    id: "psy1",
    text: "Efekt Dunninga-Krugera: osoby o malej wiedzy w danej dziedzinie systematycznie przeceniaja swoje kompetencje, podczas gdy eksperci czesto niedoceniaja wlasnej wiedzy wzglednie innych. Im mniej wiesz, tym bardziej pewien jestes siebie.",
    category: "psychology",
    emoji: "🧠",
  },
  {
    id: "psy2",
    text: "Efekt placebo jest tak silny, ze nawet 'otwarte placebo' - gdy pacjent wie, ze bierze pigulke bez substancji czynnej - przynosi mierzalne efekty terapeutyczne. Sam akt przyjetia pigulki aktywuje mechanizmy leczacze mozgu.",
    category: "psychology",
    emoji: "💊",
  },
  {
    id: "psy3",
    text: "Ludzka pamiec nie dziala jak nagranie wideo - jest rekonstruktywna. Za kazdym razem gdy wspominamy wydarzenie, nieznacznie je modyfikujemy. Fałszywe wspomnienia mozna wszczepic przez sugestie - to podstawa psychologii zeznaniowej.",
    category: "psychology",
    emoji: "🧩",
  },
  {
    id: "psy4",
    text: "Zjawisko 'deja vu' naukowcy wiaza z krotkim 'przesunieciem fazowym' miedzy przetwarzaniem swiadomym a nieswiadomym - mozg klasyfikuje nowe doswiadczenie jako 'stare' przez ulamek sekundy zanim koryguje blad.",
    category: "psychology",
    emoji: "🔄",
  },
  {
    id: "psy5",
    text: "Badania Milgrama (1961): az 65% uczestnikow bylo zdolnych do wymierzania pozornie boleznie silnych wstrzasow elektrycznych na polecenie autorytetu w bialym fartuchu. Eksperyment ujawnil ciemna strone poslusznosci spolecznej.",
    category: "psychology",
    emoji: "⚡",
  },
  {
    id: "psy6",
    text: "Efekt halo: gdy oceniamy kogos pozytywnie w jednej cesze (np. uroda lub pewnosc siebie), automatycznie i nieswiadomie przypisujemy mu pozytywne cechy w innych dziedzinach jak inteligencja czy uczciwosc.",
    category: "psychology",
    emoji: "😊",
  },
  {
    id: "psy7",
    text: "Muzyka wplywa na tempo zakupow: sklepy, ktore puszczaja wolna muzyke, generuja wyzsza sprzedaz, bo klienci chodza wolniej i dluzej przegladaja oferte. To swiadoma strategia marketingowa wielu sieci handlowych.",
    category: "psychology",
    emoji: "🎵",
  },
  {
    id: "psy8",
    text: "Mozg nie odroznii zywego wspomnienia od wyobrazni - obydwa aktywuja te same obszary neuronalne (szczegolnie hipokamp i kore przedczolowa). Dlatego intensywne marzenia moga wydawac sie 'prawdziwsze' niz rzeczywiste zdarzenia.",
    category: "psychology",
    emoji: "💭",
  },
  {
    id: "psy9",
    text: "Efekt Stroopa: czytamy slowa automatycznie i szybciej niz rozpoznajemy kolory. Jesli napisac slowo 'CZERWONY' niebieska czcionka, mozg konkuruje ze soba - identyfikacja koloru trwa dluzej. To dowod na automatyzm jezzykowy.",
    category: "psychology",
    emoji: "🔴",
  },
  {
    id: "psy10",
    text: "Paradoks wyboru: zbyt wiele mozliwosci prowadzi do paralizu decyzyjnego i wiekszego niezadowolenia z finalnego wyboru. Badania w sklepach pokazaly, ze witryna z 6 dzzemami sprzedaje lepiej niz z 24.",
    category: "psychology",
    emoji: "🤔",
  },
  {
    id: "psy11",
    text: "Ziewanie jest zazrazliwe nawet przez czytanie o ziewaniu - co wlasnie prawdopodobnie teraz doswiadczasz. To forma empatii: bardziej empatyczni ludzie 'zarazaja sie' ziewaniem czesciej i szybciej.",
    category: "psychology",
    emoji: "🥱",
  },
  {
    id: "psy12",
    text: "Confirmation bias (skrzywienie potwierdzenia) sprawia, ze szukamy informacji potwierdzajacych nasze przekonania i ignorujemy sprzeczne. To ewolucyjna pozostaloscc po czasach gdy szybka decyzja bylo wazniejsza niz dokladna.",
    category: "psychology",
    emoji: "🎯",
  },

  // Matematyka
  {
    id: "mat1",
    text: "Liczba Pi ma nieskonczona ilosc cyfr i nigdy sie nie powtarza w regularnym wzorze. Gdzies w nieskonczczonym ciagu cyfr Pi (3,14159...) znajdziesz swoja date urodzenia, numer telefonu i kazda inna sekwencje cyfr.",
    category: "math",
    emoji: "π",
  },
  {
    id: "mat2",
    text: "Paradoks urodzin: w grupie zaledwie 23 losowych ludzi jest ponad 50% szans, ze dwoje obchodzi urodziny tego samego dnia. W grupie 70 osob szansa przekracza 99%. Matematycy czesto wygrywaja zaklady dzieki temu paradoksowi.",
    category: "math",
    emoji: "🎂",
  },
  {
    id: "mat3",
    text: "Liczby pierwsze maja kluczowe zastosowanie w kryptografii. Algorytm RSA - podstawa bezpieczenstwa bankow i internetu - opiera sie na tym, ze rozklad ogromnych liczb na czynniki pierwsze jest praktycznie nieobliczalny.",
    category: "math",
    emoji: "🔐",
  },
  {
    id: "mat4",
    text: "Zero zostalo wynalezione niezaleznie przez Majow, Hindusow i Babilonczykow. Europejczycy poznali je dopiero w XI wieku dzieki arabskim matematykom. Bez zera nie istnialoby rachunki pozycyjne ani wspolczesna matematyka.",
    category: "math",
    emoji: "0️⃣",
  },
  {
    id: "mat5",
    text: "Paradoks Achillesa Zenona: Achilles scigajac zolwia 'matematycznie nigdy go nie dogoni', bo zawsze pozostaje jakas minimalna odleglosc. Rozwiazanie przyszlo dopiero 2000 lat pozniej - to matematyczny szereg zbiezny.",
    category: "math",
    emoji: "🐢",
  },
  {
    id: "mat6",
    text: "Fraktale to wzory powtarzajace sie w nieskonczonosc niezaleznie od skali przyblirzenia. Platki sniegu, ksztalty linii brzegowych i kalarepka romanesco maja naturalne ksztalty fraktalne, opisywane przez geometry Mandelbrota.",
    category: "math",
    emoji: "❄️",
  },
  {
    id: "mat7",
    text: "Ciag Fibonacciego (1, 1, 2, 3, 5, 8, 13, 21...) pojawia sie wszedzie w naturze: liczba platkow kwiatow, spirale muszli slimaków, ulozenie nasion slonecznika. Zlota proporcja wynikajaca z tego ciagu to ok. 1,618.",
    category: "math",
    emoji: "🌻",
  },
  {
    id: "mat8",
    text: "Georg Cantor udowodnil w 1874 roku, ze nie wszystkie nieskonczonosci sa rowne. Zbior liczb rzeczywistych jest 'wieksza' nieskonczonoscia niz zbior liczb naturalnych - to jedno z najbardziej mindblowing odkryc matematycznych.",
    category: "math",
    emoji: "♾️",
  },
  {
    id: "mat9",
    text: "Hipoteza Riemanna - jedno z 7 Problemow Milenijnych wartych milion dolarow nagrody - jest niesprawdzona od 1859 roku. Dotyczy rozmieszczenia liczb pierwszych i jest uwazana za najtrudniejszy niezrozwiazany problem matematyki.",
    category: "math",
    emoji: "🏅",
  },
  {
    id: "mat10",
    text: "Topologicznie kubek do kawy i paczek sa identycznym ksztaltem - obydwa maja dokladnie jeden otwor. Matematycy mowia zartobliwie, ze 'topolog nie odroznii kubka od paczka'. To przyklad matematyki niezaleznej od konkretnego ksztaltu.",
    category: "math",
    emoji: "☕",
  },
  {
    id: "mat11",
    text: "Zlota proporcja (phi ≈ 1,618) pojawia sie w architekturze, sztuce i naturze od tysiecy lat. Partenon w Atenach, piramidy w Gizie i obrazy Leonarda da Vinci mają proporcje zblizone do zlotego podzialu.",
    category: "math",
    emoji: "📐",
  },
  {
    id: "mat12",
    text: "Liczba 'googol' (jedynka z 100 zerami) jest mniejsza niz liczba atomow w obserwowalnym wszechwswiecie (szacowana na ok. 10^80). Nazwa firmy Google pochodzi wlasnie od 'googol' - symbolizujac ogrom indeksowanej informacji.",
    category: "math",
    emoji: "🔢",
  },

  // Jezyki swiata
  {
    id: "lng1",
    text: "Na swiecie mowi sie ok. 7000 jezykami. Polowa z nich jest zagrodzona wymarciemm i moze zniknac do konca XXI wieku, bo ma mniej niz 1000 rodzimych uzytkownikow. Co dwa tygodnie ginie jeden jezyk.",
    category: "languages",
    emoji: "🌐",
  },
  {
    id: "lng2",
    text: "Jezyk mandaryniski jest jezykiem ojczystym najwiekszej liczby ludzi na swiecie - ok. 920 milionow. Angielski ma ok. 380 mln native speakerow, ale jest pierwszym jezykiem komunikacji miedzynarodowej.",
    category: "languages",
    emoji: "🇨🇳",
  },
  {
    id: "lng3",
    text: "Jezyk piraha z Brazylii jest absolutnie wyjatkowy - nie ma liczb (nawet 'jeden' i 'dwa'), nie ma kolorow, nie ma czasu przeszlego ani przyszlego. Piraha mowia tylko o tym, co aktualnie widza lub doswiadczaja.",
    category: "languages",
    emoji: "🌿",
  },
  {
    id: "lng4",
    text: "Angielskie slowo 'set' ma ponad 430 definicji w Oxford English Dictionary - to slowo z najwieksza liczba znaczen w historii jezyka angielskiego. Samo definiowanie 'set' zajmuje w slownniku 60 000 slow.",
    category: "languages",
    emoji: "📖",
  },
  {
    id: "lng5",
    text: "Esperanto - stworzony sztuczny jezyk - ma ok. 2 milionow uzytkownikow na swiecie i kilka tysiecy native speakerow (dzieci wychowane od urodzenia w tym jezyku przez rodzicow-entuzjastow).",
    category: "languages",
    emoji: "🌍",
  },
  {
    id: "lng6",
    text: "Alfabet hawajski ma tylko 13 liter - 5 samoglosek (a, e, i, o, u) i 8 spolglosek. To jeden z najmniejszych alfabetow na swiecie. Wszystkie slowa hawajskie konczą sie samogloska.",
    category: "languages",
    emoji: "🌺",
  },
  {
    id: "lng7",
    text: "Polska gramatyka jest uznawana za jedna z najtrudniejszych na swiecie - ma 7 przypadkow, 3 rodzaje gramatyczne, rozbudowany system aspektow czasownikowych i wyjatkowo nieregularna wymowe.",
    category: "languages",
    emoji: "🇵🇱",
  },
  {
    id: "lng8",
    text: "W jezyku japonskim liczba mnoga dziala zupelnie inaczej niz w polskim - zamiast 'trzy koty' mowi sie 'kot, trzy sztuki', uzywajac specjalnych liczebnikow zaleznie od ksztaltu, wielkosci i natury obiektu.",
    category: "languages",
    emoji: "🇯🇵",
  },
  {
    id: "lng9",
    text: "Jezyki romanskie (wloski, francuski, hiszpanski, portugqlski, rumunski) wywoddza sie z 'laciny ludowej' - potocznego dialektu uzywaneego przez zwyklych Rzymian, rozneggo od klassycznej laciny Cycerona i Wirgilego.",
    category: "languages",
    emoji: "🏛️",
  },
  {
    id: "lng10",
    text: "Jezyki khoisan z poludnia Afryki uzywaja mlaskow jako pelnoprawnych glosek fonetycznych. Sa one oznaczane specjalnymi symbolami i sa praktycznie niemozliwe do nauczenia sie przez dorosla osobe bez wieloletniego cwiczenia.",
    category: "languages",
    emoji: "🌍",
  },
  {
    id: "lng11",
    text: "Slowo 'robot' pochodzi z jezyka czeskiego - od slowa 'robota' (ciezka, przymusowa praca). Wymyslil je Karel Capek w 1920 roku w sztuce teatralnej 'R.U.R.' Juz za zycia stal sie jednym z najpopularniejszych slow swiata.",
    category: "languages",
    emoji: "🤖",
  },
  {
    id: "lng12",
    text: "Statistyczny Polak aktywnie uzywa ok. 5000-10 000 slow, ale biernie rozumie 20 000-30 000. Polski slownik liczy szacunkowo ok. 250 000 slow. Dla porownania slownik jezyka angielskiego ma ponad 470 000 hasel.",
    category: "languages",
    emoji: "💬",
  },

  // Mitologia
  {
    id: "myth1",
    text: "Zeus (grecki) i Jowisz (rzymski) to ten sam bog pod roznymi imionami. Gdy Rzym podbił Grecje kulturowo (absorpcja kultury podbitej), przyswoisl sobie caly grecki panteon, zamieniajac tylko imiona bogow.",
    category: "mythology",
    emoji: "⚡",
  },
  {
    id: "myth2",
    text: "Syzyf z mitologii greckiej musiał wiecznie wtaczac glaz na wzgorze, z ktorego glaz ciagle spadal. Filozof Albert Camus ukazal Syzyfa jako metafore ludzkiej kondycji i absurdu istnienia - i zaleca, by wyobrazic sobie go szczestliwym.",
    category: "mythology",
    emoji: "🪨",
  },
  {
    id: "myth3",
    text: "W mitologii nordyckiej swiat ma sie skonczyc Ragnarokiem - wielka bitwa bogow i potworow. Co ciekawe, po tym koncu swiata ma nastapic odrodzenie nowego, lepszego swiata - mitologia nordycka ma optymistyczny finał.",
    category: "mythology",
    emoji: "🐉",
  },
  {
    id: "myth4",
    text: "Centaury (pol-czlowiek, pol-kon) mogly byc zainspirowane widokiem jezdzieckich nomadow przez pieszych Grekow. Dla kogoś kto nigdy nie widzial konia z jezdzcem, sylwetka mogla wygladac jak jeden tajemniczy organizm.",
    category: "mythology",
    emoji: "🐴",
  },
  {
    id: "myth5",
    text: "Pandora z mitologii greckiej otworzy la sloik (nie skrzynke - to blad tlumaczenia Erazma z Rotterdamu w XVI w.), wypuszczajac wszystkie nieszczecia swiata. Na dnie zostala tylko Nadzieja - co tez jest dwuznaczne.",
    category: "mythology",
    emoji: "📦",
  },
  {
    id: "myth6",
    text: "Smoki w mitologii europejskiej sa niszczycielskie i zle, ale w mitologii azjatyckiej (chinskiej, japonskiej, koreańskiej) smoki to pozytywne symbole madrosci, sily, plodnosci i szczescia. Ta sama postac, calkowicie odwrotna symbolika.",
    category: "mythology",
    emoji: "🐲",
  },
  {
    id: "myth7",
    text: "Herkules (Herakles) mial wykonac 12 prac, ale dwie zostaly oficjalnie zdyskwalifikowane przez krolwa Eurysteusa: praca za Hydre (pomogl mu Iolaos) i Stajnie Augiasza (wziął zaplat). Musial wykonac dwie dodatkowe prace.",
    category: "mythology",
    emoji: "💪",
  },
  {
    id: "myth8",
    text: "Egipski bog Thot mial glowe ibisa i byl patronem pisma, wiedzy i madrosci. Grecy identyfikowali go ze swoim Hermesem - tak powstal synkretyczny Hermes Trismegistos ('Trzykroc Wielki'), patron hermetycznej filozofii.",
    category: "mythology",
    emoji: "🦅",
  },
  {
    id: "myth9",
    text: "Aztecki bog Quetzalcoatl (Pierzasty Waz) byl patronem wiatru, wiedzy i sztuki. Mit o jego powrocie mial wedlug niektorych historykow wplyw na to, ze Cortes poczatkowo byl przyjmowany z ceremonialnym szacunkiem.",
    category: "mythology",
    emoji: "🐍",
  },
  {
    id: "myth10",
    text: "Feniks to mityczny ptak odradzajacy sie z popiolow - motyw ten pojawia sie niezaleznie w mitologiach egipskiej, greckiej, perskiej i chinskiej. Archetyp odrodzenia jest wiec prawdopodobnie wspolnym elementem ludzkiej psychiki.",
    category: "mythology",
    emoji: "🔥",
  },
  {
    id: "myth11",
    text: "W mitologii slowianskiej Weles byl bogiem podziemia, magii i bydla - i odwiecznym rywalem Peruna (boga pioruna i nieba). Ta walka kosmicznych sil symbolizowala cykl por roku, suszy i deszczu.",
    category: "mythology",
    emoji: "🌩️",
  },
  {
    id: "myth12",
    text: "Labirynt Minotaura z Krety mial realna podstawe - archeolodzy odkryli ogromny palac w Knossos z setkami korytarzy i pomieszczen. Dekoracje kretenske z bylami mogly inspiRowac mit o pol-czlowieku, pol-byku.",
    category: "mythology",
    emoji: "🏛️",
  },

  // Dla dzieci
  {
    id: "kid1",
    text: "Zyrafa ma jezyk gruby jak twoje ramie - ok. 45 cm! Moze nim czyscic wlasne uszy. Jezyk zyrafy jest ciemnofioletowy, bo chroni go przed poparzeniem slonecznym podczas dlugiego zrywania lisci.",
    category: "kids",
    emoji: "🦒",
  },
  {
    id: "kid2",
    text: "Motyle smakuja nogami! Maja receptory smakowe na stopach, zeby sprawdzac czy roslina nadaje sie do zlozenia jaj zanim na nia usiadą. To jak smakowanie jedzenia stopami zamiast jezykiem!",
    category: "kids",
    emoji: "🦋",
  },
  {
    id: "kid3",
    text: "Slonie boja sie pszczol! Naukowcy odkryli, ze sam dzwiek nagrania pszczol sprawia, ze stada sloni uciekaja w panice. Farmerzy w Afryce uzywaja tego do ochrony upraw przed sloniami.",
    category: "kids",
    emoji: "🐘",
  },
  {
    id: "kid4",
    text: "Osiornice maja TRZY serca i niebieskawa krew! Dwa serca pompuja krew do skrzeli (jak pluca), a trzecie do reszty ciala. Krew jest niebieska, bo zawiera miedz zamiast zelaza jak u nas.",
    category: "kids",
    emoji: "🐙",
  },
  {
    id: "kid5",
    text: "Mrowki potrafia dzwigac 50 razy swoj wlasny ciezar! Gdybys miał tyle sily co mrowka, mogl bys uniesc ok. 3 tony - tyle co duzy samochod dostawczy. A jest ich na swiecie 20 000 miliardow!",
    category: "kids",
    emoji: "🐜",
  },
  {
    id: "kid6",
    text: "Planeta Uran obraca sie 'na boku' - jej os jest przechylona az o 98 stopni! To jakby planeta toczyla sie jak pilka zamiast kraciowiec jak inne planety. Dlatego bieguno polarny ma 42-letnia zime!",
    category: "kids",
    emoji: "🪐",
  },
  {
    id: "kid7",
    text: "Pingwiny maja czarne plecy i biale brzuszki jako kamufylaz! Drapiezniki plywajace pod nimi widza biale brzuchy (jak jasne niebo), a drapiezniki z gory widza czarne plecya (jak ciemny ocean). Sprytny kostium!",
    category: "kids",
    emoji: "🐧",
  },
  {
    id: "kid8",
    text: "Trzmiele lataja 'wbrew fizyce' - ich ciala sa za ciezkie do rozmiaru skrzydel wedlug starych rownan. Ale lataja swietnie! Mace skrzydlami az 200 razy na sekunde i tworza wirujace poduszki powietrza.",
    category: "kids",
    emoji: "🐝",
  },
  {
    id: "kid9",
    text: "Chmury mimo ze wyglada puszyscie i lekko, waza NAPRAWDE duzo! Przecietna chmura cumulus (ta biala puchata) wazy ok. 500 ton - tyle co 83 slonie lub ponad 300 samochodow osobowych!",
    category: "kids",
    emoji: "☁️",
  },
  {
    id: "kid10",
    text: "Ksiezyc powoli oddala sie od Ziemi - o ok. 3,8 cm rocznie! Przez miliardy lat byl duzo blizej i zaslonial calego Slonca podczas zacmien idealnie. Za kilka miliardow lat zacmienia calkowite znikna na zawsze.",
    category: "kids",
    emoji: "🌙",
  },
  {
    id: "kid11",
    text: "Najciezszy owad na swiecie to chrabaszcz Goliat z Afryki - wazy do 100 gramow! Dla porownania przecietne jablko wazy ok. 180 gramow. Goliat to prawie pol jablka - latajacego pol jablka!",
    category: "kids",
    emoji: "🪲",
  },
  {
    id: "kid12",
    text: "Dinozaur Velociraptor byl wielki jak indyk, nie jak czlowiek jak w filmie 'Park Jurajski'! Filmowe raptory wzorowano faktycznie na Utahraptor, ktory byl duzo wiekszy. Prawdziwy Velociraptor mial piorka!",
    category: "kids",
    emoji: "🦖",
  },
  {
    id: "kid13",
    text: "Nasz nos nie spi podczas snu - wciaz wyczuwa zapachy nawet gdy my snimy. Dlatego zapach palacego sie jedzenia, dymu lub perfum moze Cie obudzic ze snu. To mechanizm przezycia dzialajacy non-stop.",
    category: "kids",
    emoji: "👃",
  },
  {
    id: "kid14",
    text: "Male kangury (joey) rodza sie niesamowicie malutkie - wielkosc ziarenka fasoli! Mierza zaledwie ok. 2 cm i waza mniej niz gram. Potem wdrapuja sie do torebki mamy i rosna tam przez kolejne miesace.",
    category: "kids",
    emoji: "🦘",
  },
  {
    id: "kid15",
    text: "Rozgwiazdy nie maja mozgu ani krwi! Zamiast krwi maja system wodny pompujacy wode morska przez cialo. I jesli stracą ramie, moga wyrosnac nowe! Niektorych gatunkow jeszcze jedno cialo wyrosnac moze z samego ramienia.",
    category: "kids",
    emoji: "⭐",
  },
  // historia h26-h35
  {
    id: "h26",
    text: "Pierwsze nowoczesne igrzyska olimpijskie w 1896 roku mialy tylko 14 krajow i 241 zawodnikow. Nie bylo ceremonii otwarcia ani olimpijskiej flagi. Grecy wygrali tabele medalow we wlasnym kraju.",
    category: "history",
    emoji: "🏅",
  },
  {
    id: "h27",
    text: "Abraham Lincoln jest jedynym prezydentem USA posiadajacym patent (nr 6469, 1849). Opatentował urzadzenie unoszace statki na mielizne przez wypelnianie balonow powietrzem. Urzadzenie nigdy nie zostalo wyprodukowane.",
    category: "history",
    emoji: "🎩",
  },
  {
    id: "h28",
    text: "W starozytnym Rzymie pralnie uzywaly moczu ludzkiego jako detergentu — zawiera amoniak wybielający tkaniny. Przed lazieniami publicznymi staly pojemniki gdzie przechodnie mogli oddac mocz dla pralni.",
    category: "history",
    emoji: "🏛️",
  },
  {
    id: "h29",
    text: "Jaskinia Lascaux we Francji z malowiadlami sprzed 17 000 lat zostala odkryta przez czterech nastolatkow w 1940 roku. Jest teraz zamknieta dla turystow — oddech ludzi powodowal niszczenie malowidel przez grzyby.",
    category: "history",
    emoji: "🎨",
  },
  {
    id: "h30",
    text: "Pierwsza transplantacja serca (1967) trwala 9 godzin. Chirurg Christiaan Barnard przeprowadzil ja w RPA. Pacjent przeyl 18 dni. Operacja wywolala swiatowa sensacje i zrewolucjonizowala medycyne.",
    category: "history",
    emoji: "❤️",
  },
  {
    id: "h31",
    text: "Stonehenge bylo budowane przez ok. 1500 lat — od ok. 3000 p.n.e. do 1500 p.n.e. To nie jeden zabytek z jednej epoki, ale wieloetapowa budowla modyfikowana przez wiele pokolen roznych kultur.",
    category: "history",
    emoji: "🗿",
  },
  {
    id: "h32",
    text: "Mit o Neronie grajacym na lutni podczas pozaru Rzymu (64 n.e.) jest falszywy. Kiedy Rzym plonal, Neron byl 50 km od miasta. Wrocil natychmiast i osobiscie nadzorował akcje ratunkowa i budowe nowych dzielnic.",
    category: "history",
    emoji: "🔥",
  },
  {
    id: "h33",
    text: "Najdluzej panujacy monarcha w historii to prawdopodobnie Pepi II z Egiptu — rzadzil ok. 90 lat (ok. 2278-2184 p.n.e.). Objal tron jako szesciolatka i jest najdluzej urzedujacym wladca w dziejach.",
    category: "history",
    emoji: "👑",
  },
  {
    id: "h34",
    text: "Pierwsza swiatowa poczta istniala w Persji ok. 550 p.n.e. Krol Cyrus Wielki stworzyl siec stalych stacji z konmi do przesylania wiadomosci. Herodot opisal ten system z podziwem — poczta grecka powstala 200 lat pozniej.",
    category: "history",
    emoji: "📜",
  },
  {
    id: "h35",
    text: "Gladiatorzy w Rzymie rzadko walczyli na smierc — smierc zawodnika byla finansowa strata dla wlasciciela. Wiekszosc walk konczyla sie poddaniem i decyzja tlumu o lasce lub smierci, ale zwyciezca rzadko zabijal.",
    category: "history",
    emoji: "⚔️",
  },
  // nauka s24-s33
  {
    id: "s24",
    text: "Wirus grypy mutuje tak szybko, ze szczepionki musza byc aktualizowane co roku. WHO przewiduje kazda zime ktory szczep bedzie dominowal, opierajac sie m.in. na danych z poludniowej polkuli, gdzie zima jest wczesniej.",
    category: "science",
    emoji: "🦠",
  },
  {
    id: "s25",
    text: "Czarne dziury nie wciagaja materii jak odkurzacz. Gdyby Slonce zastapic czarna dziura o tej samej masie, Ziemia krazylaby normalnie. Niebezpieczna jest tylko strefa blisko horyzontu zdarzen.",
    category: "science",
    emoji: "🕳️",
  },
  {
    id: "s26",
    text: "Czlowiek traci ok. 200 000 lazek skory dziennie — ok. 4 kg rocznie. Wiekszosc kurzu domowego to zlusczona ludzka skora i roztocza zywiacce sie nia. Cala skora zewnetrzna wymienia sie co 2-4 tygodnie.",
    category: "science",
    emoji: "🔬",
  },
  {
    id: "s27",
    text: "Mozg niemowlecia sklada sie w ok. 60% z tluszczu. Proporcjonalnie to wiecej niz jakikolwiek inny organ. Ten tluszcz otacza neurony i przyspiesza przewodnictwo nerwowe — stad waznosc kwasow omega-3 dla niemowlat.",
    category: "science",
    emoji: "👶",
  },
  {
    id: "s28",
    text: "Wzor linii papilarnych nie jest determinowany przez DNA — identyczne blizniaki maja rozne odciski palcow. Ksztalt linii papilarnych powstaje losowo podczas wzrostu plodu przez tarcie o scianki macicy.",
    category: "science",
    emoji: "👆",
  },
  {
    id: "s29",
    text: "Gwiazdy neutronowe sa tak geste, ze lyzeczka ich materii wazylaby ok. miliarda ton. Cala masa Slonca miesci sie potencjalnie w kuli o srednicy ok. 20 km. Powstaja po wybuchu supernowych.",
    category: "science",
    emoji: "⭐",
  },
  {
    id: "s30",
    text: "Kazda sekunda Slonce zamienia 4,2 miliona ton swojej masy w energie przez fuzje jadrowa. Mimo to straci tylko ok. 0,1% swojej masy przez cale 10 miliardow lat zycia — rezerwy wodoru sa ogromne.",
    category: "science",
    emoji: "☀️",
  },
  {
    id: "s31",
    text: "Enzymy biologiczne sa tak wydajne, ze reakcja chemiczna trwajaca milion lat bez katalizatora zachodzi w ulamku sekundy. Enzymy przyspieszaja reakcje biochemiczne nawet o 10 do potegi 17 razy.",
    category: "science",
    emoji: "⚗️",
  },
  {
    id: "s32",
    text: "Ozon w stratosferze chroni zycie przed promieniowaniem UV. Ale ozon na poziomie gruntu jest silnie toksyczny i uszkadza pluca. Ta sama czasteczka, dwa zupelnie rozne skutki dla zdrowia.",
    category: "science",
    emoji: "🌍",
  },
  {
    id: "s33",
    text: "Swiatlo poruszajac sie przez szklo zwalnia do ok. 200 000 km/s (vs 300 000 km/s w prozni). Ta zmiana predkosci powoduje zalamania promieni — to zasada dzialania soczewek, pryzmatow i okularow.",
    category: "science",
    emoji: "🌈",
  },
  // przyroda n20-n29
  {
    id: "n20",
    text: "Drzewa-matki w lesie aktywnie karma swoje potomstwo przez siec mykoryzy. Wysylaja do korzeni mlodszych drzew dodatkowe skladniki odzywcze i sygnaly chemiczne ostrzegajace przed szkodnikami.",
    category: "nature",
    emoji: "🌳",
  },
  {
    id: "n21",
    text: "Niektore gatunki bambusa kwitna tylko raz w zyciu — po 40-120 latach — a potem gina. Co zdumiewajace, cale lasy bambusowe tego samego gatunku kwitna rownoczesnie na calym swiecie, nawet gdy rosna w odleglych krajach.",
    category: "nature",
    emoji: "🎋",
  },
  {
    id: "n22",
    text: "Platki sniegu sa matematycznie unikalne — nie istnieja dwa identyczne. Kazdy powstaje w niepowtarzalnych warunkach temperatury i wilgotnosci, przechodzac przez miliony warstw atmosfery o nieco innych wlasnosciach.",
    category: "nature",
    emoji: "❄️",
  },
  {
    id: "n23",
    text: "Jezioro Bajkal na Syberii zawiera ok. 22% calkowitych zasobow niezamrozonej slodkiej wody na Ziemi. Ma ponad 1600 m glebokosci — jest najglebszym jeziorem swiata i najstarszym (ok. 25 milionow lat).",
    category: "nature",
    emoji: "💧",
  },
  {
    id: "n24",
    text: "Wulkan Mauna Kea na Hawajach mierzony od podstawy (dna oceanu) ma 10 210 m — wiecej niz Everest (8849 m). Wiekszosc tej gory jest pod woda, wiec oficjalnie Everest jest wyzszy nad poziomem morza.",
    category: "nature",
    emoji: "🌋",
  },
  {
    id: "n25",
    text: "Rzeka Amazonka odprowadza ok. 20% calej slodkiej wody wplywajacej do oceanow swiata. Jej ujscie jest tak ogromne, ze slodka woda zaznacza sie w Atlantyku setki kilometrow od brzegu Brazylii.",
    category: "nature",
    emoji: "🌊",
  },
  {
    id: "n26",
    text: "Bursztyn baltycki zawiera owady i roslinnosc sprzed nawet 44 milionow lat. Zachowanie jest tak doskonale, ze widac wlosy na odnozach owadow i krople rosy na lisciach — jedne z najlepiej zachowanych skamienielin.",
    category: "nature",
    emoji: "🟡",
  },
  {
    id: "n27",
    text: "Ok. 60 gatunkow ptakow nie potrafi latac — strus, emu, kiwi, kazuar, pingwin i inne. Co ciekawe, utrata zdolnosci lotu ewoluowala niezaleznie kilkadziesiat razy w historii ewolucji ptakow.",
    category: "nature",
    emoji: "🦤",
  },
  {
    id: "n28",
    text: "Ziemia jest jedyna znana planeta z tektonika plyt. Mars i Wenus maja jeden monolityczny pancerz. Tektonika plyt reguluje cykl weglowy i utrzymuje temperature planety — prawdopodobnie kluczowa dla istnienia zycia.",
    category: "nature",
    emoji: "🌏",
  },
  {
    id: "n29",
    text: "Row Marianski ma 11 km glebokosci. Gdyby wlozyc tam Mount Everest, jego szczyt bylby ok. 2 km pod powierzchnia wody. Na dnie panuje cisnienie 1000 razy wyzsze niz na powierzchni — mimo to zyje tam wiele organizmow.",
    category: "nature",
    emoji: "🌊",
  },
  // kosmos sp21-sp30
  {
    id: "sp21",
    text: "Europa — ksiezyc Jowisza — ma pod lodowa skorupa ocean cieklej wody, prawdopodobnie glebszy niz nasze ziemskie oceany. Jest jednym z najatrakcyjniejszych kandydatow na pozaziemskie zycie w Ukladzie Slonecznym.",
    category: "space",
    emoji: "🧊",
  },
  {
    id: "sp22",
    text: "Wszechswiat ma ok. 2 bilionow galaktyk — 10 razy wiecej niz szacowano 20 lat temu. Teleskopy Hubble i JWST stale odkrywaja galaktyki odleglejsze i starsze niz wczesniej znane.",
    category: "space",
    emoji: "🔭",
  },
  {
    id: "sp23",
    text: "Ziemia porusza sie wokol Slonca z predkoscia ok. 30 km/s, czyli 108 000 km/h. Caly Uklad Sloneczny kra wokol centrum galaktyki z predkoscia ok. 220 km/s. Nigdy nie jestesmy w tym samym miejscu w przestrzeni.",
    category: "space",
    emoji: "🌍",
  },
  {
    id: "sp24",
    text: "Gwiazdy tworzace konstelacje czesto nie sa blisko siebie w przestrzeni — niektore sa dziesiatki razy dalej od nas niz inne gwiazdy tej samej konstelacji. Konstelacje to zludzenie perspektywy z Ziemi.",
    category: "space",
    emoji: "✨",
  },
  {
    id: "sp25",
    text: "Temperatura powierzchni Wenus (ok. 465 st. C) jest wyzsza niz Merkurego — mimo ze Merkury jest blizej Slonca. Gesty dwutlenek wegla w atmosferze Wenus tworzy ekstremalny efekt cieplarniany.",
    category: "space",
    emoji: "🌡️",
  },
  {
    id: "sp26",
    text: "Sondy Voyager 1 i 2 wystrzelono w 1977 roku. Voyager 1 jest teraz najdalej oddalonym obiektem zrobionym przez czlowieka — ponad 23 miliardy km od Ziemi, w przestrzeni miedzygwiezdnej.",
    category: "space",
    emoji: "🛸",
  },
  {
    id: "sp27",
    text: "Czarna dziura w centrum naszej galaktyki — Sagittarius A* — ma mase ok. 4 milionow Slonc. Sfotografowano ja po raz pierwszy w 2022 roku. Nie wciaga calej galaktyki, bo jest zbyt daleko od wiekszosci gwiazd.",
    category: "space",
    emoji: "🌌",
  },
  {
    id: "sp28",
    text: "Kosmiczne tlo promieniowania mikrofalowego to echo Wielkiego Wybuchu sprzed 13,8 miliarda lat. Mozna je wykryc jako szum w starych telewizorach analogowych — czesc sniezki to promieniowanie z narodzin Wszechswiata.",
    category: "space",
    emoji: "📡",
  },
  {
    id: "sp29",
    text: "Mars ma dwa ksiezyce — Fobos i Deimos — nieregularne jak ziemniaki. Fobos powoli zbliza sie do Marsa i za ok. 50 milionow lat albo rozbije sie o powierzchnie, albo stanie sie pierscienniciem planety.",
    category: "space",
    emoji: "🪨",
  },
  {
    id: "sp30",
    text: "Na Uranie jeden dzien trwa 17 godzin, ale rok az 84 lata ziemskie. Przez przechylona os planety (98 st.) kazdy biegun ma 42 lata swiatla, a potem 42 lata ciemnosci.",
    category: "space",
    emoji: "🪐",
  },
  // zwierzeta a24-a33
  {
    id: "a24",
    text: "Krokodyle placza jedzac jedzenie — krokodyle lzy to prawdziwe zjawisko biologiczne. To nie wyrzuty sumienia — wciskanie jedzenia z duza sila powoduje fizyczne pobudzenie gruczolów lzowych polaczonych z zuchwa.",
    category: "animals",
    emoji: "🐊",
  },
  {
    id: "a25",
    text: "Muchy moga zmieniac kierunek w 30 milisekund. To sprawia ze prawie niemozliwe jest ich zlapanie w bezposredni sposob. Mucha oblicza trajektorie ucieczki zanim jeszcze faktycznie zaczniesz ruch reki.",
    category: "animals",
    emoji: "🪰",
  },
  {
    id: "a26",
    text: "Psy rozumieja emocje ludzkich twarzy — moga rozroznic smutna twarz od szczesliwej. To jedyne znane zwierze nie-naczelne zdolne do rozpoznawania ludzkich emocji na fotografiach.",
    category: "animals",
    emoji: "🐕",
  },
  {
    id: "a27",
    text: "Wieloryby humbak spiewaja piosenki trwajace do 30 godzin. Kazda populacja ma wlasny styl muzyczny, a melodie zmieniaja sie co sezon jak trendy — to jedyne poza czlowiekiem zwierze posiadajace modne piosenki.",
    category: "animals",
    emoji: "🐋",
  },
  {
    id: "a28",
    text: "Pchly moga skoczyc na odleglosc 200 razy wieksza niz ich cialo. Gdyby czlowiek mial taka proporcje skoku, przeskakiwalby przez wielopietrowe budynki z miejsca.",
    category: "animals",
    emoji: "🦟",
  },
  {
    id: "a29",
    text: "Niedzwiedzie polarne maja przezroczyste, nie biale wlosy. Wyglada na biale przez rozpraszanie swiatla jak wlokna swietlne. Pod futrem skora jest czarna — absorbuje cieplo sloneczne.",
    category: "animals",
    emoji: "🐻‍❄️",
  },
  {
    id: "a30",
    text: "Kalmary olbrzymie maja oczy o srednicy do 30 cm — to najwieksze oczy w krolestwie zwierzat. Potrzebuja ich do wykrywania slabej bioluminescencji drapieznikow na glebinach, gdzie nie dociera swiatlo dzienne.",
    category: "animals",
    emoji: "🦑",
  },
  {
    id: "a31",
    text: "Nagie kretoszczury zyja do 30 lat — 10 razy dluzej niz wiekszosc gryzoni. Praktycznie nie choruja na raka, nie czuja bolu wywolaneego przez kwasy i sa jedynymi zimnokrwistymi ssakami.",
    category: "animals",
    emoji: "🐀",
  },
  {
    id: "a32",
    text: "Wielblad nie przechowuje wody w garbach — to magazyn tluszczu jako zapas energii. Woda jest trzymana w krwi i tkankach. Wielblad moze stracic 40% masy ciala przez odwodnienie i przezyc.",
    category: "animals",
    emoji: "🐪",
  },
  {
    id: "a33",
    text: "Delfiny nadaja sobie nawzajem imiona — unikalne gwizdy po ktorych sie rozpoznaja. Kiedy jeden delfin wydaje gwizd-imie innego, ten reaguje. To dowod na zlozona komunikacje waleni.",
    category: "animals",
    emoji: "🐬",
  },
  // technologia t20-t29
  {
    id: "t20",
    text: "Zasada silnika parowego byla znana juz w starozytnosci — Hero z Aleksandrii zbudowal eolipile ok. 60 n.e. Ale nie rozwineto go przemyslowo przez 1700 lat, bo tania praca niewolnikow eliminowala potrzebe automatyzacji.",
    category: "technology",
    emoji: "♨️",
  },
  {
    id: "t21",
    text: "Pierwsza wiadomosc przez ARPANET (proto-internet) wyslana w 1969 roku brzmiala lo — zamiast login. System zawieszal sie po drugiej literze. To symboliczny poczatek internetu miedzy UCLA a Stanford.",
    category: "technology",
    emoji: "🌐",
  },
  {
    id: "t22",
    text: "Pierwszy komercyjny telefon komorkowy — Motorola DynaTAC 8000X (1983) — kosztowal 3995 dolarow i mial baterie na 30 minut rozmowy po 10 godzinach ladowania. Wazyl prawie kilogram i mial rozmiar ceglowki.",
    category: "technology",
    emoji: "📱",
  },
  {
    id: "t23",
    text: "Algorytmy rekomendacji sa tak potezne, ze az 70% calego czasu ogladania na YouTube pochodzi z filmow poleconych przez algorytm — nie z wyszukiwania ani subskrypcji. Algorytm ksztaltuje co widzi miliard uzytkownikow.",
    category: "technology",
    emoji: "🤖",
  },
  {
    id: "t24",
    text: "Druk 3D tkanek biologicznych (bioprinting) jest juz stosowany klinicznie. W 2022 roku wszczepiono pierwsze biowydrukowane ucho zrobione z komorek pacjenta. Naukowcy pracuja nad wydrukowanymi organami.",
    category: "technology",
    emoji: "🦾",
  },
  {
    id: "t25",
    text: "Procesor Apple M4 zawiera 28 miliardow tranzystorow na ukladzie mniejszym niz paznokiec. Tranzystory maja teraz rozmiar zaledwie kilku atomow — jestesmy blisko fizycznych granic miniaturyzacji krzemu.",
    category: "technology",
    emoji: "💻",
  },
  {
    id: "t26",
    text: "Bateria litowo-jonowa wynaleziona przez Johna Goodenougha zrewolucjonizowala swiat. W 2019 roku Goodenough zostal laureatem Nobla w wieku 97 lat — najstarszym w historii. Jego wynalazek zasila kazdy wspolczesny smartfon.",
    category: "technology",
    emoji: "🔋",
  },
  {
    id: "t27",
    text: "Superkomputer Frontier w USA osiaga predkosc 1,1 eksFLOPS — to 10 do potegi 18 operacji na sekunde. Tyle obliczen co gdyby kazdy czlowiek na Ziemi liczyl miliard dzialan na sekunde przez ponad 4 lata.",
    category: "technology",
    emoji: "🖥️",
  },
  {
    id: "t28",
    text: "Proteza konczyny sterowana myslami (Brain-Computer Interface) jest uzywana klinicznie od ok. 2015 roku. Pacjenci z amputowanymi konczynnami moga sterowac protetyczna reka samymi impulsami mozgowymi.",
    category: "technology",
    emoji: "🦿",
  },
  {
    id: "t29",
    text: "Technologia CRISPR umozliwia edycje konkretnych genow z precyzja niemozliwa wczesniej. W 2023 roku FDA zatwierdzila pierwsza terapie oparta na CRISPR — na anemie sierpowata. Rewolucja medyczna dopiero sie zaczyna.",
    category: "technology",
    emoji: "🧬",
  },
  // cialo czlowieka hb20-hb29
  {
    id: "hb20",
    text: "Ludzkie cialo w spoczynku produkuje ok. 80 watow ciepla — tyle co slaba zarowka. Podczas intensywnego wysilku fizycznego produkcja ciepla wzrasta do nawet 1000 watow — stad intensywne pocenie sie.",
    category: "human",
    emoji: "🌡️",
  },
  {
    id: "hb21",
    text: "Geny dwoch dowolnych ludzi sa identyczne w 99,9%. Pozostale 0,1% roznicy odpowiada za wszystko co nas rozni: kolor oczu, wzrost, podatnosc na choroby i wyglad zewnetrzny.",
    category: "human",
    emoji: "🧬",
  },
  {
    id: "hb22",
    text: "Watroba jest jedynym organem zdolnym do pelnej regeneracji. Mozna usunac 70% watroby chirurgicznie i w ciagu 6-8 tygodni odrosnie do normalnego rozmiaru. To umozliwia dawstwo watroby za zycia.",
    category: "human",
    emoji: "🟤",
  },
  {
    id: "hb23",
    text: "Bez snu mozna umrzec szybciej niz bez jedzenia. Bez snu smierc nastepuje po ok. 10-11 dniach. Rekord niespania bez srodkow stymulujacych to 11 dni i 25 minut — pobity przez Randy'ego Gardnera w 1964 roku.",
    category: "human",
    emoji: "😴",
  },
  {
    id: "hb24",
    text: "Szpik kostny produkuje ok. 2-3 milionow czerwonych krwinek na sekunde. Kazda krwinka zyje ok. 120 dni i jest odpowiedzialna za transport ok. miliarda czasteczek tlenu przez caly ten czas.",
    category: "human",
    emoji: "🩸",
  },
  {
    id: "hb25",
    text: "Mrowienie zaspanej nogi to efekt kompresji nerwow, nie braku krwi jak potocznie sie sadzi. Ucisk blokuje przewodzenie impulsow nerwowych. Krew krazy normalnie — stad uczucie powraca natychmiast po odblokowaniu.",
    category: "human",
    emoji: "🦵",
  },
  {
    id: "hb26",
    text: "Czlowiek jest jednym z nielicznych ssakow niezdolnych do samodzielnej syntezy witaminy C. Wiekszosc ssakow produkuje ja w watrobie. Stracilismy te zdolnosc ok. 60 milionow lat temu, bo dieta przodkow byla bogata w owoce.",
    category: "human",
    emoji: "🍊",
  },
  {
    id: "hb27",
    text: "Ludzki nos przechodzi cykl co ok. 2-4 godziny, gdzie jedno nozdre jest dominujace a drugie odpoczywa i zmniejsza sie. Ten cykl (nasal cycle) trwa cala dobe, nawet podczas snu.",
    category: "human",
    emoji: "👃",
  },
  {
    id: "hb28",
    text: "To co widzisz to w znacznej mierze rekonstrukcja mozgu. Mozg uzupelnia slepe plamy, wygladza obraz, stabilizuje drgania i przewiduje ruch. Az 40% kory mozgowej przetwarza informacje wzrokowe.",
    category: "human",
    emoji: "👁️",
  },
  {
    id: "hb29",
    text: "Ludzkie pluca maja laczna powierzchnie wymiany gazowej ok. 70 metrow kwadratowych — mniej wiecej polowe boiska tenisowego. Zawdzieczamy to milionom mikroskopijnych pecherzykow plucnych.",
    category: "human",
    emoji: "🫁",
  },
  // jedzenie f22-f31
  {
    id: "f22",
    text: "Wasabi podawane w wiekszosci restauracji sushi to prawie nigdy prawdziwe wasabi — to chrzan z barwnikiem. Prawdziwe wasabi (Wasabia japonica) musi byc scierane na biezaco i traci aromat po 15 minutach.",
    category: "food",
    emoji: "🥬",
  },
  {
    id: "f23",
    text: "Slowo kompan (companion) pochodzi z laciny com-panis — ten kto je z toba chleb. Chleb byl przez wieki waluta — w starozytnym Egipcie robotnicy dostawali chleb i piwo jako platnosc za prace.",
    category: "food",
    emoji: "🍞",
  },
  {
    id: "f24",
    text: "Rozowy grejpfrut zostal wyhodowany przez naswietlanie bialego grejpfruta promieniami gamma w 1958 roku. Mutacja przez promieniowanie jest stosowana w hodowli roslin — wiele wspolczesnych odmian to efekty takich zabiegow.",
    category: "food",
    emoji: "🍊",
  },
  {
    id: "f25",
    text: "Herbata jest najszerzej spozywanym napojem na swiecie po wodzie — ok. 3 miliardy filizanek dziennie. Zielona i czarna herbata to liscie tego samego krzewu (Camellia sinensis), roznia sie tylko dlugoscia utleniania.",
    category: "food",
    emoji: "🍵",
  },
  {
    id: "f26",
    text: "Czosnek byl przez wieki uzywany jako lek przeciwbakteryjny. W I wojnie swiatowej stosowano go do odkazenia ran. Louis Pasteur badal jego wlasnosci antybakteryjne w 1858 roku. Allicyna ma potwierdzone dzialanie antybiotyczne.",
    category: "food",
    emoji: "🧄",
  },
  {
    id: "f27",
    text: "Sol jest jedynym mineralem regularnie spozywanym przez czlowieka w stanie nieprzerobionym. Jej znaczenie bylo tak wielkie, ze dala poczatek slowu salary — zolnierze rzymscy dostawali czesc wynagrodzenia w soli.",
    category: "food",
    emoji: "🧂",
  },
  {
    id: "f28",
    text: "Mango jest oficjalnie narodowym owocem jednoczesnie Indii, Pakistanu i Filipin. Indie produkuja ok. 40% swiatowego mango, ale przez ogromne spozrycie wewnetrzne sa jednym z mniejszych eksporterow.",
    category: "food",
    emoji: "🥭",
  },
  {
    id: "f29",
    text: "Kiszona kapusta zawiera wiecej korzystnych bakterii probiotycznych niz wiekszosc suplementow. Jedna porcja moze zawierac do 1 miliarda jednostek CFU roznych szczepow bakterii kwasu mlekowego.",
    category: "food",
    emoji: "🥗",
  },
  {
    id: "f30",
    text: "Oliwa z oliwek extra virgin degraduje sie pod wplywem swiatla i ciepla. Cienkie ciemne butelki i chlodne przechowywanie to koniecznosc funkcjonalna, nie estetyka.",
    category: "food",
    emoji: "🫒",
  },
  {
    id: "f31",
    text: "Kawior beluga moze kosztowac do 35 000 dolarow za kilogram. Jesiotr beluga produkuje ikre dopiero po 20-25 latach zycia. Gatunek jest krytycznie zagrozony, wiec legalna produkcja jest scisle regulowana.",
    category: "food",
    emoji: "🐟",
  },
  // geografia g20-g29
  {
    id: "g20",
    text: "Antarktyka jest jedynym miejscem na Ziemi bez wlasciciela. Miedzynarodowy Traktat Antarktyczny (1959) zamrozil wszelkie roszczenia terytorialne. 54 panstwa podpisaly traktat zakazujacy dzialalnosci wojskowej.",
    category: "geography",
    emoji: "🧊",
  },
  {
    id: "g21",
    text: "Tokio jest oficjalnie najwiekszym obszarem metropolitalnym na swiecie — ok. 37-38 milionow mieszkancow. To wiecej niz cala Polska, zamieszkujaca teren kilkakrotnie wiekszy.",
    category: "geography",
    emoji: "🗼",
  },
  {
    id: "g22",
    text: "Kazachstan jest najwiekszym srodkowoladowym krajem na swiecie (bez dostepu do oceanu). Jako 9. co do powierzchni kraj swiata zajmuje ogromny obszar — od Morza Kaspijskiego do stepu mongolskiego.",
    category: "geography",
    emoji: "🏔️",
  },
  {
    id: "g23",
    text: "Dlugosc linii brzegowej Norwegii — wliczajac fiordy i wyspy — to ok. 100 000 km. Dla porownania obwod calej Ziemi to ok. 40 000 km. Norwegia ma wiecej linii brzegowej niz cala Afryka.",
    category: "geography",
    emoji: "🌊",
  },
  {
    id: "g24",
    text: "USA i Rosja sa najblizsze na wyspach Diomede na Morzu Beringa — odleglosc miedzy Wielkim Diomede (Rosja) a Malym Diomede (USA) wynosi zaledwie 3,8 km. Przechodzi tam miedzynarodowa linia daty.",
    category: "geography",
    emoji: "🗺️",
  },
  {
    id: "g25",
    text: "Chiny maja jedna strefe czasowa mimo ze geograficznie powinny miec 5 (jak USA). To decyzja polityczna z 1949 roku. W zachodnim Xinjiang oficjalny zachod slonca wypada czasem dopiero o 22:00.",
    category: "geography",
    emoji: "🇨🇳",
  },
  {
    id: "g26",
    text: "Mongolia jest najrzadziej zaludnionym krajem na swiecie — ok. 2 osoby na km2. To kraj wielki jak Polska x8, a zamieszkuje go mniej ludzi niz Warszawa. W Mongolii jest wiecej koni niz mieszkancow.",
    category: "geography",
    emoji: "🏕️",
  },
  {
    id: "g27",
    text: "Bhutan jest jedynym krajem na swiecie, ktory oficjalnie mierzy Gross National Happiness (Indeks Szczescia Narodowego) jako wskaznik polityki panstwa, obok PKB. Telewizja byla zakazana do 1999 roku.",
    category: "geography",
    emoji: "🏔️",
  },
  {
    id: "g28",
    text: "Jezioro Bajkal na Syberii zawiera ok. 22% wszystkich niezamrozonych zasobow slodkiej wody na Ziemi. Gdyby oproznic wszystkie rzeki swiata i wpompowywac wode, pelnienie Bajkalu trwaloby caly rok.",
    category: "geography",
    emoji: "💧",
  },
  {
    id: "g29",
    text: "Watykan jest najmniejszym panstwem na swiecie (0,44 km2 i ok. 800 mieszkancow), ale ma wlasny bank, stacje radiowa, supermarket, apteke i kolejke. Na terenie nie obowiazuje wiekszosc wloskich praw.",
    category: "geography",
    emoji: "⛪",
  },
  // sztuka ar19-ar28
  {
    id: "ar19",
    text: "Mona Lisa jest zaskakujaco mala — zaledwie 77 x 53 cm. Wiekszosc turystow jest rozczarowana rzeczywistym rozmiarem. Wystawiona jest za kuloodpornym szklem, 4 metry od widzow, co utrudnia ogladanie szczegolów.",
    category: "art",
    emoji: "🖼️",
  },
  {
    id: "ar20",
    text: "Powiessc La Disparition Georges'a Pereca (1969) to 300 stron bez ani jednego uzycia litery e — najpopularniejszej litery francuskiego alfabetu. Ta technika literacka to lipogram. Przetlumaczono ja rowniez bez tej litery.",
    category: "art",
    emoji: "📚",
  },
  {
    id: "ar21",
    text: "Mozart jest pochowany w nieoznakowanej zbiorowej mogile — tak chowano w Wiedniu osoby ze sredniej klasy za jego czasow. Dokladne miejsce pochowku Mozarta nie jest znane; pomnik na cmentarzu to tylko upamietnienie.",
    category: "art",
    emoji: "🎼",
  },
  {
    id: "ar22",
    text: "Pierwsza powesc w historii to Opowiesc o Genji, napisana ok. 1008 roku przez japonska dworzanke Murasaki Shikibu. Wyprzedza europejska powiesc o ponad 600 lat i jest uwazana za arcydzielo literatury swiatowej.",
    category: "art",
    emoji: "📖",
  },
  {
    id: "ar23",
    text: "Michelangelo malowal Kaplice Sykstyska NIE lezac na plecach — to mit filmowy. Stal z glowa zadarta do tylu lub na rusztowaniu. Po zakonczeniu pracy mial powazne problemy ze wzrokiem i kregoslupem.",
    category: "art",
    emoji: "🎨",
  },
  {
    id: "ar24",
    text: "Japonskie kintsugi to sztuka naprawy potluczonych naczyni zlotem. Filozofia tej techniki celebruje niedoskonalosc — pekniecia i historia czynia przedmiot piekniejszym, nie gorszym.",
    category: "art",
    emoji: "🍵",
  },
  {
    id: "ar25",
    text: "Najstarsza znana melodia muzyczna to Hymn Huryjski nr 6, zapisany na glinianej tabliczce ok. 1400 p.n.e. w Ugarit (dzisiejsza Syria). Archeolodzy odtworzyli ja na starozytnych instrumentach.",
    category: "art",
    emoji: "🎵",
  },
  {
    id: "ar26",
    text: "Architektura gotycka (ostre luki, witraze, przypory) powstala z inzynierii, nie dla piekna — ostrolukie sklepienia rozkladaja ciezar na boki, co umozliwilo budowe wyzszych scian z wiekszymi oknami.",
    category: "art",
    emoji: "⛪",
  },
  {
    id: "ar27",
    text: "Teatr kabuki w Japonii grany jest tylko przez mezczyzn (w rolach kobiet takze), ale mial kobiecy poczatek — zalozycielka Okuni w XVII w. grala w meskich strojach. Wladze zakazaly kobiet dla przyzwoitosci.",
    category: "art",
    emoji: "🎭",
  },
  {
    id: "ar28",
    text: "Salvador Dali zasypial na krzyesle z metalowym kluczem w rece i talerzem pod nim. Gdy zasypial, klucz wypadal, halas budzil go. Mogl wowczas szkicowac obrazy ze stanu polsnu i dostepu do podswiadomosci.",
    category: "art",
    emoji: "🕰️",
  },
  // sport spt18-spt27
  {
    id: "spt18",
    text: "Maraton ma 42,195 km, bo taka trase wyznaczono na Olimpiadzie w Londynie w 1908 roku — wydluzona o 385 jardow, zeby meta znajdowala sie pod balkonem krolewskim. Ta przypadkowa odleglosc stala sie miedzynarodowym standardem.",
    category: "sports",
    emoji: "🏃",
  },
  {
    id: "spt19",
    text: "Keglarstwo bylo zakazane w Connecticut az do 1841 roku. Zakaz obchodzono dodajac 10. kegel zamiast 9, tworzac wspolczesny ten-pin bowling. Prawo zakazywalo nine-pin bowling i tak zostalo pominiete kreatywnie.",
    category: "sports",
    emoji: "🎳",
  },
  {
    id: "spt20",
    text: "Wyobrazeniowe cwiczenia mentalne poprawiaja wyniki fizyczne nawet bez ruszania cialem. Badania wykazaly, ze wyobrazanie sobie cwiczen przez 5 dni tworzy te same zmiany neuronalne w mozgu co faktyczne cwiczenie.",
    category: "sports",
    emoji: "🧠",
  },
  {
    id: "spt21",
    text: "Pilkarz w Premier League biega srednio 10-13 km podczas jednego meczu. Pomocnicy biegaja wiecej niz napastnicy i obronce — ich pole pracy to cale boisko. Suma sprintow jest krotsza, ale intensywnosc duzo wyzsza.",
    category: "sports",
    emoji: "⚽",
  },
  {
    id: "spt22",
    text: "Sumo ma scisle regulowany 5-minutowy ceremonial przed walka, ktora sama trwa czesto zaledwie kilka sekund. Zawodnicy sypią sol (oczyszczenie), przytupuja (wyganiac zle duchy) i czekaja az obydwaj beda gotowi.",
    category: "sports",
    emoji: "🏋️",
  },
  {
    id: "spt23",
    text: "Szybowce moga pokrywac setki kilometrow bez silnika. Rekord odleglosci to 3009 km. Piloci wykorzystuja termiki (kolumny cieplego powietrza) i fale gorskie jak ptaki — to sztuka czytania atmosfery.",
    category: "sports",
    emoji: "🛩️",
  },
  {
    id: "spt24",
    text: "Reinhold Messner byl pierwszym czlowiekiem na szczycie Everestu bez dodatkowego tlenu (1978) i pierwszym solo bez tlenu (1980). Udowodnil, ze mozg i cialo moga wiecej niz sadzono.",
    category: "sports",
    emoji: "⛰️",
  },
  {
    id: "spt25",
    text: "Wspinaczka skalna stala sie dyscyplina olimpijska dopiero w 2020 roku (Tokio). Tymczasem wspinaczka jako aktywnosc ma historię siegajacą co najmniej XIX w. Uznanie olimpijskie przyszlo bardzo pozno.",
    category: "sports",
    emoji: "🧗",
  },
  {
    id: "spt26",
    text: "Szachy sa gra z ponad 10 do potegi 120 mozliwymi partiami — wiecej niz atomow w obserwowalnym wszechswiecie (ok. 10 do 80). Dlatego komputery nie obliczaja wszystkich mozliwosci, ale korzystaja z heurystyk.",
    category: "sports",
    emoji: "♟️",
  },
  {
    id: "spt27",
    text: "W Formule 1 na kierowce dzialaja przeciazenia 5-6G w zakretach. Karki kierowcow musza wytrzymac sile rowna 5-6 razy masie glowy. Dlatego ich szyje sa tak rozbudowane fizycznie przez specyficzny trening.",
    category: "sports",
    emoji: "🏎️",
  },
  // muzyka mu16-mu25
  {
    id: "mu16",
    text: "Najlepiej sprzedajacy sie singiel wszech czasow to White Christmas Binga Crosby'ego z 1942 roku — ponad 50 milionow egzemplarzy fizycznych. Nagrano go w zaledwie 18 minut i stal sie symbolem Bozego Narodzenia.",
    category: "music",
    emoji: "🎅",
  },
  {
    id: "mu17",
    text: "Pentatonika durowa (5 nut zamiast 7) pojawia sie niezaleznie w muzyce chinskiej, afrikanskiej, celtyckiej i country. Neurolodzy badaja czy ta skala jest naturalna dla mozgu — moze byc wbudowana w ludzka percepcje dzwieku.",
    category: "music",
    emoji: "🎵",
  },
  {
    id: "mu18",
    text: "Fenomen earworm — melodia ktora wbija sie w glowe — jest badany naukowo. Prostolinijne melodie z niespodziewanym skokiem czesto zostaja dluzej. Baby Shark, Macarena, YMCA to klasyczne przyklady earwormow.",
    category: "music",
    emoji: "🧠",
  },
  {
    id: "mu19",
    text: "Spiewacy operowi projektuja glos na widownie 1000+ osob bez elektronicznego wzmocnienia, osiagajac glosnosc do 100 dB. Technika oddechowa i rezonatory ciala sa jedynym ich wzmacniaczem — bez mikrofonow.",
    category: "music",
    emoji: "🎭",
  },
  {
    id: "mu20",
    text: "Piosenka Happy Birthday to You byla chroniona prawem autorskim do 2016 roku. Restauracje placity licencje za jej spiewanie lub unikaly jej. Sad orzekl ze prawa wygasly i melodia jest domena publiczna.",
    category: "music",
    emoji: "🎂",
  },
  {
    id: "mu21",
    text: "Skrzypce Stradivari do dzis brzmia inaczej niz wspolczesne instrumenty. Tajemnicy ich brzmienia nie rozwiazano — teorie obejmuja specyficzne drewno z malej epoki lodowcowej, lak i geometrie rezonatora.",
    category: "music",
    emoji: "🎻",
  },
  {
    id: "mu22",
    text: "Reggae zostalo uznane przez UNESCO za Niematerialne Dziedzictwo Kulturowe Ludzkosci w 2018 roku — jako pierwsza muzyka popularnego gatunku z jednego kraju (Jamajka). Symbol walki o wolnosc na calym swiecie.",
    category: "music",
    emoji: "🌿",
  },
  {
    id: "mu23",
    text: "Pierwsze nagranie muzyczne w historii — Au clair de la lune — zostalo odtworzone dopiero po 153 latach milczenia. Francuz Scott de Martinville nagral je w 1860 roku, ale nie bylo sposobu jego odtworzenia za zycia.",
    category: "music",
    emoji: "🎙️",
  },
  {
    id: "mu24",
    text: "Angus Young z AC/DC gra w stroju szkolnym od 1975 roku. Zasugerowala mu to siostra przed pierwszym waznym koncertem bo nie mial nic do ubrania. Kostium stal sie ikona przez 50 lat wystepow.",
    category: "music",
    emoji: "🎸",
  },
  {
    id: "mu25",
    text: "Bob Dylan jest jedynym muzykiem popularnym uhonorowanym Nagroda Nobla z literatury (2016) za tworzenie nowych form wyrazu poetyckiego. Nie pojawil sie osobiscie na ceremonii w Sztokholmie.",
    category: "music",
    emoji: "🏆",
  },
  // filmy mv16-mv25
  {
    id: "mv16",
    text: "Film The Wizard of Oz (1939) byl finansowa klapa podczas premiery. Odrobil koszty dzieki reruns w telewizji w latach 50. Dzieci wychowane na telewizji sprawily ze stal sie klasykiem — nie publicznosc kinowa.",
    category: "movies",
    emoji: "🌈",
  },
  {
    id: "mv17",
    text: "Charlie Chaplin udzielal anonimowo w konkursie sobowtórow Charliego Chaplina i zajal trzecie miejsce. Sedziowie nie rozpoznali go po wizerunku, ktory sam stworzyl. To ulubiona anegdota jego biografow.",
    category: "movies",
    emoji: "🎩",
  },
  {
    id: "mv18",
    text: "Wiekszosc dinozaurow w Parku Jurajskim (1993) to modele animatroniczne, nie CGI. Spielberg uzyl CGI oszczednie tylko tam, gdzie animatronika nie mogla sobie poradzic. Efekty sa do dzis cenione za realizm.",
    category: "movies",
    emoji: "🦖",
  },
  {
    id: "mv19",
    text: "Citizen Kane (1941) — uznawany przez dekady za najlepszy film wszech czasow — byl finansowa klapa przy premierze. Wydawnictwa Hearsta (satyrycznie pokazanego w filmie) zbojkotowaly go przez dekady.",
    category: "movies",
    emoji: "🎬",
  },
  {
    id: "mv20",
    text: "Serial Gra o Tron mial budzet do 15 milionow dolarow za odcinek w ostatnich sezonach — wiecej niz wiekszosc hollywoodzkich blockbusterow za caly film. Telewizja premium zrownala sie z kinem pod wzgledem produkcji.",
    category: "movies",
    emoji: "🐉",
  },
  {
    id: "mv21",
    text: "Studio Ghibli nigdy nie robi zwiastunow z fabula — Miyazaki uwaza, ze spoilowanie historii niszczy doswiadczenie odkrycia. Zwiastuny Ghibli pokazuja tylko atmosfere i animacje, bez zadnej fabuly.",
    category: "movies",
    emoji: "🎥",
  },
  {
    id: "mv22",
    text: "Parasite (2019) Bong Joon-ho byl pierwszym filmem nieanglojezycznym, ktory wygral Oscara za Najlepszy Film (nie tylko w kategorii Filmy Zagraniczne). Zmienil postrzeganie kinematografii spoza USA.",
    category: "movies",
    emoji: "🏆",
  },
  {
    id: "mv23",
    text: "Indie produkuja ok. 1500-2000 filmow rocznie — wiecej niz Hollywood (ok. 500-600). Bollywood to tylko jedna z wielu kinematografii indyjskich — jest tez Tollywood, Kollywood i dziesiatki innych regionalnych przemyslow.",
    category: "movies",
    emoji: "🌟",
  },
  {
    id: "mv24",
    text: "Avatar (2009) byl najwyzej zarabiajacym filmem przez 10 lat (2,9 mld dolarow). James Cameron wczesniej bil ten rekord Titanikiem przez 12 lat. Cameron jest jedynym rezysserem, ktory pobil swoj wlasny rekord kasowy.",
    category: "movies",
    emoji: "💰",
  },
  {
    id: "mv25",
    text: "Efekty dzwiekowe w filmach sa prawie nigdy prawdziwymi dzwiekami obiektow ktore widac. Strzaly, kroki po sniegu (sol lub skrobia), trzask kosci (marchewki) — sound design to osobna artystyczna dziedzina.",
    category: "movies",
    emoji: "🎧",
  },
  // polska pl16-pl25
  {
    id: "pl16",
    text: "Polska flaga — bialo-czerwona — istnieje od XIII wieku, ale kolory zostaly oficjalnie przyjete w 1919 roku. Biel symbolizuje orla z Herbu Polskiego, czerwien — pole herbowe.",
    category: "poland",
    emoji: "🇵🇱",
  },
  {
    id: "pl17",
    text: "Polska ma jeden z najwyzszych wskaznikow osob z wyzszym wyksztalceniem w Europie — ponad 45% doroslych Polakow ma dyplom uczelni. To skutek masowej ekspansji szkolnictwa wyzszego po transformacji 1989 roku.",
    category: "poland",
    emoji: "🎓",
  },
  {
    id: "pl18",
    text: "Polska produkuje ok. 40% calkowitej produkcji jablek w Unii Europejskiej — jest liderem europejskiego sadownictwa. Polskie jablka trafiaja do ponad 60 krajow. Polska jest tez liderem UE w produkcji pieczarek.",
    category: "poland",
    emoji: "🍎",
  },
  {
    id: "pl19",
    text: "Kopalnia soli Wieliczka — czynna nieprzerwanie od XIII do XX w. — ma w srodku kosciol, jeziora i rzezby wyrzezone z soli. Schodzi 300 m pod ziemie i jest na liscie UNESCO od pierwszej edycji w 1978 roku.",
    category: "poland",
    emoji: "⛏️",
  },
  {
    id: "pl20",
    text: "Polska jest europejskim liderem produkcji miedzi — KGHM to jedna z 10 najwiekszych firm wydobywczych miedzi na swiecie. Polska miedz trafia do kabli elektrycznych i elektroniki na calym swiecie.",
    category: "poland",
    emoji: "🔴",
  },
  {
    id: "pl21",
    text: "Mikolaj Kopernik nie tylko zaproponowal model heliocentryczny — opublikowal tez tablice astronomiczne pozwalajace przewidywac polozenie planet z wielka dokladnoscia. Byly standardem przez ponad 100 lat.",
    category: "poland",
    emoji: "🔭",
  },
  {
    id: "pl22",
    text: "Polska ma ponad 9300 jezior — jeden z najwyzszych wskaznikow na km2 w Europie. Mazury nazywane Kraina Tysiac Jezior maja ich w rzeczywistosci ponad 3000 tylko w samym tym regionie.",
    category: "poland",
    emoji: "🏞️",
  },
  {
    id: "pl23",
    text: "Liberum veto — prawo kazdego posla polskiego Sejmu do zablokowania obrad — bylo uzywane coraz czesciej od XVII w. Poslow przekupywano zeby blokowali prace Sejmu. Przyczyniło sie to do upadku Rzeczypospolitej.",
    category: "poland",
    emoji: "🏛️",
  },
  {
    id: "pl24",
    text: "Stanislaw Lem — autor Solyarisa i Cyberiady — jest jednym z najczesciej tlumaczonych pisarzy polskich na swiecie. Jego ksiazki wyszly w ponad 40 jezykach. Koncepcje AI i cyberprzestrzeni wyprzedzaly rzeczywistosc o dekady.",
    category: "poland",
    emoji: "📚",
  },
  {
    id: "pl25",
    text: "Uniwersytet Jagiellonski w Krakowie zalozony w 1364 roku jest jedna z najstarszych uczelni w Europie. Stuiowal tam Mikolaj Kopernik. Jest starsza niz wiekszosc zachodnioeuropejskich uczelni uznawanych za prestizowe.",
    category: "poland",
    emoji: "🎓",
  },
  // psychologia psy13-psy20
  {
    id: "psy13",
    text: "Syndrom Sztokholmski — sympatia ofiary do sprawcy — jest rzadszy i bardziej zlozony niz media pokazuja. Nie kazda ofiara go doswiadcza. Nazwa pochodzi od napadu na bank w Sztokholmie w 1973 roku.",
    category: "psychology",
    emoji: "🏦",
  },
  {
    id: "psy14",
    text: "Prokrastynacja to nie lenistwo — to strategia regulacji emocji. Odraczamy zadania wywolujace lek lub stres, bo chwilowo przynosi ulge. Dlugoterminowe koszty unikania sa wieksze niz natychmiastowe korzysci.",
    category: "psychology",
    emoji: "⏰",
  },
  {
    id: "psy15",
    text: "Sny REM sa tak intensywne, ze mozg paralizuje cialo w tej fazie — zeby nie odgrywal snow fizycznie. Lunatykowanie wystepuje podczas INNYCH faz snu, nie REM. REM jest paradoksalnie bezpieczna faza.",
    category: "psychology",
    emoji: "😴",
  },
  {
    id: "psy16",
    text: "Ludzki umysl blakuje sie podczas ok. 47% czasu czuwania — myslimy o czymś innym niz to co robimy. Badania Harvardu pokazaly, ze blakujacy umysl jest statystycznie mniej szczesliwy niz skupiony.",
    category: "psychology",
    emoji: "💭",
  },
  {
    id: "psy17",
    text: "Efekt swiadka (bystander effect): im wiecej osob jest swiadkami wypadku, tym mniejsze prawdopodobienstwo ze ktos pomoze — bo kazdy zaklada ze inny zareaguje. Przelomanie: wskazac konkretna osobe.",
    category: "psychology",
    emoji: "👥",
  },
  {
    id: "psy18",
    text: "Teoria 10 000 godzin (Gladwell) zostala nadmiernie uproszczona. Badania Ericssona, na ktorych bazowala, mowia ze liczy sie deliberate practice — celowe cwiczenie z informacja zwrotna — a nie sam czas.",
    category: "psychology",
    emoji: "⌚",
  },
  {
    id: "psy19",
    text: "Usmiecham sie bo jestesmy szczesliwi, ale i odwrotnie — sama czynnosc usmiechu moze poprawic nastroj. Trzymanie olowka poziomo w zebach (wymuszajac usmiechaajacy miesien) wplywa na odczuwanie humoru.",
    category: "psychology",
    emoji: "😊",
  },
  {
    id: "psy20",
    text: "Ludzki mozg konsumuje ok. 20% energii calego ciala mimo ze stanowi tylko 2% masy. Sprawia to ze mozg jest bardzo wrazliwy na niedobory glukozy — nawet krotkie epizody obnizonego cukru wplywaja na myslenie.",
    category: "psychology",
    emoji: "⚡",
  },
  // matematyka mat13-mat20
  {
    id: "mat13",
    text: "E=mc2 pokazuje ze masa i energia sa powiazane. c to predkosc swiatla podniesiona do kwadratu — daje ogromny wspolczynnik konwersji. Mala masa zawiera ogromna energie. Bomba atomowa jest dowodem na to rownanie.",
    category: "math",
    emoji: "⚛️",
  },
  {
    id: "mat14",
    text: "Liczby nieparzyste sa matematycznie tak samo liczne jak wszystkie liczby naturalne — oba zbiory sa nieskonczone i mozna zbudowac bijekje miedzy nimi. Kontrintuicyjny wynik teorii Cantora.",
    category: "math",
    emoji: "♾️",
  },
  {
    id: "mat15",
    text: "Fermat napisal w 1637 roku ze ma cudowny dowod twierdzenia o potegach — za dlugi na margines. Prawdziwy dowod znalazl Andrew Wiles w 1995 roku — zajal 358 stron i ponad 7 lat pracy.",
    category: "math",
    emoji: "📝",
  },
  {
    id: "mat16",
    text: "Trojkat Pascala kryje nieskonczonosc wzorcow: trojkaty Sierpinskiego, ciag Fibonacciego, wspolczynniki dwumianowe. Kazdy wiersz otwiera drzwi do innej galezi matematyki.",
    category: "math",
    emoji: "🔺",
  },
  {
    id: "mat17",
    text: "Teoria grafow (matematyka sieci) powstala z problemu 7 mostow Konigsberg (1736). Euler udowodnil, ze nie mozna przejsc przez wszystkie mosty dokladnie raz bez powtorzenia. Przy okazji stworzyl pierwszy dowod teorii grafow.",
    category: "math",
    emoji: "🌉",
  },
  {
    id: "mat18",
    text: "Twierdzenie Godla o niepelnosci (1931) udowodnilo, ze w kazdym wystarczajaco silnym systemie matematycznym istnieja twierdzenia prawdziwe, ktore nie moga byc udowodnione wewnatrz tego systemu.",
    category: "math",
    emoji: "🔄",
  },
  {
    id: "mat19",
    text: "Wspolczesna kryptografia (RSA, ECC) opiera sie na problemach matematycznych tak trudnych, ze najszybsze komputery rozwiazalyby je przez miliony lat. Bezpieczenstwo internetu i bankow zalezy od trudnosci zadan matematycznych.",
    category: "math",
    emoji: "🔐",
  },
  {
    id: "mat20",
    text: "Statystycznie, jesli poprosisz ludzi o losowa liczbe od 1 do 10, najczesciej wybieraja 7. W roznych kulturach wyniki sa podobne. Psychologowie nazywaja 7 najlosowsza liczba w ludzkiej psychice.",
    category: "math",
    emoji: "7️⃣",
  },
  // jezyki lng13-lng20
  {
    id: "lng13",
    text: "W jezyku islandzkim slowa sa tworzone przez kombinacje rodzimych rdzennych slow zamiast pozyczania — komputer to tolva (tala=liczba + volva=wieszczka). Islandczycy aktywnie tworza nowe slowa by nie angielszczyzowac jezyka.",
    category: "languages",
    emoji: "🇮🇸",
  },
  {
    id: "lng14",
    text: "Jezyk tonalny jak mandaryniski ma 4 tony: ten sam sylab ma oznacza mame, konopie, konia lub rugac — zalezenie od melodii. Dla rodzimego uzytkownika to tak naturalne jak rozroznianie liter b i d.",
    category: "languages",
    emoji: "🎵",
  },
  {
    id: "lng15",
    text: "Angielski jest jezykiem germaniskim, ale az 60% slow pochodzi z laciny lub starofrancuskiego. Podboj normanski z 1066 roku skrzyzowal anglosaski z francuskim — stad dualizm: pig/pork, cow/beef, sheep/mutton.",
    category: "languages",
    emoji: "🇬🇧",
  },
  {
    id: "lng16",
    text: "Arabskie al (rodzajnik okreslony jak the) przeniknal do wielu jezykow nauki: alkohol, algebra, algorytm, alkimia, aligator, admiral. Arabski byl dominujacym jezykiem nauki w VIII-XIII wieku.",
    category: "languages",
    emoji: "🔬",
  },
  {
    id: "lng17",
    text: "Proto-indoeuropejski — wspolny przodek polowy jezykow swiata — byl uzywany ok. 4500-3500 lat p.n.e. i nie ma zadnych zapisow pisemnych. Jezykonawcy zrekonstruowali ok. 1500 jego slow z porownania krewnych jezykow.",
    category: "languages",
    emoji: "🌍",
  },
  {
    id: "lng18",
    text: "Braill (alfabet dla niewidomych) zostal wynaleziony przez Louisa Braille'a gdy mial 15 lat (1824) — sam bedac niewidomym od 3. roku zycia. Oparl go na 6-punktowym kodzie wojskowym. Uzywany jest do dzis niezmieniony.",
    category: "languages",
    emoji: "🔢",
  },
  {
    id: "lng19",
    text: "Slowo robot pochodzi z jezyka czeskiego — robota oznacza ciezka, przymusowa prace. Wymyslil je Karel Capek w 1920 roku w sztuce R.U.R. W ciagu kilku dekad stalo sie miedzynarodowym slowem w setkach jezykow.",
    category: "languages",
    emoji: "🤖",
  },
  {
    id: "lng20",
    text: "Noam Chomsky zaproponowal ze ludzkie dzieci maja wrodzona gramatyke universalna — biologiczna zdolnosc do nauki jezyka. To dlaczego dzieci opanowuja gramatyke bez formalnego nauczania, a dorosli maja z tym trudnosci.",
    category: "languages",
    emoji: "👶",
  },
  // mitologia myth13-myth20
  {
    id: "myth13",
    text: "Trojanski kon nie jest wzmiankowany w Iliadzie Homera — Iliada konczy sie smiercia Hektora. Historia konia drewnianego pojawia sie dopiero w Odysei i Eneidzie Wergiliusza — to pozniejszy mit.",
    category: "mythology",
    emoji: "🐴",
  },
  {
    id: "myth14",
    text: "Bogowie greccy nie byli dobrzy moralnie — byli kaprysni, zazdrosni i msciwi jak ludzie, tylko potezniesi. Ta antropomorfizacja odroznia grecka religie od wschodnich, gdzie bogowie sa doskonali moralnie.",
    category: "mythology",
    emoji: "⚡",
  },
  {
    id: "myth15",
    text: "Minotaur z labiryntu Krety — pol czlowiek, pol byk — mogl miec inspiracje realna: archeolodzy odkryli ogromny palac w Knossos na Krecie z setkami korytarzy. Dekoracje pelne bylow mogly inspirowac mit.",
    category: "mythology",
    emoji: "🏛️",
  },
  {
    id: "myth16",
    text: "Bogini Atena narodzia sie z glowy Zeusa juz w pelni uzbrojona i krzyczac bojowy okrzyk. Mit symbolizowal ze prawdziwa madrosc rodzi sie z boskiej mysli. Atena jest patronka madrosci i strategii.",
    category: "mythology",
    emoji: "🦉",
  },
  {
    id: "myth17",
    text: "W mitologii japonskiej bogini slonca Amaterasu jest rodzaju zenskiego, a ksiezyc Tsukuyomi — meskiego. To odwrotnie niz w wiekszosci europejskich mitologii, gdzie slonce jest czesto meskie a ksiezyc zenski.",
    category: "mythology",
    emoji: "☀️",
  },
  {
    id: "myth18",
    text: "Aztekowie wierzyli ze biezacy swiat to juz 5. Slonce — poprzednie cztery zostaly zniszczone przez bogow. By obecny swiat trwal, bogowie musieli byc karmieni krwia i sercami — stad ofiary z ludzi.",
    category: "mythology",
    emoji: "🌞",
  },
  {
    id: "myth19",
    text: "Hinduizm ma szacunkowo 33 miliony bogow — ale to nie 33 miliony odrebnych bostw. Wiekszosc to awatary glownych bogow lub lokalne manifestacje. Wisznu ma 10 oficjalnych awatarow — Rama i Kriszna to dwie z nich.",
    category: "mythology",
    emoji: "🕉️",
  },
  {
    id: "myth20",
    text: "Achilles ginie od strzaly w piete — ale w oryginalnej Iliadzie Homera nie ma opisu smierci Achillesa. Iliada konczy sie przed tym zdarzeniem. Smierc Achillesa od strzaly Parysa pochodzi z pozniejszych opracowan.",
    category: "mythology",
    emoji: "⚔️",
  },
  // dla dzieci kid16-kid25b
  {
    id: "kid16",
    text: "Konik morski jest jedynym zwierzetam, gdzie to TATA rodzi mlode! Samiczka sklada jajka do kieszeni samca, a samiec nosi je przez 10-45 dni i rodzi do 2000 maluchow naraz.",
    category: "kids",
    emoji: "🐠",
  },
  {
    id: "kid17",
    text: "Meduzy zyja od ponad 500 milionow lat — sa starsze od dinozaurow! Nie maja mozgu, serca, krwi ani kosci. Sa w 95% wody. To jedne z najtrwalszych stworzen na Ziemi.",
    category: "kids",
    emoji: "🪼",
  },
  {
    id: "kid18",
    text: "Kolor nieba jest niebieski bo molekuly powietrza rozpraszaja niebieskie swiatlo o wiele lepiej niz czerwone. Ten sam efekt sprawia, ze zachod slonca jest czerwony — swiatlo musi przejsc przez grubsza warstwe atmosfery.",
    category: "kids",
    emoji: "🌅",
  },
  {
    id: "kid19",
    text: "Piasek na cieplych plazach to pokruszone muszle, korale i skaly wapienne! Miliony lat fal mielily muszle i koralowce na drobny piasek. Chodzisz po tym co kiedys bylo domem mnóstwa morskich stworzen!",
    category: "kids",
    emoji: "🏖️",
  },
  {
    id: "kid20",
    text: "Rak pustelnik zyje w muszlach po innych zwierzetach bo nie ma wlasnej! Gdy rosnie, musi znalezc wieksza muszle. Naukowcy obserwowali kolejki dziesiatkow rakow zamieniajacych sie muszlami po kolei jak w cyrku!",
    category: "kids",
    emoji: "🦀",
  },
  {
    id: "kid21",
    text: "Delfiny spia z jednym polkulem mozgu na raz — dosłownie spia na pol! Polowa mozgu spi, a polowa jest aktywna i kontroluje oddychanie. Potem zamieniaja sie polami. Dlatego delfiny plywaja nawet spiace.",
    category: "kids",
    emoji: "🐬",
  },
  {
    id: "kid22",
    text: "Najwyzsze drzewo na swiecie Hyperion — sekwoja w Kalifornii — ma 115 metrow! To wyzsze niz 38-pietrowy blok. Jego dokladne miejsce jest tajemnica, bo turysci uszkadzali korzenie podczas poszukiwan.",
    category: "kids",
    emoji: "🌲",
  },
  {
    id: "kid23",
    text: "Na Hawajach lawa ma wlasne hawajskie nazwy: lawa gladka i placka to pahoehoe, a ostra skalista to aa. Wulkanolodzy na calym swiecie uzywaja tych hawajskich slow jako miedzynarodowych terminow naukowych!",
    category: "kids",
    emoji: "🌋",
  },
  {
    id: "kid24",
    text: "Owce rozpoznaja twarze — doswiadczenia wykazaly ze pamietaja do 50 twarzy swoich kolegów przez 2 lata! Moga tez rozpoznac twarz znajomej osoby na zdjeciu. Owce sa inteligentniejsze niz powszechnie sadzono.",
    category: "kids",
    emoji: "🐑",
  },
  {
    id: "kid25b",
    text: "Dinozaur Brachiosaurus zjadal ok. 200 kg roslin dziennie! Musial jesc prawie non-stop. Jego serce bylo wielkie jak samochod osobowy i bilo ok. 20 razy na minute — wolno, by pompowac krew az na 9 m w gore do glowy.",
    category: "kids",
    emoji: "🦕",
  },
];

export function getFactsByCategory(category: string, facts: Fact[] = FACTS_DB): Fact[] {
  if (category === "all") return facts;
  return facts.filter((f) => f.category === category);
}

export function getRandomFact(category: string = "all", facts: Fact[] = FACTS_DB): Fact {
  const pool = getFactsByCategory(category, facts);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function searchFacts(query: string, facts: Fact[] = FACTS_DB): Fact[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return facts.filter((f) => {
    const cat = CATEGORIES.find((c) => c.id === f.category);
    return (
      f.text.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      cat?.label.toLowerCase().includes(q)
    );
  });
}
