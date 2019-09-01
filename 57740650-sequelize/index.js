const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Suppliers = sequelize.define('Suppliers', {
  supplierName: Sequelize.STRING,
}, {});

const Categories = sequelize.define('Categories', {
  categoryName: Sequelize.STRING
}, {});

Suppliers.sync().then(() => {
  Suppliers.create({
	supplierName: 'UCC Bangladesh',
  });
})

Categories.sync().then(() => {
  Categories.create({
	categoryName: 'testcategory'
  });
});

const SuppliersCategories = sequelize.define('SuppliersCategories', {
  supplier_id: Sequelize.INTEGER,
  category_id: Sequelize.INTEGER
}, {});

SuppliersCategories.sync().then(() => {
  Suppliers.belongsToMany(Categories, {
	through: SuppliersCategories
  })
})

SuppliersCategories.sync().then(() => {
  SuppliersCategories.create({
	supplier_id: 1,
	CategoryId: 1
  });
})

Suppliers.findAll({
  include: [
    {
	  model: Categories,
	  attributes :['categoryName']
	}
  ]
}).then(res => {
  console.dir(res);
});
