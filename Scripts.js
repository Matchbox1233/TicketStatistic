let NumberOfTickets = JSON.parse(localStorage.getItem('NumberOfTickets')) || {
  Easy: 0,
  Normal: 0,
  Hard: 0,
  Other: 0,
  All: 0,
};

let PercentageOfTickets = JSON.parse(localStorage.getItem('PercentageOfTickets')) || {
  Easy: 0,
  Normal: 0,
  Hard: 0,
  Other: 0,
};

const TicketList = JSON.parse(localStorage.getItem('TicketList')) || {
  Easy: [],
  Normal: [],
  Hard: [],
  Other: [],
};

document.querySelector('.js-easy-button').addEventListener('click', () => {
  IncreaseTheTicketNumber('Easy');
  TicketInput('Easy');
});

document.querySelector('.js-normal-button').addEventListener('click', () => {
  IncreaseTheTicketNumber('Normal');
  TicketInput('Normal');
});

document.querySelector('.js-hard-button').addEventListener('click', () => {
  IncreaseTheTicketNumber('Hard');
  TicketInput('Hard');
});

document.querySelector('.js-other-button').addEventListener('click', () => {
  IncreaseTheTicketNumber('Other');
  TicketInput('Other');
});

document.querySelector('.js-deleteStatistics-button').addEventListener('click', () => {
  NumberOfTickets.Easy = 0;
  NumberOfTickets.Normal = 0;
  NumberOfTickets.Hard = 0;
  NumberOfTickets.Other = 0;
  NumberOfTickets.All = 0;

  PercentageOfTickets.Easy = 0;
  PercentageOfTickets.Normal = 0;
  PercentageOfTickets.Hard = 0;
  PercentageOfTickets.Other = 0;

  localStorage.removeItem('NumberOfTickets');
  localStorage.removeItem('PercentageOfTickets');

  UpdateTicketNumbers();
});

document.querySelector('.js-showStatistics-button').addEventListener('click', () => {
  UpdateTicketNumbers();
});

function IncreaseTheTicketNumber(TicketType){
  if(TicketType === 'Easy'){
    NumberOfTickets.Easy ++;
  }else if(TicketType === 'Normal'){
    NumberOfTickets.Normal++;
  }else if(TicketType === 'Hard'){
    NumberOfTickets.Hard++;
  }else if(TicketType === 'Other'){
    NumberOfTickets.Other++;
  }
  
  SumOfAllTickets();
  TicketsByPercentage();

  UpdateTicketNumbers();

  localStorage.setItem('NumberOfTickets', JSON.stringify(NumberOfTickets));

}

function SumOfAllTickets() {
  NumberOfTickets.All = NumberOfTickets.Easy + NumberOfTickets.Normal + NumberOfTickets.Hard + NumberOfTickets.Other;

  localStorage.setItem('NumberOfTickets', JSON.stringify(NumberOfTickets));
}

function UpdateTicketNumbers() {
  document.querySelector('.js-all-tickets-number').innerHTML = 
    `Number of all tickets: ${NumberOfTickets.All}`;
  document.querySelector('.js-easy-tickets-number').innerHTML = 
    `Number of easy tickets: ${NumberOfTickets.Easy} => ${PercentageOfTickets.Easy.toFixed(0)}%`;
  document.querySelector('.js-normal-tickets-number').innerHTML =
    `Number of normal tickets: ${NumberOfTickets.Normal} => ${PercentageOfTickets.Normal.toFixed(0)}%`;
  document.querySelector('.js-hard-tickets-number').innerHTML =
   `Number of hard tickets: ${NumberOfTickets.Hard} => ${PercentageOfTickets.Hard.toFixed(0)}%`;
  document.querySelector('.js-other-tickets-number').innerHTML =
   `Number of other tickets: ${NumberOfTickets.Other} => ${PercentageOfTickets.Other.toFixed(0)}%`;

  localStorage.setItem('NumberOfTickets', JSON.stringify(NumberOfTickets));
}

function TicketsByPercentage() {
  PercentageOfTickets.Easy = NumberOfTickets.Easy / (NumberOfTickets.All / 100);
  PercentageOfTickets.Normal = NumberOfTickets.Normal / (NumberOfTickets.All / 100);
  PercentageOfTickets.Hard = NumberOfTickets.Hard / (NumberOfTickets.All / 100);
  PercentageOfTickets.Other = NumberOfTickets.Other / (NumberOfTickets.All / 100);

  localStorage.setItem('PercentageOfTickets', JSON.stringify(PercentageOfTickets));
}

