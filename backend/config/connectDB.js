const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database connected");
    } catch (err) {
        console.log({ msg: "cannot connect to database ", err });
    }
};
module.exports = connectDB;