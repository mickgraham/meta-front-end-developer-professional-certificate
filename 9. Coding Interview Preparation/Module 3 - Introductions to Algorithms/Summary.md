# Module 3: Introduction to Algorithms

In this module, you'll learn about algorithms. You'll cover common approaches to sorting and searching with algorithms. You’ll also explore the time and space complexity aspects of both sorting and searching. You will then learn more about working with algorithms, demonstrating how to visualize and problem solve with algorithmic approaches, such as divide and conquer, greedy algorithms and dynamic programming.

## Learning Objectives

* Introduce the concept and usage of algorithms
* Demonstrate how to visualize an algorithm
* Combine new and previously learned coding patterns to solve problems

## Sorting Algorithms

### Selection sort

Selection sort is a sorting algorithm that works from a very simple principle. Take an array of items and iterate from left to right. Starting with the first place on the index, iterate over the entire array and swap this value with the lowest value found to the right of this item. Repeat until the entire array is sorted.

* Worst case: O(n^2).
* Average case: O(n^2).
* Best case: O(n^2).
* Space complexity: O(1).

```
for (i = 0; i < n - 1; i++) {
    int min_index = i;
    for (j = i + 1; j < n; j++) {
        if (List[j] < List[min_index]) {
            min_index = j;
        }
    }
    // Swap the elements
    swap(List[i], List[min_index]);
}
```

### Quicksort

Quicksort is a sorting approach that uses a divide-and-conquer methodology. Given an array of items, a place is determined on the array on which to split the array and this is called the pivot point. All values greater than this point go to the right and all values less than this point go to the left. In this step, you have two arrays. The same process is applied to these arrays until there are no elements left to sort.

* Worst case: O(n^2).
* Average case: O(n log n).
* Best case: O(n log n).
* Space complexity: O(n).

```
void QuickSort(int List[], int low, int high) {
    if (low < high) {
        int pivot = Partition(List, low, high); // Partition the list and get pivot
        QuickSort(List, low, pivot - 1);       // Recursively sort the left subarray
        QuickSort(List, pivot + 1, high);      // Recursively sort the right subarray
    }
}

// Partition function
int Partition(int List[], int low, int high) {
    int pivot = List[high]; // Choose the last element as the pivot
    int i = low - 1;        // Index for the smaller element

    for (int j = low; j <= high - 1; j++) {
        if (List[j] <= pivot) {
            i++;
            swap(List[i], List[j]); // Swap elements smaller than pivot to the left
        }
    }

    swap(List[i + 1], List[high]); // Place pivot in the correct position
    return (i + 1);                // Return the partition index
}

// Swap function (you can implement this as a utility function)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
```

## Searching Algorithms

### Linear search

A linear search is the most direct way of retrieving an item. It means that the search starts at the first item and iterates until either the target item is found or there are no more items left in the array to check.

Given a list of numbers, start at index location 0 and compare each item with a target variable. Return when the index location has been determined or the entire list has been checked and there is no instance of the target element.

* Worst case: O(n).
  * The item is absent from the list. To determine this, every possible location in the list size n has to be searched.
* Average case: O(n).
  * The element is found in the middle.
* Best case: O(1).
  * The item is found at the starting index and no further checks are required
* Space complexity: O(n).
  * No additional space is required to perform the search. So, the space required will only be as large as the items that have to be stored in the list.

### Binary search

A binary search is performed by first identifying the mid-point on a sorted list, comparing the target element to it and discarding the half that is less than the target element. This halving at the mid-point is repeated until the target element is found or there is no more list to half.

To conduct a binary search, the list must first be sorted.

* Worst case: O(log n).
  * The item is absent from the list. Due to the nature of the approach, many items are removed with the use of the logical operators greater than and less than. This means that only n/2 is checked first, then n/4 and n/8.
* Average case: O(Log n).
  * The element is found after several iterations. Again due to the search mechanism, each subsequent call reduces the state space. So, it can be determined that after a medium number of searches.
* Best case: O(1).
  * The item is found at the starting index and no further checks are required.
* Space complexity: O(1).
  * No additional space is required to perform the search. The algorithm only uses a few variables (like the target and an index counter).

## Problem Solving Algorithms

### Divide and Conquer

Sorts data by breaking it into smaller subproblems, solving them, and combining the results.
Example: Merge Sort, which divides an array into two halves, sorts each half, and then merges them back together.

### Recursion

A function that calls itself to solve a smaller version of the same problem.
Example: Calculating a factorial, where factorial(n) is defined as n * factorial(n-1), with a base case of factorial(1) = 1.

### Dynamic Programming

Solves problems by breaking them into subproblems, solving each one, and storing the results to avoid re-computation, which is especially useful for overlapping subproblems.
Example: Calculating the Fibonacci sequence, where fib(n) can be found by summing fib(n-1) and fib(n-2), but the results of fib(n-1) and fib(n-2) are stored using memoisation to be reused.

### Greedy

Makes the locally optimal choice at each step, hoping to find a globally optimal solution.
Example: The Fractional Knapsack problem, where you greedily add items with the highest value-to-weight ratio first.

## Additional resources

Here are some additional resources for learning more about sorting and searching algorithms:

* Here is an article on [Time and space complexity of selection sort](https://iq.opengenus.org/time-complexity-of-selection-sort/). It includes an implementation of selection sort and how one can calculate the complexity involved.
* Here is an article about [Quick-sort](https://www.commonlounge.com/quick-sort-video-tutorial-pseudo-code-and-in-place-sorting-608c5c7284b148eb9d550e6166303142/) with a video tutorial and pseudocode. It provides a detailed analysis of various sorting algorithms, comparisons and further links to video explanations.

Here are some additional resources for learning more about working with algorithms:

* This article provides a comprehensive breakdown of various [algorithms](https://networkx.org/documentation/stable/reference/algorithms/index.html) that are graph specific. In this article, you will gain both an understanding of the data structure as well as insights into its implementation.
* This article discusses [space complexity](https://algodaily.com/lessons/understanding-space-complexity). In it, you will find a comparison between implementing iterative solutions versus recursive ones.
* This article explains what [recursion](https://algodaily.com/lessons/understanding-space-complexity) is and which datatypes are most congenial for its implementation.
