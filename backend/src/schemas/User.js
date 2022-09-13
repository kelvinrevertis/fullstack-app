import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    userName: String,
    password: String,
    phone: String,
})

export default mongoose.model("Users", UserSchema)