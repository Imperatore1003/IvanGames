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
        word: "avventura",
        hint: "Un'esperienza eccitante o audace."
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
        word: "tecnologia",
        hint: "L'applicazione della conoscenza scientifica a scopi pratici."
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
        word: "comunicazione",
        hint: "L'atto di trasmettere o scambiare informazioni o notizie."
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
        word: "equilibrio",
        hint: "Uno stato di stabilità o armonia, in cui le forze si compensano reciprocamente."
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
        word: "innovazione",
        hint: "Introduzione di nuove idee, metodi o invenzioni."
    },
    {
        word: "condivisione",
        hint: "L'atto di dare o partecipare, rendendo qualcosa disponibile per gli altri."
    },
];
