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

baseRouter.get("/product/:id/update", baseController.updateProductGET);
baseRouter.post("/product/:id/update", baseController.updateProductPOST);

baseRouter.get("/categories/:id/update", baseController.updateCategoryGET);
baseRouter.post("/categories/:id/update", baseController.updateCategoryPOST);

baseRouter.get("/brands/:id/update", baseController.updateBrandsGET);
baseRouter.post("/brands/:id/update", baseController.updateBrandsPOST);

baseRouter.get("/products/:id/delete", baseController.deleteProductGET)
baseRouter.get("/categories/:id/delete", baseController.deleteCategoryGET)
baseRouter.get("/brands/:id/delete", baseController.deleteBrandGET)


module.exports = baseRouter;
