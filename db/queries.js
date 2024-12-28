const pool = require("./pool");

async function getAllCategories() {
  const results = await pool.query("SELECT category_name, associated_products FROM categories");
  const categories = results.rows.map((row) => ({
    category_name: row.category_name,
    associated_products: row.associated_products,
  }));
  return categories;
}

async function insertCategory(categoryName, newCategoryProducts, ) {
  await pool.query("INSERT INTO categories (category_name, associated_products) VALUES ($1, $2)", [categoryName, newCategoryProducts]);
}

async function getAllBrands(){
  const results = await pool.query("SELECT brand_name, brand_category, brand_product FROM brands");
  const brands = results.rows.map((row) => ({
    brand_name: row.brand_name,
    brand_category: row.brand_category,
    brand_product: row.brand_product
  }));
  return brands;
}

async function insertBrand(newBrandName, newBrandCategory, newBrandAP){
    await pool.query("INSERT INTO brands (brand_name, brand_category, brand_product) VALUES ($1, $2, $3)",[newBrandName, newBrandCategory, newBrandAP]);
}

async function insertProduct(newProduct, newProductBrand, newProductCategory){
    await pool.query("INSERT INTO products (product_name, product_brand, product_category) VALUES ($1, $2, $3)",[newProduct, newProductBrand, newProductCategory]);
}

async function getAllProducts(){
  const results = await pool.query("SELECT product_name, product_brand, product_category FROM products");
  const products = results.rows.map((row) => ({
    product_name: row.product_name,
    product_brand: row.product_brand,
    product_category: row.product_category
  }));
  return products;
}
// something about deleting one category at a time
// async function deleteAllUsernames(){
//     await pool.query("TRUNCATE usernames; DELETE from usernames")
// }

// async function searchUsernames(searchTerm) {
//     const { rows } = await pool.query(
//         'SELECT * FROM usernames WHERE username ILIKE $1',
//         [`%${searchTerm}%`]
//     );
//     return rows;
// }

module.exports = {
    getAllCategories,
    insertCategory,

    insertBrand,
    getAllBrands,

    insertProduct,
    getAllProducts
};


























// const pool = require("./pool");

// async function getAllUsernames() {
//   const { rows } = await pool.query("SELECT * FROM usernames");
//   return rows;
// }

// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

// async function deleteAllUsernames(){
//     await pool.query("TRUNCATE usernames; DELETE from usernames")
// }

// async function searchUsernames(searchTerm) {
//     const { rows } = await pool.query(
//         'SELECT * FROM usernames WHERE username ILIKE $1',
//         [`%${searchTerm}%`]
//     );
//     return rows;
// }

// module.exports = {
//     getAllUsernames,
//     insertUsername,
//     deleteAllUsernames,
//     searchUsernames
// };