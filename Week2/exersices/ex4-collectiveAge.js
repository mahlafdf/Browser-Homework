/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

 function collectiveAge(people) {
     const totalAge = people.map( people => people.age)
                            .reduce((a, b) => a +b);

    return totalAge;

  };

//   This function collects ages 

const collectAges = (people) => {

    const membersAge = people.map(people => people.age);
    return membersAge;

};
  //This function sum the indexes of array

const sumUpAges = (people) =>{
    const totalAge = people.reduce((a,b) => a + b);
    return totalAge ;

};



const hackYourFutureMembers = [{
      name: 'Wouter',
      age: 33
    },
    {
      name: 'Federico',
      age: 32
    },
    {
      name: 'Noer',
      age: 27
    },
    {
      name: 'Tjebbe',
      age: 22
    },
  ];
  
console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));
const result = sumUpAges(collectAges(hackYourFutureMembers));
console.log(result);
