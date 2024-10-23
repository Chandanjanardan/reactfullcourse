export const  INIT_STATE={count:0}

export const  IncrementReducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case "increment":
            return{
                ...state,count:state.count+1
            }
            case "decrement":
            return{
               ...state, count:state.count-1
            }
            default:
                return{
                    ...state
                }
  }
}