// import $ from 'jquery';
import marked from 'marked';

export var Get = {
	init (){
		this.ajax({
			url: 'https://api.github.com/repos/hexson/hexson.github.io/issuess',
			data: {
				filter: 'created',
				per_page: 10,
				page: 1
			},
			success: function(s,a){
				console.log(s,a)
			}
		});
	},
	ajax (config){
		var xmlHttpReg = null;
		config = config || {};
		config.type = (config.type || 'GET').toUpperCase();
		config.dataType = config.dataType || "json";
		if (window.ActiveXObject){
			xmlHttpReg = new ActiveXObject('Microsoft.XMLHTTP');
		}else if (window.XMLHttpRequest){
			xmlHttpReg = new XMLHttpRequest();
		}
		if (xmlHttpReg != null){
			if (config.type == 'GET'){
				xmlHttpReg.open('GET', config.url + '?' + this.formatParams(config.data), true);
				xmlHttpReg.send(null);
			}else if (config.type == 'POST'){
				xmlHttpReg.open('POST', config.url, true);
				xmlHttpReg.setRequestHeader('Content-Type', 'application/' + config.dataType);
				xmlHttpReg.send(config.data);
			}
			xmlHttpReg.onreadystatechange = this.result(xmlHttpReg,config.success,config.error);
		}
	},
	result (xhr,success,error){
		console.log(xhr)
		if ((xhr.readyState == 4 && (xhr.status >= 200 || xhr.status < 300)) ){
			success && success(xhr.responseText, xhr.responseXML);
			console.log(xhr.responseText, xhr.responseXML)
		}else {
			error && error(xhr.status);
		}
	},
	formatParams (data){
		let arr = [];
		for (let name in data){
			arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
		}
		return arr.join("&");
	}
}