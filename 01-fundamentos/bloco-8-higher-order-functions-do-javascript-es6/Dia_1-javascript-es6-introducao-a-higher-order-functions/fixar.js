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
    console.log(callback());
}

doingThings(sleep);
