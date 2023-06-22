import {action, makeAutoObservable} from "mobx";

class PracticesPagePresenter {

	constructor({practicesService}) {
		this.practicesService = practicesService;
		this.practices = []
		this.allPractices = []
		this.loading = false;

		makeAutoObservable(this)
	}

	onMount(){
		this.loading = true;
		this.practicesService.fetchAll()
			.then(action((response) => {
				this.allPractices = response
				this.practices = this.allPractices;
			}))
			.finally(action(() => {
				this.loading = false;
			}))
	}

	onInputSearch = (query) => {
		if(!query.length){
			this.practices = this.allPractices
			return
		}

		this.practices = this.allPractices.filter((p) => {
			return p.name.toLowerCase().includes(query.toLowerCase())
		})
	}
}

export default PracticesPagePresenter
