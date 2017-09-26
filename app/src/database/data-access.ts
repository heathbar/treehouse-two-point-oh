import { Connection, connect } from 'mongoose';

export class DataAccess {

    constructor() {
        DataAccess.connect();
    }

    static connect(): any {
        return connect('mongodb://database:27017/treehouse', { useMongoClient: true });
    }
}
