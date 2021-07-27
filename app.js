'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
var async = require("async");
const app = express();

// require('./routes')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


mongoose.connect("mongodb://localhost:27017/FoodAppDB", ({ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    active: {
        type: Boolean,
        default: false
    },
    activeToken: String,
    activeExpires: String,
    forgotToken: String,
    forgotExpires: String,
    googleId: String,
    facebookId: String,
    createdAt: String,
    profileURL: String,
    purchaseList: Array
});

const User = mongoose.model("User", userSchema);

// const newuser1 = new User({
//     _id: "5f268cdd69353644b88a77a9",
//     name: "Hemant",
//     email: "Hemant@gmail.com",
//     phone: "24441414",
//     password: "hemant@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http;//hemant.jpg"
// });

// newuser1.save();

// const newuser2 = new User({
//     name: "Mohit",
//     email: "mohit@gmail.com",
//     phone: "353534534",
//     password: "mohit@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://mohit.jpg"
// });

// newuser2.save();

// const newuser3 = new User({
//     name: "Osho",
//     email: "osho@gmail.com",
//     phone: "24441445345",
//     password: "osho@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://osho.jpg"
// });

// newuser3.save();

// const newuser4 = new User({
//     name: "Ritik",
//     email: "ritik@gmail.com",
//     phone: "2444234234",
//     password: "ritik@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://ritik.jpg"
// });

// newuser4.save();


// const newuser5 = new User({
//     name: "Harsh",
//     email: "harsh@gmail.com",
//     phone: "2342441414",
//     password: "harsh@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://harsh.jpg"
// });

// newuser5.save();


// const newuser6 = new User({
//     name: "Animesh",
//     email: "animesh@gmail.com",
//     phone: "678681414",
//     password: "animesh@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://animesh.jpg"
// });

// newuser6.save();


// const newuser11 = new User({
//     name: "Karan",
//     email: "karan@gmail.com",
//     phone: "345456414",
//     password: "karan@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://karan.jpg"
// });

// newuser11.save();


// const newuser7 = new User({
//     name: "Shubham",
//     email: "shubham@gmail.com",
//     phone: "2444145444",
//     password: "shubham@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://shubham.jpg"
// });

// newuser7.save();


// const newuser8 = new User({
//     name: "Mihir",
//     email: "mihir@gmail.com",
//     phone: "2444423423",
//     password: "mihir@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://mihir.jpg"
// });

// newuser8.save();


// const newuser9 = new User({
//     name: "Ishvit",
//     email: "ishvit@123",
//     phone: "66465641414",
//     password: "ishvit@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://ishvit.jpg"
// });

// newuser9.save();


// const newuser10 = new User({
//     name: "Shashank",
//     email: "shashank@123",
//     phone: "244423424",
//     password: "shashank@123",
//     active: true,
//     createdAt: Date.now(),
//     profileURL: "http://shashank.jpg"
// });

// newuser10.save();


// const ownerSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: String,
//     altPhone: String,
//     password: String,
//     profileURL: String,
//     address: String,
//     mobilleOP: Number,
//     createdAt: String,
//     hotelId: String,
// });

// const Owner = new mongoose.model("Owner", ownerSchema);

// const newowner1 = new Owner({
//     _id: "5f268cdd69353644b88a77b4",
//     name: "kamal",
//     email: "kamal@gmail.com",
//     phone: "356363633",
//     altPhone: "54455454",
//     password: "kamal@123",
//     profileURL: "kamal.jpg",
//     address: "Near Birla Sarvajanik hospital",
//     mobileOTP: 1234,
//     createdAt: Date.now(),
//     hotelId: "5f268cdd69353644b88a77da"
// });

// newowner1.save();

// const newowner2 = new Owner({
//     _id: "5f268cdd69353644b88a77b5",
//     name: "Sharma",
//     email: "sharma@gmail.com",
//     phone: "356362342",
//     altPhone: "54455454",
//     password: "sharma@123",
//     profileURL: "sharma.jpg",
//     address: "Near halipad pilani",
//     mobileOTP: 6565,
//     createdAt: Date.now(),
//     hotelId: "5f268cdd69353644b88a77db"
// });

// newowner2.save();

const foodSchema = new mongoose.Schema({
    hotelId: String,
    profileURL: String,
    name: String,
    price: String,
    tag: Array,
    Type: String,
    Total_orders: Number
});

const FoodItem = mongoose.model("FoodItem", foodSchema);

// const item1 = new FoodItem({
//     _id: "5f268cdd69353644b88a77bd",
//     hotelId: "",
//     name: "Maggi Masala",
//     price: "30",
//     tag: ["Fast-Food", "Noodles"],
//     Type: "veg",
//     profileURL: "maggimasala.jpg",
//     Total_orders: 500
// });

// item1.save();

// const item2 = new FoodItem({
//     _id: "5f268cdd69353644b88a77b9",
//     hotelId: "",
//     name: "Egg-Maggi-Masala",
//     price: "40",
//     tag: ["Fast-Food", "Noodles"],
//     Type: "non-veg",
//     profileURL: "eggmaggimasala.jpg",
//     Total_orders: 300
// });

// item2.save();

// const item3 = new FoodItem({
//     _id: "5f268cdd69353644b88a77bc",
//     hotelId: "",
//     name: "onion-Pasta",
//     price: "40",
//     tag: ["Fast-Food", "pasta"],
//     Type: "veg",
//     profileURL: "pasta.jpg",
//     Total_orders: 448
// });

// item3.save();

// const item4 = new FoodItem({
//     _id: "5f268cdd69353644b88a77bd",
//     hotelId: "",
//     name: "chicken-pasta",
//     price: "50",
//     tag: ["Fast-Food", "pasta"],
//     Type: "non-veg",
//     profileURL: "chickenpasta.jpg",
//     Total_orders: 228
// });

// item4.save();

// const item5 = new FoodItem({
//     _id: "5f268cdd69353644b88a77b6",
//     hotelId: "",
//     name: "Dum Aloo",
//     price: "180",
//     tag: ["main-course", "vegetable"],
//     Type: "veg",
//     profileURL: "dumaloo.jpg",
//     Total_orders: 445
// });

// item5.save();

// const item6 = new FoodItem({
//     _id: "5f268cdd69353644b88a77b7",
//     hotelId: "",
//     name: "Bhindi Masala",
//     price: "200",
//     tag: ["main-course", "vegetable"],
//     Type: "veg",
//     profileURL: "bhindimasala.jpg",
//     Total_orders: 600
// });

// item6.save();

// const item7 = new FoodItem({
//     _id: "5f268cdd69353644b88a77b8",
//     hotelId: "",
//     name: "chana Masala",
//     price: "180",
//     tag: ["main-course", "vegetable"],
//     Type: "veg",
//     profileURL: "chanamasala.jpg",
//     Total_orders: 534
// });

// item7.save();


// const item8 = new FoodItem({
//     _id: "5f268cdd69353644b88a77bb",
//     hotelId: "",
//     name: "Navratan Korma",
//     price: "200",
//     tag: ["main-course", "vegetable"],
//     Type: "veg",
//     profileURL: "navratankorma.jpg",
//     Total_orders: 234
// });

// item8.save();

// const item9 = new FoodItem({
//     _id: "5f268cdd69353644b88a77be",
//     hotelId: "",
//     name: "Tomato Soup",
//     price: "80",
//     tag: ["soup"],
//     Type: "veg",
//     profileURL: "tomatosoup.jpg",
//     Total_orders: 464
// });

// item9.save();

// const item10 = new FoodItem({
//     _id: "5f268cdd69353644b88a77bf",
//     hotelId: "",
//     name: "veg Corn Soup",
//     price: "80",
//     tag: ["soup"],
//     Type: "veg",
//     profileURL: "cornsoup.jpg",
//     Total_orders: 345
// });

// item10.save();

// const item11 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c0",
//     hotelId: "",
//     name: "chicken Corn soup",
//     price: "90",
//     tag: ["soup"],
//     Type: "non-veg",
//     profileURL: "chickencornsoup.jpg",
//     Total_orders: 343
// });

// item11.save();

// const item12 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c1",
//     hotelId: "",
//     name: "okaiya soup",
//     price: "90",
//     tag: ["soup"],
//     Type: "non-veg",
//     profileURL: "okaiyasoup.jpg",
//     Total_orders: 122
// });

// item12.save();


// const item13 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c2",
//     hotelId: "",
//     name: "Sahi Paneer",
//     price: "180",
//     tag: ["main-course", "paneer"],
//     Type: "veg",
//     profileURL: "sahipaneer.jpg",
//     Total_orders: 545
// });

// item13.save();

// const item14 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c3",
//     hotelId: "",
//     name: "mater panner",
//     price: "180",
//     tag: ["main-course", "paneer"],
//     Type: "veg",
//     profileURL: "materpaneer.jpg",
//     Total_orders: 453
// });

// item14.save();

// const item15 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c4",
//     hotelId: "",
//     name: "chilli paneer",
//     price: "200",
//     tag: ["main-course", "paneer"],
//     Type: "veg",
//     profileURL: "chillipaneer.jpg",
//     Total_orders: 500
// });

// item15.save();

// const item16 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c5",
//     hotelId: "",
//     name: "Kadhai paneer",
//     price: "220",
//     tag: ["main-course", "paneer"],
//     Type: "veg",
//     profileURL: "kadhaipaneer.jpg",
//     Total_orders: 500
// });

// item16.save();

// const item17 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c6",
//     hotelId: "",
//     name: "jeera rice",
//     price: "100",
//     tag: ["main-course", "rice"],
//     Type: "veg",
//     profileURL: "jeerarice.jpg",
//     Total_orders: 466
// });

// item17.save();


// const item18 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c7",
//     hotelId: "",
//     name: "vegpulab",
//     price: "120",
//     tag: ["main-course", "rice"],
//     Type: "veg",
//     profileURL: "vegpulab.jpg",
//     Total_orders: 500
// });

// item18.save();


// const item19 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c8",
//     hotelId: "",
//     name: "Dum biryani",
//     price: "150",
//     tag: ["main-course", "rice"],
//     Type: "veg",
//     profileURL: "dumbiryani.jpg",
//     Total_orders: 456
// });

// item19.save();


// const item20 = new FoodItem({
//     _id: "5f268cdd69353644b88a77c9",
//     hotelId: "",
//     name: "sezwaan Rice",
//     price: "200",
//     tag: ["main-course", "rice"],
//     Type: "veg",
//     profileURL: "sezwaanrice.jpg",
//     Total_orders: 345
// });

// item20.save();


// const item21 = new FoodItem({
//     _id: "5f268cdd69353644b88a77ca",
//     hotelId: "",
//     name: "Tawa Roti",
//     price: "12",
//     tag: ["maincourse", "roti", "chapati"],
//     Type: "veg",
//     profileURL: "tawaroti.jpg",
//     Total_orders: 1000
// });

// item21.save();


// const item22 = new FoodItem({
//     _id: "5f268cdd69353644b88a77cb",
//     hotelId: "",
//     name: "Roomali roti",
//     price: "8",
//     tag: ["maincourse", "roti", "chapati"],
//     Type: "veg",
//     profileURL: "roomaliroti.jpg",
//     Total_orders: 1200
// });

// item22.save();

// const item23 = new FoodItem({
//     _id: "5f268cdd69353644b88a77cc",
//     hotelId: "",
//     name: "Tandoori Roti",
//     price: "7",
//     tag: ["maincourse", "roti", "chapati", "tandoor"],
//     Type: "veg",
//     profileURL: "tandooriroti.jpg",
//     Total_orders: 2312
// });

// item23.save();

// const item24 = new FoodItem({
//     _id: "5f268cdd69353644b88a77cd",
//     hotelId: "",
//     name: "Butter Naan",
//     price: "14",
//     tag: ["maincourse", "roti", "chapati"],
//     Type: "veg",
//     profileURL: "butternaan.jpg",
//     Total_orders: 1222
// });

// item24.save();

// const item25 = new FoodItem({
//     _id: "5f268cdd69353644b88a77ce",
//     hotelId: "",
//     name: "Indian green salad",
//     price: "30",
//     tag: ["starters", "salad"],
//     Type: "veg",
//     profileURL: "indiansalad.jpg",
//     Total_orders: 123
// });

// item25.save();

// const item26 = new FoodItem({
//     _id: "5f268cdd69353644b88a77cf",
//     hotelId: "",
//     name: "onion cucumber salad",
//     price: "30",
//     tag: ["starters", "salad"],
//     Type: "veg",
//     profileURL: "cucumbersalad.jpg",
//     Total_orders: 533
// });

// item26.save();


// const item27 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d0",
//     hotelId: "",
//     name: "Lamb Keema Salad",
//     price: "40",
//     tag: ["starters", "salad"],
//     Type: "non-veg",
//     profileURL: "lambkeema.jpg",
//     Total_orders: 343
// });

// item27.save();

// const item28 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d1",
//     hotelId: "",
//     name: "chicken Tikka salad",
//     price: "40",
//     tag: ["starters", "salad"],
//     Type: "non-veg",
//     profileURL: "chickentikka.jpg",
//     Total_orders: 342
// });

// item28.save();

// const item29 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d2",
//     hotelId: "",
//     name: "chocolate caramel cake",
//     price: "41",
//     tag: ["desert", "cake"],
//     Type: "veg",
//     profileURL: "caraemelcake.jpg",
//     Total_orders: 345
// });

// item29.save();


// const item30 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d3",
//     hotelId: "",
//     name: "straoberrycake",
//     price: "32",
//     tag: ["desert", "cake"],
//     Type: "veg",
//     profileURL: "strawcake.jpg",
//     Total_orders: 566
// });

// item30.save();


// const item31 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d4",
//     hotelId: "",
//     name: "chocolate cake",
//     price: "35",
//     tag: ["desert", "cake"],
//     Type: "veg",
//     profileURL: "chocolatecake.jpg",
//     Total_orders: 776
// });

// item31.save();


// const item32 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d5",
//     hotelId: "",
//     name: "black bottom cup-cakes",
//     price: "46",
//     tag: ["desert", "cake"],
//     Type: "veg",
//     profileURL: "cupcakes.jpg",
//     Total_orders: 345
// });

// item32.save();

// const item33 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d6",
//     hotelId: "",
//     name: "cappuccino",
//     price: "40",
//     tag: ["Drink"],
//     Type: "veg",
//     profileURL: "cappuccino.jpg",
//     Total_orders: 555
// });

// item33.save();

// const item34 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d7",
//     hotelId: "",
//     name: "Assam Black",
//     price: "30",
//     tag: ["Drink"],
//     Type: "veg",
//     profileURL: "assamblack.jpg",
//     Total_orders: 500
// });

// item34.save();


// const item35 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d8",
//     hotelId: "",
//     name: "chocolate tea",
//     price: "30",
//     tag: ["Drink", "tea"],
//     Type: "veg",
//     profileURL: "choclatetea.jpg",
//     Total_orders: 500
// });

// item35.save();

// const item36 = new FoodItem({
//     _id: "5f268cdd69353644b88a77d9",
//     hotelId: "",
//     name: "bluemoon light",
//     price: "30",
//     tag: ["Drink"],
//     Type: "veg",
//     profileURL: "bluemonnlight.jpg",
//     Total_orders: 500
// });

// item36.save();



const hotelSchema = new mongoose.Schema({
    name: String,
    description: String,
    phone: String,
    address: String,
    profileURL: String,
    timing: String,
    menuCardPhoto: String,
    status: String,
    menu: Array,
    ownerId: String,
    Type: String,
    Tags: Array,
    category: Object,
    Total_orders: Number,
    orderList: Array
});

const Hotel = new mongoose.model("Hotel", hotelSchema);

// const newhotel1 = new Hotel({
//     _id: "5f268cdd69353644b88a77da",
//     name: "The Kamals",
//     description: "My hotel is one of the best hotel.Have a look on menu to know more",
//     phone: "2344344",
//     address: "cnot place",
//     profileURL: "kamal.jpg",
//     timing: "9 AM to 12 PM",
//     menuCardPhoto: "kamalmenu.jpg",
//     status: "open",
//     menu: ["5f268cdd69353644b88a77ba", "5f268cdd69353644b88a77bc", "5f268cdd69353644b88a77b6", "5f268cdd69353644b88a77b8", "5f268cdd69353644b88a77be", "5f268cdd69353644b88a77c0", "5f268cdd69353644b88a77c2", "5f268cdd69353644b88a77c4", "5f268cdd69353644b88a77c8", "5f268cdd69353644b88a77ca", "5f268cdd69353644b88a77cc", "5f268cdd69353644b88a77ce", "5f268cdd69353644b88a77d0", "5f268cdd69353644b88a77d2", "5f268cdd69353644b88a77d4", "5f268cdd69353644b88a77d6", "5f268cdd69353644b88a77d8", "5f268cdd69353644b88a77db"],
//     ownerId: "5f268cdd69353644b88a77b4",
//     Tags: ["indian", "chinese"],
//     Type: "veg",
//     category: { bestSeller: [], maincourse: [], soup: [] },
//     Total_orders: 4424
// });

// newhotel1.save();

// const newhotel2 = new Hotel({
//     _id: "5f268cdd69353644b88a77db",
//     name: "The Sharmas",
//     description: "My hotel si one of the old hotel standing since the establishment of the BITS",
//     phone: "2344344",
//     address: "cnot place",
//     profileURL: "sharma.jpg",
//     timing: "9 AM to 12 PM",
//     menuCardPhoto: "sharmamenu.jpg",
//     status: "open",
//     menu: ["5f268cdd69353644b88a77b9", "5f268cdd69353644b88a77bd", "5f268cdd69353644b88a77b7", "5f268cdd69353644b88a77bb", "5f268cdd69353644b88a77bf", "5f268cdd69353644b88a77c1", "5f268cdd69353644b88a77c3", "5f268cdd69353644b88a77c5", "5f268cdd69353644b88a77c7", "5f268cdd69353644b88a77c9", "5f268cdd69353644b88a77cb", "5f268cdd69353644b88a77cd", "5f268cdd69353644b88a77cf", "5f268cdd69353644b88a77d1", "5f268cdd69353644b88a77d3", "5f268cdd69353644b88a77d5", "5f268cdd69353644b88a77d7", "5f268cdd69353644b88a77d9"],
//     ownerId: "5f268cdd69353644b88a77b5",
//     Tags: ["indian", "italian"],
//     Type: "non-veg",
//     category: { bestSeller: [], maincourse: [], soup: [] },
//     Total_orders: 4534
// });

// newhotel2.save();


const orderSchema = new mongoose.Schema({
    hotelId: String,
    orderItems: Array,
    billAmount: Number,
    status: {
        type: String,
        default: "pending"
    },
    Date: String,
    customerId: String,
    approved: {
        type: Boolean,
        default: false
    },
    mobile: String
});

const Order = new mongoose.model("Order", orderSchema);

app.get("/:hotelid", function(req, res) {

    const customerId = "5f268cdd69353644b88a77b2";

    User.findById(customerId, async function(err, user) {
        if (!err) {
            if (user) {
                var latestorder = { billAmount: 0, orderItems: [] };
                for (var i = 0; i < user.purchaseList.length; i++) {
                    const foundorder = await Order.findOne({ _id: user.purchaseList[i], approved: false }, function(err, order) {
                        if (!err) {
                            if (order) {
                                console.log("mihir's order is " + order);
                                return order;
                            }
                        }
                    })
                    if (foundorder) {
                        latestorder = { billAmount: foundorder.billAmount, orderItems: foundorder.orderItems };
                        break;
                    }
                }

                console.log("the lastorder is " + JSON.stringify(latestorder));

                Hotel.findById(req.params.hotelid, function(err, hotel) {
                    if (!err) {
                        if (hotel) {

                            FoodItem.find({ hotelId: req.params.hotelid }, function(err, item) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    res.render("cart", { hotel: hotel, items: item, lastorder: latestorder });
                                }
                            });
                        }
                    }


                });

            }
        }


    })


});


