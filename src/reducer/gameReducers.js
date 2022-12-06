import v1 from '../asset/1.png'
import v2 from '../asset/2.png'
import v3 from '../asset/3.png'
import v4 from '../asset/4.png'
import v5 from '../asset/5.png'
import v6 from '../asset/6.png'
const data=[v1,v2,v3,v4,v5,v6]
const initialState ={
    chon:"",
    win:0,
    total:0,
    arr:{
    diceOne:data[0],
    diceTwo:data[1],
    diceThree:data[2],
    }
}
const gameReducer =(state=initialState,action)=>{
    switch(action.type){
        case "Event click":{
        return {...state, chon:action.name}
        }
        case "RandomImage":{
        const diceOneValue = Math.floor(Math.random()*6);
        const diceTwoValue = Math.floor(Math.random()*6);
        const diceThreeValue = Math.floor(Math.random()*6);
        const tong =(diceOneValue+diceTwoValue+diceThreeValue+3);
        console.log(tong)
        if(state.chon ==="Xỉu" && tong <=10 && tong >=4){
            return{...state,arr:{diceOne:data[diceOneValue],diceTwo:data[diceTwoValue],diceThree:data[diceThreeValue]},win: state.win +1,total: state.total+1}
        }
        if(state.chon ==="Tài" && tong <=17 && tong >=11){
            return{...state,arr:{diceOne:data[diceOneValue],diceTwo:data[diceTwoValue],diceThree:data[diceThreeValue]},win: state.win +1,total: state.total+1}
        }
        return {...state,total: state.total+1}
        }
        default: 
        return state;
    }
    
}
export default gameReducer;