
let mText = document.getElementById('mtext');
window.addEventListener('scroll',() =>{
    let value=window.scrollY;
    console.log(value);
    mText.style.left = value * -2 +'px';

});
const parallex = document.querySelector('.sec3');
const front = document.querySelector('.akkaimg');
const sfront=400;
parallex.addEventListener('mousemove',e =>{
    const x=e.clientX;
    const y=e.clientY;

    front.style.transform =`
    translate(
        ${x/sfront}%,
        ${y/sfront}%
    )`;
});