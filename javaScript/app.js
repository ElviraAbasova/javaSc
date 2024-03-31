//     ------1.------

// let teref1;
// let teref2;
// let teref3;
// teref1 = Number(prompt("Üçbucağin 1-ci tərəfini daxil edin"));
// teref2 = Number(prompt("Üçbucağin 2-ci tərəfini daxil edin"));
// teref3 = Number(prompt("Üçbucağin 3-cü tərəfini daxil edin"));

// if ( teref1=="" || teref2=="" || teref3==""){
//     console.log("Terefi boş daxil etmisiniz");
// } else{
//     if ( teref1*1==teref1 && teref2*1==teref2 && teref3*1==teref3){
//         if (teref3 > (teref1-teref2) && teref3 < (teref1+teref2)){
//             console.log("Üçbucağin tərəfləri düzgündür");
//         } else{
//             console.log("Üçbucağin tərəfləri düzgün deyil");
//         }
    
//     } else{
//         console.log("Daxil etdiyinizin ədəd olduğundan əmin olun");
//     }

// }



//     ------2.------


// let a;
// let b;
// let c;
// a = Number(prompt("Bərabərtərəfli üçbucağin 1-ci tərəfini daxil edin"));;
// b = Number(prompt("Bərabərtərəfli üçbucağin 2-ci tərəfini daxil edin"));;
// c = Number(prompt("Bərabərtərəfli üçbucağin 3-ci tərəfini daxil edin"));;


// if ( a=="" || b=="" || c==""){
//     console.log("Terefi boş daxil etmisiniz");
// } else{
//     if ( a*1==a && b*1==b && c*1==c){
//         if ((a == b) && (b == c) & (a == c)){
//             console.log("Üçbucaq bərabərtərəflidir");
//         } else{
//             console.log("Üçbucaq bərabərtərəfli deyil");
//         }
    
//     } else{
//         console.log("Daxil etdiyinizin ədəd olduğundan əmin olun");
//     }

// }

//     ------3.------

// let eded1;
// let eded2;

// eded1 = Number(prompt("1-ci ədədi daxil edin"));
// eded2 = Number(prompt("2-ci ədədi daxil edin"));


// if ( eded1=="" || eded2==""){
//     console.log("Boş daxil olunub");
// }
// else{
//     if (eded1*1==eded1 && eded2*1==eded2){
//         if(eded1 > eded2){
//             console.log(`1-ci ədəd böyükdür yəni ${eded1} > ${eded2} `);
//         }
//         else if(eded2 > eded1){
//             console.log(`2-ci ədəd böyükdür yəni ${eded1} < ${eded2} `);
//         }
//         else{
//             console.log(`Ədədlər bərabərdir yəni ${eded1}==${eded2} `);
        
//         }

//     }
//     else{
//         console.log("Daxil etdiyinizin ədəd olduğundan əmin olun");

//     }
   
// }

//     ------4.------

// let eded1;
// let eded2;
// let eded3;

// eded1 = Number(prompt("1-ci ədədi daxil edin"));
// eded2 = Number(prompt("2-ci ədədi daxil edin"));
// eded3 = Number(prompt("3-cu ədədi daxil edin"));


// if ( eded1=="" || eded2=="" || eded3==""){
//     console.log("Boş daxil olunub");
// }
// else{
//     if (eded1*1==eded1 && eded2*1==eded2 && eded3*1==eded3){
//         if(eded1 > eded2 && eded1 > eded3){
//             console.log(`1-ci ədəd yəni ${eded1} böyükdür `);
//         }
//         else if(eded2 > eded1 && eded2 > eded3){
//             console.log(`2-ci ədəd yəni ${eded2} böyükdür `);
//         }
//         else if(eded3 > eded1 && eded3 > eded2){
//             console.log(`3-ci ədəd yəni ${eded3} böyükdür `);
//         }
//         else{
//             console.log(`Ədədlər bərabərdir yəni ${eded1}==${eded2}==${eded2}`);
        
//         }

//     }
//     else{
//         console.log("Daxil etdiyinizin ədəd olduğundan əmin olun");

//     }

// }

//     ------5.------

// let eded1;
// let eded2;
// let eded3;

// eded1 = Number(prompt("1-ci ədədi daxil edin"));
// eded2 = Number(prompt("2-ci ədədi daxil edin"));
// eded3 = Number(prompt("3-cu ədədi daxil edin"));


