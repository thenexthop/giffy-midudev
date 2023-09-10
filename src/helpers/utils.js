// get item from local storage
export function fetchItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

// set item into local storage
export function setData(key, value){
  JSON.stringify(localStorage.setItem(key, value));
}
