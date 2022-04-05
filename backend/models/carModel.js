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
      max: 12,
    },
    model: {
      type: String,
      required: [true, "Please add model"],
      max: 12,
    },

    year: {
      type: Number,
      required: [true, "Please use numbers only"],
      max: 4,
    },

    type: {
      type: String,
      required: [true, "Please add type, truck, car.."],
      max: 5,
    },
    listprice: {
      type: Number,
      required: [true, "Please use numbers only"],
      max: 6,
    },
    color: {
      type: String,
      required: true,
      max: 12,
    },
    drivetype: {
      type: String,
      required: false,
      max: 10,
    },
    engine: {
      type: String,
      required: false,
      max: 6,
    },
    transmission: {
      type: String,
      required: false,
      max: 10,
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
      max: 6,
    },
    //   Comfort Features
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
