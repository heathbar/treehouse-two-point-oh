import { Document, Model, Types } from 'mongoose';
import { Read } from './read.interface';
import { Write } from './write.interface';

export class RepositoryBase<T extends Document> implements Read<T>, Write<T> {

    private model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this.model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        return this.model.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this.model.find({}, callback);
    }

    update(_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this.model.update({ _id }, item, callback);

    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this.model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));

    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this.model.findById(_id, callback);
    }

    private toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id);
    }
}
