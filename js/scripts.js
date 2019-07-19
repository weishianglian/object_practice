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