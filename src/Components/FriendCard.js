import React from 'react';

const FriendCard = props => {
    return (

        <div onClick={()=> props.handleItemClick(props.id)}>

            <img alt={props.id} src={props.image} />

        </div>
    )
};

export default FriendCard;
