import React, { Component } from 'react'
import './Home.scss'
import v1 from '../asset/1.png'
import v2 from '../asset/2.png'
import v3 from '../asset/3.png'
import v4 from '../asset/4.png'
import v5 from '../asset/5.png'
import v6 from '../asset/6.png'
const data =[v1,v2,v3,v4,v5,v6]
export default class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
       value: {
        
        toltal:0,
        diceOne:data[0],
        diceTwo:data[1],
        diceThree:data[2],
       },
       chon:'',
       win: 0,
  }
    }
    handleChon = (name) =>{
      console.log(name);
      this.setState({
       chon: name,
      })
    }
    handleImage =()=>{
      const diceOneValue =Math.floor(Math.random() * 6);
      const diceTwoValue =Math.floor(Math.random() * 6);
      const diceThreeValue =Math.floor(Math.random() * 6);
      this.setState((state)=>({
        value:{...state.value,diceOne:data[diceOneValue],diceTwo:data[diceTwoValue],diceThree:data[diceThreeValue]}
      }))
      const total =diceOneValue+diceTwoValue+diceThreeValue+3;
      
      if(this.state.chon == "Xỉu" &&  total <= 10 && total >=4 ){
        this.setState({
          win: this.state.win+1,
         })
      }
      if(this.state.chon == "Tài" &&  total <= 17 && total >=11 ){
        this.setState({
          win: this.state.win+1,
         })
      }
      this.setState((state)=>({
        value:{...state.value,toltal:state.value.toltal +1}
      }))
    }
    
  render() {
    return (
      <div className='container'>
        <h1 className='text-center mt-3'>Game Đổ Xúc Xắc</h1>
        <div className='row '>
            <div className='col-sm-4  col'>
                <button className='btn btn-danger'  onClick={()=>this.handleChon("Tài")}> Tài </button>
            </div>
            <div className='col-sm-4 col'>
                <div className='text-center'>
                <img className='me-1' style={{width:'50px',height:'50px'}} src={this.state.value.diceOne} alt="" />
                {/* <img src={arr[Math.floor(Math.random() * arr.length)]} /> */}
                <img className='me-1' style={{width:'50px',height:'50px'}} src={this.state.value.diceTwo} alt="" />
                <img className='me-1' style={{width:'50px',height:'50px'}} src={this.state.value.diceThree} alt="" />
                </div>
            </div>
            <div className='col-sm-4 col'>
            <button className='btn btn-success' onClick={()=>this.handleChon("Xỉu")}> Xỉu </button>
            
            </div>
            <div className='footer'>
                <h3> Bạn chọn: {this.state.chon} </h3>
                <h3> Số bàn thắng: {this.state.win}</h3>
                <h3> Tổng số bàn chơi: {this.state.value.toltal} </h3>
                <button onClick={this.handleImage} className='btn btn-warning'>Play game</button>
            </div>
        </div>
      </div>
    )
  }
}
