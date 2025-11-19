import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.js'


// console.log(fetchProductCatalog)
// let myNewFunction = fetchProductCatalog()

fetchProductCatalog()
.then(() => fetchProductReviews())
.then(() => fetchSalesReport())
.catch((error) => console.error(".catch() Flag. Error:", error))
.finally(() => console.log(".finally() Flag"));


// () => {
// 	() => {} // a nested function	
// 	return 
// }

// () => { // a higher order function
// 	return () => {}
// }

// (() => {}) => { // a higher order function
// 	return 
// }
