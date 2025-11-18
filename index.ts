import type { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.js'


// console.log(fetchProductCatalog)


fetchProductCatalog()
.then(() => fetchProductReviews())
.then(() => fetchSalesReport())
.catch((error) => console.error(".catch() Flag. Error:", error))
.finally(() => console.log(".finally() Flag"));




