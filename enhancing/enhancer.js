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
  return { ...item };
}

function repair(item) {
  newItem = {...item};
	return newItem.durability = 100;
}

function get(item) {
  return { ...item };
}

