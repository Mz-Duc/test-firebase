import React, { Component } from 'react';
import {connect} from 'react-redux'
import Addnote from './Addnote'
class notes extends Component {
    showform=()=>{
        if(this.props.status){
          return <div className="col"> <Addnote/></div>;
        }
      }
      twoaction=()=>{
        this.props.changestatus();
        this.props.edit(this.props.note);
      }
      deldeteitem=()=>{
        this.props.delitemId(this.props.note.id);
        this.props.changestatusAlertON("Xóa thành công","success")
      }
    render() {
        return (
<div>
    <div className="card">
        <div className="card-header d-flex justify-content-between" role="tab" id="note1">
            <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#notelist" href={"#number" + this.props.i} aria-expanded="true" aria-controls="notecontent1">
                    {this.props.title}
                </a>
            </h5>
                <div className="btn-group ">
                    <div onClick={()=>this.twoaction()} className="btn btn-warning sua"><i class="fa fa-edit    "></i>Sửa</div>
                    <div onClick={()=>this.deldeteitem()} className="btn btn-danger xoa"><i class="fa fa-delete    "></i>Xóa</div>
                </div>
        </div>

        <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
            <div className="card-body">
             {this.props.content}
            </div>
        </div>
    </div>
</div>
        );
    }
}

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changestatus: () => {
        dispatch({type:"change_status"})
      },
      edit: (editobject) => {
        dispatch({type:"change_edititem",
        editobject
      })},
      delitemId: (deleteid) => {
        dispatch({type:"delete",deleteid})
      },
      changestatusAlertON: (alertcontent,alerttype) => {
        dispatch({type:"Alert_ON",alertcontent,alerttype})
      }
    }
  }
  
export default connect(null, mapDispatchToProps,)(notes)
