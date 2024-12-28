// routes/usersRouter.js
const { Router } = require("express");
const baseController = require("../controllers/baseController");
const baseRouter = Router();

baseRouter.get("/", baseController.displayHome);
baseRouter.get("/categories", baseController.displayCategories);
baseRouter.get("/brands", baseController.displayBrands);
baseRouter.get("/products", baseController.displayProducts);

baseRouter.get("/categories/new", baseController.newCategoryPage);
baseRouter.get("/brands/new", baseController.newBrandPage);
baseRouter.get("/products/new", baseController.newProductPage);

baseRouter.post("/categories/new", baseController.createCategory);
baseRouter.post("/brands/new", baseController.createBrand);
baseRouter.post("/products/new", baseController.createProduct);



// baseRouter.get("/new", dbController.displayForm);
// baseRouter.post("/new", dbController.postForm);
// baseRouter.get("/delete", dbController.deleteDB);



// usersRouter.get("/", usersController.usersListGet);
// usersRouter.get("/create", usersController.usersCreateGet);
// usersRouter.post("/create", usersController.usersCreatePost);

// usersRouter.get("/:id/update", usersController.usersUpdateGet);
// usersRouter.post("/:id/update", usersController.usersUpdatePost);

// usersRouter.post("/:id/delete", usersController.usersDeletePost);

// usersRouter.get("/search", usersController.search)

module.exports = baseRouter;
