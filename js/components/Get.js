import $ from 'jquery';
import marked from 'marked';

var data = {};

function getInit (){
	let now = parseInt(new Date().getTime()/1000);
	data.time = data.time || 0;
	if (now - data.time < 300) return data.data;
	$.ajax({
		type: 'GET',
		url: 'https://api.github.com/repos/hexson/hexson.github.io/issues',
		data: {
			filter: 'created',
			per_page: 10,
			page: 1
		},
		dataType: 'json',
		success: result => {
			data.time = parseInt(new Date().getTime()/1000);
			getInit.data = result;
		}
	});
	console.log(getInit.data);
	return getInit.data
}
getInit();

export var Get = getInit();