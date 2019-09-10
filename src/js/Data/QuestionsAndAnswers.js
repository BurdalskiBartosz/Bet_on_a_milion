const questionsAndAnswers = {
    Muzyka: [{
            question: "Piosenkę \"Chałupy Welcome to\" wykonywał:",
            answers: ['Zbigniew Wodecki', 'Krzysztof Krawczyk', 'Ryszard Rynkowski', 'Czesław Mozil'],
            correctAnswer: 'Zbigniew Wodecki'
        },
        {
            question: "Którego z utworów nie wykonuje zespół The Beatles?",
            answers: ['Hey Jude', 'Here Comes the Sun', 'Twist and Shout', 'I Want to Break Free'],
            correctAnswer: 'I Want to Break Free'
        }
    ],
    Film: [{
            question: "W filmie \"Titanic\" Rose podróżuje statkiem w towarzystwie:",
            answers: ['Narzeczonego i matki', 'Narzeczonego i ojca', 'Z ojcem', 'Ojcem i siostrą'],
            correctAnswer: 'Narzeczonego i matki'
        },
        {
            question: "Kim z zawodu jest główny bohater filmu 'Kiler' Juliusza Machulskiego?",
            answers: ['Cinkciarzem', 'Taksówkarzem', 'Policjantem', 'Dostawcą pizzy'],
            correctAnswer: 'Taksówkarzem'
        }
    ],
    Sport: [{
            question: "Najwięcej złotych medali w historii Igrzysk Olimpijskich zdobył:",
            answers: ['Łarysa Łatynia', 'Paavo Nurmi', 'Michael Phelps', 'Carl Lewis'],
            correctAnswer: 'Michael Phelps'
        },
        {
            question: "Co NIE jest dyscypliną olimpijską?",
            answers: ['Łucznictwo', 'Hokej na trawie', 'Badminton', 'Baseball'],
            correctAnswer: 'Baseball'
        }
    ],
    Motoryzacja: [{
            question: "Co symbolizuje logo firmy Citroën?",
            answers: ['Świerki typowe dla Wogezów', 'Zazębienie daszkowe kół zębatych', 'Strzałki w górę - dążenie do perfekcji', 'Szewrony wskazujące na militarne powiązania firmy'],
            correctAnswer: 'Zazębienie daszkowe kół zębatych'
        },
        {
            question: "Który samochód nazywany jest popularnie \"kaczką\"?",
            answers: ['Trabant 601', 'Fiat 500', 'Wartburg 312', 'Citroën 2CV'],
            correctAnswer: 'Citroën 2CV'
        }
    ],
    Praca: [{
            question: "Upychacz pasażerów, to zawód wykonywany w ..",
            answers: ['Chinach', 'Nowym Jorku', 'Japonii', 'Kazahstanie'],
            correctAnswer: 'Japonii'
        },
        {
            question: "Czym zajmuje się topiarz?",
            answers: ['Bada poziom zaludnienia', 'Odlewa żelazo', 'Szyje kozaki', 'Testuje ser'],
            correctAnswer: 'Odlewa żelazo'
        }
    ],
    Szkoła: [{
            question: "W którym roku wprowadzono gimnazja?",
            answers: ['1987', '1990', '1994', '1999'],
            correctAnswer: '1999'
        },
        {
            question: "Jaki przedmiot nie jest obowiazkowy na maturze?",
            answers: ['Polski', 'Matematyka', 'Angielski', 'Geografia'],
            correctAnswer: 'Geografia'
        }
    ],
    Świat: [{
            question: "Attyka, Epir, Tesalia, to regiony którego państwa?",
            answers: ['Hiszpanii', 'Grecji', 'Włoch', 'Turcji'],
            correctAnswer: 'Grecji'
        },
        {
            question: "Do organizmów jednokomórkowych zaliczamy:",
            answers: ['Gąbki', 'Drożdże', 'Pierścienice', 'Nowotwory'],
            correctAnswer: 'Drożdże'
        }
    ],
    Polska: [{
            question: "Pierwszym królem Polski był:",
            answers: ['Mieszko I', 'Kazimierz I Odnowiciel', 'Kazimierz III Wielki', 'Bolesław Chrobry'],
            correctAnswer: 'Bolesław Chrobry'
        },
        {
            question: "Przedstawicielem jakiej dynastii był Zygmunt August?",
            answers: ['Piastów', 'Jagiellonów', 'Wazów', 'Andegawenów'],
            correctAnswer: 'Jagiellonów'
        }
    ],
    Sztuka: [{
            question: "Który z muzyków nie należy do tzw. klasyków wiedeńskich?",
            answers: ['Joseph Haydn', 'Jan Sebastian Bach', 'Ludwig van Beethoven', 'Wolfgang Amadeus Mozart'],
            correctAnswer: 'Jan Sebastian Bach'
        },
        {
            question: "Kto jest twórcą rzeźby \"Myśliciel\"?",
            answers: ['Myron', 'Henry Moore', 'Antonio Canova', 'Auguste Rodin'],
            correctAnswer: 'Auguste Rodin'
        }
    ],
    Jedzenie: [{
            question: "Bryzol to gatunek ?",
            answers: ['Mięsa', 'Sera oscypka', 'Kiełbasy', 'Knedla zawijańca'],
            correctAnswer: 'Mięsa'
        },
        {
            question: "Co to jest Fufu?",
            answers: ['Japoński deser', 'Wietnamska zupa', 'Afrykańska potrawa', 'Mongolska kiełbasa'],
            correctAnswer: 'Afrykańska potrawa'
        }
    ],
    Malarstwo: [{
            question: "Cyjan - to odcień którego koloru?",
            answers: ['Niebieskiego', 'Brązowego', 'Czerwonego', 'Zielonego'],
            correctAnswer: 'Niebieskiego'
        },
        {
            question: "Który kwiat trzyma w dłoni Madonna na słynnym obrazie Leonarda da Vinci?",
            answers: ['Tulipan', 'Róża', 'Dalia', 'Goździk'],
            correctAnswer: 'Goździk'
        }
    ],
    Historia: [{
            question: "Która z bitew kampanii wrześniowej została nazwana \"polskimi Termopilami\"",
            answers: ['Bitwa pod Krasnymstawem', 'Obrona Przemyśla', 'Obrona Wizny', 'Szarża pod Wólką Węglową'],
            correctAnswer: 'Obrona Wizny'
        },
        {
            question: "W którym roku powstało Księstwo Warszawskie?",
            answers: ['W 1807', 'W 1896', 'W 1900', 'W 1859'],
            correctAnswer: 'W 1807'
        }
    ],
    Seriale: [{
            question: "Która postać z anime/mangi została zainspirowana postacią Sun Wukonga fikcyjną postacią z mitologii chińskiej?",
            answers: ['Sasuke', 'Monkey D. Luffy', 'Son Goku', 'Naruto'],
            correctAnswer: 'Son Goku'
        },
        {
            question: "Wzrost zainteresowania, jakim narkotykiem związany jest z pojawieniem się amerykańskiego serialu \"Breaking Bad\" ?",
            answers: ['Meskaliną', 'Amfetaminą', 'Metamfetaminą', 'Speedballem'],
            correctAnswer: 'Metamfetaminą'
        }
    ],
    Programowanie: [{
            question: "JavaScript po stronie serwera to..",
            answers: ['node.js', 'PHP', 'Ruby', 'C#'],
            correctAnswer: 'node.js'
        },
        {
            question: "Zmienna typu const to zmienna..",
            answers: ['Ujemna', 'Zmiennoprzecinkowa', 'Podwójnej precyzji', 'Stała'],
            correctAnswer: 'Stała'
        }
    ],
    Matematyka: [{
            question: "Kto wprowadził do zapisu matematycznego znak równości \"=\"?",
            answers: ['Euklides z Aleksandrii', 'Robert Recorde', 'Leonhard Euler', 'Simon Stevin'],
            correctAnswer: 'Robert Recorde'
        },
        {
            question: "Einstein urodził się w dzień liczby Pi (14 Marca), a który wielki uczony zmarł w tym dniu?",
            answers: ['Jan Heweliusz', 'Issac Newton', 'Blaise Pascal', 'Stephen Hawking'],
            correctAnswer: 'Stephen Hawking'
        }
    ],
    Książki: [{
            question: "Dmitrij Głuchowski urodził się w ",
            answers: ['Moskwie', 'Kopenhadze', 'Pradze', 'Berlinie'],
            correctAnswer: 'Moskwie'
        },
        {
            question: "W którym roku urodził się Stephen King ?",
            answers: ['1944', '1945', '1946', '1947'],
            correctAnswer: '1947'
        }
    ]
};
export default questionsAndAnswers;