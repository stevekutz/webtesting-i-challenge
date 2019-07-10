module.exports = {  
  succeed,
  fail,
  repair,
  get,
}

function succeed(item) {
  newItem = {...item};
  newItem.enhancement === 20 ? 20 : ++newItem.enhancement;
  return newItem.enhancement;
}

function fail(item) {
  newItem = {...item};
    if(newItem.enhancement < 15){
      newItem.durability -= 5;
      if(newItem.durability < 0) {newItem.durability = 0} 
    } else if(newItem.enhancement >= 15) {
      newItem.durability -= 10;
      if(newItem.durability < 0) {newItem.durability = 0} 
      if(newItem.enhancement > 16 && newItem.enhancement <= 20) {newItem.enhancement--}
    }

  return newItem;  

}

function repair(item) {
  newItem = {...item};
	return newItem.durability = 100;
}

function get(item) {
  newItem = {...item};
  if(newItem.enhancement > 0 && newItem.enhancement < 20) {
    newItem.name  = `[+${newItem.enhancement}] ${newItem.name}`;
  }

  return newItem;
}

