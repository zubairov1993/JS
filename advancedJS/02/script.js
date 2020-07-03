'use script';

const inpitRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inpitRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current2.json');
    request.setRequestHeader('Content-type', 'applicationn/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inpitRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    });

    //свойтсва
    //status
    //statusText
    //response
    //readyState

    //события
    //readystatechange 
    //load

})