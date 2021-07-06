const encodeBase64 = (text)=>{
    return btoa(text)

}

const decodeBase64 = (text)=>{
    return atob(text)
}


const encodeObjectBase64 = (objeto) => {
    let newObject = {};
    for (const [key, value] of Object.entries(objeto)) {
       newObject = {
          ...newObject,
          [key]: key === "date" || key === "id" ? value : encodeBase64(value),
       };
    }

    return newObject;
 };

 const decodeObjectBase64 = (objeto) => {
    let newObject = {};
    for (const [key, value] of Object.entries(objeto)) {
       newObject = {
          ...newObject,
          [key]: key === "date" || key === "id" ? value : decodeBase64(value),
       };
    }
    return newObject;
 };


export { encodeBase64, decodeBase64, encodeObjectBase64, decodeObjectBase64 }