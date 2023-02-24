

const calculator={
    add: function(a,b){
        console.log(a+b);
    },

    min: function(a,b){
        console.log(a-b);
    },

    div: function(a,b){
        console.log(a/b);
    },

    pow: function(a,b){
        console.log(a**b);
    }
}


calculator.add(10,5);
calculator.min(10,5);
calculator.div(100,2);
calculator.pow(5,2);