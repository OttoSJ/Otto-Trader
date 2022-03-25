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
        "https://www.google.com/search?q=no+image+available&rlz=1C5CHFA_enUS970US970&sxsrf=APq-WBviQWBhmmLLg26cmU07b0nz8mf7mw:1647382883664&tbm=isch&source=iu&ictx=1&vet=1&fir=-QpL1I7u3zbiBM%252C029W-ajBtZqZzM%252C_%253BadRgxP47ko1kpM%252Cr1K2HZMoU-bYgM%252C_%253BSRj5u86yuQnGGM%252C029W-ajBtZqZzM%252C_%253BKDNppyUHocvEWM%252CuBe8mm_82ZOz4M%252C_%253BASbBglzjMAGtRM%252C_cSIY8OV92hAWM%252C_%253BRs7eoVJHmzVQHM%252CxgQlOUW0EqO1KM%252C_%253BZ7xJTlohWIItUM%252CLDnLiJ-oRy4-NM%252C_%253BvnBM_ZoykEz58M%252COJv6W7t27m-W2M%252C_%253B2I8oQir7cw-oOM%252CToFiWIHoLEKAcM%252C_%253Bre6iq1FtjQ_SJM%252C4njz4wtPh92cCM%252C_%253Bi2jbX8LdidMaOM%252CWYZyQrTrQ8Xd6M%252C_%253ByRcteAenUcezDM%252CxgQlOUW0EqO1KM%252C_%253BNS2QXE2dDTrk1M%252CBW5rpMbuEZ24uM%252C_%253BXMd8cwh7O1YSmM%252CuBe8mm_82ZOz4M%252C_%253BbPOvgzC29_wFOM%252CZ1stY4SIhVlK6M%252C_%253Bu_Dyou4ZSEfuDM%252Czg-xqFiWAvckxM%252C_%253BA19x2_z1TnPBAM%252Cii-bRxEhHtUfnM%252C_&usg=AI4_-kQQ7DenGEg8Di60BR43UaYHdYwA4w&sa=X&ved=2ahUKEwjxv9u8k8n2AhWNg-AKHU3lBL4Q9QF6BAgmEAE#imgrc=ASbBglzjMAGtRM",
    },
    mileage: {
      type: Number,
      required: [true, "Please add mileage"],
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
