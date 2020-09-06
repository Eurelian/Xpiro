import React, { Fragment } from "react";
import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";
import AddButton from "./addButton";

import "./footer.css";

const Footer: React.FC = () => {
	return (
		<Fragment>
			<IonFooter className='ion-no-border'>
				<IonToolbar>
					<IonTitle>What</IonTitle>
				</IonToolbar>
			</IonFooter>
		</Fragment>
	);
};

export default Footer;
