export function multipleMongooseToObj (mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
}

export function mongooseToObj (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}