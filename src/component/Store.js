import { useReducer } from 'react';
import {firebaseconnect} from '../firebaseconnect';

var redux=require('redux');
const noteInitialState = { 
    status:false,
    edititem:{}
    ,statusadd:false
    ,Alertshow:false
    ,alertcontent:""
    ,alerttype:''
}

const allreducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "conectdata":
            console.log("ket noi thanh cong ,bien nhan vao la"+ action.getitem);
            firebaseconnect.push(action.getitem);
            return state
        case "change_status":
            return {...state,status:!state.status}
        case "change_statusadd":
                return {...state,statusadd:!state.statusadd}
        case "change_edititem":
            return {...state,edititem:action.editobject}
        case "Edit":
            console.log( action.getitem);
            firebaseconnect.child(action.getitem.id).update({
                notetitle:action.getitem.notetitle,
                notecontent:action.getitem.notecontent
            })
            return {...state,edititem:{}}
        case "delete":
            firebaseconnect.child(action.deleteid).remove();
            return state
        case "Alert_ON":
            return {...state,Alertshow:true,alertcontent:action.alertcontent,alerttype:action.alerttype}
        case "Alert_OFF":
            return {...state,Alertshow:false}
        default:
            return state
    }
}

var store=redux.createStore(allreducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;