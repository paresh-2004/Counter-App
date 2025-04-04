const countvalue = document.querySelector('#counter');
const increment =()=>{
    //get value from UI
    let value = parseInt(countvalue.innerText);
    //Update value
    value = value+1;
    countvalue.innerText = value;
};

   function decrement(){
    // get the value from UI
    let value = parseInt(countvalue.innerText);
    //Update value
    value = value-1;
    countvalue.innerText = value;
};