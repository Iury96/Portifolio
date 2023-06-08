let click = document.querySelector('button#click')
let clicka = document.querySelector('button#clica')
let resultado = document.querySelector('p#resultado')

let imagensExibidas = false;

function sobre() {
    resultado.innerHTML = '<p>Olá! Meu nome é Iury e sou estudante de Análise e Desenvolvimento de Sistemas. Tive meu primeiro contato com a programação durante um Bootcamp em agosto de 2022. Desde então, tenho direcionado meus estudos para tecnologias voltadas principalmente para o desenvolvimento front-end. Estou sempre em busca de novas oportunidades para expandir meus conhecimentos e explorar o mundo do desenvolvimento</p>'
    imagensExibidas = false;
}

function projetos() {
    let paragrafo = resultado.querySelector('p');
    if (paragrafo) {
        resultado.removeChild(paragrafo);
    }
    if (!imagensExibidas) {
        let img1 = document.createElement('img');
        img1.src = 'img/html-5 (1).png';
        resultado.appendChild(img1);
        
        let img2 = document.createElement('img');
        img2.src = 'img/css-3.png';
        resultado.appendChild(img2);
        
        let img3 = document.createElement('img');
        img3.src = 'img/js.png';
        resultado.appendChild(img3);

        let img4 = document.createElement('img');
        img4.src = 'img/react-logo.png';
        resultado.appendChild(img4);
        
        let img5 = document.createElement('img');
        img5.src = 'img/mysql.png';
        resultado.appendChild(img5);
        
        let img6 = document.createElement('img');
        img6.src = 'img/nodejs.png';
        resultado.appendChild(img6);
        imagensExibidas = true;
    }
}

//ATIVAÇÃO DOS BOTÕES DO SOBRE MIM
let clickButton = document.querySelector('button#click');
let clicaButton = document.querySelector('button#clica');

function setActiveButton(button) {
  // Remove a classe 'active' de todos os botões
  let buttons = document.querySelectorAll('.about-content button');
  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  // Adiciona a classe 'active' ao botão clicado
  button.classList.add('active');
}

clickButton.addEventListener('click', function() {
  setActiveButton(clickButton);
});

clicaButton.addEventListener('click', function() {
  setActiveButton(clicaButton);
});
