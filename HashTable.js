
// Hash Table has a lot of dther names.
// maps/ hash maps/ unordered maps/ dictionary/ object  end so on

// It is consist of key and value, so every single key could be mappinig with specific value.

// Also, there are some internal components. Hash codes, Hash function and Array. 

// Internally, Hash table has to be uesd Array. 

// Firstly, we can generate Hash code with key and Hash function, and the Hash code can be index of Array.
// which means the hash codes are integer, and they are designated fixed array space.

// So… 	it is possible to access directly with hashcode, and that's why the hash map's searching speed is really fast. so,,, the time complexity is O(1) in the most cases. 

// However, there were some exceptions. The reason is because of colligion. 
// Even if we have different key values, the same hash code can be created with them. Or, even if hash codes are different, it is possible to be allocated in the same index room.

// So, in worst case, the time complexity could be O(n)