class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }


    getName() {
        return this.#name;
    }


    getAge() {
        return this.#age;
    }
   getOccupation() {
        return this.#occupation;
    }
}


class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.major = major;
    }


    displayInfo() {
        return `
            Name: ${this.getName()}<br>
            Age: ${this.getAge()}<br>
            Occupation: ${this.getOccupation()}<br>
            Major: ${this.major}
        `;
    }

    
    logInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Occupation: ${this.getOccupation()}`);
        console.log(`Major: ${this.major}`);
    }
}


const student = new Student("Mark Angelo Bocon", 19, "Student", "Object Oriented Programming");


document.getElementById("student-info").innerHTML = student.displayInfo();


student.logInfo();