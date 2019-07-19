var person = {
    name: 'Manping',
    age: '29',
    job: ['Social Design','Website Design','User Interface Design','Front-end Design'],
    changeName: function(new_name) {
        this.name = new_name;
        return this;
    },
    changeAge: function(new_age) {
        this.age = new_age;
        return this;
    },
    changeJob: function(new_job) {
        this.job = new_job;
        return this;
    }

};

person.changeName('Edward').changeAge('22').changeJob(['Ruby on Rails','Java', 'Machine Learning']);

document.querySelector('.test').innerHTML = person.name + ' is ' + person.age + ' years old and doing ' + person.job.join(', ');
document.querySelector('.test').style.fontFamily = 'helvetica';



// Use class to instantiate objects
class Person {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }
    // Attribute setters
    name(name) { this.name = name }
    age(age) { this.age = age }
    job(job) { this.job = job }

    // Display function to compose the string
    greet() {
        return `${this.name} is ${this.age} years old and doing ${this.job.join(", ")}`
    }
}

// Instantiate person with constructor
let person1 = new Person("Belle", "18", ['Social Design','Website Design','User Interface Design','Front-end Design'])
let person2 = new Person("Edward", "22", ['Ruby on Rails','Java', 'Machine Learning'])

// Create <p> and be appended to the div woth class called test2
let p1 = document.createElement("P"), p2 = document.createElement("P")
p1.innerText = person1.greet()
p2.innerText = person2.greet()
document.querySelector('.test2').appendChild(p1).appendChild(p2)
document.querySelector('.test2').style.fontFamily = 'helvetica'

// Modify the attributes
person2.name = "WS Lian"
person2.age = 24
person2.job = ['Ruby on Rails', 'Java', 'Python', 'Big Data', 'Machine Learning', 'Computer Vision']
let p3 = document.createElement("P")
p3.innerText = person2.greet()
document.querySelector('.test2').appendChild(p3)