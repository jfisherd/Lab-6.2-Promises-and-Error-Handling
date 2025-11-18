interface review {
    review: string
    replies?: review | review[]
}

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

const fetchProductReviews = (): Promise<{ id: number; name: string; productReviews: review | review[] }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([{id: 1, name: "Laptop", productReviews: [{review: '10/10 :)', replies: {review: 'Glad you liked it:)'}}, {review: 'its Ok'} ,{review: 'its Ok'}]},
                         {id: 2, name: "Headphones", productReviews: [{review: '1'},{review: '2'}]}    
                ])           
            } else {
                reject(`Failed to fetch reviews for product ID ${{id: 3, name: "Keyboards", productReviews: [{review: '0/10, product is never in stock and I keep spilling coffee on mine!'}]}.id}, item does not exist`);
            }
        }, 1500);
    });
};

const fetchSalesReport = (): Promise<{ id: number; name: string; totalSales: number, unitsSold: number, averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", totalSales: 190, unitsSold: 19, averagePrice: 10 },
                    { id: 2, name: "Headphones", totalSales: 12300, unitsSold: 123, averagePrice: 100 },
                ]);
            } else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};

fetchProductCatalog()
.then(() => fetchProductReviews())
.then(() => fetchSalesReport())
.catch((error) => console.error(".catch() Flag. Error:", error))
.finally(() => console.log(".finally() Flag"));