app.get("/confirm", function(req, res) {

    Order.find({ hotelId: "5f268cdd69353644b88a77ad", approved: false }, function(err, order) {
        if (!err) {
            if (order) {
                res.render("confirm", { orders: order });
            } else {
                console.log("their is no such order");
            }
        } else {
            console.log(err);
        }

    });

});

app.post("/confirm/:orderId", function(req, res) {
    console.log(req.body);
    console.log(req.params.orderId);
    Order.findOne({ _id: req.params.orderId }, function(err, order) {
        if (order) {
            order.approved = true;
            order.save();

            Hotel.findOne({ _id: order.hotelId }, function(err, hotel) {
                hotel.Total_orders++;
                hotel.save();
            });

            order.orderItems.forEach(function(element) {
                FoodItem.findOne({ _id: element.item_id }, function(err, item) {
                    item.Total_orders++;
                    item.save();
                });
            });


        }


    });

})

// app.post("/additem", function(req, res) {

//     console.log(req.body);
//     var orderitems = JSON.parse(req.body.orderitem);
//     const customerId = "5f268cdd69353644b88a77ac";
//     var neword = [];
//     Order.findOne({ customerId: customerId, hotelId: req.body.hotelid, approved: false }, async function(err, order) {

//         if (!err) {
//             if (order) {
//                 var neword = order.orderItems;
//                 console.log("0 " + JSON.stringify(neword));
//                 console.log(neword.length);
//                 console.log(orderitems);
//                 orderitems.forEach(function(element) {

