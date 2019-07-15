# The Hash Table

- `Hashing` consists of finding a value in a data structure in the shortest time possible.
- When we use a hash function, we already know which position the value is in, so we can simply retrieve it.

## Separate chaining

- The `separate chaining` technique consists of creating a linked list for each position of the table and storing the elements in it.
- It is the simplest technique to handle collisions; however, it requires additional memory ouside the `HashTable` instance

# Hash Set

- The Hash set consists of a set, but to insert, remove, or get elements, we use a `hashCode` function
- The difference is that instead of adding a key-value pair, we will insert only the value, not the key.
- Hash Set stores only unique values, not repeated ones
