import React from 'react';

function Welcome(props) {
    props.socket.emit('getInventory');
    return <h1>Example Component</h1>;
}

 export default Welcome;