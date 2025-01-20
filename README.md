# MongoDB Aggregation: Handling Empty Arrays in $unwind
This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines.  Specifically, it highlights the issue of unwinding an empty array, which can lead to unexpected results or pipeline failures. The solution shows how to gracefully handle empty arrays to prevent errors.

## Bug Description
The provided code uses `$lookup` to join customer data with their orders. If a customer has no orders, the `customerOrders` array will be empty.  Unwinding an empty array with `$unwind` results in an error or unexpected behavior because the stage expects at least one element to process. 

## Solution
The solution modifies the aggregation pipeline by adding a `$ifNull` stage before `$unwind`. This stage replaces empty arrays with a placeholder object that avoids errors during unwinding.

## How to reproduce the bug:
1. Clone the repo
2. Create a MongoDB collection for customers and orders
3. Execute the aggregation pipeline in `bug.js` to observe the error
4. Execute the aggregation pipeline in `bugSolution.js` to see the corrected behavior

