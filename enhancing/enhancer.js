module.exports = {  
  succeed,
  fail,
  repair,
  get,
}

function succeed(item) {
  return { ...item };
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

