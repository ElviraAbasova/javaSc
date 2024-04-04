"use sticts"
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// const fruits2=["Melon", "Watermelon"];
// const myArr = [[1,2],[3,4],[5,6]];
// let result = fruits.length;
// // result= fruits.toString()
// // result=fruits.at(2)
// // result=fruits.join(" * ")
// // result=fruits.pop()
// // result=fruits.push()
// // result=fruits.shift()
// // result=fruits.unshift("Melon")
// // delete fruits[0];
// // result=fruits.concat(fruits2)
// // result=fruits.copyWithin(3,2)
// // result=fruits.copyWithin(3,2)
// // result = myArr.flat();
// result=fruits.splice(3 , 1 ,"Armud")
// result=fruits.slice(1 , 3 )
// console.log(result);

let students=[
    {
      id: 1,
      name: "Nurane",
      surname: "Ismayilzade",
      age: 21,
      hobbies: ["music", "walking", "watchingfilm"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "cavid" },
        { id: 4, name: "alisa" },
      ],
      loginDetail: { username: "nurana21", password: "nunu123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 88,
      salaryAZN: 144,
    },
    {
      id: 2,
      name: "Gizilgul",
      surname: "Allahverdiyeva",
      age: 20,
      hobbies: ["book", "writing code"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "babaxan" },
        { id: 4, name: "gulshen" },
      ],
      loginDetail: { username: "allahverdieva1", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 70,
      salaryAZN: 100,
    },
    {
      id: 3,
      name: "Xanim",
      surname: "Nuriyeva",
      age: 21,
      hobbies: ["book", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "hikmet" },
        { id: 4, name: "gulsen" },
      ],
      loginDetail: { username: "xanim123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 145,
    },
    {
      id: 4,
      name: "Minaya",
      surname: "Binnetova",
      age: 21,
      hobbies: ["book", "gaming", "movie", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "anar" },
      ],
      loginDetail: { username: "binnetova", password: "hello123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 90,
      salaryAZN: 142,
    },
    {
      id: 5,
      name: "Sabina",
      surname: "Hatamli",
      age: 21,
      hobbies: ["shopping", "listen to music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Mirvari" },
      ],
      loginDetail: { username: "sebine123", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 81,
      salaryAZN: 146,
    },
  
    {
      id: 6,
      name: "Ləman",
      surname: "Şamilova",
      age: 20,
      hobbies: [
        "watching movies",
        "reading books",
        "painting",
        " walking",
        " listen to music",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "lemanshamilova", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 85.8,
      salaryAZN: 145,
    },
    {
      id: 7,
      name: "Narmin",
      surname: "Musayeva",
      age: 21,
      hobbies: ["book", "gaming", "painting", "walking"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "fidan" },
        { id: 4, name: "Irada" },
      ],
      loginDetail: {
        username: "narmin0",
        password: "narmin01",
      },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 196,
    },
  
    {
      id: 8,
      name: "Fatima",
      surname: "Akhundzada",
      age: 20,
      hobbies: ["drawing", "sleeping"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Valida" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 76,
      salaryAZN: 100,
    },
    {
      id: 9,
      name: "Elmir",
      surname: "Huseynov",
      age: 21,
      hobbies: ["book", "ice skating", "Tennis", "Karting"],
      student: true,
      teacher: [
        { id: 1, name: "Gurban" },
        { id: 2, name: "Hajar" },
        { id: 3, name: "Morad" },
        { id: 4, name: "Fikrat" },
      ],
      loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
      gender: "man",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 120,
    },
    {
      id: 10,
      name: "Fidan",
      surname: "Rehimli",
      age: 21,
      hobbies: ["book", "gaming"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Turan" },
      ],
      loginDetail: { username: "fidan123", password: "fidanrahimli" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 75,
      salaryAZN: 98,
    },
    {
      id: 11,
      name: "Aynur",
      surname: "Aynurova",
      age: 20,
      hobbies: ["book", "gaming"],
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 81,
      salaryAZN: 120,
    },
  
    {
      id: 12,
      name: "Elman",
      surname: "Muradov",
      age: 20,
      hobbies: [
        "book",
        "gaming",
        "sking",
        "wrestling",
        "swiming",
        "arguing about philosophy",
        "solving sudoku",
        "hiking",
        "walking",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "jale" },
        { id: 4, name: "akhmed" },
      ],
      loginDetail: { username: "elman17", password: "elman12345" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 100,
    },
  ];




// ----------1-----------
  function studentElements(elements){
    for(let i=0;i<elements.length;i++){
        console.log(elements[i]);

    }
   

  }

//  studentElements(students)


// --------2---------- 
 function studentName(students){
    for(let i=0;i<students.length;i++){
        console.log(students[i].name);

    }
   

  }

//  studentName(students)



// --------3--------- 
 function studentNames(students){
    for(let i=0;i<students.length;i++){
        console.log(`Ad: ${students[i].name},     Soyad: ${students[i].surname}`);
        

    }
   

  }

//  studentNames(students)


// --------4-------- 
 function studentKesr(students){
    for(let i=0;i<students.length;i++){
       if(students[i].fail==true){
        console.log(`Kesirli Telebe Ad: ${students[i].name}, Soyad: ${students[i].surname}`)
       }
        

    }
   

  }

//  studentKesr(students)

// --------4-------- 
function studentHobbi(students){
    let student="";
    let hobbiSay=0
 
    for(let i=0;i<students.length;i++){
       if(students[i].hobbies.length>hobbiSay){
        hobbiSay=students[i].hobbies.length
        student=students[i]
       }
      
       
        

    }

    console.log(`${student.name}  --------> ${student.hobbies}`)
    

   

  }

//  studentHobbi(students)

function studentOrtalama(students){
    let ortalama=students[0].avgPoint;
    let student;
 
    for(let i=0;i<students.length;i++){
        if(students[i].avgPoint>ortalama){
            ortalama=students[i].avgPoint;
            student=students[i]

            
        }
       
       
        

    }

    console.log(`${student.name} ${student.surname} --------> ${ortalama}`)
    

   

  }

//   studentOrtalama(students)

function studentParol(students){
    let parol=students[0].loginDetail.password.length;
    let student;
 
    for(let i=0;i<students.length;i++){
        if(students[i].loginDetail.password.length>parol){
            parol=students[i].loginDetail.password.length;
            student=students[i]

            
        }
       
       
        

    }

    console.log(`${student.loginDetail.username} ${student.name} --------> ${student.loginDetail.password}`)
    

  }
//   studentParol(students)

function studentBoy(students){
  
 
    for(let i=0;i<students.length;i++){
        if(students[i].boyfriendGirlfriend==true){
            console.log(students[i].name)
    
        }
  
    }

  }

// studentBoy(students)

function studentTeacher(students){
  
 
    for(let i=0;i<students.length;i++){
        if(students[i].age==20){
            console.log(`${students[i].name}`)
            for(let k=0;k<students[i].teacher.length ;k++)
    
        }
  
    }

  }
  studentTeacher(students)


  