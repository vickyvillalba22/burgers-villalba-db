import mongoose from "mongoose";

// Customer Subschema
const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
  },
  notes: {
    type: String,
    default: "",
    trim: true,
  },
});

// Order Item Subschema (snapshot of product)
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: "",
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  customizations: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Main Order Schema
const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ["Active", "Closed", "Shipped", "Canceled"],
      default: "Active",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    customer: {
      type: customerSchema,
      required: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: [(val) => val.length > 0, "Order must have at least one item"],
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Check if model exists to avoid recompiling in Next.js
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
