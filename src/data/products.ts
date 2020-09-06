import React from "react";

export interface Product {
	id: string;
	groceryName: string;
	expiryDate: string;
}

interface ProductListContext {
	products: Product[];
	addProduct: (groceryName: string, expiryDate: string) => void;
	deleteProduct: () => void;
	initContext: () => void;
}

const ProductsContext = React.createContext<ProductListContext>({
	products: [],
	addProduct: () => {},
	deleteProduct: () => {},
	initContext: () => {},
});

export default ProductsContext;
