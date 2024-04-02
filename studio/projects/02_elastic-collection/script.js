function updateCircleValue(link, selectedValue, type) {
    // 현재 이벤트의 기본 동작을 중지합니다.
    event.preventDefault();
    
    const circle = link.closest('.circle');
    const circleValueContainer = circle.querySelector(".selectedValue");
    let calculatedValue = 0;

    
    switch (type) {
        case 'theater':
            switch (selectedValue) {
                case 'across all theaters.':
                    calculatedValue = 295;
                    break;
                case 'at AMC theaters.':
                    calculatedValue = 3;
                    break;
                case 'at CGV theaters.':
                    calculatedValue = 268;
                    break;
                case 'at Megabox theaters.':
                    calculatedValue = 24;
                    break;
            }
            break;
        case 'format':
            switch (selectedValue) {
                case 'across all formats.':
                    calculatedValue = 295;
                    break;
                case 'watching 2D movies.':
                    calculatedValue = 181;
                    break;
                case 'watching Dolby Atmos movies.':
                    calculatedValue = 7;
                    break;
                case 'watching IMAX 2D movies.':
                    calculatedValue = 47;
                    break;
                case 'watching IMAX 3D movies.':
                    calculatedValue = 21;
                    break;
                case 'watching 4DX movies.':
                    calculatedValue = 27;
                    break;
                case 'watching ScreenX movies.':
                    calculatedValue = 9;
                    break;
            }
            break;
        case 'with':
            switch (selectedValue) {
                case 'in any company.':
                    calculatedValue = 295;
                    break;
                case 'watching movies alone.':
                    calculatedValue = 126;
                    break;
                case 'watching movies with friends.':
                    calculatedValue = 126;
                    break;
                case 'watching movies with family.':
                    calculatedValue = 43;
                    break;
            }
            break;
        case 'feeling':
            switch (selectedValue) {
                case 'with Feeling':
                    calculatedValue = 295;
                    break;
                case 'watching movies that felt Reasonable.':
                    calculatedValue = 223;
                    break;
                case 'watching movies that felt Regrettable.':
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
            'Times': '2x',
            'Title': "Oppenheimer",
            'Length': '3h',
            'Date': '23-09-07',
            'Theater': 'AMC Lincoln Square',
            'Format': 'IMAX 70mm Film 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Oppenheimer",
            'Length': '3h',
            'Date': '23-08-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Concrete Utopia",
            'Length': '2h 10m',
            'Date': '23-08-12',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Spider-Man: Across the Spider-Verse",
            'Length': '2h 20m',
            'Date': '23-07-01',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '3x',
            'Title': "Guardians of the Galaxy Vol. 3",
            'Length': '2h 30m',
            'Date': '23-05-10',
            'Theater': 'CGV Daegu',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Guardians of the Galaxy Vol. 3",
            'Length': '2h 30m',
            'Date': '23-05-10',
            'Theater': 'Megabox Daegu',
            'Format': '2D Dolby Atmos',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Guardians of the Galaxy Vol. 3",
            'Length': '2h 30m',
            'Date': '23-05-03',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Super Mario Bros. Movie",
            'Length': '1h 32m',
            'Date': '23-04-29',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "John Wick: Chapter 4",
            'Length': '2h 49m',
            'Date': '23-04-27',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Suzume",
            'Length': '2h 2m',
            'Date': '23-03-18',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Suzume",
            'Length': '2h 2m',
            'Date': '23-03-08',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Kimetsu no Yaiba: Katanakaji no Sato-hen",
            'Length': '1h 50m',
            'Date': '23-03-05',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The First Slam Dunk",
            'Length': '2h 4m',
            'Date': '23-03-04',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Ant-Man and the Wasp: Quantumania",
            'Length': '2h 5m',
            'Date': '23-02-18',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Avatar: The Way of Water",
            'Length': '3h 12m',
            'Date': '23-01-10',
            'Theater': 'CGV Apgujeong',
            'Format': 'IMAX 3D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Black Panther: Wakanda Forever",
            'Length': '2h 41m',
            'Date': '22-11-13',
            'Theater': 'CGV Yongsan',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Decision to Leave",
            'Length': '2h 18m',
            'Date': '22-07-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Thor: Love and Thunder",
            'Length': '1h 59m',
            'Date': '22-07-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Top Gun: Maverick",
            'Length': '2h 11m',
            'Date': '22-07-05',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Broker",
            'Length': '2h 9m',
            'Date': '22-06-08',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Jurassic World Dominion",
            'Length': '2h 26m',
            'Date': '22-06-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "The Roundup 2",
            'Length': '1h 46m',
            'Date': '22-05-24',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Doctor Strange in the Multiverse of Madness",
            'Length': '2h 26m',
            'Date': '22-05-04',
            'Theater': 'CGV Daejeon',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Fantastic Beasts: The Secrets of Dumbledore",
            'Length': '2h 23m',
            'Date': '22-04-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "The Batman",
            'Length': '2h 53m',
            'Date': '22-03-02',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Kingmaker",
            'Length': '2h 3m',
            'Date': '22-02-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2',
            'Title': "Spider-Man: No Way Home",
            'Length': '2h 28m',
            'Date': '22-01-01',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The King's Man",
            'Length': '2h 11m',
            'Date': '21-12-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Eternals",
            'Length': '2h 36m',
            'Date': '21-11-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Dune: Part One",
            'Length': '2h 35m',
            'Date': '21-10-27',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Venom: Let There Be Carnage",
            'Length': '1h 37m',
            'Date': '21-10-16',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "The Suicide Squad",
            'Length': '2h 12m',
            'Date': '21-08-22',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Escape from Mogadishu",
            'Length': '2h 1m',
            'Date': '21-08-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Black Widow",
            'Length': '2h 13m',
            'Date': '21-07-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Hitman's Wife's Bodyguard",
            'Length': '1h 40m',
            'Date': '21-07-02',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Cruella",
            'Length': '2h 14m',
            'Date': '21-05-28',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "F9",
            'Length': '1h 23m',
            'Date': '21-05-19',
            'Theater': 'CGV Ansan',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Kimetsu no Yaiba The Movie: Mugen Train",
            'Length': '1h 57m',
            'Date': '21-02-03',
            'Theater': 'CGV Cheonho',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Wonder Woman 1984",
            'Length': '2h 31m',
            'Date': '20-12-25',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Capone",
            'Length': '1h 43m',
            'Date': '20-10-16',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Tenet",
            'Length': '2h 30m',
            'Date': '20-09-05',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Tenet",
            'Length': '2h 30m',
            'Date': '20-09-04',
            'Theater': 'CGV Wangsimni',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Deliver Us from Evil",
            'Length': '1h 48m',
            'Date': '20-08-15',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Peninsula",
            'Length': '1h 56m',
            'Date': '20-07-17',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Dark Knight Rises",
            'Length': '2h 45m',
            'Date': '20-07-13',
            'Theater': 'CGV Wangsimni',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "#Alive",
            'Length': '1h 39m',
            'Date': '20-06-25',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Onward",
            'Length': '1h 42m',
            'Date': '20-06-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Mad Max: Fury Road",
            'Length': '2h',
            'Date': '20-06-04',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '4x',
            'Title': "Avengers: Endgame",
            'Length': '3h 2m',
            'Date': '20-05-05',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '7x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '20-05-02',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "The Avengers",
            'Length': '2h 23m',
            'Date': '20-04-23',
            'Theater': 'CGV Ansan',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '4x',
            'Title': "Weathering with You",
            'Length': '1h 54m',
            'Date': '20-04-23',
            'Theater': 'CGV Gwanggyo',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "<1917>",
            'Length': '1h 59m',
            'Date': '20-03-26',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Liam Gallagher: As It Was",
            'Length': '1h 25m',
            'Date': '20-03-15',
            'Theater': 'CGV Pyeongchon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Hitman: Agent Jun",
            'Length': '1h 50m',
            'Date': '20-01-27',
            'Theater': 'Megabox Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Star Wars: The Rise of Skywalker",
            'Length': '2h 22m',
            'Date': '20-01-17',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Midway",
            'Length': '2h 18m',
            'Date': '20-01-10',
            'Theater': 'CGV Yongsan',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Dolittle",
            'Length': '2h 21m',
            'Date': '20-01-08',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Cats",
            'Length': '1h 50m',
            'Date': '19-12-25',
            'Theater': 'CGV Apgujeong',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Knives Out",
            'Length': '2h 10m',
            'Date': '19-12-21',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Ford v Ferrari",
            'Length': '2h 32m',
            'Date': '19-12-14',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Ford v Ferrari",
            'Length': '2h 32m',
            'Date': '19-12-09',
            'Theater': 'CGV Wangsimni',
            'Format': 'ULTRA 4DX Screen X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Frozen II",
            'Length': '1h 43m',
            'Date': '19-11-07',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '3x',
            'Title': "Weathering with You",
            'Length': '1h 54m',
            'Date': '19-11-09',
            'Theater': 'CGV Cheonho',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Joker",
            'Length': '2h 2m',
            'Date': '19-10-10',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Missing Link",
            'Length': '1h 35m',
            'Date': '19-10-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Once Upon a Date... in Hollywood",
            'Length': '2h 40m',
            'Date': '19-09-28',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Current War",
            'Length': '1h 48m',
            'Date': '19-08-28',
            'Theater': 'CGV Cheonho',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Metamorphosis",
            'Length': '1h 53m',
            'Date': '19-08-25',
            'Theater': 'Megabox Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Fast & Furious Presents: Hobbs & Shaw",
            'Length': '2h 16m',
            'Date': '19-08-23',
            'Theater': 'CGV Gangbyeon',
            'Format': '4DX',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Secret Life of Pets 2",
            'Length': '1h 26m',
            'Date': '19-08-18',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Fast & Furious Presents: Hobbs & Shaw",
            'Length': '2h 16m',
            'Date': '19-08-14',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Divine Fury",
            'Length': '2h 9m',
            'Date': '19-08-08',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Exit",
            'Length': '1h 44m',
            'Date': '19-08-07',
            'Theater': 'Megabox Daegu',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Red Shoes and the Seven Dwarfs",
            'Length': '1h 32m',
            'Date': '19-07-28',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '3x',
            'Title': "Spider-Man: Far From Home",
            'Length': '2h 13m',
            'Date': '19-07-22',
            'Theater': 'CGV Daegu',
            'Format': 'Screen X',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Lion King",
            'Length': '1h 58m',
            'Date': '19-07-19',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Midsommar",
            'Length': '2h 28m',
            'Date': '19-07-19',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Toy Story 4",
            'Length': '1h 40m',
            'Date': '19-07-07',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Spider-Man: Far From Home",
            'Length': '2h 13m',
            'Date': '19-07-02',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Spider-Man: Far From Home",
            'Length': '2h 13m',
            'Date': '19-07-01',
            'Theater': 'CGV Daegu',
            'Format': '4DX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "John Wick: Chapter 3 – Parabellum",
            'Length': '2h 11m',
            'Date': '19-06-30',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "John Wick: Chapter 3 – Parabellum",
            'Length': '2h 11m',
            'Date': '19-06-28',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Men in Black: International",
            'Length': '1h 55m',
            'Date': '19-06-14',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone', 
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Oasis: Supersonic",
            'Length': '2h 2m',
            'Date': '19-06-08',
            'Theater': 'CGV Myeongdong',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Aladdin",
            'Length': '2h 8m',
            'Date': '19-06-03',
            'Theater': 'CGV Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Parasite",
            'Length': '2h 12m',
            'Date': '19-06-01',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '3x',
            'Title': "Avengers: Endgame",
            'Length': '3h 2m',
            'Date': '19-05-16',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Avengers: Endgame",
            'Length': '3h 2m',
            'Date': '19-04-28',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Avengers: Endgame",
            'Length': '3h 2m',
            'Date': '19-04-24',
            'Theater': 'CGV Sopoong',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '3x',
            'Title': "Bohemian Rhapsody",
            'Length': '2h 14m',
            'Date': '19-04-15',
            'Theater': 'CGV Yongsan',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Vice",
            'Length': '2h 12m',
            'Date': '19-04-12',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Shazam!",
            'Length': '2h 12m',
            'Date': '19-04-07',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Guilty",
            'Length': '1h 30m',
            'Date': '19-03-29',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Us",
            'Length': '2h 1m',
            'Date': '19-03-27',
            'Theater': 'CGV Ansan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Captain Marvel",
            'Length': '2h 4m',
            'Date': '19-03-07',
            'Theater': 'CGV Ansan',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Bohemian Rhapsody",
            'Length': '2h 14m',
            'Date': '19-03-02',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Papillon",
            'Length': '2h 31m',
            'Date': '19-03-02',
            'Theater': 'CGV Yongsan',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Svaha: The Sixth Finger",
            'Length': '1h 58m',
            'Date': '19-02-22',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Harry Potter and the Chamber of Secrets",
            'Length': '2h 41m',
            'Date': '19-02-22',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Happy Death Day 2U",
            'Length': '2h 2m',
            'Date': '19-02-16',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Alita: Battle Angel",
            'Length': '1h 40m',
            'Date': '19-02-09',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Extreme Job",
            'Length': '1h 51m',
            'Date': '19-02-03',
            'Theater': 'Megabox Songdo',
            'Format': '2D Dolby Atmos',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Hit-and-Run Squad",
            'Length': '2h 12m',
            'Date': '19-01-30',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Extreme Job",
            'Length': '1h 51m',
            'Date': '19-01-29',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Glass",
            'Length': '2h 9m',
            'Date': '19-01-25',
            'Theater': 'CGV Yongsan',
            'Format': 'IMAX 2D LASER',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Oasis: Supersonic",
            'Length': '2h 2m',
            'Date': '19-01-13',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Ralph Breaks the Internet",
            'Length': '1h 52m',
            'Date': '19-01-10',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Crayon Shin-chan: Burst Serving! Kung Fu Boys",
            'Length': '1h 44m',
            'Date': '18-12-23',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Aquaman",
            'Length': '2h 23m',
            'Date': '18-12-19',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Nutcracker and the Four Realms",
            'Length': '1h 40m',
            'Date': '18-12-16',
            'Theater': 'CGV Gumi',
            'Format': '2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Spider-Man: Into the Spider-Verse",
            'Length': '1h 56m',
            'Date': '18-12-16',
            'Theater': 'CGV Gumi',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '3x',
            'Title': "Bohemian Rhapsody",
            'Length': '2h 14m',
            'Date': '18-11-25',
            'Theater': 'CGV Daegu',
            'Format': 'SCREEN X',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Fantastic Beasts: The Crimes of Grindelwald",
            'Length': '2h 14m',
            'Date': '18-11-18',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Harry Potter and the Sorcerer's Stone",
            'Length': '2h 32m',
            'Date': '18-10-28',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "A Star is Born",
            'Length': '2h 15m',
            'Date': '18-10-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Searching",
            'Length': '2h 22m',
            'Date': '18-09-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "The Haunted House: The Secret of the Cave",
            'Length': '1h 8m',
            'Date': '18-07-29',
            'Theater': 'Megabox Gimcheon',
            'Format': '2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Incredibles 2",
            'Length': '2h 6m',
            'Date': '18-07-22',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Family',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Ant-Man and the Wasp",
            'Length': '1h 58m',
            'Date': '18-07-07',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Hereditary",
            'Length': '2h 7m',
            'Date': '18-06-11',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Jurassic World: Fallen Kingdom",
            'Length': '2h 9m',
            'Date': '18-06-06',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Deadpool 2",
            'Length': '2h',
            'Date': '18-05-22',
            'Theater': 'Megabox Daegu',
            'Format': '2D Dolby Atmos',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '6x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-05-14',
            'Theater': 'CGV Daegu',
            'Format': '4DX 3D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '5x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-05-14',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 2D',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '4x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-05-07',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '3x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-04-28',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2x',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-04-28',
            'Theater': 'CGV Daegu',
            'Format': '2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Avengers: Infinity War",
            'Length': '2h 29m',
            'Date': '18-04-25',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Lady Bird",
            'Length': '1h 33m',
            'Date': '18-04-09',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Friend',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '1',
            'Title': "Three Billboards Outside Ebbing, Missouri",
            'Length': '1h 55m',
            'Date': '18-03-25',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Alone',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '2',
            'Title': "Black Panther",
            'Length': '2h 15m',
            'Date': '18-02-26',
            'Theater': 'CGV Daegu',
            'Format': '4DX 2D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Black Panther",
            'Length': '2h 15m',
            'Date': '18-02-18',
            'Theater': 'CGV Daegu',
            'Format': 'IMAX 3D',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Keys to the Heart",
            'Length': '2h',
            'Date': '18.01.21',
            'Theater': 'CGV Daegu',
            'Format': '2D (Recliner)',
            'With': 'Friend',
            'Feeling': 'Reasonable'
        },
        {
            'Times': '1',
            'Title': "Downsizing",
            'Length': '2h 15m',
            'Date': '18-01-15',
            'Theater': 'CGV Gimcheon',
            'Format': '2D (Laser)',
            'With': 'Alone',
            'Feeling': 'Regrettable'
        },
        {
            'Times': '2x',
            'Title': "Your Name.",
            'Length': '1h 52m',
            'Date': '18-01-04',
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
    document.querySelector("#dateFilter").addEventListener("change", applyFilters);
    document.querySelector("#feelingFilter").addEventListener("change", applyFilters);

    function applyFilters() {
        const theaterFilter = document.querySelector("#theaterFilter").value;
        const formatFilter = document.querySelector("#formatFilter").value;
        const withFilter = document.querySelector("#withFilter").value;
        const DateFilter = document.querySelector("#dateFilter").value;
        const feelingFilter = document.querySelector("#feelingFilter").value;
    
        currentData = data.filter(item => {
            // 'Date' 필드에서 "YY" 연도 추출 ('YYYY-MM-DD' 포맷 가정 시)
            const itemYear = `20${item.Date.split('-')[0]}`; // 데이터 포맷을 'YY-MM-DD'로 변경하고 'YYYY' 형태로 변환
            // 연도 필터 조정: 추출된 연도와 사용자가 선택한 연도 비교
            const yearMatch = DateFilter === 'all' || itemYear === DateFilter;
    
            return (theaterFilter === 'all' || item.Theater.includes(theaterFilter)) &&
                   (formatFilter === 'all' || item.Format.includes(formatFilter)) &&
                   (withFilter === 'all' || item.With.includes(withFilter)) &&
                   (feelingFilter === 'all' || item.Feeling === feelingFilter) &&
                   yearMatch;
        });
    
        renderTable(currentData);
    }
    

    function renderTable(filteredData) {
        const tableBody = document.querySelector("#moviesTable tbody");
        tableBody.innerHTML = ''; // 테이블 초기화

        filteredData.forEach(item => {
            const row = document.createElement('tr'); // createElement 사용
            row.innerHTML = `
                <td>${item.Times}</td>
                <td class="${item.Feeling.toLowerCase()}">${item.Title}</td>
                <td>${item.Length}</td>
                <td>${item.Date}</td>
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


function scrollToAnalysis() {
    document.getElementById('subtitle').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
  
