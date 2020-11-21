//Module pattern
/*
https://medium.com/javascript-in-plain-english/javascript-design-pattern-module-pattern-555737eccecd

Usually, the module pattern is used with IIFE. IIFE has its own separate function scope that nobody can access from the outside.

var stories = 'Medium Story';var medium = (function() {
var stories = ['🍔', '🍟', '🍕'];
return { getStories: stories };
})();

The good advantage of this is even though there is a variable with the same name as the variable in the IIFE,
 their scopes won’t crash. Moreover, you can also make private variables or functions with this pattern, using Closure.

console.log(stories); // Medium Story
console.log(medium.getStories()); // ['🍔', '🍟', '🍕']
console.log(medium.stories); // undefined

In this case, you can’t access stories in the medium since it only exists within the function scope.
The only way to access it is to use getStories

*/
const myModule = (function(){
  stories =[1,2,3,4];
  return{
    getStories:stories
  }
})();

export {myModule};
