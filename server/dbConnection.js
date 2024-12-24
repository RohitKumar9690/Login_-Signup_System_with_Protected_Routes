import moongoose from 'mongoose';

const DbConnection = async () => {
    try {
        await moongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default DbConnection;