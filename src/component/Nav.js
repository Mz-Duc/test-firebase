import React, { Component } from 'react';
import {connect} from 'react-redux';
class Nav extends Component {
  handladd=(event)=>{
    event.preventDefault();
    this.props.changestatus();
    this.props.changestatusadd();
  }
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: '#050708'}}>
  <a className="navbar-brand" href="#">MZ-D</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
    <ul className="navbar-nav  mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={(event)=>this.handladd(event)} href="#">Thêm ghi chú</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changestatus: () => {
      dispatch({type:"change_status"})
    },
    changestatusadd: () => {
      dispatch({type:"change_statusadd"})
    }
  }
}

export default connect(null, mapDispatchToProps)(Nav)
