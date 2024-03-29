const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
// const seedDatabase = () => {
//   return sequelize.sync({ 
//     force: true 
//   })
//   .then(() => {
//     Book.bulkCreate(bookSeedData)
//     .then(() => {
//       Library.bulkCreate(librarySeedData)
//       .then(() => {
//         console.log('All Seeds Planted'); 
//       });
//     });
//   });

//   process.exit(0);
// };

const seedDatabase = async () => {
  try {
    await sequelize.sync({force: true});

    await Book.bulkcreate(bookSeedData)
    await Library.bulkcreate(librarySeedData);

    console.log('All Seeds Planted');
  } catch (error) {
    console.error('Error seeding database', error);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
