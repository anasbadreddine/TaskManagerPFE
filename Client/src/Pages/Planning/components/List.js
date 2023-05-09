import React from "react";
import Cards from "./Cards";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";


const List =({title,cards,listId})=>{
    return(
        <Droppable droppableId={String(listId)}>
            {provided => (
                        <div {...provided.droppableProps} 
                        ref={provided.innerRef}
                        style={styles.container}>
                        <h3>{title}</h3>
                        {cards && cards.map((card,index) => <Cards 
                        key={card.id} 
                        index={index}
                        text={card.text} 
                        id={card.id}
                        />)}
                        <ActionButton listId={listId} />
                        {provided.placeholder}
                        </div>
            )}
        </Droppable>
    )
};


const styles ={
    container:{
        backgroundColor:"#ccc",
        borderRadius :3,
        width :300,
        Padding:8,
        marginRight: 8
        
    }
}
export default List;