import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, LABELS } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';


export default class Tag extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: 11,
			data: null
		}
	}
	componentDidMount (){
		// 
	}
	render (){
		if (this.state.loading){
			return (
				<Loading />
			)
		}else if (this.state.error !== null){
			return (
				<Reload />
			)
		}else {}
	}
}