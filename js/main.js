function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.getData("text");
}

function drop(ev, t) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if (t.parentElement.getAttribute('id') == 'second') {
        t.childNodes[1].childNodes[3].setAttribute('class', 'price');
        console.log(t.parentElement.getAttribute('id'));
    } else {
        console.log(t.childNodes[2]);
        t.childNodes[2].childNodes[3].removeAttribute('class');
    }
    calc();
}


function calc() {
    var a = 0;
    var price = [];
    for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
        price[i] = document.getElementsByClassName('price')[i].innerHTML;
        price[i] = parseFloat(price[i]);

        a = a + price[i];
        console.log(price[i], a);
    }

    document.getElementById('result').innerHTML = a;
}
