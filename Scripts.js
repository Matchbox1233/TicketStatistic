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
  
  localStorage.setItem('NumberOfTickets', JSON.stringify(NumberOfTickets));

  UpdateTicketNumbers();

}

function DecreaseTheTicketNumber(TicketType){
  if(TicketType === 'Easy'){
    NumberOfTickets.Easy--;
  }else if(TicketType === 'Normal'){
    NumberOfTickets.Normal--;
  }else if(TicketType === 'Hard'){
    NumberOfTickets.Hard--;
  }else if(TicketType === 'Other'){
    NumberOfTickets.Other--;
  }

  SumOfAllTickets();
  TicketsByPercentage();

  localStorage.setItem('NumberOfTickets', JSON.stringify(NumberOfTickets));

  UpdateTicketNumbers();

}

function SumOfAllTickets() {
  NumberOfTickets.All = NumberOfTickets.Easy + NumberOfTickets.Normal + NumberOfTickets.Hard + NumberOfTickets.Other;
}

function UpdateTicketNumbers() {
  document.querySelector('.js-all-tickets-number').innerHTML = 
    `Number of all tickets: ${NumberOfTickets.All}`;
  document.querySelector('.js-easy-tickets-number').innerHTML = 
    `Number of easy tickets: ${NumberOfTickets.Easy} => ${PercentageOfTickets.Easy}%`;
  document.querySelector('.js-normal-tickets-number').innerHTML =
    `Number of normal tickets: ${NumberOfTickets.Normal} => ${PercentageOfTickets.Normal}%`;
  document.querySelector('.js-hard-tickets-number').innerHTML =
   `Number of hard tickets: ${NumberOfTickets.Hard} => ${PercentageOfTickets.Hard}%`;
  document.querySelector('.js-other-tickets-number').innerHTML =
   `Number of other tickets: ${NumberOfTickets.Other} => ${PercentageOfTickets.Other}%`;
}

function TicketsByPercentage() {
  PercentageOfTickets.Easy = NumberOfTickets.Easy / (NumberOfTickets.All / 100);
  PercentageOfTickets.Normal = NumberOfTickets.Normal / (NumberOfTickets.All / 100);
  PercentageOfTickets.Hard = NumberOfTickets.Hard / (NumberOfTickets.All / 100);
  PercentageOfTickets.Other = NumberOfTickets.Other / (NumberOfTickets.All / 100);

  localStorage.setItem('PercentageOfTickets', JSON.stringify(PercentageOfTickets));
}

function TicketInput(TicketType) {
  if(TicketType === 'Easy'){
    const EasyInputElement = document.querySelector('.js-easy-ticket-input');
    let EasyTicket = EasyInputElement.value;
    document.querySelector('.js-easy-tickets').innerHTML = EasyTicket;

  }else if(TicketType === 'Normal'){
    const NormalInputElement = document.querySelector('.js-normal-ticket-input');
    let NormalTicket = NormalInputElement.value;
    document.querySelector('.js-normal-tickets').innerHTML = NormalTicket;

  }else if(TicketType === 'Hard'){
    const HardInputElement = document.querySelector('.js-hard-ticket-input');
    let HardTicket = HardInputElement.value;
    document.querySelector('.js-hard-tickets').innerHTML = HardTicket;

  }else if(TicketType === 'Other'){
    const OtherInputElement = document.querySelector('.js-other-ticket-input');
    let OtherTicket = OtherInputElement.value;
    document.querySelector('.js-other-tickets').innerHTML = OtherTicket;
  }
  
}