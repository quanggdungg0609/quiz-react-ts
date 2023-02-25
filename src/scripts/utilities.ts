

//shuffle element in array
export const ShuffleArray= (array: any[])=>{
    return [...array].sort(()=>Math.random()-0.5)
}
    
