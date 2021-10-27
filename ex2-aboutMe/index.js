 const bodyTags = document.querySelector('body');

bodyTags.style.fontFamily ='Arial, sans-serif';

const nikName = document.getElementById('nickname');
nikName.textContent='mahlafdf';

const food =document.getElementById('fav-food');
food.textContent= 'pizza';

const home =document.getElementById('hometown');
home.textContent='kerman';

const listItems = document.getElementsByTagName('li');

for(i=0 ; i < listItems.length; i++){
    
    listItems[i].className="list-item";
    
};