//                     neword.forEach(function(ele, index, arr) {
//                         console.log(element);
//                         console.log(ele);
//                         if (element.item_id == ele.item_id) {
//                             console.log("coming here");
//                             arr[index].quantity = element.quantity;
//                         } else {
//                             const itemid = arr.find(function(value) {
//                                 return value.item_id == element.item_id;
//                             });
//                             console.log("item id Is " + JSON.stringify(itemid));

//                             if (itemid === undefined) {
//                                 arr.push(element);
//                             }
//                         }
//                     });
//                 })


//                 var arr = [];
//                 async function oncegetBill(element) {
//                     var totalprice;
//                     const newitem = await FoodItem.findOne({ _id: element.item_id }, function(err, item) {
//                         if (item) {
//                             return item;
//                         }
//                     })
//                     console.log("the new item is" + newitem);
//                     console.log(newitem.price);
//                     console.log("the total item price is " + newitem.price * element.quantity);
//                     totalprice = newitem.price * element.quantity;
//                     return totalprice;
//                 }

//                 async function recreatebill(ITEMS) {
//                     await ITEMS.map(async function(element, index) {

//                         let result = await oncegetBill(element);
//                         console.log("the result is " + result);
//                         arr.push(result);
//                         console.log("array is" + arr);

//                         if (index == ITEMS.length - 1) {
//                             const totalbill = arr.reduce(function(total, element) {
//                                 return total + element;
//                             });
//                             console.log("the totalbill is " + totalbill);
//                             console.log("items are " + JSON.stringify(ITEMS));


