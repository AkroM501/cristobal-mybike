import { Schema, model, Document } from "mongoose";

interface IAccount extends Document {
    username: string;
    username_lower: string;
    password: string;
}

const accountSchema = new Schema({
    username: { type: String },
    username_lower: { type: String },
    password: { type: String },
});

export default model<IAccount>("Account", accountSchema);
