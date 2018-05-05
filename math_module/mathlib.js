module.exports = function (){
  return {
    add: function(a, b) { 
         // add code here
         return a + b; 
    },
    multiply: function(a, b) {
         // add code here
         return a * b; 
    },  
    square: function(a) {
         // add code here 
         return a * a;
    },
    random: function(a, b) {
         // add code here
         return Math.floor(Math.random() * b) + a;
    }
  }
};