let wordList = [
    {
        word: "chitarra",
        hint: "Uno strumento musicale con corde."
    },
    {
        word: "ossigeno",
        hint: "Un gas incolore e inodore essenziale per la vita."
    },
    {
        word: "montagna",
        hint: "Un'ampia elevazione naturale della superficie terrestre."
    },
    {
        word: "pittura",
        hint: "Una forma d'arte che utilizza colori su una superficie per creare immagini o espressione."
    },
    {
        word: "astronomia",
        hint: "Lo studio scientifico degli oggetti e dei fenomeni celesti."
    },
    {
        word: "calcio",
        hint: "Uno sport popolare giocato con una palla sferica."
    },
    {
        word: "cioccolato",
        hint: "Una dolce leccornia fatta con fave di cacao."
    },
    {
        word: "farfalla",
        hint: "Un insetto con ali colorate e un corpo snodato."
    },
    {
        word: "storia",
        hint: "Lo studio degli eventi passati e della civiltà umana."
    },
    {
        word: "pizza",
        hint: "Un piatto saporito composto da una base rotonda appiattita con condimenti."
    },
    {
        word: "jazz",
        hint: "Un genere musicale caratterizzato dall'improvvisazione e dalla sincopazione."
    },
    {
        word: "telecamera",
        hint: "Un dispositivo usato per catturare e registrare immagini o video."
    },
    {
        word: "diamante",
        hint: "Una pietra preziosa conosciuta per la sua brillantezza e durezza."
    },
    {
        word: "scienza",
        hint: "Lo studio sistematico della struttura e del comportamento del mondo fisico e naturale."
    },
    {
        word: "bicicletta",
        hint: "Un veicolo umano a due ruote."
    },
    {
        word: "tramonto",
        hint: "La scomparsa giornaliera del sole sotto l'orizzonte."
    },
    {
        word: "danza",
        hint: "Un movimento ritmico del corpo spesso eseguito a ritmo di musica."
    },
    {
        word: "galassia",
        hint: "Un vasto sistema di stelle, gas e polvere tenuti insieme dalla gravità."
    },
    {
        word: "orchestra",
        hint: "Un grande ensemble di musicisti che suonano vari strumenti."
    },
    {
        word: "vulcano",
        hint: "Una montagna o collina con un'apertura da cui vengono espulsi lava, frammenti di roccia, vapore caldo e gas."
    },
    {
        word: "romanzo",
        hint: "Un'opera di fiction lunga, tipicamente con una trama e personaggi complessi."
    },
    {
        word: "scultura",
        hint: "Una forma d'arte tridimensionale creata modellando o combinando materiali."
    },
    {
        word: "sinfonia",
        hint: "Una lunga composizione musicale per un'intera orchestra, tipicamente in movimenti multipli."
    },
    {
        word: "architettura",
        hint: "L'arte e la scienza di progettare e costruire edifici."
    },
    {
        word: "balletto",
        hint: "Una forma di danza classica caratterizzata da movimenti precisi e graziosi."
    },
    {
        word: "astronauta",
        hint: "Una persona addestrata a viaggiare e lavorare nello spazio."
    },
    {
        word: "cascata",
        hint: "Una cascata d'acqua che cade da un'altezza."
    },
    {
        word: "tecnologia",
        hint: "L'applicazione della conoscenza scientifica a scopi pratici."
    },
    {
        word: "arcobaleno",
        hint: "Un fenomeno meteorologico causato dalla riflessione, rifrazione e dispersione della luce."
    },
    {
        word: "universo",
        hint: "Tutta la materia, lo spazio e il tempo esistenti nel loro insieme."
    },
    {
        word: "pianoforte",
        hint: "Uno strumento musicale suonato premendo tasti che fanno colpire corde."
    },
    {
        word: "vacanza",
        hint: "Un periodo di tempo dedicato al piacere, al riposo o al relax."
    },
    {
        word: "teatro",
        hint: "Un edificio o un'area all'aperto in cui vengono messi in scena spettacoli teatrali, film o altre performance."
    },
    {
        word: "telefono",
        hint: "Un dispositivo utilizzato per trasmettere il suono su lunghe distanze."
    },
    {
        word: "lingua",
        hint: "Un sistema di comunicazione composto da parole, gesti e sintassi."
    },
    {
        word: "deserto",
        hint: "Una terra sterile o arida con scarsa o nessuna precipitazione."
    },
    {
        word: "girasole",
        hint: "Una pianta alta con un grande capolino giallo."
    },
    {
        word: "fantasia",
        hint: "Un genere di narrativa immaginativa che coinvolge magia e elementi soprannaturali."
    },
    {
        word: "telescopio",
        hint: "Un dispositivo ottico usato per osservare oggetti lontani nello spazio."
    },
    {
        word: "brezza",
        hint: "Un vento leggero."
    },
    {
        word: "oasi",
        hint: "Un luogo fertile nel deserto dove si trova acqua."
    },
    {
        word: "fotografia",
        hint: "L'arte, il processo o la pratica di creare immagini registrando la luce o altre radiazioni elettromagnetiche."
    },
    {
        word: "safari",
        hint: "Un'escursione o viaggio, tipicamente per osservare la fauna nel suo habitat naturale."
    },
    {
        word: "pianeta",
        hint: "Un corpo celeste che orbita attorno a una stella e non emette luce propria."
    },
    {
        word: "fiume",
        hint: "Un ampio corso d'acqua naturale che scorre in un canale verso il mare, un lago o un altro corso d'acqua simile."
    },
    {
        word: "tropicale",
        hint: "Relativo o situato nella regione tra il Tropico del Cancro e il Tropico del Capricorno."
    },
    {
        word: "misterioso",
        hint: "Difficile o impossibile da capire, spiegare o identificare."
    },
    {
        word: "enigma",
        hint: "Qualcosa di misterioso, enigmatico o difficile da capire."
    },
    {
        word: "paradosso",
        hint: "Un'affermazione o situazione che si contraddice o sfida l'intuizione."
    },
    {
        word: "puzzle",
        hint: "Un gioco, un giocattolo o un problema progettato per testare l'ingegnosità o la conoscenza."
    },
    {
        word: "sussurro",
        hint: "Parlare molto dolcemente o silenziosamente, spesso in modo segreto."
    },
    {
        word: "ombra",
        hint: "Un'area scura o una forma prodotta da un oggetto che blocca la luce."
    },
    {
        word: "segreto",
        hint: "Qualcosa tenuto nascosto o sconosciuto agli altri."
    },
    {
        word: "curiosità",
        hint: "Un forte desiderio di sapere o apprendere qualcosa."
    },
    {
        word: "imprevedibile",
        hint: "Non in grado di essere previsto o conosciuto in anticipo; incerto."
    },
    {
        word: "offuscare",
        hint: "Confondere o stupire qualcuno; rendere qualcosa poco chiaro o difficile da capire."
    },
    {
        word: "svelare",
        hint: "Rivelare o far conoscere qualcosa precedentemente segreto o sconosciuto."
    },
    {
        word: "illusione",
        hint: "Una falsa percezione o credenza; un'apparenza o impressione ingannevole."
    },
    {
        word: "nostalgia",
        hint: "Un desiderio sentimentale o affettuoso per il passato."
    },
    {
        word: "brillante",
        hint: "Eccezionalmente intelligente, talentuoso o impressionante."
    },
    {
        word: "ambiente",
        hint: "Il contesto o le condizioni in cui una persona, un animale o una pianta vive."
    },
    {
        word: "rivoluzione",
        hint: "Un cambiamento improvviso, completo o marcato in qualcosa."
    },
    {
        word: "innovazione",
        hint: "L'introduzione di nuove idee, metodi o invenzioni."
    },
    {
        word: "esplorazione",
        hint: "L'azione di viaggiare in o attraverso un'area sconosciuta al fine di conoscerla."
    },
    {
        word: "resilienza",
        hint: "La capacità di riprendersi rapidamente dalle difficoltà."
    },
    {
        word: "integrazione",
        hint: "Il processo di unire o incorporare elementi diversi in un tutto coerente."
    },
    {
        word: "prospettiva",
        hint: "Il modo in cui qualcuno vede o interpreta una situazione o un concetto."
    },
    {
        word: "equilibrio",
        hint: "Uno stato di stabilità o armonia, in cui le forze si compensano reciprocamente."
    },
    {
        word: "patrimonio",
        hint: "L'eredità culturale o naturale di una società, spesso considerata di grande valore."
    },
    {
        word: "collaborazione",
        hint: "L'azione di lavorare insieme a altri per raggiungere un obiettivo comune."
    },
    {
        word: "determinazione",
        hint: "La qualità di essere fermamente impegnati o decisi a raggiungere un obiettivo."
    },
    {
        word: "crescita",
        hint: "Il processo di sviluppo o aumento in dimensioni, importanza o maturità."
    },
    {
        word: "inclusione",
        hint: "L'atto di comprendere e accogliere persone di diverse origini, abilità, ecc."
    },
    {
        word: "rispetto",
        hint: "Manifestazione di considerazione e ammirazione nei confronti degli altri."
    },
    {
        word: "compassione",
        hint: "Sentimento di profonda empatia e preoccupazione per il dolore degli altri."
    },
    {
        word: "coerenza",
        hint: "La qualità di essere logici, stabili e coerenti nei pensieri e nelle azioni."
    },
    {
        word: "condivisione",
        hint: "L'atto di dare o partecipare, rendendo qualcosa disponibile per gli altri."
    },{
        word: "coesione",
        hint: "Unione e solidarietà tra individui o elementi."
    },
    {
        word: "cooperazione",
        hint: "Lavoro congiunto per raggiungere un obiettivo comune."
    },
    {
        word: "sviluppo",
        hint: "Processo di crescita, progresso o miglioramento."
    },
    {
        word: "resistenza",
        hint: "Capacità di opporsi o sopportare pressioni esterne."
    },
    {
        word: "efficienza",
        hint: "Capacità di ottenere risultati con il minimo spreco di risorse."
    },
    {
        word: "concentrazione",
        hint: "Focalizzazione mentale su un'attività o un obiettivo specifico."
    },
    {
        word: "comunicazione",
        hint: "Scambio di informazioni tra individui o gruppi."
    },
    {
        word: "adattabilità",
        hint: "Capacità di adeguarsi e rispondere positivamente ai cambiamenti."
    },
    {
        word: "vittoria",
        hint: "Il trionfo o il successo in una competizione o una sfida."
    },
    {
        word: "melodia",
        hint: "Una successione piacevole di suoni musicali."
    },
    {
        word: "fotocamera",
        hint: "Un dispositivo per catturare immagini fotografiche."
    },
    {
        word: "avventuriero",
        hint: "Una persona che si imbarca in avventure audaci e rischiose."
    },
    {
        word: "invenzione",
        hint: "La creazione di qualcosa di nuovo e originale."
    },
    {
        word: "energia",
        hint: "La capacità di compiere lavoro o di produrre cambiamenti."
    },
    {
        word: "aviazione",
        hint: "Il settore dell'aviazione che coinvolge voli e aerei."
    },
    {
        word: "esploratore",
        hint: "Una persona che esplora regioni sconosciute o difficili."
    },
    {
        word: "risonanza",
        hint: "La condizione in cui un oggetto vibra in risposta a una forza esterna."
    },
    {
        word: "fenomeno",
        hint: "Un evento osservabile o una circostanza straordinaria."
    },
    {
        word: "crescente",
        hint: "In aumento o in fase di sviluppo."
    },
    {
        word: "sorgente",
        hint: "Una fonte da cui sgorga acqua o altra sostanza."
    },
    {
        word: "fulmine",
        hint: "Una scarica elettrica durante un temporale."
    },
    {
        word: "sorriso",
        hint: "L'espressione di gioia o felicità che coinvolge la bocca."
    },
    {
        word: "dominio",
        hint: "Un'area di conoscenza o controllo su qualcosa."
    },
    {
        word: "serenita",
        hint: "Stato di calma e tranquillita interiore."
    },
    {
        word: "elefante",
        hint: "Un grande mammifero con proboscide e lunghe zanne."
    },
    {
        word: "stravaganza",
        hint: "Carattere di qualcosa di eccentrico o fuori dall'ordinario."
    },
    {
        word: "ignoto",
        hint: "Non conosciuto o non scoperto."
    },
    {
        word: "silenzio",
        hint: "Assenza di suoni o rumori."
    },
    {
        word: "avventura",
        hint: "Un'esperienza emozionante o rischiosa."
    },
    {
        word: "oblio",
        hint: "Stato di dimenticanza o trascuratezza."
    },
    {
        word: "riflesso",
        hint: "Immagine o luce rimbalzata da una superficie."
    },
    {
        word: "essenza",
        hint: "La natura fondamentale o caratteristica di qualcosa."
    },
    {
        word: "rapsodia",
        hint: "Composizione musicale libera ed espressiva."
    },
    {
        word: "rocambolesco",
        hint: "Straordinariamente avventuroso o complicato."
    },
    {
        word: "luminoso",
        hint: "Che emette molta luce o che è chiaro e brillante."
    },
    {
        word: "abissale",
        hint: "Relativo alle profondità marine o estremamente profondo."
    },
    {
        word: "meticoloso",
        hint: "Estremamente attento ai dettagli e preciso."
    },
    {
        word: "pittoresco",
        hint: "Attraente o suggestivo in modo insolito o vivace."
    },
    {
        word: "intricato",
        hint: "Complesso, con molti dettagli o intrecci."
    },
    {
        word: "fragoroso",
        hint: "Che produce un suono forte e tumultuoso."
    },
    {
        word: "arcano",
        hint: "Misterioso e segreto, noto solo a pochi."
    },
    {
        word: "cenitale",
        hint: "Relativo al punto della sfera celeste direttamente sopra l'osservatore."
    },
    {
        word: "espansione",
        hint: "Aumento di dimensioni, portata o importanza."
    },
    {
        word: "vibrante",
        hint: "Che vibra o pulsante con energia."
    },
    {
        word: "etereo",
        hint: "Di natura leggera, delicata e celestiale."
    },
    {
        word: "insolito",
        hint: "Fuori dall'ordinario, non comune o consueto."
    },
    {
        word: "intrepido",
        hint: "Senza paura, coraggioso e audace."
    },
    {
        word: "ludico",
        hint: "Relativo al gioco o al divertimento."
    },
    {
        word: "penombra",
        hint: "Zona parzialmente o leggermente oscura."
    },
    {
        word: "cromatica",
        hint: "Relativo ai colori o alla scala dei colori."
    },
    {
        word: "placidita",
        hint: "Stato di calma e tranquillità."
    },
    {
        word: "effervescente",
        hint: "Che produce bolle di gas, solitamente riferito a bevande gassate."
    },
    {
        word: "zaffiro",
        hint: "Una pietra preziosa di colore blu."
    },
    {
        word: "volubile",
        hint: "Che cambia facilmente o è instabile nelle decisioni."
    },
    {
        word: "intrigante",
        hint: "Che suscita curiosità o interesse, spesso con un elemento di mistero."
    },
    {
        word: "quintessenza",
        hint: "L'essenza più pura e concentrata di qualcosa."
    },
    {
        word: "quadrante",
        hint: "La parte di un orologio o di uno strumento che mostra il tempo o la misurazione."
    },
    {
        word: "radiante",
        hint: "Che emette luce o energia in modo brillante."
    },
    {
        word: "accarezzare",
        hint: "Muovere delicatamente le mani o le dita sulla superficie di qualcosa."
    },
    {
        word: "luminare",
        hint: "Illuminare o illuminare con luce intensa."
    },
    {
        word: "ecclettico",
        hint: "Che trae ispirazione da una vasta gamma di stili, idee o fonti."
    },
    {
        word: "effluvio",
        hint: "Emissione di odori o vapori, spesso in modo delicato o sottile."
    },
    {
        word: "cromosoma",
        hint: "Struttura nel nucleo delle cellule contenente i geni e portatrice di informazioni ereditarie."
    },
    {
        word: "zenzero",
        hint: "Una radice piccante usata in cucina e in medicina."
    },
    {
        word: "sillogismo",
        hint: "Forma di ragionamento in cui si trae una conclusione da due premesse."
    },
    {
        word: "eclettismo",
        hint: "Adozione o incorporazione di elementi da diverse fonti o stili."
    },
    {
        word: "magnetico",
        hint: "Relativo alla forza di attrazione tra materiali magnetizzati."
    },
    {
        word: "sublime",
        hint: "Di grande bellezza o grandiosità, spesso suscitando ammirazione profonda."
    },
    {
        word: "eclittica",
        hint: "Il piano approssimativo dell'orbita terrestre intorno al sole."
    },
    {
        word: "nostalgico",
        hint: "Che prova nostalgia o rimpianto per il passato."
    },
    {
        word: "effimero",
        hint: "Di breve durata, destinato a svanire rapidamente."
    },
    {
        word: "nobile",
        hint: "Caratterizzato da nobiltà di carattere, qualità o status."
    },
    {
        word: "cangiante",
        hint: "Che cambia colore o aspetto in base all'angolo di visione o alla luce."
    },
    {
        word: "sciamano",
        hint: "Un individuo in una società tradizionale che agisce come intermediario tra il mondo spirituale e la comunità."
    },
    {
        word: "deflagrazione",
        hint: "Un processo di combustione rapida con produzione di gas e calore."
    },
    {
        word: "vortice",
        hint: "Un movimento circolare di fluido che forma un gorgo o un turbinio."
    },
    {
        word: "incantatore",
        hint: "Una persona che usa la magia o il fascino per affascinare o influenzare gli altri."
    },
    {
        word: "sovraintendere",
        hint: "Avere autorità o controllo su qualcosa, supervisionare."
    },
    {
        word: "riviviscenza",
        hint: "La ripresa di vita, vigore o attività."
    },
    {
        word: "propulsione",
        hint: "Il processo di spingere o trainare un oggetto in avanti."
    },
    {
        word: "infernale",
        hint: "Relativo all'inferno o caratterizzato da estrema calura o violenza."
    },
    {
        word: "illuminato",
        hint: "Dotato di saggezza o conoscenza profonda."
    },
    {
        word: "intrigo",
        hint: "Una trama segreta o un complotto complicato."
    },
    {
        word: "precursore",
        hint: "Qualcosa che precede e indica l'arrivo di qualcos'altro."
    },
    {
        word: "introverso",
        hint: "Orientato verso l'interno, riservato o timido."
    },
    {
        word: "esaltante",
        hint: "Che suscita euforia o eccitazione intensa."
    },
    {
        word: "meticolosita",
        hint: "Estrema precisione e attenzione ai dettagli."
    },
    {
        word: "intrinseco",
        hint: "Appartenente in modo essenziale a qualcosa, intrinseco."
    },
    {
        word: "sviluppare",
        hint: "Far evolvere o progredire, specialmente verso uno stato più avanzato."
    }
];
