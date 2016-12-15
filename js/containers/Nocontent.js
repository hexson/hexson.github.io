import React, { Component } from 'react';
import NProgress from 'nprogress';


class Nocontent extends Component {
  constructor (props){
    super(props);
    this.state = {
      time: 5,
      autoTips: 's 后自动跳转到首页'
    }
  }
  componentWillMount (){
    NProgress.start();
  }
  componentDidMount (){
    NProgress.done();
    this.countDown();
  }
  countDown (){
    setTimeout(() => {
      let time = this.state.time - 1;
      if (time > 0){
        this.setState({
          time: time
        });
        this.countDown();
      }else {
        window.location.href = '#/';
      }
    }, 1000);
  }
  render (){
    return (
      <div className="ac" style={{width: '100%', height: '50rem', position: 'absolute', top: '50%', marginTop: '-25rem'}}>
        <p style={{color: '#bbb', fontSize: '10rem', lineHeight: '16rem', paddingTop: '12rem'}}>404</p>
        <p style={{color: '#ccc', fontSize: '3rem', lineHeight: '5rem'}}>Page not found!</p>
        <p style={{color: '#ccc', fontSize: '2rem', lineHeight: '5rem'}}>{this.state.time + this.state.autoTips}</p>
      </div>
    )
  }
}

export default Nocontent