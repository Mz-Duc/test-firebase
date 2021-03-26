import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux'
class Alertinfor extends Component {
    handletimeout=()=>{
        this.props.Alertshowoff();
    }
    render() {
        if(this.props.Alertshow==false) return null;
        return (
            <div>
               <AlertContainer>
                <Alert onDismiss={()=>this.handletimeout()} timeout={1000} type={this.props.alerttype}>{this.props.alertcontent}</Alert>
	          </AlertContainer>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Alertshow: state.Alertshow,
        alertcontent:state.alertcontent,
        alerttype:state.alerttype
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Alertshowoff: () => {
            dispatch({type:"Alert_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alertinfor)
