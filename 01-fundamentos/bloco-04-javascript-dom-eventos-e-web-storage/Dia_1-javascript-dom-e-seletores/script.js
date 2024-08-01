const headerContainer = document.querySelector('#header-container');
headerContainer.style.background = 'green';
const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.background = 'salmon';
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.background = '#ffd700';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
  emergencyTasksHeaders[i].style.background = 'purple';
}

const noEmergencyTasksHaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksHaders.length; i += 1) {
    noEmergencyTasksHaders[i].style.background = 'black';
}

const footerHeader = document.querySelector('#footer-container');
footerHeader.style.background = '#008080';