//                             // Order.updateOne(order, { orderItems: ITEMS, billAmount: totalbill });
//                             order.orderItems = ITEMS;
//                             order.billAmount = totalbill;
//                             order.markModified("orderItems"); //this i have modified after mohit had told me to that .save is not working

//                             order.save(function(err, result) {
//                                 console.log(result);
//                             });

//                             console.log(order);

//                         }
//                     });
//                 }

//                 recreatebill(neword);



//                 console.log("2 " + JSON.stringify(neword));



//             } else {
//                 var arr = [];
//                 async function getBill(element) {
//                     var totalprice;
//                     const newitem = await FoodItem.findOne({ _id: element.item_id }, function(err, item) {
//                         if (item) {
//                             return item;
//                         }
//                     })
//                     console.log("the new item is" + newitem);
//                     console.log(newitem.price);
//                     console.log("the total item price is " + newitem.price * element.quantity);
//                     totalprice = newitem.price * element.quantity;
//                     return totalprice;
//                 }

//                 async function createbill(orderitems) {
//                     await orderitems.map(async function(element, index) {

//                         let result = await getBill(element);
//                         console.log("the result is " + result);
//                         arr.push(result);
//                         console.log("array is" + arr);

//                         if (index == orderitems.length - 1) {
//                             const totalbill = arr.reduce(function(total, element) {
//                                 return total + element;
//                             });
//                             console.log("the totalbill is " + totalbill);
//                             console.log(orderitems);


