interface review {
    review: string;
    replies?: review | review[];
}
export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: () => Promise<{
    id: number;
    name: string;
    productReviews: review | review[];
}[]>;
export declare const fetchSalesReport: () => Promise<{
    id: number;
    name: string;
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}[]>;
export {};
//# sourceMappingURL=apiSimulator.d.ts.map