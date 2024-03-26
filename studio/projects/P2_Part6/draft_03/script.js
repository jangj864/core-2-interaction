function updateCircleValue(link, selectedValue, type) {
    // 현재 이벤트의 기본 동작을 중지합니다.
    event.preventDefault();
    
    const circle = link.closest('.circle');
    const circleValueContainer = circle.querySelector(".selectedValue");
    let calculatedValue = 0;

    switch (type) {
        case 'theater':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'AMC':
                    calculatedValue = 3;
                    break;
                case 'CGV':
                    calculatedValue = 268;
                    break;
                case 'Megabox':
                    calculatedValue = 24;
                    break;
            }
            break;
        case 'format':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case '2D':
                    calculatedValue = 181;
                    break;
                case 'DolbyAtmos':
                    calculatedValue = 7;
                    break;
                case 'IMAX2D':
                    calculatedValue = 47;
                    break;
                case 'IMAX3D':
                    calculatedValue = 21;
                    break;
                case '4DX':
                    calculatedValue = 27;
                    break;
                case 'ScreenX':
                    calculatedValue = 9;
                    break;
            }
            break;
        case 'with':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'Alone':
                    calculatedValue = 126;
                    break;
                case 'Friend':
                    calculatedValue = 126;
                    break;
                case 'Family':
                    calculatedValue = 43;
                    break;
            }
            break;
        case 'feeling':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'Reasonable':
                    calculatedValue = 223;
                    break;
                case 'Regrettable':
                    calculatedValue = 72;
                    break;
            }
            break;
        default:
            break;
    }

    circleValueContainer.textContent = calculatedValue;
    circle.querySelector(".selected" + type.charAt(0).toUpperCase() + type.slice(1)).textContent = selectedValue;
}

