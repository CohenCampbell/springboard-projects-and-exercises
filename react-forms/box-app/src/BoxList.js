import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

function BoxList(){

const [boxes, setBox] = useState([]);

const addBox = boxObj => {
 setBox(boxes => [...boxes, boxObj]);
    console.log(boxes)
}

const remove = id => {
    setBox(boxes => boxes.filter(box => box.id !== id));
  };

return (<div>
    <NewBoxForm addBox={addBox}/>
    {boxes.map(box => <div><Box 
    remove={remove}
    key={box.id}
    id={box.id}
    width={box.width} 
    height={box.height} 
    backgroundColor={box.backgroundColor}/></div>)}
</div>)
}

export default BoxList;