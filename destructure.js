const person = { name: 'John', age: 25, address: { city: 'New York', state: 'NY' }, job: 'Developer' };
console.log(person.age);
console.log(person.address.city);
console.log(person.job);
//25 New York Developer

const student = { name: 'John', age: 25, address: { city: 'New York', state: 'NY' }, job: 'Developer' };
const { name, age, address: { city, state }, job } = student;
console.log(name, age, city, state, job);
//John 25 New York NY Developer



const friend = ['Buffy', 'Khan', 'John', 'Peter', 'Sakib', 'Rahim', 'Karim'];
const [chotoFriend, nextFriend, ...restFriends] = friend;
console.log(chotoFriend, nextFriend, restFriends);
//Buffy Khan['John', 'Peter', 'Sakib', 'Rahim', 'Karim']
