const cartoons = [
    { title: 'Tom & Jerry', ageRating: 'Livre' },
    { title: 'Scooby-Doo', ageRating: 'Livre' },
    { title: 'Looney Tunes', ageRating: 'Livre' },
    { title: 'The Simpsons', ageRating: 12 },
    { title: 'Avatar: The Last Airbender', ageRating: 'Livre' },
    { title: 'Pokémon', ageRating: 'Livre' },
    { title: 'Dragon Ball Z', ageRating: 12 },
    { title: 'Adventure Time', ageRating: 'Livre' },
    { title: 'Gravity Falls', ageRating: 'Livre' },
    { title: 'Teen Titans Go!', ageRating: 'Livre' }
];

const addGender = (cartoons) => cartoons.forEach((cartoon) => cartoon.gender = 'Animação');

addGender(cartoons);

console.log(cartoons);
