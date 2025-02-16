class Student {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;

  constructor(sb: StudentBuilder) {
    this.firstName = sb.firstName;
    this.lastName = sb.lastName;
    this.email = sb.email;
    this.dob = sb.dob;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  printDetails() {
    console.log(
      `
    firstName : ${this.firstName} 
    lastName : ${this.lastName}
    email : ${this.email}
    dob : ${this.dob.toDateString()}
        `.replace(/^\s+/gm, "")
    );
  }
}

class StudentBuilder {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;

  constructor() {}

  setFirstName(fName: string) {
    this.firstName = fName;
    return this;
  }

  setLastName(lName: string) {
    this.lastName = lName;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }
  setDOB(date: Date) {
    this.dob = date;
    return this;
  }

  build() {
    return new Student(this);
  }
}

const aman = new StudentBuilder()
  .setFirstName("Aman")
  .setLastName("Chamaar")
  .setEmail("aman.chamaar@email.com")
  .setDOB(new Date("1998-01-01"))
  .build();

console.log(aman.getFullName());
aman.printDetails();

const adi = new StudentBuilder()
  .setLastName("Lath")
  .setFirstName("Jhat")
  .setDOB(new Date("1998-01-01"))
  .build();

adi.printDetails();
