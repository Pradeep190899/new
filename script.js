
// const car = {
//     color : "blue" ,
//     type : "sedan" ,
//  getcolor : function () {
//     console.log(this.color)
//  }
//   }
//   console.log(car.color) ;
//   car.getcolor() ;
 
  
//   class CAR {
//     constructor(c="brown", ty="truck" , tr="12") {
//         this.color = c ;
//         this.type = ty ;
//         this.tyre = tr ;
//     }
//     print_color()
//      {
//         console.log(this.color) ;
//     }
//     print_type()
//     {
//         console.log(this.type);    }

//   }
//   const alto = new CAR() ;
//   alto.color = "red" ;
//   alto.type = "small" ;
//   alto.tyre = 5 ;
//   alto.print_color() ;
//   const fortuner = new CAR();

//   fortuner.color = "white";
//   fortuner.type = "SUV";
//   fortuner.tyre = 8;
  
//   const bmw = new CAR("green" , "sedan" , 6) ;
//   bmw.print_type() ;

// class Member{
//     constructor(n,ag,p,ad,s)
//     {
//         this.name=n;
//         this.age=ag;
//         this.phone=p;
//         this.address=ad;
//         this.salary=s;
//     }
//     printSalary()
//     {
//         console.log(this.salary)
//     }
// }
// class Employee extends Member{
//     constructor(n,ag,p,ad,s,sp)
//     {
//         super(n,ag,p,ad,s);
//         this.specialization=sp;
        
//     }
//     print_details()
//     {
//         console.log(this.name) ;
//         console.log(this.specialization) ;
//         super.PrintSalary();
//     }
// }
// class Manager extends Member{
//     constructor(n,ag,p,ad,s,d)
//     {
//         super(n,ag,p,ad,s);
        
//         this.department=d;
//     }
//     Print_details()
//     {
//     console.log(this.name);
//     console.log(this.department) ;
//     super.PrintSalary();
//     }
// }

// //Do Not change the Below  Code



// var obj = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
// console.log(obj)
// obj.print_details();

// var obj1 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
// obj1.print_details();

// var obj_Man = new Manager("babu",100,"1234","Bangalore",1000,"JP");
// obj_Man.print_details();

// var obj1_Man = new Manager("Rao",250,"456","Kerala",3000,"GC");
// obj1_Man.print_details();
function sum (a) {
    return function(b) {
      return function (c) {
        return a+b+c ;
      }
    }
  }
  console.log(sum(4)(5)(1)) ;