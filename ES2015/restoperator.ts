var displayColors = function(message, ...color){
   // console.log(message);
    for( let i in color){
        console.log(color[i]);
    }
}

let message = "List of Colors";
let colorArray = ["red", "blue", "green"];

//displayColors(message, 'red');
displayColors(message, ...colorArray);