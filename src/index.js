import _ from 'lodash';
import './style.css';
import Icon from './preta.png';
import Data from './lista.xml';
import Notes from './lista.csv';

function component() {
    const element = document.createElement('div');
    
    element.classList.add("hello");
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // Adicione a imagem ao nosso div existente
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    // Exibir arquivos xms e csv no console
    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());