function AtualizaFonte(acao){
    if (acao === '+') {
        const body = document.querySelector('body');
        const fontSize = parseFloat(getComputedStyle(body).fontSize);

        if(body.style.fontSize >= '50px') {return;}
        body.style.fontSize = (fontSize + 2) + 'px';

        const btn1 = document.querySelector('.btnAF');
        const fontSize1 = parseFloat(getComputedStyle(btn1).fontSize);
        btn1.style.fontSize = (fontSize1 + 2) + 'px';

        const btn2 = document.querySelector('.btnDM');
        const fontSize2 = parseFloat(getComputedStyle(btn2).fontSize);
        btn2.style.fontSize = (fontSize2 + 2) + 'px';

        const btnEstilo = document.querySelector('.btnEstilo');
        const fontSizeEstilo = parseFloat(getComputedStyle(btnEstilo).fontSize);
        btnEstilo.style.fontSize = (fontSizeEstilo + 2) + 'px';

    }else{
        const body = document.querySelector('body');
        const fontSize = parseFloat(getComputedStyle(body).fontSize);

        if(body.style.fontSize <= '10px') {return;}
        body.style.fontSize = (fontSize - 2) + 'px';

        const btn1 = document.querySelector('.btnAF');
        const fontSize1 = parseFloat(getComputedStyle(btn1).fontSize);
        btn1.style.fontSize = (fontSize1 - 2) + 'px';

        const btn2 = document.querySelector('.btnDM');
        const fontSize2 = parseFloat(getComputedStyle(btn2).fontSize);
        btn2.style.fontSize = (fontSize2 - 2) + 'px';

        const btnEstilo = document.querySelector('.btnEstilo');
        const fontSizeEstilo = parseFloat(getComputedStyle(btnEstilo).fontSize);
        btnEstilo.style.fontSize = (fontSizeEstilo - 2) + 'px';

    }
}
function AtualizaEstilo() {
    if (document.body.classList.contains('claro')) {
        document.body.classList.remove('claro');
        document.body.classList.add('escuro');
        document.querySelector('.menu').style.backgroundColor = 'black';
    }else{
        document.body.classList.remove('escuro');
        document.body.classList.add('claro');
        document.querySelector('.menu').style.backgroundColor = 'white';
    }
}