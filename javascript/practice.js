/*
  A practice file to simply practice a pattern
*/

let mySingleton =(function(){
 let instance;
 function init(){
   let privateVariable ="Its a private string";
   let privateRandomNumber=Math.random();
   return{
      publicProperty:"A public Property",
      publicMethod:function(){
        console.log("Public method accesses a private string"+privateVar);
      },
      publicRandomNumber:function(){
        console.log("Private Random number");
        return privateRandomNumber;
      }
   }
 }
  return{
    getInstance:function(){
       if(!instance){
         instance = init();
       }
       return instance;
    }
  }

})();

let a = mySingleton.getInstance();
let b = mySingleton.getInstance();
console.log(a.publicRandomNumber());
console.log(b.publicRandomNumber());
