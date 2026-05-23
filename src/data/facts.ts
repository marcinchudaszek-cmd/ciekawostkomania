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
