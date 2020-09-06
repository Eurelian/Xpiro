import React, { Fragment, useState, useContext } from "react";
import {
	IonFab,
	IonFabButton,
	IonIcon,
	IonModal,
	IonButton,
	IonList,
	IonContent,
	IonItem,
	IonInput,
	IonDatetime,
} from "@ionic/react";
import { add } from "ionicons/icons";

import ProductsContext from "../data/products";

const AddButton: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [product, setProduct] = useState<string>();
	const [selectedDate, setSelectedDate] = useState<string>();

	const { products, addProduct, deleteProduct } = useContext(ProductsContext);

	const handleAddProduct = () => {
		console.log(products);
		addProduct(product!, selectedDate!);
		setProduct("");
		setSelectedDate("");
		setShowModal(false);
	};

	return (
		<Fragment>
			<IonModal isOpen={showModal} cssClass='my-custom-class'>
				<IonContent>
					<IonList>
						<IonItem>
							<IonInput
								value={product}
								placeholder='Grocery Name'
								onIonChange={(e) => setProduct(e.detail.value!)}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonDatetime
								displayFormat='DD MM YY'
								placeholder='Select Expiry Date'
								value={selectedDate}
								onIonChange={(e) => setSelectedDate(e.detail.value!)}
							></IonDatetime>
						</IonItem>
					</IonList>

					<IonButton
						expand='block'
						shape='round'
						fill='outline'
						onClick={handleAddProduct}
					>
						Save
					</IonButton>
				</IonContent>
			</IonModal>

			<IonFab
				vertical='bottom'
				horizontal='center'
				slot='fixed'
				className='ion-padding-bottom'
			>
				<IonFabButton onClick={() => setShowModal(true)}>
					<IonIcon icon={add}></IonIcon>
				</IonFabButton>
			</IonFab>
		</Fragment>
	);
};

export default AddButton;
