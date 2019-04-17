function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, t) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    t.childNodes[1].childNodes[3].setAttribute('class', 'price');
    console.log(t.childNodes[1].childNodes[3]);
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
