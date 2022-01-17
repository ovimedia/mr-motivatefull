let texts = [
    "Has nacido para jugar en el Real Madrid",
    "Somos sentimientos y tenemos seres humanos.",
    "Te enseño yo y tu a mi, Pookeemoon."
];

document.body.innerHTML += '<div id="mrprojectfull"><p>' + texts[Math.floor(Math.random() * texts.length)] + '</p><div id="imgmpt"></div></div>';

document.querySelector('#mrprojectfull').classList.add('active');

setInterval(() => {
    document.querySelector('#mrprojectfull p').innerHTML = texts[Math.floor(Math.random() * texts.length)];
}, 5000);