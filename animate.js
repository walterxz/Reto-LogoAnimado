let bt1=document.getElementById('bt1')
let bt2=document.getElementById('bt2')

bt1.addEventListener("click",start)
bt2.addEventListener("click",bucle)


function start(e){
    let ball=document.getElementsByClassName('ball')
    console.log(ball[0])
    ball[0].style.animationIterationCount=1
}

function bucle(e){
    alert('bucle')
}