# Sorting Algorithm

## Bubble sort

- The `bubble sort` algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. It has this name because the values tend to move up into the correct order, like bubbles rising to the surface
- O(n<sup>2</sup>)

## Selection sort

- The `selection sort` algorithm is an in-place comparison sort algorithm. The general idea of the selection sort is to find the minimum value in the data structure place it in the first position, then find the second minimum value, place it in the second position, and so on.
- O(n<sup>2</sup>)
- https://www.geeksforgeeks.org/selection-sort/

## Insertion sort

- The `insertion sort` algorithm builds the final sorted array one value at a time. It assumes that the first element is already sorted. Then, a comparison with the second value is performed - should the second value stay in its place or be inserted before the first value? The first two values will get sorted, then the comparison will take place with the third value (that is, should it be inserted in the first, second, or third position?), and so on.
- The algorithm has a better performance than the selection and bubble sort algorithms when sorting small array
- https://www.geeksforgeeks.org/insertion-sort/

## Merge sort

- The merge sort is a divide-and-conquer algorithm. The idea behind it is to divide the original array into saller arrays until each small array has only one position, and then merge these smaller arrays into bigger ones until we have a single big array at the end that is sorted
- O(n log(n))
- https://www.geeksforgeeks.org/merge-sort/

## Quick sort

- It uses the divide-and-conquer approach, dividing the original array into smaller ones (but without splitting them as the merge sort does) to do the sorting
- O(n log(n)), it usually performs better than other O(n log(n)) sorting algorithms.

1. First, we need to select a value from the array called **pivot**, which will be the value at the middle of the array
2. We will create two pointers (references) - the left-hand side one will point to the first value of the array, and the right-hand side one will point to the last value of the array. We will move the left pointer until we find a value that is bigger than the pivot, and we will also move the right pointer until we find a vlue that is less than the pivot and swap them. We will repeat this process until the left-hand side pointer passes the right-hand side pointer. This process helps to have values lower than the pivot reference before the pivot and values greater than the pivot after the pivot reference. This is called the **partition** operation.
3. Next, the algorithm repeats the previous two steps for smaller arrays (subarrays with smaller values and then subarrays with greater values) until the arrays are completely sorted

## Counting sort

- Distribution sort algorithms use auxiliary data structures (known as buckets) that are organized and then merged, resulting in the sorted array
- The `counting sort` uses a temporary array that will store how many times each element appears in the original array
- After all the elements are counted, the temporary array is sorted and it can be iterated to construct the resultant sorted array
- O(n + k), where k is the size of the temporary counting array. It requires more memory for the temporary array

## Bucket sort

- The `bucket sort` algorithm (also known as bin sort) is also distributed sorting algorithm that separates the elements into different buckets (smaller arrays), and then uses a simpler sorting algorithm, such as the insertion sort (a good algorithm for small arrays), to sort each bucket.
- It then merges all the buckets into the resultant sorted array

## Radix sort

- The `radix sort` algorithm is a distribution sort algorithm that distributes the integers into buckets based on a numbers significant digit or value
- The radix is based on the number system of the values of the array
