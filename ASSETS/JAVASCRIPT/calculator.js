function clr(){
    document.getElementById("result").value="";

}


function display(n){
    document.getElementById("result").value += n;
    
}


function equate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    
}


function add_item(){
    let item = document.getElementById("box");
    let item_list = document.getElementById("list_item");
    if(item.value != ""){
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    }
    else{
        alert("Please Enter To-DO List Item");
    }
}



// gredient color generator

document.querySelector("#submit").addEventListener("click", () => {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    var hexcode1 = "";
    var hexcode2 = "";
    var random_index = 0;
    
    for(let i = 0; i < 6;i++){
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode1 += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
    }
  
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;
  });