// if ( eded1=="" || eded2=="" || eded3==""){
//     console.log("Boş daxil olunub");
// }
// else{
//     if (eded1*1==eded1 && eded2*1==eded2 && eded3*1==eded3){
//         if(eded1 > eded2 && eded1 > eded3){
//             if(eded2 > eded3){
//                 console.log(`${eded3}<${eded2}<${eded1}`);
//             }
//             else if(eded2 < eded3){
//                 console.log(`${eded2}<${eded3}<${eded1}`);
//             }
//             else {
//                 console.log(`${eded3}=${eded2}<${eded1}`);

//             }
//         }
//         else if(eded2 > eded1 && eded2 > eded3){
//             if(eded1 > eded3){
//                 console.log(`${eded3}<${eded1}<${eded2}`);
//             }
//             else if(eded1 < eded3){
//                 console.log(`${eded1}<${eded3}<${eded2}`);
//             }
//             else {
//                 console.log(`${eded1}=${eded3}<${eded2}`);

//             }
//         }
//         else if(eded3 > eded1 && eded3 > eded2){
//             if(eded1 > eded2){
//                 console.log(`${eded2}<${eded1}<${eded3}`);
//             }
//             else if(eded1 < eded2){
//                 console.log(`${eded1}<${eded2}<${eded3}`);
//             }
//             else {
//                 console.log(`${eded1}=${eded2}<${eded3}`);

//             }
//         }
//         else{
//             console.log(`Ədədlər bərabərdir yəni ${eded1}=${eded2}=${eded2}`);
        
//         }

//     }
//     else{
//         console.log("Daxil etdiyinizin ədəd olduğundan əmin olun");

//     }

// }

//     ------6.------

// let age;
// let bilet;
// let say;

// bilet = 10;
// age = Number(prompt("Yaşinizi daxil edin:"));
// say = Number(prompt("Neçə bilet almaq istəyirsiniz?"))


// if( age == "" || say == ""){
//     console.log('Boş daxil etmisiniz!!')
// }
// else{
//     if( age*1==age && say*1==say){
//         if( age > 18){
//             console.log(`Siz kinoteatra bilet ala bilersiniz ${say} nəfər üçün ödəniş ${say*bilet} AZN təşkil edir`);
//         }
//         else if( age == 18){
//             if(say >= 3){
//                 console.log(`Siz kinoteatra bilet ala bilersiniz ${say} nəfər üçün ödəniş ${say*bilet} AZN təşkil edir`);
//             }
//             else{
//                 console.log(`Siz kinoteatra buraxilirsiniz ama yaşiniz 18 olduğu üçün minimum 3 bilet ala bilersiniz`);
//             }
        
        
//         }
        
//         else{
//             console.log("Siz kinoteatra buraxilmirsiniz çünki yaşiniz 18-dən azdir!!");
//         }

//     }
//     else{
//         console.log("Daxil etdiklərinizin ədəd olduğundan əmin olun !!")
//     }
// }

//     ------7.------
let balans;
let duyme;

balans=Number(prompt("Balansinizdaki mebleğ"));
duyme=Number(prompt("1 2 3 ve ya 4 daxil edin"));

if( duyme == "" || balans == ""){
    console.log("Daxil etdiklərinizin ədəd olduğundan əmin olun !!")
   
   
}
else{
    if(duyme*1==duyme && balans*1==balans){
        if(duyme == 1){
            console.log(`Balansinizdaki olan məbləğ ${balans} AZN-dır`)
    
        }
        else if(duyme == 2){
            let medaxil;
            medaxil=Number(prompt("Balansiniza köçürmək istədiyiniz mebleğ"));
            console.log(`Balansiniza pul köçürüldü məbləğ ${balans+medaxil} AZN-dır`)
        }
        else if(duyme == 3){
            let cixaris;
            cixaris=Number(prompt("Balansinizdan çıxarmaq istədiyiniz mebleğ"));
            if(balans>=cixaris){
                console.log(`Balansinizdan pul çıxarıldı qalan məbləğ ${balans-cixaris} AZN-dır`);
            }
            else{
                alert(`Balansinizda yetəri qədər pul yoxdur`)
            }
            
        }
        else if(duyme == 4){
            alert("Çıxış edildi!")
        }
        else{
            alert("düyməni düzgün daxil edin")
        }

    }
    else{
        console.log("Daxil etdiklərinizin ədəd olduğundan əmin olun !!")

    }
}