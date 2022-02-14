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
      if (pegaBotaoFeriado[i].style.bg === achaNovaCor) {
        pegaBotaoFeriado[i].styke.bg = bg;
      } else {
        pegaBotaoFeriado[i].style.bg = achaNovaCor;
      }
    }
  })
};    

mostraFeriados();

