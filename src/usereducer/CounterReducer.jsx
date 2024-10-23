export const INIT_STATE={loading:false,data:{},error:false}
export const CounterReducer =(state,action)=>{
  switch (action.type){
    case "FETCH_START":
      return{
        ...state,loading:true,error:false
      }
      case "FETCH_SUCCESS":
        return{
          ...state,loading:false,error:false,data:action.payload
        }
        case "FETCH_FAILED":
          return{
            ...state,loading:false,error:true
          }
          default:
            return{...state}
          }
        }