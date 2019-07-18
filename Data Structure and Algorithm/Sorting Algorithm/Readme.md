# Sorting Algorithm

## Bubble sort

- The `bubble sort` algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. It has this name because the values tend to move up into the correct order, like bubbles rising to the surface
- O(n^2)

## Selection sort

- The `selection sort` algorithm is an in-place comparison sort algorithm. The general idea of the selection sort is to find the minimum value in the data structure place it in the first position, then find the second minimum value, place it in the second position, and so on.
- O(n^2)

## Insertion sort

- The `insertion sort` algorithm builds the final sorted array one value at a time. It assumes that the first element is already sorted. Then, a comparison with the second value is performed - should the second value stay in its place or be inserted before the first value? The first two values will get sorted, then the comparison will take place with the third value (that is, should it be inserted in the first, second, or third position?), and so on.
- The algorithm has a better performance than the selection and bubble sort algorithms when sorting small array

## Merge sort

- The merge sort is a divide-and-conquer algorith. The idea behind it is to divide the original array into saller arrays until each small array has only one position, and then merge these smaller arrays into bigger ones until we have a single big array at the end that is sorted
- O(n log(n))
