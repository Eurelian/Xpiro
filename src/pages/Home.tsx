import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonCard,
	IonItem,
	IonCardTitle,
	IonCardSubtitle,
} from "@ionic/react";
import React, { useState, useContext } from "react";

//components
import AddButton from "../components/addButton";
import ProductsContext from "../data/products";

import "./Home.css";

const Home: React.FC = () => {
	const { products } = useContext(ProductsContext);
	return (
		<IonPage>
			<IonHeader className='ion-no-border header'>
				<IonToolbar className='toolbar'>
					<IonTitle>Xpiro</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{products.map((item) => (
						<IonItem key={item.id}>
							<IonCard>
								<IonCardTitle>{item.groceryName}</IonCardTitle>
								<IonCardSubtitle>{item.expiryDate}</IonCardSubtitle>
							</IonCard>
						</IonItem>
					))}
				</IonList>
				<AddButton></AddButton>
			</IonContent>
		</IonPage>
	);
};

export default Home;
