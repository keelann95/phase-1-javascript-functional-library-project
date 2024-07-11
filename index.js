
// Function to implement myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection; 
  }
// Function to implement myMap
function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      // If collection is an array, map over it and apply the callback to each element
      return collection.map(callback);
    } else if (typeof collection === 'object' && collection !== null) {
      // If collection is an object, create a new array with mapped values
      const result = Object.keys(collection).map(key => callback(collection[key]));
      return result;
    } else {
      // Return empty array for unsupported types (including null)
      return [];
    }
  }
  
  
  
  // Function to implement myReduce
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : (Array.isArray(collection) ? collection[0] : Object.values(collection)[0]);
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      collection.slice(startIndex).forEach(item => {
        accumulator = callback(accumulator, item, collection);
      });
    } else {
      Object.values(collection).slice(startIndex).forEach(item => {
        accumulator = callback(accumulator, item, collection);
      });
    }
  
    return accumulator;
  }
  
// Function to implement myFind
function myFind(collection, predicate) {
    let found;
    for (let item of collection) {
      if (predicate(item)) {
        found = item;
        break;
      }
    }
    return found;
  }
/// Function to implement myFilter
function myFilter(collection, callback) {
    if (!collection || typeof collection !== 'object') {
      return [];
    }
  
    const result = [];
    for (let item of Object.values(collection)) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  
  // Function to implement mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
// Function to implement myFirst
function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return n === 1 ? collection[0] : collection.slice(0, n);
    } else {
      const keys = Object.keys(collection);
      return n === 1 ? collection[keys[0]] : keys.slice(0, n).map(key => collection[key]);
    }
  }
  
  
 // Function to implement myLast
function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
      return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
    } else {
      const keys = Object.keys(collection);
      return n === 1 ? collection[keys[keys.length - 1]] : keys.slice(-n).map(key => collection[key]);
    }
  }
  
  
  // Function to implement myKeys
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  // Function to implement myValues
  function myValues(collection) {
    return Object.values(collection);
  }
  