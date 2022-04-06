const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    make: {
      type: String,
      required: [true, "Please add make"],
    },
    model: {
      type: String,
      required: [true, "Please add model"],
    },

    year: {
      type: Number,
      required: [true, "Please use numbers only"],
    },

    type: {
      type: String,
      required: [true, "Please add type, truck, car.."],
    },
    listprice: {
      type: Number,
      required: [true, "Please use numbers only"],
    },
    color: {
      type: String,
      required: true,
    },
    drivetype: {
      type: String,
      required: false,
    },
    engine: {
      type: String,
      required: false,
    },
    transmission: {
      type: String,
      required: false,
    },
    discription: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default:
        "https://acttochange.org/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg",
    },
    mileage: {
      type: Number,
      required: [true, "Please add mileage"],
    },
    // Comfort Features
    ac: {
      type: Boolean,
    },
    leatherseats: {
      type: Boolean,
    },
    sunroof: {
      type: Boolean,
    },
    // Tech Features
    bluetooth: {
      type: Boolean,
    },
    cruisecontrol: {
      type: Boolean,
    },
    // Entertainment
    satradio: {
      type: Boolean,
    },
    auxport: {
      type: Boolean,
    },
    amfm: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
