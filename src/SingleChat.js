import { useState } from 'react';
import Profile from './Profile';

function SingleChat(props){
    const data = {
        username: props.data.username,
        usericon: props.data.usericon,
    }
    console.log("#"+data);
    // const [username, setUsername] = useState('');

    return(
        <div>
            {props.data.username}
        </div>
    );
}

export default SingleChat;