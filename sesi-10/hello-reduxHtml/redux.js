import Redux from 'redux'
const { createStore } = Redux

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return { counter: state.counter + 1}
        case "DECREMENT":
            return { counter: state.counter - 1}
        default:
            return state
    }
}
//parameter sebuah reducer untuk meng inisiasi store
let store = createStore(counter)

//bisa mendaftarkan sebuah aksi yang akan di trigger secaraotomatis ketika ada perubahan state
store.subscribe(()=> console.log(store.getState()))

//menerima parameter berupa object berisi type dan payload ( optional ) untukditeruskan dan di konsumsi oleh reducer
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })
store.dispatch({  type: 'INCREMENT' })