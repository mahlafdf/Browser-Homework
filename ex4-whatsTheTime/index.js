function main (){


function time (){

    const clock = new Date();
    document.body.textContent= clock.toLocaleTimeString('en-US');
    console.log(clock);

};

window.setInterval(time, 1000);

};

main();