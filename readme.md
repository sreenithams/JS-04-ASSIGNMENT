                                      JavaScript
                                     Assignment 4

 1.Write a chained if / else-if statement to fill in the following conditions 
 val  < 5  =>  Tiny
 val  < 10  =>  Small
 val  < 15  =>  Medium
 val  < 20  => Large
 val  >= 20  => Huge

 ```js
             let val=20
            if (val < 5){
             console.log("tiny");
            }
                else if(val < 10) {
                 console.log("small");

                }
                else if (val < 15){
                 console.log("medium");
                }
                else if (val < 20){
                 console.log("large")
                }
            else{
             console.log("huge")
            }
 ```               
 
2.Use the switch case and create an application with the following roles.
  .admin-get full access
  .subadmin-get access to create and delete courses
  .testPreep-get access to create and delete tests
  .user-get access to consumebcontents

```js

let access="subAdmin"
switch(access){
    case"admin":
    console.log("Get Full Access");
  break;
    case"subAdmin":
    console.log("Get Access To Create and Delete Courses");
  break;
    case"testPrep":
    console.log("Get Access To Create and Delete Tests");
  break;
    case"user":
    console.log("Get Access To Consume Contents");
  break;
  default:
    console.log("Wrong Choice");
  break;
}
```