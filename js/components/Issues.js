import $ from 'jquery';


import { BASE } from '../constants/Base.js';


export default class Issues {
	componentDidMount (props){
		$.ajax({
			url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
			data: {
				filter: 'created',
				per_page: 10000
			},
			success: result => {
				// props.issues = result;
				console.log(props);
				window.issues = result;
			},
			error: msg => {
				console.log('warning: get issues error!');
			}
		})
	}
}