import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: [
        "bread",
        "meat",
        "cheese",
        "topping",
        "sauce",
        "drink",
        "side",
        "extra",
      ],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    image: {
      type: String,
      default: "",
      trim: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ingredient =
  mongoose.models.Ingredient ||
  mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;