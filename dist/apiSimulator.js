class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.message = 'A network error has occurred';
    }
}
class DataError extends Error {
    constructor(message) {
        super(message);
        this.message = 'A data error has occurred';
    }
}
export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(DataError);
            }
        }, 1000);
    });
};
export const fetchProductReviews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([{ id: 1, name: "Laptop", productReviews: [{ review: '10/10 :)', replies: { review: 'Glad you liked it:)' } }, { review: 'its Ok' }, { review: 'its Ok' }] },
                    { id: 2, name: "Headphones", productReviews: [{ review: '1' }, { review: '2' }] },
                    { id: 3, name: "Keyboards", productReviews: [{ review: '0/10, product is never in stock and I keep spilling coffee on mine!' }] }
                ]);
            }
            else {
                reject(NetworkError);
                //  `Failed to fetch reviews for product ID ${{ id: 3, name: "Keyboards", productReviews: [{ review: '0/10, product is never in stock and I keep spilling coffee on mine!' }] }.id}, item does not exist`);
            }
        }, 1500);
    });
};
export const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", totalSales: 190, unitsSold: 19, averagePrice: 10 },
                    { id: 2, name: "Headphones", totalSales: 12300, unitsSold: 123, averagePrice: 100 },
                ]);
            }
            else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};
// fetchProductCatalog()
// .then(() => fetchProductReviews())
// .then(() => fetchSalesReport())
// .catch((error) => console.error(".catch() Flag. Error:", error))
// .finally(() => console.log(".finally() Flag"));
//# sourceMappingURL=apiSimulator.js.map