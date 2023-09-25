const connection = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./data');


connection.on('error', console.error.bind(console, 'connection error:') );


const seedDatabase = async () => {
    try {
        await connection.dropDatabase();

        const users = await User.insertMany(userSeeds);

        for (let i = 0; i < thoughtSeeds.length; i++) {
            const { _id: userId } = users[Math.floor(Math.random() * users.length)];

            await Thought.create({ ...thoughtSeeds[i], userId });
        }

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

connection.once('open', seedDatabase);

console.log('seeded!');
