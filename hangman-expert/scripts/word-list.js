// Tutti gli indizi delle parole sono stati presi dal vocabolario Treccani https://www.treccani.it/ tranne specificazione diversa.
let wordList = [
    {
        word: "elefantiaco",
        hint: "Esageratamente complesso e macchinoso",
        reference: "https://www.google.com/search?q=elefantiaco"
    },
    {
        word: "grafomane",
        hint: "Pazzo per la scrittura",
        reference: "https://it.wiktionary.org/wiki/grafomane"
    },
    {
        word: "coevo",
        hint: "Che è vissuto nello stesso tempo, appartenente alla stessa età",
        reference: "https://www.treccani.it/vocabolario/coevo/"
    },
    {
        word: "facinoroso",
        hint: "Violento, ribelle, turbolento",
        reference: "https://www.treccani.it/vocabolario/facinoroso/"
    },
    {
        word: "scatologico",
        hint: "Relativo a scritto o discorso che tratta di escrementi, o che comunque ha contenuto e tono osceno, volgare",
        reference: "https://www.treccani.it/vocabolario/scatologico/"
    },
    {
        word: "baruffa",
        hint: "Zuffa confusa di persone che litigano e vengono alle mani",
        reference: "https://www.treccani.it/vocabolario/baruffa/"
    },
    {
        word: "chiozzotto",
        hint: "Appartenente o relativo alla cittadina di Chioggia, in provincia di Venezia",
        reference: "https://www.treccani.it/vocabolario/chiozzotto/"
    },
    {
        word: "flemma",
        hint: "Lentezza, calma, scarsa emotività",
        reference: "https://www.treccani.it/vocabolario/flemma/"
    },
    {
        word: "trascendentale",
        hint: "Va oltre, supera certi limiti, un certo grado, un certo ordine",
        reference: "https://www.treccani.it/vocabolario/trascendentale/"
    },
    {
        word: "ascendentale",
        hint: "Che va dal basso verso l'alto",
        reference: "https://www.treccani.it/vocabolario/ascendentale/"
    },
    {
        word: "flebile",
        hint: "Lacrimevole, lamentoso: si dice soprattutto di voce o suono che sa di pianto",
        reference: "https://www.treccani.it/vocabolario/flebile/"
    },
    {
        word: "gaslighting",
        hint: "Manipolazione psicologica maligna, violenta e subdola",
        reference: "https://it.wikipedia.org/wiki/Gaslighting"
    },
    {
        word: "puerile",
        hint: "Di fanciullo; che assomigliano a quelle di fanciulli; che avviene o è avvenuto nell’età della fanciullezza",
        reference: "https://www.treccani.it/vocabolario/puerile/"
    },
    {
        word: "desueto",
        hint: "Non più abituato a qualche cosa; non più in uso, uscito dall’uso",
        reference: "https://www.treccani.it/vocabolario/desueto/"
    },
    {
        word: "loquace",
        hint: "Che parla molto, ciarliero",
        reference: "https://www.treccani.it/vocabolario/loquace/"
    },
    {
        word: "ignominioso",
        hint: "Disonorevole, infamante, meritevole del disprezzo di tutti",
        reference: "https://www.treccani.it/vocabolario/ignominioso/"
    },
    {
        word: "epistolario",
        hint: "Raccolta delle lettere scritte da una persona, spec. da uno scrittore o in genere da un uomo illustre, e il libro in cui sono stampate",
        reference: "https://www.treccani.it/vocabolario/epistolario/"
    },
    {
        word: "vaneggiare",
        hint: "Vagare con la mente in pensieri che non hanno contatto con la realtà; pensare e dire cose sconnesse, farneticare, per febbre o per uno stato anormale della mente",
        reference: "https://www.treccani.it/vocabolario/vaneggiare/"
    },
    {
        word: "sproloquiare",
        hint: "Parlare a lungo e senza costrutto",
        reference: "https://www.treccani.it/vocabolario/sproloquiare/"
    },
    {
        word: "astruso",
        hint: "Difficile a intendersi per troppa sottigliezza o astrattezza",
        reference: "https://www.treccani.it/vocabolario/astruso/"
    },
    {
        word: "eloquio",
        hint: "Il parlare, il modo di parlare: esporre con facile, con ornato",
        reference: "https://www.treccani.it/vocabolario/eloquio/"
    },
    {
        word: "mecenate",
        hint: "Nome di un noto cavaliere romano (69 - 8 a. C.), consigliere di Augusto e influente protettore di letterati e artisti",
        reference: "https://www.treccani.it/vocabolario/mecenate/"
    },
    {
        word: "alterco",
        hint: "Litigio, discussione molto animata",
        reference: "https://www.treccani.it/vocabolario/alterco/"
    },
    {
        word: "confarsi",
        hint: "Convenire, essere adatto, giovare alle condizioni fisiche",
        reference: "https://www.treccani.it/vocabolario/confarsi/"
    },
    {
        word: "etnocentrismo",
        hint: "Tendenza a giudicare i membri, la struttura, la cultura e la storia di gruppi diversi dal proprio, con riferimento ai valori, alle norme e ai costumi ai quali si è stati educati",
        reference: "https://www.treccani.it/enciclopedia/etnocentrismo/"
    },
    {
        word: "eros",
        hint: "Usato per indicare il desiderio, l’istinto sessuale, con riferimento alle concezioni che di esso ebbero gli antichi",
        reference: "https://www.treccani.it/vocabolario/eros/"
    },
    {
        word: "cinico",
        hint: "Indifferente ai sentimenti e alla morale comune; privo di sensibilità",
        reference: "https://dizionari.corriere.it/dizionario_italiano/C/cinico.shtml"
    },
    {
        word: "podere",
        hint: "Fondo rustico destinato a coltura o suscettibile di coltura, lavorato da una o più famiglie coloniche in proprio o per contratto di affitto o, un tempo, di mezzadria",
        reference: "https://www.treccani.it/vocabolario/podere2/"
    },
    {
        word: "stanga",
        hint: "Lungo pezzo di legno o di metallo, per lo più squadrato a sezione rettangolare",
        reference: "https://www.treccani.it/vocabolario/stanga/"
    },
    {
        word: "massaio",
        hint: "Nome dato anticam., a seconda delle zone, a tesorieri, esattori e amministratori delle pubbliche entrate, agli ufficiali preposti alla custodia delle merci nelle dogane o alla conservazione dei pegni, a economi, fabbricieri, stimatori, contabili, esattori, lavoratori della terra nel rapporto di colonìa parziaria",
        reference: "https://www.treccani.it/vocabolario/massaio/"
    },
    {
        word: "mercimonio",
        hint: "Traffico illecito e riprovevole di cose non venali",
        reference: "https://www.treccani.it/vocabolario/mercimonio/"
    }
];