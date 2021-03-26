import React, { Component } from 'react';
import {connect} from 'react-redux';
class Addnote extends Component {
    constructor(props) {
        super(props);
        this.state={
          notetitle:"",
          notecontent:"",
          id:""
        }
      }

      
      componentWillMount() {
        if(this.props.edititem){
          this.setState({
            notetitle:this.props.edititem.notetitle,
            notecontent:this.props.edititem.notecontent,
            id:this.props.edititem.id
          })
        }
      }
      
      ischange=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
          [name]:value
        });
      }

      addd=(title,content)=>{
        if(this.state.id){
          var obj={};
          obj.id=this.state.id;
          obj.notetitle=this.state.notetitle;
          obj.notecontent=this.state.notecontent;

          this.props.Updatatostore(obj);
          this.props.changestatus();
          //console.log("Đang sửa");
          this.props.changestatusAlertON("Sửa thành công","warning");
        }
        else{
          var nd={};
     
          nd.notetitle=title;
          nd.notecontent=content;
          //console.log("đang thêm");
           this.props.connectStore(nd);
           this.props.changestatusAlertON("Thêm thành công","danger");
        } 
      }
      changestatusadd=()=>{
        if(this.props.statusadd)
        {
          return <h3>Thêm ghi chú</h3>
        }
        else{
          return <h3>Sửa ghi chú</h3>
        }
      }
    render() {
        return (
            <div className="">
    <div className="col">
      <h3>{this.changestatusadd()}</h3>
      <div className="form-group">
        <label htmlFor="notetitle">Tiêu đề note</label>
        <input defaultValue={this.props.edititem.notetitle} onChange={(event)=>this.ischange(event)} type="text" className="form-control" name="notetitle" id="notetitle" aria-describedby="helpId" placeholder="Điền tiêu đề vào đây" />
      </div>
      <div className="form-group">
        <label htmlFor="notetitle">Nội dung</label>
        <textarea defaultValue={this.props.edititem.notecontent}  onChange={(event)=>this.ischange(event) } className="text-left" type="text" className="form-control" name="notecontent" id="notecontent" aria-describedby="helpId" placeholder="Điền nội dung vào đây" />
      </div>
      <button onClick={()=>this.addd(this.state.notetitle,this.state.notecontent)} type="submit" className="btn btn-primary btn-block">Submit</button>
    </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    edititem: state.edititem,
    statusadd: state.statusadd
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    connectStore: (getitem) => {
      dispatch({type:"conectdata",getitem})
    }
    , Updatatostore: (getitem) => {
      dispatch({type:"Edit",getitem})
    },
    changestatus: () => {
      dispatch({type:"change_status"})
    },
    changestatusAlertON: (alertcontent,alerttype) => {
      dispatch({type:"Alert_ON",alertcontent,alerttype})
    }
    ,
    changestatusAlertOFF: () => {
      dispatch({type:"Alert_OFF"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addnote);/////theo thứ tự nếu không có đủ thì phải thêm null mapDispatchToProps