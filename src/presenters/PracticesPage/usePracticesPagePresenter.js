import {useEffect, useState} from "react";
import PracticesPagePresenter from "./PracticesPagePresenter";
import PracticesService from "../../services/PracticesService";

const usePracticesPagePresenter = () => {
	const [ presenterInstance, setPresenterInstance ] = useState();
	const practicesService = new PracticesService();

	useEffect(() => {

		const presenter =  new PracticesPagePresenter({
			practicesService,
		});

		presenter.onMount();
		setPresenterInstance( presenter );
	}, [])

	return presenterInstance
}


export default usePracticesPagePresenter;
