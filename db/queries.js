const pool = require("./pool");

async function getAllCategories() {
  const results = await pool.query("SELECT id, category_name, associated_products FROM categories ORDER BY id");
  const categories = results.rows.map((row) => ({
    category_id:row.id,
    category_name: row.category_name,
    associated_products: row.associated_products,
  }));
  // console.log("here")
  // console.log(categories)
  return categories;
}

async function insertCategory(categoryName, newCategoryProducts, ) {
  await pool.query("INSERT INTO categories (category_name, associated_products) VALUES ($1, $2)", [categoryName, newCategoryProducts]);
}

async function getAllBrands(){
  const results = await pool.query("SELECT id, brand_name, brand_category, brand_product FROM brands ORDER by id");
  const brands = results.rows.map((row) => ({
    brand_id:row.id,
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
  const results = await pool.query("SELECT id, product_name, product_brand, product_category FROM products ORDER BY id");
  const products = results.rows.map((row) => ({
    product_id:row.id,
    product_name: row.product_name,
    product_brand: row.product_brand,
    product_category: row.product_category
  }));
  return products;
}

async function getProductFromId(id){
  const product=await pool.query(`SELECT * FROM products WHERE id=${id}`)
  return product;
}

async function updateProduct(product_id, newProduct, newProductBrand, newProductCategory) {
  console.log(product_id)
    await pool.query(`
        UPDATE products
        SET product_name = $1,
            product_brand = $2,
            product_category = $3
        WHERE id = $4`,
        [newProduct, newProductBrand, newProductCategory, parseInt(product_id)]
    );
    
    return await(pool.query('SELECT * FROM products ORDER BY id'));
}

async function getCategoryFromId(id){
  const category=await pool.query(`SELECT * FROM categories WHERE id=${id}`)
  return category;
}

async function updateCategory(category_id, newCategoryName, newCatProducts) {
    await pool.query(`
        UPDATE categories
        SET category_name = $1,
            associated_products = $2
        WHERE id = $3`,
        [newCategoryName, newCatProducts, parseInt(category_id)]
    );
    
    return await(pool.query('SELECT * FROM categories ORDER BY id'));
}


async function getBrandFromId(id){
  const brand=await pool.query(`SELECT * FROM brands WHERE id=${id}`)
  return brand;
}

async function updateBrand(brand_name, brand_id, newBrandCategory, newBrandProd) {
    await pool.query(`
        UPDATE brands
        SET brand_name = $1,
            brand_category = $2,
            brand_product=$3
        WHERE id = $4`,
        [brand_name, newBrandCategory, newBrandProd, parseInt(brand_id)]
    );
    
    return await(pool.query('SELECT * FROM brands ORDER BY id'));
}

async function deleteProduct(id){
  await pool.query(`DELETE FROM products WHERE id=${id}`)
}

async function deleteCategory(id){
  await pool.query(`DELETE FROM categories WHERE id=${id}`)
}

async function deleteBrand(id){
  await pool.query(`DELETE FROM brands WHERE id=${id}`)
}



module.exports = {
    getAllCategories,
    insertCategory,

    insertBrand,
    getAllBrands,

    insertProduct,
    getAllProducts,

    getProductFromId,
    updateProduct,

    getCategoryFromId,
    updateCategory,

    getBrandFromId,
    updateBrand,

    deleteProduct,
    deleteCategory,
    deleteBrand
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