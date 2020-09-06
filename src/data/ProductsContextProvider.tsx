import React, { useState, useEffect, useCallback } from "react";
import { Plugins } from "@capacitor/core";

import ProductsContext, { Product } from "./products";

const { Storage } = Plugins;

const ProductsContextProvider: React.FC = (props) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		Storage.set({ key: "productList", value: JSON.stringify(products) });
	}, [products]);

	const addProduct = (productName: string, expiryDate: string) => {
		const newProduct: Product = {
			id: Math.random().toString(),
			groceryName: productName,
			expiryDate: expiryDate,
		};

		setProducts((curProducts) => {
			return curProducts.concat(newProduct);
		});
	};
	const deleteProduct = (id: string) => {
		setProducts((curProducts) => {
			return curProducts.filter((product) => product.id !== id);
		});
	};

	const initContext = useCallback(async () => {
		const productsData = await Storage.get({ key: "productList" });
		const storedProducts = productsData.value
			? JSON.parse(productsData.value)
			: [];
		setProducts(storedProducts);
	}, []);
	return (
		<ProductsContext.Provider
			value={{
				products,
				addProduct,
				deleteProduct,
				initContext,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
