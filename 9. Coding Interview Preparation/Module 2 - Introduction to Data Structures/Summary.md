# Module 2: Introduction to Data Structures

The second module of this course covers data structures. You'll learn about the implementation and capabilities of data structures between various programming languages and the similar patterns of the overarching architecture. You will learn about basic data structures, such as strings, integers, arrays and objects, before moving on to collection data structures, including lists, stacks and trees, and advanced data structures, such as hash tables, heaps and graphs.

There are two main types of data structures: linear and nonlinear. Linear structures, like arrays and lists, store data in a straight line, one after the other, just like a row of books on a shelf. Nonlinear structures, like trees and graphs, allow for more complex relationships and enable exploration of specific paths, similar to a family tree where one person can connect to many others.

## Learning Objectives

* Review data structures in context with coding interviews
* Introduce new data structures that are commonly found in coding interviews

## Basic Data Structures

### Primities

A primitive data structure is a use of a certain type of data represented directly in code by programming languages. A primitive data structure is built using primitive data types that represent single values and cannot be divided further and each type represents some specific purpose of data representation in any programming language. Primitive data types include items such as booleans, characters, strings, integers and floats.

### Lists

A list is an ordered collection of elements that can contain duplicates. Some common operations that can be performed on lists include:

* Accessing elements: You can access individual elements in a list by specifying their index. The first element in the list has an index of 0, the second element has an index of 1, and so on. This allows you to retrieve or modify specific values in the list.
* Adding elements: You can add new elements to a list using various methods, such as the append() function or the extend() method. This allows you to dynamically increase the size of the list as needed.
* Removing elements: You can remove elements from a list using methods like remove() or pop(). This allows you to delete specific elements from the list or remove them based on their index.
* Modifying elements: Since lists are mutable, you can directly modify the values of individual elements. This means you can change a specific element in the list without having to recreate the entire list.

### Sets

A set is an unordered collection of unique elements. Some common operations that can be performed on sets include:

* Add: Adds an element.
* Remove: Removes an element without error if not found.
* Union: Combines two sets.
* Intersection: Finds common elements between sets.

### Stacks

Stacks operate on a Last-In, First-Out (LIFO) principle, meaning the last element added is the first one to be removed.  Some common operations that can be performed on stacks include:

* Push: Adds an item.
* Pop: Removes the top item.
* IsEmpty: Checks if the stack is empty.
* IsFull: Checks if the stack is full.
* Peek: Views the top item without removing it.

### Queues

Queues function on a First-In, First-Out (FIFO) basis, where the first element added is the first one to be removed. Some common operations that can be performed on queues include:

* Enqueue: Adds an element to the rear of the queue.
* Dequeue: Removes an element from the front of the queue.
* Rear: Views the element at the rear end without removing it.
* Front: Views the element at the front of the queue without removing it.
* IsEmpty: Checks if the queue is empty.

## Advanced Data Structures

### Trees

A tree is an abstract data type (ADT) that is present in many languages. The key fundamental principles of a tree are that it contains a number of nodes; a root node, and a selection of leaf nodes. Leaf nodes are unconnected nodes at the base of a tree. A root node is always at the top; every value descends from this one node. A tree will always be arranged in some form of hierarchy.

There are many types of trees; perhaps the most straightforward and common one is a binary tree. A binary tree has the following properties:

* Every node has a maximum of two child nodes.
* Every node must have a key so that it can be easily identified.
* Values found to be less than the node are placed in the left child node, and values that are greater are placed in the right child node.

A tree requires three methods:

* A lookup method: It is important that the tree can be queried for the existence or absence of information.
* Insertion method: Inserting a node on a tree involves finding out where it should go and placing it on the left side of the nearest higher value.
* Removal method: This method will remove an item from a tree. This operation poses additional challenges when applied to a tree due to the tree's connected nature. Consider that a tree comprises a series of connected nodes. So, removing one carelessly can destroy the connections in a tree. Therefore, when implementing this method, in addition to removing the node, it is necessary to check all the children nodes and ensure that a new connection is made with the node of the next highest value.

### Hash Tables

A hashtable offers very quick lookups for an application. This is achieved by creating a hashing function that will create an alpha-numeric (letters and numbers) output from a given input. This hash is then used to determine where in memory to store something. This means that when you want to know if an element is in the data structure, instead of looking through every item and making a comparison, you only need to apply the hashing function and see if that item has been hashed to memory. A hashtable will not allow nulls to be added as keys or values.

Hashmaps are very similar to hashtables as they also store key-value pairs and use a hash to determine where in memory to find the key. However, a hashmap will allow the use of nulls for keys and values.

### Heaps

Heaps are implemented differently in different languages but are essentially graphs with specific constraints. Heaps sort information in order so that they can quickly return min and max values. Thus, they employ a binary approach, and any implementation must have a maximum of two nodes. Depending on the implementation, a heap will have the largest or smallest value as the root. Finally, each branch of the heap will follow a sequential pattern.

A heap has an O(1) lookup time because it only returns one item. The highest or lowest value depends on whether it is a min or max heap. This means that once this value is popped, the following item is pushed onto the root node of the heap. This also impacts inserting onto a heap. When a new element is added, beginning at the root, it is compared to each node until the correct position is determined. The surrounding elements are then moved to ensure that it is placed in the appropriate position.

### Graphs

Graphs are comprised of nodes and edges. The node is where the data is stored, and the edge is a connection between two nodes. Unlike a tree, nodes do not have to be connected and can exist independently from the other nodes. An edge connects two nodes. An edge can be said to have a weight. This is a value that is stored in the connection that infers some information on the strength of the connection between the two nodes. A graph can be said to be directed, this means that the edges are focused (like a one-way street) or undirected (like a two-way street) and the connection infers information back and forth.

## Additional resources

Here are some additional resources for learning more about basic data structures:

* This [Array basics](https://www.cs.fsu.edu/~myers/c++/notes/arrays.html) article provides an excellent write-up on arrays and how they are initialized and used.

Here are some additional resources for learning more about collection data structures:

* This article about [Binary trees in C](https://data-flair.training/blogs/binary-tree-in-c/) gives a breakdown of how trees are used in C. The focus is on the binary tree and the various types of binary trees and how one would implement them.
* This article about [C# collections](https://www.tutorialspoint.com/csharp/csharp_collections.htm) gives an overview things like arraylist, hashtable, lists and so on implemented in C#.
* This article about [Array-based lists](https://opendatastructures.org/ods-cpp/2_Array_Based_Lists.html) gives more information relating to lists that are backed by arrays.
* This article called [What are static and dynamic data structures](https://www.scaler.com/topics/static-and-dynamic-data-structure/) gives an interesting breakdown and analysis of static and dynamic data structures

Here are some additional resources for learning more about advanced data structures:

* When discussing hashing the probability of collisions was introduced. Learn more about the statistics behind the [birthday paradox](https://www.scientificamerican.com/article/bring-science-home-probability-birthday-paradox/).
* An excellent breakdown of [graphs](https://www.shiksha.com/online-courses/articles/graphs-in-data-structure-types-representation-operations/) with associated terminology;
* Information on [heaps](https://www.cs.auckland.ac.nz/software/AlgAnim/heaps.html) how to add and remove from them.