function wakeUp() {
    return 'Acordando!!';    
}

function breakfast() {
    return 'Bora tomar café!!'
}

function sleep() {
    return 'Partiu dormir!!';
}

const doingThings = (callback) => {
    const result = (callback());
    console.log(result);
}

doingThings(sleep);
