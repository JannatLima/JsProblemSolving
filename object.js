var student   = { id:121, phone:01234, name:"abir"};
var student2 = { id:131, phone:457, name:"mahi"};
var phoneProName = "phone"; 
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phoneProName];



student2.phone = 5476;
student2["phone"] = 6666;
student2[phoneProName] = 9999999;

student2.cinema = "ogni22";
student.cinema = "333";

student.age = "33";
student2.age = "23";

console.log(phoneNo1);
console.log(student);
console.log(student2);

