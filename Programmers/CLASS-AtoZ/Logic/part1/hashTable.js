
// **** JavaScript에서의 사용법 ****

// array
const tableArr = [];
tableArr["key"] = 100;
tableArr["key2"] = "Hello";
console.log(tableArr["key"]); // 100
tableArr["key"] = 349;
console.log(tableArr["key"]); // 349
delete tableArr["key"];
console.log(tableArr["key"]) // undefined

// object
const tableObj = {};
tableObj["key"] = 100;
tableObj["key2"] = "Hello";
console.log(tableObj["key"]); // 100
tableObj["key"] = 349;
console.log(tableObj["key"]); // 349
delete tableObj["key"];
console.log(tableObj["key"]); // undefined

// Map
const tableMap = new Map();
tableMap.set("key", 100);
tableMap.set("key2", "Hello");
console.log(tableMap["key"]); // undefined
console.log(tableMap.get("key")); // 100
const objectMap = { a: 1 };
tableMap.set(objectMap, "A1"); // Map은 Object도 Key로 쓸 수 있다.
console.log(tableMap.get(objectMap)); // A1
tableMap.delete(objectMap);
console.log(tableMap.get(objectMap)); // undefined
console.log(tableMap.keys()); // { 'key', 'key2' }
console.log(tableMap.values()); // { 100, 'Hello' }
tableMap.clear();
console.log(tableMap.values()); // { }

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