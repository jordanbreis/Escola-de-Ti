import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop()
    firstname: string
    @Prop()
    lastname: string
    @Prop()
    password: string
    @Prop()
    email: string
    @Prop()
    authorizesLevel: number
}

export const UserSchema = SchemaFactory.createForClass(User)