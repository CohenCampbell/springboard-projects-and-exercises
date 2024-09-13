import React from 'react';

function Box({width =1, height=1, backgroundColor="blue", id, remove}){
    const Handleremove = () => remove(id);
    return(
    <div id={id} style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor
      }}>
        <button onClick={Handleremove}>X</button>
    </div>
)
}

export default Box;