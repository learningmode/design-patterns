let myRevealModule = (function(){
  let privateCounter =0;
  let privateName;
  function privateSetCounter(){
    privateCounter++
  }
  function publicCounter(){
    privateSetCounter()
  }
  function publicGetCounter(){
    return privateCounter;
  }
  function publicSetName(strName){
    privateName = strName
  }
  function publicGetName(){
    return privateName;
  }
  return{
    setCounter:publicCounter,
    getCounter:publicGetCounter,
    setName:publicSetName,
    getName:publicGetName
  }
})();
myRevealModule.setCounter();
let a = myRevealModule.getCounter();
console.log(a);
myRevealModule.setCounter();
a = myRevealModule.getCounter();
console.log(a);
myRevealModule.setName('John Doe');
a=myRevealModule.getName();
console.log(a);
