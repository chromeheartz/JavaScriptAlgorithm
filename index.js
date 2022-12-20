
// Set
const tableSet = new Set();
tableSet.add("key"); // Key와 Value가 동일하게 들어간다.
tableSet.add("key2");
console.log(tableSet.has("key")); // true
console.log(tableSet.has("key3")); // false
tableSet.delete("key2"); 
console.log(tableSet.has("key2")); // false
tableSet.add("key3");
console.log(tableSet.size); // 2
tableSet.clear();
console.log(tableSet.size); // 0