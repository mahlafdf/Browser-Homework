const catImage = document.querySelector('body img');
catImage.style.left= '0px';
let position = 0;

function main(){

    function catWalk(){
        if(position > screen.width){
            position = 0;
        }
        else if(position ==(screen.width/2)-150){
            clearInterval(walking);
            catImage.src= 'tenor.gif';
            setTimeout(()=>{
                catImage.scr ='cat-walk.gif';
                position += 10;
                main();
            },5000)
        }
        else{
            catImage.style.left= `${position}px`;
            position +=10;

        };
    };
const walking = setInterval(catWalk, 50);

};
main();