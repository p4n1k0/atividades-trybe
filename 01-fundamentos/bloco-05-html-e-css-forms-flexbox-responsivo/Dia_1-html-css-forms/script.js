function handleSubmit(event) {
    event.prevetDefault();
}

window.onload = function() {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');

    for (let i = 0; i < formElements.length; i += 1) {
        const userInput = formElements[i];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}