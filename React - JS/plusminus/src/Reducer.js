
// this object is use for create and assign zero values

let initialValue = {count:0}

function reducer(state=initialValue,action){

    // ACTION K SAATH HAMESHA WAHI AAYEGA JO 

    if(action.type==="INC")
    {
        return{
            count:state.count+1
            // state.count is use for access existing value
            //count is just a variable which contain values
        }
    }
    if(action.type==="DEC")
    {
        return{
            count:state.count-1
        }
    }
    return state
}

export default reducer ;