import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.js'

class NetworkError<Error> {
    message: string

    constructor(message: string) {
        this.message = 'Network error detected.'
    }
}



fetchProductCatalog()
    .then(() => console.log(fetchProductCatalog))
    .then(() => console.log(fetchProductReviews))
    .then(() => console.log(fetchSalesReport))
    .catch((error) => console.error(".catch() flag reached. Error:", error))
    .finally(() => console.log(".finally() flag reached, all API calls complete."));

// }


// () => {
// 	() => {...} // a nested function
// 	return ...
// }

// () => { // a higher order function, returns a function
// 	return () => {...}
// }

// (() => {...}) => { // a higher order function, accepts a function as an argument
// 	return ...
// }
