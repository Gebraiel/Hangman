

  function createPopUp(word,meaning,color){
    let popup = document.createElement('div');
    popup.className = 'popup';
  
    let message = document.createElement('p');
    message.className = 'message';
    let h1 = document.createElement('h1');
    let welcomeTextNode = document.createTextNode(word);
    h1.appendChild(welcomeTextNode);
    let innerP = document.createElement('p');
    let paragraphTextNode = document.createTextNode(meaning);
    innerP.appendChild(paragraphTextNode); 
    message.appendChild(h1);
    message.appendChild(innerP);
  
    let closeButton = document.createElement('button');

    closeButton.setAttribute('class','close-button');
    closeButton.style.backgroundColor = color;
    let closeButtonTextNode = document.createTextNode("X");
    closeButton.appendChild(closeButtonTextNode);
  
    popup.appendChild(message);
    popup.appendChild(closeButton);
  
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    document.body.prepend(overlay);
    document.body.prepend(popup);
  
    closeButton.addEventListener('click',(e)=>{
        
        popup.remove();
        overlay.remove();
    });
  }