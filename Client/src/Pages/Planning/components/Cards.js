import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";

const Cards =({text,id,index})=>{
    
    return(
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card style={style.cardContainer}>
                        <CardContent>
                        <Typography gutterBottom >
                        {text}
                        </Typography>
                        </CardContent>
                    </Card>
                    </div>
            )}

        </Draggable>
    )
}


const style ={
    cardContainer:{
        marginBottom :8
    }
}

export default Cards;