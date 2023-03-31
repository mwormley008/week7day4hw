let body = document.body;

let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created'

console.log(newHeader);



function buildToDo() {
    let newText = prompt('What task would you like to add?');
    let card = document.createElement('div');
    card.className = 'card h-100';
  
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    let cardTitle = document.createElement('h5');
    cardTitle.innerHTML = newText;
    cardTitle.className = 'card-title';
  
    cardBody.append(cardTitle);
    card.append(cardBody);
  
    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 my-3';
    col.append(card);
  
    let taskDisplay = document.getElementById('taskDisplay');
    taskDisplay.append(col);
  
    return card;
  }
  
  let actionB = document.getElementById('actionButton');
  actionB.addEventListener('click', function() {
    buildToDo();
  });
  