import React, { Component } from 'react';
import Notes from './Notes';
import {firebaseconnect} from '../firebaseconnect';

class Notelist extends Component {

  constructor(props) {
    super(props);
    this.state={
      noteLists:[]
    }
  }

  
  componentWillMount() {
    firebaseconnect.on('value',(anote)=>{
        var arrdata=[];
        anote.forEach(element=>{
          const key=element.key;
          const notetitle=element.val().notetitle;
          const notecontent=element.val().notecontent;
          arrdata.push({
            id:key,
            notetitle:notetitle,
            notecontent:notecontent
          })
        });
        this.setState({
          noteLists:arrdata
        });
    })
  }
  
  getdata=()=>{
   //console.log(this.state.noteLists);
   if(this.state.noteLists){
    return this.state.noteLists.map((value,key)=>{
    return <Notes
        i={key}
        note={value}
        title={value.notetitle}
        content={value.notecontent}/>
    })
   }
  }
    render() {
        return (
            <div className="">
               <div className="col">
                  <div id="notelist" role="tablist" aria-multiselectable="true">
                    {this.getdata()}
                 </div>
              </div>
          </div>
        );
    }
}

export default Notelist;