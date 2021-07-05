const encodeBase64 = (text)=>{
    return btoa(text)

}

const decodeBase64 = (text)=>{
    return atob(text)
}



export { encodeBase64, decodeBase64 }