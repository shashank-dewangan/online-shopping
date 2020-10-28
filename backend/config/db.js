import mongoose from 'mongoose';

const db = {
  connectDB: async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });

      console.log(`database is connected at host : ${conn.connection.host}`);
    } catch (err) {
      console.log(`database connection is failed with error : ${err.message}`);
      process.exit(1);
    }
  },
};

export default db;
