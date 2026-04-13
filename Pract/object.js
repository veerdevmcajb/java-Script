let student ={
    rollNo: 45,
    name:'Rohit ',
    course:'Java'
};
console.log(student);

console.log(student.name);
console.log(student.rollNo);

console.log(student['rollNo']);
console.log(student.rollNo);

console.log(typeof student);
console.log(typeof student.name);

delete student.course; // we can delete a field 

console.log(student);

student.course='JAVA'; // we can add a field  
console.log(student);


// Reference Type 

let student2= student;
console.log({student2});


