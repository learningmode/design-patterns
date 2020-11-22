let mySingleton = (function(){
 let instance;
  function init(){
    let privateVar = 10;
    function privateRandomNumber(){
      return Math.random();
    }
    return{
      getPublicNumber:function(){
        return privateVar;
      },
      getPublicRandomNumber:function(){
        return privateRandomNumber();
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

let a =mySingleton.getInstance();
let b =mySingleton.getInstance();
console.log(a.getPublicNumber());
console.log(a.getPublicRandomNumber());
console.log(b.getPublicRandomNumber());
