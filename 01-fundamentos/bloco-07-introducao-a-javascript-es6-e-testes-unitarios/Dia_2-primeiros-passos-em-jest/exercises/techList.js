const techList = (arrayTechnologies, name) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';

    const sortedArray = arrayTechnologies.sort();
    const technologyList = [];

    for (let i = 0; i < sortedArray.length; i += 1) {
        technologyList.push({
            tech: sortedArray[i],
            name,
        });
    }

    return technologyList
}

module.exports = techList;
