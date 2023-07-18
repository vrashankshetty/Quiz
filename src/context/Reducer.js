const Reducer=(state,action)=>{
    switch(action.type){
        case "Start":
            return{
                user:null,
                isFetching:true,
                error:false,
            }
        case "Start":
                return{
                    user:action.payload,
                    isFetching:false,
                    error:false,
                }
         case "Start":
                return{
                     user:null,
                    isFetching:false,
                    error:true,
                }
         default:
            return state;
    }
}
export default Reducer;