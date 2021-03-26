
import './App.css';
import React, { Component } from 'react';
import Notelist from './component/Notelist';
import Addnote from './component/Addnote';
import Nav from './component/Nav';
import {connect} from 'react-redux'
import Alertinfor from './component/Alertinfor'
class App extends Component {
 
  showform=()=>{
    if(this.props.status){
      return <div className="col"> <Addnote/></div>;
    }
  }
  render() {
    return (
      <div>
        <Nav/>
        <Alertinfor/>
        <div className="container">
          <div className="row">
            <div className="col"><Notelist/></div>
            {this.showform()}
          </div>
        </div> 
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    status: state.status
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changestatus: () => {
      dispatch({type:"change_status"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


