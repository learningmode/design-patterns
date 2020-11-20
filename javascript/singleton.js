//Singleton Pattern

let mySingleton = (function(){
  let instance;
  function init(){
    let privateVar ="Japan";
    let privateRandomNumber=Math.random();
    return{
      publicProperty:"This is a Public Property",
      publicMethod:function(){
        console.log("Private Varibale seen here is :"+privateVar);
      },
      publicRandomNumber(){
        console.log("Private Random Variable returned");
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
console.log( a.publicRandomNumber());
console.log( b.publicRandomNumber());
console.log( a.publicRandomNumber() === b.publicRandomNumber() );
