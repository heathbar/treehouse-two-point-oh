import { Connection, connect } from 'mongoose';

export class DataAccess {

    constructor() {
        DataAccess.connect();
    }

    static connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            connect('mongodb://database:27017/treehouse', { useMongoClient: true }).then(resolve).catch(reject);
        });
    }
}
