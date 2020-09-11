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
	IonButton,
	IonGrid,
	IonCol,
	IonRow,
	IonIcon,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import React, { useState, useContext } from "react";

//components
import AddButton from "../components/addButton";
import ProductsContext from "../data/products";

//utils
import handleDate from "../utils/dateConvert";

import "./Home.css";

const Home: React.FC = () => {
	const { products, deleteProduct } = useContext(ProductsContext);
	return (
		<IonPage>
			<IonHeader className='ion-no-border header'>
				<IonToolbar className='toolbar ion-text-center'>
					<IonTitle>Xpiro</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList className='list-parent'>
					{products.map((item) => (
						<IonItem key={item.id} className='list-item'>
							<IonCard className='card'>
								<IonGrid>
									<IonRow className='ion-justify-content-between'>
										<IonCol size='8'>
											<IonCardTitle className='ion-text-capitalize ion-margin-bottom'>
												{item.groceryName}
											</IonCardTitle>
											<IonCardSubtitle>
												{handleDate(item.expiryDate)}
											</IonCardSubtitle>
										</IonCol>
										<IonCol
											size='4'
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "flex-end",
											}}
										>
											<IonRow>
												<IonButton onClick={() => deleteProduct(item.id)}>
													<IonIcon icon={trashOutline}></IonIcon>
												</IonButton>
											</IonRow>
										</IonCol>
									</IonRow>
								</IonGrid>
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
