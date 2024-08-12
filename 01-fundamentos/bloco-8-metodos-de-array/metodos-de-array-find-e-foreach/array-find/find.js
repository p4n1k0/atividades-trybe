const songs = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const foundSong = songs.find((song) => song.id === '31031685');

console.log(foundSong);

const contacts = [
    { name: 'João', phone: '123456789' },
    { name: 'Maria', phone: '987654321' },
    { name: 'Pedro', phone: '456123789' },
    { name: 'Ana', phone: '789456123' },
    { name: 'Carlos', phone: '321654987' },
    { name: 'Mariana', phone: '654123987' },
    { name: 'Lucas', phone: '987321654' },
    { name: 'Laura', phone: '123789456' },
    { name: 'Tiago', phone: '789123456' },
    { name: 'Beatriz', phone: '456789123' }
];

const searchContact = (contacts, name) => {
    const foundCount = contacts.find(contact => contact.name === name);

    if (foundCount) {
        return { ...foundCount };
    }
    return 'Contato não encontrado'
};

console.log(searchContact(contacts, 'Ana'));

