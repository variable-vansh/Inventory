const db = require("../db/queries");

async function displayHome(req, res) {
    res.render('homePage')
}

async function displayCategories(req, res) {
    const categories=await(db.getAllCategories());
    res.render('categoriesPage', {form:false, update:false, categories:categories})
}

async function displayBrands(req, res) {
    const brands=await(db.getAllBrands());
    console.log(brands)
        res.render('brandsPage', {form:false,update:false, brands:brands})

}

async function displayProducts(req, res) {
    const products=await(db.getAllProducts());
    res.render('productsPage', {form:false, update:false, products:products})
}

async function newCategoryPage(req,res){
        const categories=await(db.getAllCategories());
        res.render('categoriesPage', {form:true, update:false, categories:categories})
}

async function newBrandPage(req,res){
        const brands=await(db.getAllBrands());
            res.render('brandsPage', {form:true,update:false, brands:brands})

}

async function newProductPage(req,res){
        const products=await(db.getAllProducts());
        res.render('productsPage', {form:true, update:false, products:products})
}


async function createCategory(req, res){
const {newCategoryName, newCatProducts}=(req.body)
await db.insertCategory(newCategoryName, newCatProducts)
res.redirect('/categories')
}

async function createBrand(req, res){
    const {newBrand, newBrandCategory, newBrandProd}=(req.body);
    await db.insertBrand(newBrand, newBrandCategory, newBrandProd)
    res.redirect('/brands')
}

async function createProduct(req, res){
    const {newProduct, newProductBrand, newProductCategory}=(req.body);
    await db.insertProduct(newProduct, newProductBrand, newProductCategory);
    res.redirect('/products')
}

async function updateProductGET(req, res) {
     const singleProduct = await(db.getProductFromId(req.params.id));
     const products=await(db.getAllProducts());

    res.render('productsPage', {form:false,update:true, products:products, product:singleProduct.rows[0]})
    console.log(singleProduct.rows[0])
}

async function updateProductPOST(req, res) {
    const { product_id, newProduct, newProductBrand, newProductCategory } = req.body;
    await db.updateProduct(product_id, newProduct, newProductBrand, newProductCategory);
    res.redirect('/products');
}

async function updateCategoryGET(req, res) {
     const singleCategory = await(db.getCategoryFromId(req.params.id));
     const categories=await(db.getAllCategories());

    res.render('categoriesPage', {form:false,update:true, categories:categories, category:singleCategory.rows[0]})
    // console.log(singleCategory.rows[0])
}

async function updateCategoryPOST(req, res) {
    const {category_id, newCategoryName, newCatProducts}=req.body;
    // console.log(category_id)
    await db.updateCategory(category_id, newCategoryName, newCatProducts);
    res.redirect('/categories');
}

async function updateBrandsGET(req, res) {
     const singleBrand = await(db.getBrandFromId(req.params.id));
     const brands=await(db.getAllBrands());

    //  console.log(singleBrand.rows[0])
    res.render('brandsPage', {form:false,update:true, brands:brands, brand:singleBrand.rows[0]})
}

async function updateBrandsPOST(req, res) {
    const {newBrand, brand_id, newBrandCategory, newBrandProd}=req.body;
    // console.log(category_id)
    await db.updateBrand(newBrand, brand_id, newBrandCategory, newBrandProd);
    console.log("here")
    console.log(req.body)
    res.redirect('/brands');
}

module.exports = {
  displayHome,
  displayCategories,
  displayBrands,
  displayProducts,
  newCategoryPage,
  newBrandPage,
  newProductPage,
  createCategory,
  createBrand,
  createProduct,
  updateProductGET,
  updateProductPOST,
  updateCategoryGET,
  updateCategoryPOST,
  updateBrandsGET,
  updateBrandsPOST
};
