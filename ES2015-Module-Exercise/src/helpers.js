function choice(foods){
    let idx = Math.floor(Math.random() * foods.length);
    return foods[idx];
};

function remove(foods, food){ 
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === food) {
          return [...foods.slice(0, i), ...foods.slice(i + 1)];
        }
      }
};

export {choice, remove};