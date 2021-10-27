const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];


//Create h1 & ul 
const bookList = document.createElement('ul');
const h1 = document.createElement('h1');

//Add content to h1
h1.textContent= "The Book List";

//Style the created elements
h1.style.fontSize = '25px';
h1.style.color = 'green';

//Add to the DOM
document.body.appendChild(h1);
document.body.appendChild(bookList);

//the main part adding to ul
for (let i = 0; i < myBooks.length; i++) {

  //Create the li 
  const bookListItems = document.createElement('li');
  bookListItems.style.listStyle ="none";
  //bookListItems.style.width = "400px";
  bookList.appendChild(bookListItems);

  //Create p element
  const bookDescription = document.createElement('p');
  bookDescription.textContent =`${myBooks[i].title} by ${myBooks[i].author}`;
  bookDescription.style.fontSize= "20px";
  bookListItems.appendChild(bookDescription);

  //Create img element added new property to the object
  const image = document.createElement("img");
  image[i] = new Image();
  image[i].src = 'image' + i + '.jfif';
  image[i].style.paddingTop = "20px";
  bookListItems.appendChild(image[i]);

  //the function about the color
  if (myBooks[i].alreadyRead == true) {
    bookListItems.style.backgroundColor = "green";
  } else {
    bookListItems.style.backgroundColor = "red";
  }
};


