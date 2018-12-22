// this for take two inputs from users
document.getElementById('submitted').addEventListener('click',function(e){
  var input1 = document.getElementById('inputHeight').value;
  var input2 = document.getElementById('inputWidth').value;
  event.preventDefault();
// invoke the function
  makeGrid(input1,input2);
});
// first take two parameter for the function
function makeGrid(input1,input2) {
// make the table
var table = document.getElementById('pixelCanvas');
//to remove the table if the user decied to make another table
table.innerHTML = "";
// the loop here for row in table 
  for (var i = 0;i<input1;i++){
  var row = document.createElement('tr');

// the inner loopp for the cell and when user click in one of cell changed the color
    for (var j = 0;j<input2;j++){
      var cell = document.createElement('td');
      row.appendChild(cell);
      cell.addEventListener('click',function(e){
        var color = document.getElementById('colorPicker').value;
        e.target.style.backgroundColor = color;
      })
    }
table.appendChild(row);
  }
}
