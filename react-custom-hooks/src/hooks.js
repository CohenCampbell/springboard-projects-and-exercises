import React, {useEffect, useState} from 'react';
import axios from "axios";

function useFlip(initial = true){
  const [isFacingUp, setIsFacingUp] = useState(initial);
  const flipCard = () => {
    setIsFacingUp(isFacingUp => !isFacingUp)
  }
  return [isFacingUp, flipCard]
}

function useAxios(url){
    const [responses, setResponses] = useState([]);
    
    async function addResData(restOfUrl = ""){
        const response = await axios.get(`${url}${restOfUrl}`);
        setResponses(prevData => [...prevData, response.data])
    }

    return [responses, addResData];
};

export {useFlip, useAxios}