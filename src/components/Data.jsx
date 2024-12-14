const moneyItems = [
        { id: 1, amount: "$1" },
        { id: 2, amount: "$5" },
        { id: 3, amount: "$10" },
        { id: 4, amount: "$20" },
        { id: 5, amount: "$50" },
        { id: 6, amount: "$100" },
        { id: 7, amount: "$250" },
        { id: 8, amount: "$500" },
        { id: 9, amount: "$750" },
        { id: 10, amount: "$1,000" },
        { id: 11, amount: "$2,500" },
        { id: 12, amount: "$5,000" },
        { id: 13, amount: "$10,000" },
        { id: 14, amount: "$25,000" },
        { id: 15, amount: "$50,000" },
        { id: 16, amount: "$75,000" },
        { id: 17, amount: "$100,000" },
        { id: 18, amount: "$250,000" },
        { id: 19, amount: "$500,000" },
        { id: 20, amount: "$1,000,000" },
    ].reverse();

const data = [
    {
        id: 1,
        question: "What company makes the Xperia model smartphone?",
        answers: [
            {
                text: "Vivo",
                correct: false,
            },
            {
                text: "Sony",
                correct: true,
            },
            {
                text: "Samsung",
                correct: false,
            },
            {
                text: "Nokia",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "In which location was the first example of paper money used?",
        answers: [
            {
                text: "Turkey",
                correct: false,
            },
            {
                text: "Greece",
                correct: false,
            },
            {
                text: "India",
                correct: false,
            },
            {
                text: "China",
                correct: true,
            },
        ],
    },
    {
        id: 3,
        question: "Who is generally considered the inventor of the motor car?",
        answers: [
            {
                text: "Enzo Ferrari",
                correct: false,
            },
            {
                text: "Henry M. Leland",
                correct: false,
            },
            {
                text: "Karl Benz",
                correct: true,
            },
            {
                text: "Henry Ford",
                correct: false,
            },
        ],
    },
    {
        id: 4,
        question: "What is the name of the Franco-British supersonic commercial plane that operated from 1976-2003?",
        answers: [
            {
                text: "Airbus",
                correct: false,
            },
            {
                text: "Concorde",
                correct: true,
            },
            {
                text: "Accord",
                correct: false,
            },
            {
                text: "Mirage",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "Which city hosted the Olympic Games in 2002?",
        answers: [
            {
                text: "Sydney",
                correct: true,
            },
            {
                text: "Beijing",
                correct: false,
            },
            {
                text: "Tokyo",
                correct: false,
            },
            {
                text: "Berlin",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        question: "What is the longest running Broadway show to ever exist?",
        answers: [
            {
                text: "Hamilton",
                correct: false,
            },
            {
                text: "The Phantom of The Opera",
                correct: true,
            },
            {
                text: "The Lion King",
                correct: false,
            },
            {
                text: "Les Miserable",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        question: "Arnold Schwarzenegger is a famous actor and former bodybuilder who was married to a member of what famous US political family?",
        answers: [
            {
                text: "The Rockefellers",
                correct: false,
            },
            {
                text: "The Clintons",
                correct: false,
            },
            {
                text: "The Bushes",
                correct: false,
            },
            {
                text: "The Kennedys",
                correct: true,
            },
        ],
    },
    {
        id: 8,
        question: "Ailuropoda melanoleuca is the latin name for which animal?",
        answers: [
            {
                text: "Black Bear",
                correct: false,
            },
            {
                text: "Zebra",
                correct: false,
            },
            {
                text: "Panda",
                correct: true,
            },
            {
                text: "Koala Bear",
                correct: false,
            },
        ],
    },
    {
        id: 9,
        question: "What is the longest known river that runs through Paris?",
        answers: [
            {
                text: "Canal de l'Ourcq",
                correct: false,
            },
            {
                text: "Bièvre",
                correct: false,
            },
            {
                text: "Seine",
                correct: true,
            },
            {
                text: "Menilmontant brook",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        question: "Which woman is known for the discovery of the periodic elements Radium and Polonium?",
        answers: [
            {
                text: "Marie Curie",
                correct: true,
            },
            {
                text: "Ada Lovelace",
                correct: false,
            },
            {
                text: "Emmeline Pankhurst",
                correct: false,
            },
            {
                text: "Florence Nightingale",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        question: "Who was the director of the Academy Award-winning movie, Gladiator?",
        answers: [
            {
                text: "Steven Soderbergh",
                correct: false,
            },
            {
                text: "Christopher Nolan",
                correct: false,
            },
            {
                text: "James Cameron",
                correct: false,
            },
            {
                text: "Ridley Scott",
                correct: true,
            },
        ],
    },
    {
        id: 12,
        question: "Donauinselfest is the largest music festival held in what European city?",
        answers: [
            {
                text: "Amsterdam",
                correct: false,
            },
            {
                text: "Vienna",
                correct: true,
            },
            {
                text: "Oslo",
                correct: false,
            },
            {
                text: "Lisbon",
                correct: false,
            },
        ],
    },
    {
        id: 13,
        question: "In which continent would you find the city of Dar es Salaam?",
        answers: [
            {
                text: "Asia",
                correct: false,
            },
            {
                text: "Europe",
                correct: false,
            },
            {
                text: "Africa",
                correct: true,
            },
            {
                text: "South America",
                correct: false,
            },
        ],
    },
    {
        id: 13,
        question: "The Statue of Liberty was gifted to the United States from what country?",
        answers: [
            {
                text: "France",
                correct: true,
            },
            {
                text: "Germany",
                correct: false,
            },
            {
                text: "Belgium",
                correct: false,
            },
            {
                text: "England",
                correct: false,
            },
        ],
    },
    {
        id: 14,
        question: "Which continent has a capital city with the most french-speaking citizens outside of Paris?",
        answers: [
            {
                text: "North America",
                correct: false,
            },
            {
                text: "Africa",
                correct: true,
            },
            {
                text: "South America",
                correct: false,
            },
            {
                text: "Asia",
                correct: false,
            },
        ],
    },
    {
        id: 15,
        question: "What milestone number of monthly users did Facebook reach in October 4th, 2012?",
        answers: [
            {
                text: "100 million",
                correct: false,
            },
            {
                text: "500 million",
                correct: false,
            },
            {
                text: "1 billion",
                correct: true,
            },
            {
                text: "10 million",
                correct: false,
            },
        ],
    },
    {
        id: 16,
        question: "Madiba is the nickname for which histroical world leader?",
        answers: [
            {
                text: "Nelson Mandela",
                correct: true,
            },
            {
                text: "Gandhi",
                correct: false,
            },
            {
                text: "Hammurabi",
                correct: false,
            },
            {
                text: "Suleiman the Magnificient",
                correct: false,
            },
        ],
    },
    {
        id: 17,
        question: "What was the first Netflix show to win an Emmy award?",
        answers: [
            {
                text: "Game of Thrones",
                correct: false,
            },
            {
                text: "House of Cards",
                correct: true,
            },
            {
                text: "The Empire",
                correct: false,
            },
            {
                text: "Wednesday",
                correct: false,
            },
        ],
    },
    {
        id: 18,
        question: "The Rose Bowl tournament takes place in which city in California?",
        answers: [
            {
                text: "San Francisco",
                correct: false,
            },
            {
                text: "San Diego",
                correct: false,
            },
            {
                text: "Pasadena",
                correct: true,
            },
            {
                text: "Los Angeles",
                correct: false,
            },
        ],
    },
    {
        id: 19,
        question: "Which country has the largest population of Muslims?",
        answers: [
            {
                text: "Saudi Arabia",
                correct: false,
            },
            {
                text: "India",
                correct: false,
            },
            {
                text: "Pakistan",
                correct: false,
            },
            {
                text: "Indonesia",
                correct: true,
            },
        ],
    },
    {
        id: 20,
        question: "In what year was the first movie trailer ever shown to the public?",
        answers: [
            {
                text: "1913",
                correct: true,
            },
            {
                text: "1914",
                correct: false,
            },
            {
                text: "1915",
                correct: false,
            },
            {
                text: "1916",
                correct: false,
            },
        ],
    },
    {
        id: 21,
        question: "Which South American country was the first to gain its independence?",
        answers: [
            {
                text: "Brazil",
                correct: false,
            },
            {
                text: "Columbia",
                correct: true,
            },
            {
                text: "Uruguay",
                correct: false,
            },
            {
                text: "Argentina",
                correct: false,
            },
        ],
    },
    {
        id: 22,
        question: "What specific category did Toni Morrison win her Nobel Prize in?",
        answers: [
            {
                text: "Literature",
                correct: true,
            },
            {
                text: "Arts",
                correct: false,
            },
            {
                text: "Science",
                correct: false,
            },
            {
                text: "History",
                correct: false,
            },
        ],
    },
    {
        id: 23,
        question: "What year did Leonardo DiCaprio finally win his first ever Oscar award?",
        answers: [
            {
                text: "2014",
                correct: false,
            },
            {
                text: "2015",
                correct: false,
            },
            {
                text: "2016",
                correct: true,
            },
            {
                text: "2018",
                correct: false,
            },
        ],
    },
    {
        id: 24,
        question: "In Enid Blyton's Famous Five, how many of the five members were boys?",
        answers: [
            {
                text: "2",
                correct: false,
            },
            {
                text: "1",
                correct: false,
            },
            {
                text: "4",
                correct: false,
            },
            {
                text: "3",
                correct: true,
            },
        ],
    },
    {
        id: 25,
        question: "Which famous celebrity has fulfilled the most Make-A-Wish requests?",
        answers: [
            {
                text: "John Cena",
                correct: true,
            },
            {
                text: "The Rock",
                correct: false,
            },
            {
                text: "Selena Gomez",
                correct: false,
            },
            {
                text: "Justin Bieber",
                correct: false,
            },
        ],
    },
    {
        id: 26,
        question: "How many total time zones are there in Russia?",
        answers: [
            {
                text: "10",
                correct: false,
            },
            {
                text: "11",
                correct: true,
            },
            {
                text: "9",
                correct: false,
            },
            {
                text: "7",
                correct: false,
            },
        ],
    },
    {
        id: 27,
        question: "Who was the first ever African American to win an Academy Award?",
        answers: [
            {
                text: "Denzel Washington",
                correct: false,
            },
            {
                text: "Tyler Perry",
                correct: false,
            },
            {
                text: "Hattie McDaniel",
                correct: true,
            },
            {
                text: "Morgan Freeman",
                correct: false,
            },
        ],
    },
    {
        id: 28,
        question: "During the Holy Roman Empire, who was its first ever emeperor?",
        answers: [
            {
                text: "Titus",
                correct: false,
            },
            {
                text: "Tiberius",
                correct: false,
            },
            {
                text: "Agustus",
                correct: false,
            },
            {
                text: "Charlemagne",
                correct: true,
            },
        ],
    },
    {
        id: 29,
        question: "Turkey, Albania, Bulgaria, and North Macedonia are the four countries that border which other country?",
        answers: [
            {
                text: "Greece",
                correct: true,
            },
            {
                text: "Siberia",
                correct: false,
            },
            {
                text: "Slovakia",
                correct: false,
            },
            {
                text: "Israel",
                correct: false,
            },
        ],
    },
    {
        id: 30,
        question: 'Which element on the periodic table has the abbreviation "Fe"?',
        answers: [
            {
                text: "Gold",
                correct: false,
            },
            {
                text: "Iron", 
                correct: true,
            },
            {
                text: "Potassiun",
                correct: false,
            },
            {
                text: "Fermium",
                correct: false,
            },
        ],
    },
    {
        id: 31,
        question: "Which country is nicknamed the sugar bowl of the world?",
        answers: [
            {
                text: "United States",
                correct: false,
            },
            {
                text: "Brazil", 
                correct: false,
            },
            {
                text: "Cuba",
                correct: true,
            },
            {
                text: "England",
                correct: false,
            },
        ],
    },
    {
        id: 32,
        question: "Japanese artist, Ken Sugimori, illustrated the original characters of which poular animated cartoon?",
        answers: [
            {
                text: "Beyblade",
                correct: false,
            },
            {
                text: "Yu-Gi-Oh!", 
                correct: false,
            },
            {
                text: "Dragon Ball",
                correct: false,
            },
            {
                text: "Pokèmon",
                correct: true,
            },
        ],
    },
];

export { moneyItems, data };