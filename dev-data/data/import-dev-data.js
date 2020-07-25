const mongoose = require('mongoose');
const fs = require('fs');
const Recipe = require('../../models/recipeModel');
const dotenv = require('dotenv');

dotenv.config({
	path: '../../config.env'
});

const app = require('../../app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('DB connection succesful!'));

// Read JSON file
const recipes = JSON.parse(fs.readFileSync('./recipes.json', 'utf-8'));

// Import data into DB
const importData = async () => {
	try {
		await Recipe.create(recipes);
		console.log('Data successfully loaded!');
	} catch (err) {
		console.log(err);
	}
	process.exit();
};

// Delete all data from DB
const deleteData = async () => {
	try {
		await Recipe.deleteMany();
		console.log('Data successfully deleted!');
	} catch (err) {
		console.log(err.message);
	}
	process.exit();
};

if (process.argv[2] === '--import') {
	importData();
} else if (process.argv[2] === '--delete') {
	deleteData();
}