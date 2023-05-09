import React,{ Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import {sort} from "../actions"





class Planning extends Component  {

  onDragEnd =(result) => {
    const {destination,source,} = result;
    if(!destination){
      return;
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      //draggableId
    ))
  }
  render() {
    const {lists}=this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div className="Planning" >
      <h1>hello</h1>
      <div style={style.listsContainer}>
      {lists.map(list =>(
        <List listId={list.id} key={list.id} title={list.title} cards={list.cards} />
      ))}
      <ActionButton list ></ActionButton>
      </div>
    </div>
    </DragDropContext>
  );
}
}


const style = {
  listsContainer:{
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state =>({
  lists:state.lists
})



export default connect(mapStateToProps) (Planning);


