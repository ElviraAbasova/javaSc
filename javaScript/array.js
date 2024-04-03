// -----------8--------
// let arr=[3,8,2,5,4,10,7,6]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==1){
//         console.log(i)
//     }
// }

// ----------9--------
// let arr=[3,8,2,5,4,10,7,6];
// for(let i=0; i<arr.length; i++){
//     if(i%2==1){
//         console.log(arr[i])
//     }
// }

// ----------10--------
// let arr=[3,8,2,5,4,10,7,6];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }    
// console.log(max);

// ----------11---------
// let arr=[3,8,2,5,4,10,7,6];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         if(arr[i]>max){
//             max=arr[i]
//         }
        
//     }
// }    
// console.log(max);

// ----------12---------
// let arr=[3,8,2,1,5,4,10,7,6];
// let min=arr[0];
// let index;
// for( let i=0; i<arr.length; i++){
//     if(arr[i]<=min){
//       min=arr[i];
//       index=i;

//     }
   
// } 
// console.log(index);

// ----------16---------
// let arr=[3,8,2,5,4,10,7,6]
// let max=arr[0];
// let min=arr[0];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
//       if(arr[i]>max){
//         max=arr[i];
//     }
//     if(arr[i]<min){
//         min=arr[i];
//     }

// }
// sum=sum-(max+min);
// console.log(sum);

// ----------17---------
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == "boolean"){
//         console.log(arr[i-1])
//         console.log(arr[i+1])
//     }
// }

// ----------18---------
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let soz="";
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string"){
//         if(arr[i].length>soz.length){
//             soz=arr[i];
//         }
//     }
// }
// console.log(soz);

// ----------19---------
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string" && arr[i]==arr[i].toUpperCase()){
//         console.log(i +"---"+ arr[i])
//     }
// }

// ----------20--------
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// soz=''
// count=0

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string"){
//         soz=arr[i];
//           for(let k=0; k<soz.length; k++){
//             if(soz[k]==soz[k].toUpperCase())
//              count+=1;
             
//           }
//     }
// }
// console.log(count)

