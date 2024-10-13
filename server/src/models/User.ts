import mongoose from "mongoose";
import { Schema } from "mongoose";

interface User {
    username: string,
    password: string
    published_avatars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Avatar' }]
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    published_avatars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avatar'
    }]
});

const User = mongoose.model('User', userSchema);
export default User;