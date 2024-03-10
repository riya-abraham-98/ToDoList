
function addToDo(){

    let containerSample = document.createElement("div");


    let text = document.getElementById("textfield").value;
    
    let list = document.createElement("input");
    list.type="checkbox";
    list.className="CheckBox";
    
    
    
  let label = document.createElement("label");
   label.htmlFor="list";
   label.appendChild(document.createTextNode(text));
   label.style.margin="10px";
    
   
   containerSample.appendChild(list);
   containerSample.appendChild(label);

   inputs.appendChild(containerSample);


   list.addEventListener('click',function(){
    label.style.textDecoration="line-through";
   })
}

function clearThis(){
      document.getElementById("textfield").value= " ";
    
    
}
   