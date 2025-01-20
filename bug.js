```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([{
  $match: { status: "active" }
}, {
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "customerID",
    as: "customerOrders"
  }
}, {
  $unwind: "$customerOrders" // Potential error if customerOrders is empty array
}, {
  $group: {
    _id: "$customerID",
    totalSpent: { $sum: "$customerOrders.amount" }
  }
}])
```