document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            'View': '2',
            'Title': "Oppenheimer",
            'RunTime': '180',
            'Time': '23-09-07',
            'Theater': 'AMC Lincoln Square',
            'Format': 'IMAX 70mm Film 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Oppenheimer",
            'RunTime': '180',
            'Time': '23-08-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Concrete Utopia",
            'RunTime': '130',
            'Time': '23-08-12',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Spider-Man: Across the Spider-Verse",
            'RunTime': '140',
            'Time': '23-07-01',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '3',
            'Title': "Guardians of the Galaxy Vol. 3",
            'RunTime': '150',
            'Time': '23-05-10',
            'Theater': 'CGV Daegu',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Guardians of the Galaxy Vol. 3",
            'RunTime': '150',
            'Time': '23-05-10',
            'Theater': 'Megabox Daegu',
            'Format': '2D Dolby Atmos',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Guardians of the Galaxy Vol. 3",
            'RunTime': '150',
            'Time': '23-05-03',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Super Mario Bros. Movie",
            'RunTime': '92',
            'Time': '23-04-29',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "John Wick: Chapter 4",
            'RunTime': '169',
            'Time': '23-04-27',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Suzume",
            'RunTime': '122',
            'Time': '23-03-18',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Suzume",
            'RunTime': '122',
            'Time': '23-03-08',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Kimetsu no Yaiba: Katanakaji no Sato-hen",
            'RunTime': '110',
            'Time': '23-03-05',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The First Slam Dunk",
            'RunTime': '124',
            'Time': '23-03-04',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Ant-Man and the Wasp: Quantumania",
            'RunTime': '125',
            'Time': '23-02-18',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Avatar: The Way of Water",
            'RunTime': '192',
            'Time': '23-01-10',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 3D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Black Panther: Wakanda Forever",
            'RunTime': '161',
            'Time': '22-11-13',
            'Theater': 'CGV Yongsan',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Decision to Leave",
            'RunTime': '138',
            'Time': '22-07-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Thor: Love and Thunder",
            'RunTime': '119',
            'Time': '22-07-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Top Gun: Maverick",
            'RunTime': '131',
            'Time': '22-07-05',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Broker",
            'RunTime': '129',
            'Time': '22-06-08',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Jurassic World Dominion",
            'RunTime': '146',
            'Time': '22-06-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "The Roundup 2",
            'RunTime': '106',
            'Time': '22-05-24',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Doctor Strange in the Multiverse of Madness",
            'RunTime': '146',
            'Time': '22-05-04',
            'Theater': 'CGV Daejeon',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Fantastic Beasts: The Secrets of Dumbledore",
            'RunTime': '143',
            'Time': '22-04-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "The Batman",
            'RunTime': '173',
            'Time': '22-03-02',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Kingmaker",
            'RunTime': '123',
            'Time': '22-02-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Spider-Man: No Way Home",
            'RunTime': '148',
            'Time': '22-01-01',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The King's Man",
            'RunTime': '131',
            'Time': '21-12-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Eternals",
            'RunTime': '156',
            'Time': '21-11-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Dune: Part One",
            'RunTime': '155',
            'Time': '21-10-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Venom: Let There Be Carnage",
            'RunTime': '97',
            'Time': '21-10-16',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "The Suicide Squad",
            'RunTime': '132',
            'Time': '21-08-22',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Escape from Mogadishu",
            'RunTime': '121',
            'Time': '21-08-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Black Widow",
            'RunTime': '133',
            'Time': '21-07-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Hitman's Wife's Bodyguard",
            'RunTime': '100',
            'Time': '21-07-02',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Cruella",
            'RunTime': '134',
            'Time': '21-05-28',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "F9",
            'RunTime': '143',
            'Time': '21-05-19',
            'Theater': 'CGV Ansan',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Kimetsu no Yaiba The Movie: Mugen Train",
            'RunTime': '117',
            'Time': '21-02-03',
            'Theater': 'CGV Cheonho',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Wonder Woman 1984",
            'RunTime': '151',
            'Time': '20-12-25',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Capone",
            'RunTime': '103',
            'Time': '20-10-16',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Tenet",
            'RunTime': '150',
            'Time': '20-09-05',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Tenet",
            'RunTime': '150',
            'Time': '20-09-04',
            'Theater': 'CGV Wangsimni',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Deliver Us from Evil",
            'RunTime': '108',
            'Time': '20-08-15',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Peninsula",
            'RunTime': '116',
            'Time': '20-07-17',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Dark Knight Rises",
            'RunTime': '165',
            'Time': '20-07-13',
            'Theater': 'CGV Wangsimni',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "#Alive",
            'RunTime': '99',
            'Time': '20-06-25',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Onward",
            'RunTime': '102',
            'Time': '20-06-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Mad Max: Fury Road",
            'RunTime': '120',
            'Time': '20-06-04',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '4',
            'Title': "Avengers: Endgame",
            'RunTime': '182',
            'Time': '20-05-05',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '7',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '20-05-02',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "The Avengers",
            'RunTime': '143',
            'Time': '20-04-23',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '4',
            'Title': "Weathering with You",
            'RunTime': '114',
            'Time': '20-04-23',
            'Theater': 'CGV Gwanggyo',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "<1917>",
            'RunTime': '119',
            'Time': '20-03-26',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Liam Gallagher: As It Was",
            'RunTime': '85',
            'Time': '20-03-15',
            'Theater': 'CGV Pyeongchon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Hitman: Agent Jun",
            'RunTime': '110',
            'Time': '20-01-27',
            'Theater': 'Megabox Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Star Wars: The Rise of Skywalker",
            'RunTime': '142',
            'Time': '20-01-17',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Midway",
            'RunTime': '138',
            'Time': '20-01-10',
            'Theater': 'CGV Yongsan',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Dolittle",
            'RunTime': '141',
            'Time': '20-01-08',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Cats",
            'RunTime': '110',
            'Time': '19-12-25',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Knives Out",
            'RunTime': '130',
            'Time': '19-12-21',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Ford v Ferrari",
            'RunTime': '152',
            'Time': '19-12-14',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Ford v Ferrari",
            'RunTime': '152',
            'Time': '19-12-09',
            'Theater': 'CGV Wangsimni',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Frozen II",
            'RunTime': '103',
            'Time': '19-11-07',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '3',
            'Title': "Weathering with You",
            'RunTime': '114',
            'Time': '19-11-09',
            'Theater': 'CGV Cheonho',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Joker",
            'RunTime': '122',
            'Time': '19-10-10',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Missing Link",
            'RunTime': '95',
            'Time': '19-10-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Once Upon a Time... in Hollywood",
            'RunTime': '160',
            'Time': '19-09-28',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Current War",
            'RunTime': '108',
            'Time': '19-08-28',
            'Theater': 'CGV Cheonho',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Metamorphosis",
            'RunTime': '113',
            'Time': '19-08-25',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Fast & Furious Presents: Hobbs & Shaw",
            'RunTime': '136',
            'Time': '19-08-23',
            'Theater': 'CGV Gangbyeon',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Secret Life of Pets 2",
            'RunTime': '86',
            'Time': '19-08-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Fast & Furious Presents: Hobbs & Shaw",
            'RunTime': '136',
            'Time': '19-08-14',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Divine Fury",
            'RunTime': '129',
            'Time': '19-08-08',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Exit",
            'RunTime': '104',
            'Time': '19-08-07',
            'Theater': 'Megabox Daegu',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Red Shoes and the Seven Dwarfs",
            'RunTime': '92',
            'Time': '19-07-28',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'View': '3',
            'Title': "Spider-Man: Far From Home",
            'RunTime': '133',
            'Time': '19-07-22',
            'Theater': 'CGV Daegu',
            'Format': 'Screen X',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Lion King",
            'RunTime': '118',
            'Time': '19-07-19',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Midsommar",
            'RunTime': '148',
            'Time': '19-07-19',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Toy Story 4",
            'RunTime': '100',
            'Time': '19-07-07',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Spider-Man: Far From Home",
            'RunTime': '133',
            'Time': '19-07-02',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Spider-Man: Far From Home",
            'RunTime': '133',
            'Time': '19-07-01',
            'Theater': 'CGV Daegu',
            'Format': '4DX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "John Wick: Chapter 3 – Parabellum",
            'RunTime': '131',
            'Time': '19-06-30',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "John Wick: Chapter 3 – Parabellum",
            'RunTime': '131',
            'Time': '19-06-28',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Men in Black: International",
            'RunTime': '115',
            'Time': '19-06-14',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone', 
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Oasis: Supersonic",
            'RunTime': '122',
            'Time': '19-06-08',
            'Theater': 'CGV Myeongdong',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Aladdin",
            'RunTime': '128',
            'Time': '19-06-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Parasite",
            'RunTime': '132',
            'Time': '19-06-01',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '3',
            'Title': "Avengers: Endgame",
            'RunTime': '182',
            'Time': '19-05-16',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Avengers: Endgame",
            'RunTime': '182',
            'Time': '19-04-28',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Avengers: Endgame",
            'RunTime': '182',
            'Time': '19-04-24',
            'Theater': 'CGV Sopoong',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '3',
            'Title': "1",
            'RunTime': '134',
            'Time': '19-04-15',
            'Theater': 'CGV Yongsan',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Vice",
            'RunTime': '132',
            'Time': '19-04-12',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Shazam!",
            'RunTime': '132',
            'Time': '19-04-07',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Guilty",
            'RunTime': '90',
            'Time': '19-03-29',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Us",
            'RunTime': '121',
            'Time': '19-03-27',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Captain Marvel",
            'RunTime': '124',
            'Time': '19-03-07',
            'Theater': 'CGV Ansan',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Bohemian Rhapsody",
            'RunTime': '134',
            'Time': '19-03-02',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Papillon",
            'RunTime': '151',
            'Time': '19-03-02',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Svaha: The Sixth Finger",
            'RunTime': '118',
            'Time': '19-02-22',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Harry Potter and the Chamber of Secrets",
            'RunTime': '161',
            'Time': '19-02-22',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Happy Death Day 2U",
            'RunTime': '122',
            'Time': '19-02-16',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Alita: Battle Angel",
            'RunTime': '100',
            'Time': '19-02-09',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Extreme Job",
            'RunTime': '111',
            'Time': '19-02-03',
            'Theater': 'Megabox Songdo',
            'Format': '2D Dolby Atmos',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Hit-and-Run Squad",
            'RunTime': '132',
            'Time': '19-01-30',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Extreme Job",
            'RunTime': '111',
            'Time': '19-01-29',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Glass",
            'RunTime': '129',
            'Time': '19-01-25',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Oasis: Supersonic",
            'RunTime': '122',
            'Time': '19-01-13',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Ralph Breaks the Internet",
            'RunTime': '112',
            'Time': '19-01-10',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Crayon Shin-chan: Burst Serving! Kung Fu Boys",
            'RunTime': '104',
            'Time': '18-12-23',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Aquaman",
            'RunTime': '143',
            'Time': '18-12-19',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Nutcracker and the Four Realms",
            'RunTime': '100',
            'Time': '18-12-16',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Spider-Man: Into the Spider-Verse",
            'RunTime': '116',
            'Time': '18-12-16',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '3',
            'Title': "Bohemian Rhapsody",
            'RunTime': '134',
            'Time': '18-11-25',
            'Theater': 'CGV Daegu',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Fantastic Beasts: The Crimes of Grindelwald",
            'RunTime': '134',
            'Time': '18-11-18',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Harry Potter and the Sorcerer's Stone",
            'RunTime': '152',
            'Time': '18-10-28',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "A Star is Born",
            'RunTime': '135',
            'Time': '18-10-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Searching",
            'RunTime': '142',
            'Time': '18-09-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "The Haunted House: The Secret of the Cave",
            'RunTime': '68',
            'Time': '18-07-29',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Incredibles 2",
            'RunTime': '126',
            'Time': '18-07-22',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Ant-Man and the Wasp",
            'RunTime': '118',
            'Time': '18-07-07',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Hereditary",
            'RunTime': '127',
            'Time': '18-06-11',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Jurassic World: Fallen Kingdom",
            'RunTime': '129',
            'Time': '18-06-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Deadpool 2",
            'RunTime': '120',
            'Time': '18-05-22',
            'Theater': 'Megabox Daegu',
            'Format': '2D Dolby Atmos',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '6',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-05-14',
            'Theater': 'CGV Daegu',
            'Format': '4DX 3D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '5',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-05-14',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '4',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-05-07',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '3',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-04-28',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-04-28',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Avengers: Infinity War",
            'RunTime': '149',
            'Time': '18-04-25',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Lady Bird",
            'RunTime': '93',
            'Time': '18-04-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'View': '1',
            'Title': "Three Billboards Outside Ebbing, Missouri",
            'RunTime': '115',
            'Time': '18-03-25',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'View': '2',
            'Title': "Black Panther",
            'RunTime': '135',
            'Time': '18-02-26',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Black Panther",
            'RunTime': '135',
            'Time': '18-02-18',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Keys to the Heart",
            'RunTime': '120',
            'Time': '18.01.21',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'View': '1',
            'Title': "Downsizing",
            'RunTime': '135',
            'Time': '18-01-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'View': '2',
            'Title': "Your Name.",
            'RunTime': '112',
            'Time': '18-01-04',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        }
    ];

    let currentData = [...data]; // 현재 화면에 표시되는 데이터

    // 필터 및 정렬 이벤트 리스너 설정
    document.querySelector("#theaterFilter").addEventListener("change", applyFilters);
    document.querySelector("#formatFilter").addEventListener("change", applyFilters);
    document.querySelector("#withFilter").addEventListener("change", applyFilters);
    document.querySelector("#timeFilter").addEventListener("change", applyFilters);

    function applyFilters() {
        const theaterFilter = document.querySelector("#theaterFilter").value;
        const formatFilter = document.querySelector("#formatFilter").value;
        const withFilter = document.querySelector("#withFilter").value;
        const timeFilter = document.querySelector("#timeFilter").value;
    
        currentData = data.filter(item => {
            // 'Time' 필드에서 "YY" 연도 추출 ('YYYY-MM-DD' 포맷 가정 시)
            const itemYear = `20${item.Time.split('-')[0]}`; // 데이터 포맷을 'YY-MM-DD'로 변경하고 'YYYY' 형태로 변환
            // 연도 필터 조정: 추출된 연도와 사용자가 선택한 연도 비교
            const yearMatch = timeFilter === 'all' || itemYear === timeFilter;
    
            return (theaterFilter === 'all' || item.Theater.includes(theaterFilter)) &&
                   (formatFilter === 'all' || item.Format.includes(formatFilter)) &&
                   (withFilter === 'all' || item.With.includes(withFilter)) &&
                   yearMatch; // 수정된 연도 필터링 조건
        });
    
        renderTable(currentData);
    }
    

    function renderTable(filteredData) {
        const tableBody = document.querySelector("#moviesTable tbody");
        tableBody.innerHTML = ''; // 테이블 초기화

        filteredData.forEach(item => {
            const row = document.createElement('tr'); // createElement 사용
            row.innerHTML = `
                <td>${item.View}</td>
                <td class="${item.Feeling.toLowerCase()}">${item.Title}</td>
                <td>${item.RunTime}</td>
                <td>${item.Time}</td>
                <td>${item.Theater}</td>
                <td>${item.Format}</td>
                <td>${item.With}</td>
            `;
            // `Feeling` 값에 따른 색상 변경 로직을 여기에 포함
            if (item.Feeling === "Reasonable") {
                row.querySelector('td:nth-child(2)').style.color = "rgb(0, 255, 0)";
            } else if (item.Feeling === "Regrettable") {
                row.querySelector('td:nth-child(2)').style.color = "rgb(255, 0, 255)";
            }
            tableBody.appendChild(row);
        });
    }

    renderTable(currentData); // 초기 데이터 렌더링
});
