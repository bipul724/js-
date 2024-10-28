//const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "bipul",
            lastname : "chamoli",
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj4 = {5:"e",6:"f"};


//const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1,...obj2,...obj4};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "bipul1@gmail.com"
    },
    {
        id: 2,
        email: "bipul2@gmail.com"
    },
    {
        id: 3,
        email: "bipul3@gmail.com"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Bipul", 

}

const {courseInstructor}=course;
console.log(courseInstructor);