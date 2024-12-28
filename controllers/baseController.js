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

async function displayHome(req, res) {
    res.render('homePage')
}

async function displayCategories(req, res) {
    res.render('categoriesPage', {form:false})
}

async function displayBrands(req, res) {
    res.render('brandsPage', {form:false})
}

async function displayProducts(req, res) {
    res.render('productsPage', {form:false})
}

async function newCategoryPage(req,res){
        res.render('categoriesPage', {form:true})
}

async function newBrandPage(req,res){
        res.render('brandsPage', {form:true})
}

async function newProductPage(req,res){
        res.render('productsPage', {form:true})
}

module.exports = {
  displayHome,
  displayCategories,
  displayBrands,
  displayProducts,
  newCategoryPage,
  newBrandPage,
  newProductPage
};
