
export const register=({user,dispatch})=>{
    dispatch({type:'Start'})
    try{
    dispatch({type:'Success',payload:user})
    }catch(e){
    dispatch({type:'Failure',payload:e})
    }
    
}