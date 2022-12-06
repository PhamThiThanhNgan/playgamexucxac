import React, { Component } from 'react'
import { connect } from'react-redux'
import "../game-state-props/Home.scss"
 class GameRedux extends Component {
  render() {
    const {chon,win,total,arr,handleClick,handleImg}=this.props;
    return (
      <div className='container'>
      <h1 className='text-center mt-3'>Game Đổ Xúc Xắc</h1>
      <div className='row '>
          <div className='col-sm-4  col'>
              <button className='btn btn-danger' onClick={()=>handleClick("Tài")} > Tài </button>
          </div>
          <div className='col-sm-4 col'>
              <div className='text-center'>
              <img className='me-1' style={{width:'50px',height:'50px'}} src={arr.diceOne} alt="" />
              <img className='me-1' style={{width:'50px',height:'50px'}} src={arr.diceTwo} alt="" />
              <img className='me-1' style={{width:'50px',height:'50px'}} src={arr.diceThree} alt="" />
              </div>
          </div>
          <div className='col-sm-4 col'>
          <button className='btn btn-success' onClick={()=>handleClick("Xỉu")}> Xỉu </button>
          
          </div>
          <div className='footer'>
              <h3> Bạn chọn: <font style={{color:"red"}}>{chon}</font> </h3>
              <h3> Số bàn thắng: {win} </h3>
              <h3> Tổng số bàn chơi: {total} </h3>
              <button  className='btn btn-warning' onClick={()=>handleImg()}>Play game</button>
          </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state)=>({
   chon: state.game.chon,
   win: state.game.win,
   total:state.game.total,
   arr: state.game.arr,
})
const mapDispatchToProps =(dispatch) =>{
  return {
    handleClick:(name)=>{
      const action={type:"Event click",name}
      dispatch(action);
    },
    handleImg:()=>{
      const action={type:"RandomImage"}
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GameRedux)