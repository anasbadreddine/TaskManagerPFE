import React from 'react';
import Icon from '@mui/material/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import  Button  from '@mui/material/Button';
import { connect } from 'react-redux';
import { addList } from '../actions';
import { addCard } from '../actions';

class ActionButton extends React.Component {
    state ={
        formOpen :false
    }

    openForm=()=>{
        this.setState({
            formOpen : true
        });
    }
    closeForm = e =>{
        this.setState({
            formOpen : false
        });
    }
handleInputChange = e =>{
    this.setState({
        text:e.target.value
    })}

    handleAddlist =()=>{
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text){
            this.setState({text: ""})
            dispatch(addList(text));
        }
        return;
    }

    handleAddcard =()=>{
        const {dispatch,listId} = this.props;
        const {text} = this.state;

        if(text){
            this.setState({
                text: ""
            });
            dispatch(addCard(listId,text));
        }
    };

    renderAddButton =()=>{
        const{list} =this.props;
        const buttonText = list ? "Add another list" : "Add another Card";
        const buttonTextOpacity = list ? "1" : "0,5";
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgb(204, 204, 204)" : "inherit";
        return(
            <div 
                onClick={this.openForm}
                style ={{
                ...styles.openFormButtonGroup,
                opacity: buttonTextOpacity ,
                color: buttonTextColor ,
                backgroundColor: buttonTextBackground
                }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )


    }

    renderForm = () =>{


        const {list}=this.props;
        const placeholder = list ? "Entrer list title ..." : "Entrer a title for this card...";
        const buttonTitle = list ? "Add list" : "Add Card";
        return <div>
            <Card style={{
                overflow:"visible",
                minHeight:80,
                minWidth:272,
                padding:"6px 8px 2px"
            }}>
                <TextareaAutosize 
                placeholder={placeholder} 
                autoFocus  
                onBlur={this.closeForm}
                value={this.state.text}
                onChange={this.handleInputChange}
                style={{
                    resize: "none",
                    width:"100%",
                    overflow:"hidden",
                    outline:"none",
                    border:"none"
                }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button 
                onMouseDown={list ? this.handleAddlist : this.handleAddcard} 
                variant="contained" 
                style={{color:"white",backgroundColor:"#5aac44"}} >
                    {buttonTitle}{""}</Button>
                    <Icon style={{marginLeft:8,cursor:"pointer"}}>close</Icon>
            </div>
        </div>

    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}
const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width:272,
        paddingLeft:10
    },
    formButtonGroup:{
        marginTop:8,
        display: "flex",
        alignItems: "center",

    }
}

export default connect() (ActionButton);