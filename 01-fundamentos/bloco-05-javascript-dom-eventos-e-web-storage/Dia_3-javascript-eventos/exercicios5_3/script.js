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
      let diasDaLista = document.querySelector('#days');

      for (let i = 0; i < dezDaysList.length; i += 1) {
          let day = dezDaysList[i];
          let diasLista = document.createElement('li')
          
          if (day === 24 || day === 31) {
            diasLista.className = 'day holiday';
            diasLista.innerHTML = day;
            diasDaLista.appendChild(diasLista);
          } else if (day === 4 || day === 11 || day === 18) {
            diasLista.className = 'day friday';
            diasLista.innerHTML = day;
            diasDaLista.appendChild(diasLista)
          } else if (day === 25) {
            diasLista.className = 'day holiday friday';
            diasLista.innerHTML = day;
            diasDaLista.appendChild(diasLista);
          } else {
            diasLista.innerHTML = day;
            diasLista.className = 'day';
            diasDaLista.appendChild(diasLista);
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
    novoBotaoId.id = novoBotaoId;
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
    for (let i = 0; i < pegaBotaoFeriado.length; i += 1) {
      if (pegaBotaoFeriado[i].style.backgroundColor === achaNovaCor) {
        pegaBotaoFeriado[i].styke.backgroundColor = bgColor;
      } else {
        pegaBotaoFeriado[i].style.backgroundColor = achaNovaCor;
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

