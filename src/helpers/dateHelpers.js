const getDate = ()=>{
    
      const currentDate = new Date().toISOString().split('T')[0]
      
      return currentDate;
}

const escapeText = (text)=>{
    return escape(text)
}


export { getDate, escapeText }