//                             const neworder = new Order({
//                                 hotelId: req.body.hotelid,
//                                 billAmount: totalbill,
//                                 status: "pending",
//                                 Date: Date(),
//                                 customerId: customerId
//                             });
//                             neworder.orderItems = orderitems;
//                             neworder.save();
//                             User.findById(customerId, function(err, user) {
//                                 if (user) {
//                                     user.purchaseList.push(neworder._id.toString());
//                                     user.save();
//                                 }
//                             });

//                             Hotel.findById(req.body.hotelid, function(err, hotel) {
//                                 if (hotel) {
//                                     hotel.orderList.push(neworder._id.toString());
//                                     hotel.save();
//                                 }
//                             });



//                         }
//                     });
//                 }

//                 createbill(orderitems);
//             }
//         }
//     })


// });


app.post("/orderitem", function(req, res) {

    console.log(req.body);
    var orderitems = JSON.parse(req.body.orderitem);
    const customerId = "5f268cdd69353644b88a77b2";


    var arr = [];
    async function getBill(element) {
        var totalprice;
        const newitem = await FoodItem.findOne({ _id: element.item_id }, function(err, item) {
            if (item) {
                return item;
            }
        })
        console.log("the new item is" + newitem);
        console.log(newitem.price);
        console.log("the total item price is " + newitem.price * element.quantity);
        totalprice = newitem.price * element.quantity;
        return totalprice;
    }

    async function createbill(ITEMS) {
        await ITEMS.map(async function(element, index) {

            let result = await getBill(element);
            console.log("the result is " + result);
            arr.push(result);
            console.log("array is" + arr);

            if (index == ITEMS.length - 1) {
                const totalbill = arr.reduce(function(total, element) {
                    return total + element;
                });
                console.log("the totalbill is " + totalbill);
                console.log(ITEMS);

                Order.findOne({ customerId: customerId, hotelId: req.body.hotelid, approved: false }, async function(err, order) {

                    var customer = " ";

                    await User.findById(customerId, function(err, user) {
                        if (!err) {
                            if (user) {
                                console.log(user);
                                customer = user;
                            }
                        }
                    });
                    console.log("customer is " + customer);
                    if (!err) {
                        if (order) {

                            order.orderItems = ITEMS;
                            order.billAmount = totalbill;
                            order.mobile = req.body.mobile;
                            order.Date = Date();
                            order.save();
                            //   res.render("checkout", { order: order, customer: customer });
                            var redirectroute = "/checkout/" + order._id;
                            res.redirect(redirectroute);


                        } else {
                            const neworder = new Order({
                                hotelId: req.body.hotelid,
                                billAmount: totalbill,
                                mobile: req.body.mobile,
                                status: "pending",
                                Date: Date(),
                                customerId: customerId
                            });
                            neworder.orderItems = ITEMS;
                            neworder.save();

                            var redirectroute = "/checkout/" + neworder._id;

                            User.findById(customerId, function(err, user) {
                                if (user) {
                                    user.purchaseList.push(neworder._id.toString());
                                    user.save();
                                }
                            });

                            Hotel.findById(req.body.hotelid, function(err, hotel) {
                                if (hotel) {
                                    hotel.orderList.push(neworder._id.toString());
                                    hotel.save();
                                }
                            });
                            res.redirect(redirectroute);
                            //   res.render("checkout", { order: neworder, customer: customer });


                        }
                    }
                });

            }
        });
    }

    createbill(orderitems);

});

app.get("/checkout/:orderid", function(req, res) {

    Order.findById(req.params.orderid, function(err, order) {
        if (!err) {
            if (order) {
                User.findById(order.customerId, function(err, user) {
                    if (!err) {
                        if (user) {
                            res.render("checkout", { order: order, customer: user });
                        }
                    }
                });
            }
        }


    });

});

app.get("/", function(req, res) {
    Hotel.find({}, function(err, hotels) {
        if (!err) {
            if (hotels) {
                res.render("hotel", { hotels: hotels });
                // res.json(hotels);
            }
        }
    });
})


app.listen(3000, function(req, res) {
    console.log("port 3000 has started");
});


// i can create a new bill
// if the bill already exist than i can add the new items to the bill and update the quantity of the existing bill
// if the bill is existing than the i can update the amount of that bill
// since the user is not confirmed its order than i will not increase the order and hotelorders