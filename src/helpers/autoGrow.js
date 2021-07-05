const autoGrow = (element)=>{
    if(element === null) return
       element.style.height = "5px";
       element.style.height = (element.scrollHeight) + "px";

 }

export {autoGrow}