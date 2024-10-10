import mongoose, { mongo, Mongoose, ObjectId } from "mongoose";
import { Schema } from "mongoose";

interface User {
    username: string,
    published_avatars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Avatar'}]
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true
    },
    published_avatars: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Avatar' }],
        required: true
    }
});

const User = mongoose.model('User', userSchema);
export default User;