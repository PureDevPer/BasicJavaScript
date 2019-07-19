# Searching Algorithm

## Sequential search / Linear search

- It consists of comparing each element of the data structure with the one we are looking for.
- It is also the most inefficient one

## Binary search

- The `binary search` algorithm works similar to the number guessing game
- To make the algorithm work, the data structure needs to be sorted first.

1. A `value` is selected in the middle of the array
2. If the `value` is one we are looking for, we are done
3. If the `value` we are looking for is less than the selected one, then we will go back to step 1 using the left subarray (lower)
4. If the `value` we are looking for is bigger than the selected one, then we will go back to step 1 using the right subarray (higher)

## Interpolation search

- The `interpolation search` algorithm is an improved variation of the binary search
- While the binary search always checks the value in the `mid` position, the interpolation search migh check different places of the array depending on the value that is being searched
- To make the algorithm work, the data structure needs to be sorted first.

1. A `value` is selected using the `position` formula
2. If the `value` is the one we are looking for, we are done
3. If the `value` we are looking for is lesser than the selected one, then we will go back to step 1 using the left subarray (lower)
4. If the `value` we are looking for is bigger than the selected one, then we will go back to step 1 using the right subarray (higher)
