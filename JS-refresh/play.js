/** 

const name = 'MAX';
let age = 30;
const hasHobby = true;

const userToString = (userName, userAge, userHasHhobby) => {
    return(
        `Name is ${userName}, age is ${userAge}, and the user has hobby? ${userHasHhobby}`
    );
};

console.log(userToString(name, age, hasHobby));

const add = (a, b)=>{
    return a+b;
}

const add2 = (a, b)=> a+b;
*/

// object
const person = {
    name: 'Max',
    age: 30,
    greet () {
        console.log(`Im ${this.name} and ${this.age} old.`)
    },

    /** 
     * this will not work, this.name and this.age is undefined
     * greet: () => {
     *      console.log(`Im ${this.name} and ${this.age} old.`)
     * },
     */

};

person.greet();

const hobbies = ['Golf', 'Cooking', 'Coding'];
console.log(hobbies.map(hobby => 'Hobby:' + hobby));
console.log(hobbies);

/**
 * hobbies = ['newArray];       this violates
 * hobbies.push('newItem');     this does not violate
 */