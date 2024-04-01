// ---------1------------
// for(i=10; i<100 ; i++){
//     if(i%10==7){
//         console.log(i);
//     }
// }
// ---------2----------
// for(i=10; i<100 ; i++){
//     if(Math.floor(i/10)==(i%10)){
//         console.log(i);
//     }
// }
// ---------3----------
// let eded=prompt("Eded daxil edin:");

// for(i=0; i < eded.length ; i++){
//     console.log(`${eded[i]} ededi, ${eded}-in ${i+1}-ci ededidir `);
// }

// ---------4----------
// let eded=prompt("Eded daxil edin:");
// let max=0;
// for(i=0; i < eded.length;i++){
//     reqem= Number(eded[i]);
//     if(reqem*1==reqem && reqem>=0 && reqem<=9 && reqem>max){
//         max=reqem;
//     }
//  }
    
// console.log(`${eded}-in en boyuk reqemi ${max}-dir`);
// ---------5----------
// let eded=prompt("Eded daxil edin:");
// let hasil=1;
// let cem=0;
// let say=0;
// let i=0;
// do{
//     say+=1;
//     cem+=Number(eded[i]);
//     hasil*=Number(eded[i]);
//     i++;


// }
// while(i< eded.length);
// let orta=cem/say;
// console.log(`${eded}-de reqemlerin cemi ${cem}-dir `);
// console.log(`${eded}-de reqemlerin hasili ${hasil}-dir `);
// console.log(`${eded}-de reqemlerin ededi ortasi ${orta}-dir `);
// ---------6---------
// let eded=prompt("Eded daxil edin:");
// for(i=1; i< Number(eded) ; i++){
//     if(Number(eded)%i==0){
//         console.log(`${eded}-in bolunenleri - ${i}`);
//     }
// }
// ---------7--------
// let eded=prompt("Eded daxil edin:");
// count=0;
// for(i=1; i< Number(eded) ; i++){
//     if(Number(eded)%i==0){
//         count+=1;

//     }
// }
// console.log(`${eded}-in bolunenlerin sayi - ${count}-dir`);