RenderTicketList('Easy');
RenderTicketList('Normal');
RenderTicketList('Hard');
RenderTicketList('Other');

function RenderTicketList(TicketType){
  if(TicketType === 'Easy'){
    let EasyTicketListHTML = '';

    for(let i = 0; i < TicketList.Easy.length; i++){
      const EasyTicketObject = TicketList.Easy[i];
      const {EasyTicket} = EasyTicketObject;
      const html = `
        <div>${EasyTicket}</div>
        <button onclick="
          TicketList.Easy.splice(${i}, 1);
          RenderTicketList('Easy');
        " class="delete-button">X</button>
      `;

      EasyTicketListHTML += html;
    }

    document.querySelector('.Easy-tickets-column').innerHTML = EasyTicketListHTML;
    localStorage.setItem('TicketList', JSON.stringify(TicketList));

  }else if(TicketType === 'Normal'){
    let NormalTicketListHTML = '';

    for(let i = 0; i < TicketList.Normal.length; i++){
      const NormalTicketObject = TicketList.Normal[i];
      const {NormalTicket} = NormalTicketObject;
      const html = `
        <div>${NormalTicket}</div>
        <button onclick="
          TicketList.Normal.splice(${i}, 1);
          RenderTicketList('Normal');
        " class="delete-button">X</button>
      `;

      NormalTicketListHTML += html;
    }

    document.querySelector('.Normal-tickets-column').innerHTML = NormalTicketListHTML;
    localStorage.setItem('TicketList', JSON.stringify(TicketList));

  }else if(TicketType === 'Hard'){
    let HardTicketListHTML = '';

    for(let i = 0; i < TicketList.Hard.length; i++){
      const HardTicketObject = TicketList.Hard[i];
      const {HardTicket} = HardTicketObject;
      const html = `
        <div>${HardTicket}</div>
        <button onclick="
          TicketList.Hard.splice(${i}, 1);
          RenderTicketList('Hard');
        " class="delete-button">X</button>
      `;

      HardTicketListHTML += html;
    }

    document.querySelector('.Hard-tickets-column').innerHTML = HardTicketListHTML;
    localStorage.setItem('TicketList', JSON.stringify(TicketList));

  }else if(TicketType === 'Other'){
    let OtherTicketListHTML = '';

    for(let i = 0; i < TicketList.Other.length; i++){
      const OtherTicketObject = TicketList.Other[i];
      const {OtherTicket} = OtherTicketObject;
      const html = `
        <div>${OtherTicket}</div>
        <button onclick="
          TicketList.Other.splice(${i}, 1);
          RenderTicketList('Other');
        " class="delete-button">X</button>
      `;

      OtherTicketListHTML += html;
    }

    document.querySelector('.Other-tickets-column').innerHTML = OtherTicketListHTML;
    localStorage.setItem('TicketList', JSON.stringify(TicketList));
  }
}

function TicketInput(TicketType) {
  if(TicketType === 'Easy'){
    const EasyInputElement = document.querySelector('.js-easy-ticket-input');
    let EasyTicket = EasyInputElement.value;

    TicketList.Easy.push({
      EasyTicket,
    });

    EasyInputElement.value = '';
    RenderTicketList('Easy')

  }else if(TicketType === 'Normal'){
    const NormalInputElement = document.querySelector('.js-normal-ticket-input');
    let NormalTicket = NormalInputElement.value;

    TicketList.Normal.push({
      NormalTicket,
    });

    NormalInputElement.value = '';
    RenderTicketList('Normal');

  }else if(TicketType === 'Hard'){
    const HardInputElement = document.querySelector('.js-hard-ticket-input');
    let HardTicket = HardInputElement.value;

    TicketList.Hard.push({
      HardTicket,
    });

    HardInputElement.value = '';
    RenderTicketList('Hard');

  }else if(TicketType === 'Other'){
    const OtherInputElement = document.querySelector('.js-other-ticket-input');
    let OtherTicket = OtherInputElement.value;

    TicketList.Other.push({
      OtherTicket,
    });

    OtherInputElement.value = '';
    RenderTicketList('Other');
  }
}