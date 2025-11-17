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

const fetchProductReviews = (): Promise<{ id: number; name: string; reviews: string[] }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", reviews: ['10/10','its ok','so good I bought ten'] },
            { id: 2, name: "Headphones", reviews: ['🎜'] },
        ]);
        } else {
        reject("Failed to fetch reviews for product ID ${id}");
        }
    }, 1500);
    });
};

const fetchSalesReport = (): Promise<{ id: number; name: string; totalSales: number, unitsSold: number, averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", totalSales: 190, unitsSold: 19, averagePrice: 10},
            { id: 2, name: "Headphones", totalSales: 12300, unitsSold: 123, averagePrice: 100},
        ]);
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1000);
    });
};