// exports.logUsernames=(req,res)=>{
//     console.log("usernames will be logged here - wip")
// }

// exports.displayForm=(req,res)=>{
//     res.render('displayForm')
// }

// exports.postForm=(req,res)=>{
//     console.log("username to be saved: ", req.body.username)
// }

// const db = require("../db/queries");

// async function logUsernames(req, res) {
//   const usernames = await db.getAllUsernames();
//   console.log("Usernames: ", usernames);
//   res.send("Usernames: " + usernames.map(user => user.username).join(", "));
// }

// async function displayHome(req, res) {
//     res.render('displayForm')
// }

// async function postForm(req, res) {
//   const { username } = req.body;
//   await db.insertUsername(username);
//   res.redirect("/");
// }

// async function deleteDB(req, res) {
//   await db.deleteAllUsernames();
//   console.log("cleared database")
//   res.redirect("/")
// }

// async function logUsernames(req, res) {
//     const { search } = req.query;
//     const usernames = search 
//     //if it finds a search request parameter, it puts it through that function to search
//         ? await db.searchUsernames(search)
//         //if not, just show up all users
//         : await db.getAllUsernames();
    
//     res.send("Usernames: " + usernames.map(user => user.username).join(", "));
// }
const db = require("../db/queries");

async function displayHome(req, res) {
    res.render('homePage')
}

async function displayCategories(req, res) {
    const categories=await(db.getAllCategories());
    res.render('categoriesPage', {form:false, categories:categories})
}

async function displayBrands(req, res) {
    const brands=await(db.getAllBrands());
    res.render('brandsPage', {form:false, brands:brands})
}

async function displayProducts(req, res) {
    const products=await(db.getAllProducts());
    res.render('productsPage', {form:false, products:products})
}

async function newCategoryPage(req,res){
        const categories=await(db.getAllCategories());
        res.render('categoriesPage', {form:true, categories:categories})
}

async function newBrandPage(req,res){
        const brands=await(db.getAllBrands());
        res.render('brandsPage', {form:true, brands:brands})
}

async function newProductPage(req,res){
        const products=await(db.getAllProducts());
        res.render('productsPage', {form:true, products:products})
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
  createProduct
};
