```javascript
// Correct aggregation pipeline handling empty arrays
aggregate([
  {
    $match: { status: "active" }
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "customerID",
      as: "customerOrders"
    }
  },
  {
    $addFields: {
      customerOrders: { $ifNull: ["$customerOrders", []] }
    }
  },
  {
    $unwind: { path: "$customerOrders", preserveNullAndEmptyArrays: true }
  },
  {
    $group: {
      _id: "$customerID",
      totalSpent: { $sum: { $ifNull: ["$customerOrders.amount", 0] } }
    }
  }
])
```