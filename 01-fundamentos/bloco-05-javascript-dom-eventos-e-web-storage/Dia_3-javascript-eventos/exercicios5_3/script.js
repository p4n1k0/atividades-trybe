function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //ref: gabarito

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function diasDezembro () {
      let pegaDiasLista = document.querySelector('#days');

      for (let i = 0; i < dezDaysList.length; i += 1) {
          let day = dezDaysList[i];
          let diaLista = document.createElement('li')
          
          if (day === 24 || day === 31) {
            diaLista.className = 'day holiday';
            diaLista.innerHTML = day;
            pegaDiasLista.appendChild(diaLista);
          } else if (day === 4 || day === 11 || day === 18) {
            diaLista.className = 'day friday';
            diaLista.innerHTML = day;
            pegaDiasLista.appendChild(diaLista)
          } else if (day === 25) {
            diaLista.className = 'day holiday friday';
            diaLista.innerHTML = day;
            pegaDiasLista.appendChild(diaLista);
          } else {
            diaLista.innerHTML = day;
            diaLista.className = 'day';
            pegaDiasLista.appendChild(diaLista);
          };
      };
  }

  diasDezembro();

  // ref: gabarito

  function criaBotaoFeriado(nomeBotao) {
    let containerBotao = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    let novoBotaoId = 'btn-holiday';

    novoBotao.innerHTML = nomeBotao;
    novoBotao.id = novoBotaoId;
    containerBotao.appendChild(novoBotao);
  };

criaBotaoFeriado('Feriados');

// ref: gabarito
function mostraFeriados() {
  let pegaBotaoFeriado = document.querySelector('#btn-holiday');
  let pegaFeriados = document.querySelectorAll('.holiday');
  let bgColor = 'rgb(238,238,238)';
  let achaNovaCor = 'white';

  pegaBotaoFeriado.addEventListener('click', function() {
    for (let i = 0; i < pegaFeriados.length; i += 1) {
      if (pegaFeriados[i].style.backgroundColor === achaNovaCor) {
        pegaFeriados[i].style.backgroundColor = bgColor;
      } else {
        pegaFeriados[i].style.backgroundColor = achaNovaCor;
      }
    }
  })
};    

mostraFeriados();

//4. ref: gabarito
function criaBotaoSextaFeira(nomeBotao) {
  let containerBotao = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let novoBotaoId = 'btn-friday';

  novoBotao.innerHTML = nomeBotao;
  novoBotao.id = novoBotaoId;
  containerBotao.appendChild(novoBotao);
};

criaBotaoSextaFeira('sexta-feira');

//5. ref: gabarito
function mostraSextas(sextasArray) {
  let pegaBotaoSextas = document.querySelector('#btn-friday');
  let sextas = document.getElementsByClassName('friday');
  let novoTextoSexta = 'Sextou!!';

  pegaBotaoSextas.addEventListener('click', function(){
    for (let i = 0; i < sextas.length; i += 1) {
      if (sextas[i].innerHTML !== novoTextoSexta) {
        sextas[i].innerHTML = novoTextoSexta;
      } else {
        sextas[i].innerHTML = sextasArray[i];
      }
    }
  })  
};

let dezSextas = [4, 11, 18, 25];
mostraSextas(dezSextas);

//6. ref: gabarito
function diaMouseOver() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  }) 
}

function diaMouseOut() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

diaMouseOver();
diaMouseOut();

//7. ref: gabarito
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let nomeTask = document.createElement('span');

  nomeTask.innerHTML = task;
  tasksContainer.appendChild(nomeTask);
};

newTaskSpan('Projeto');

//8. ref: gabarito
function novoTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let novoTask = document.createElement('div');

  novoTask.className = 'task';
  novoTask.style.backgroundColor = color;
  tasksContainer.appendChild(novoTask);
};

novoTaskDiv('blue');