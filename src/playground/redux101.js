import {createStore} from 'redux'

//Action generators - function that return action object


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = ({count = 0} = {}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET"
})

//Reducers:
const countReducer = (state = {count:0}, action) => {
    switch (action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default: 
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe =  store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 5}))
store.dispatch(setCount({count: 100}))

store.dispatch(resetCount())

unsubscribe()



//console.log(store.getState())

