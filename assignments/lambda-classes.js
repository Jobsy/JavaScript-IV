// CODE here for your Lambda Classes



class Person2 {

    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
    }

    speak = function personSpeaking() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}


class Instructor extends Person2 {

    constructor(InstructorAttr) {
        super(InstructorAttr);
        this.specialty = InstructorAttr.specialty;
        this.favLanguage = InstructorAttr.favLanguage;
        this.catchPhrase = InstructorAttr.catchPhrase;
    }

    demo = function demoSub(subject) {
        return `Today we are learning about ${subject}`;
    };

    grade = function grading(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    };

    randomGrade = function randomGrading() {
        if((Student2.grade > 70 && Student2.grade < 99) || Student2.grade > 100) {
            return Student2.grade = Student2.grade - Math.floor(Math.random() * 21);
        }
        return Student2.grade = Student2.grade + Math.floor(Math.random() * 21);
    }
}

class Student2 extends Person2 {

    static grade = 70;
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    listsSubjects = function lSub() {
        return this.favSubjects;
    };

    PRAssignment = function PRAsgn(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };

    sprintChallenge = function sChlg(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
    
    graduate = function clearForGradustion() {
        if(Student2.grade < 70) {
            return `Sorry, your score ${Student2.grade}% is below the pass mark of 70%;you'll have to retake the class`;
        }
        return `Congratulation! You score ${Student2.grade}% is above the 70% pass mark, you clear for graduation`;
    }
}


class ProjectManager extends Instructor {

    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp = function sUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!​​​​​`;
    };

    debugsCode = function debugging(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    };
}


const fred = new Instructor(
    {
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
    }
);
console.log(fred.speak());
console.log(fred.demo("JS Class"));
console.log(fred.grade("Fred", "JS Class"));
console.log(fred.randomGrade());
console.log(fred.randomGrade());


const jay = new Student2(
    {
        name: 'Jay',
        location: 'Lagos',
        age: 18,
        previousBackground: 'TIT Support',
        className: 'CS132',
        favSubjects:  ['Html', 'CSS', 'JavaScript']
    }
);
console.log(jay.speak());
console.log(jay.listsSubjects("JS Class"));
console.log(jay.PRAssignment("JavaScript-IV"));
console.log(jay.sprintChallenge("JavaScript Fundamentals"));
console.log(jay.graduate());


const flint = new ProjectManager(
    {
        name: 'Flint',
        location: 'London',
        age: 100,
        gradClassName: 'CS1',
        favInstructor: 'Sean'
    }
);
console.log(flint.speak());
console.log(flint.standUp("jsChannel"));
console.log(flint.debugsCode("Jay", "JavaScript"));
console.log(flint.demo("JS Class"));
console.log(flint.grade("Flint", "JS Class"));
console.log(flint.randomGrade());
