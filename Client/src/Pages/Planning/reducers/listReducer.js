import { CONSTANTS } from "../actions";

// let listId =2;
// let cardId =6;

const initialState = [
    {
        title :"last Episode",
        id : `list-$[0]`,
        cards:[
            {
            id:`card-$[0]`,
            text:"we create a static list"
            },
            {
                id:`card-$[1]`,
                text:"we create a static list2"
                }
        ]
    },    
    {
        title :"this  Episode",
        id : `list-$[1]`,
        cards:[
            {
                id:`card-$[2]`,
                text:"we create a static list"
            },
            {
                id:`card-$[3]`,
                text:"we create a static list2"
                },
            {
                id:`card-$[4]`,
                text:"you can "
            },
            {
                id:`card-$[5]`,
                text:"give a pro"
                }
            ]
    }
];



const listReducer =(state=initialState,action)=>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id:`list-$[listId]`,
                cards:[]
                
            };
            // listId += 1;
            return[...state,newList];
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id:`card-$[cardId]`,
                };
                // cardId += 1;
                const newState = state.map(list =>{
                    if(list.id === action.payload.listId){
                        return{
                            ...list,
                            cards:[...list.cards,newCard]
                        }
                    }
                    else {
                        return list
                    }
                })
            return newState;
        }

            case CONSTANTS.DRAG_HAPPENED:
                const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    //draggableId
                }= action.payload;
                const newState =[...state];


                if(droppableIdStart === droppableIdEnd){
                    const list =state.find(list => droppableIdStart === list.id)
                    const card =list.cards.splice  (droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0,...card)
                }
            return newState;
            
        default:
            return state;
            }
        }
export default listReducer;