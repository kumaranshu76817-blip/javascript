const clock = document.getElementById('clock')
// document.querySelector('#clock')// two way to declare



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocalTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)