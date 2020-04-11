var tableElement = document.querySelector("table");
var todos = ["name", "surname", "gender", "region", "age", "phone", "email", "password", "photo", "off"];
var minhaPromise = function(){
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		// https://uinames.com/api/?ext&region=Brazil
		xhr.open('GET', 'randomuser.me/api/?ext&region=Brazil&amount=100');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				}else{
					reject("Erro na requisição");
				}
			}
		}
	});
}

minhaPromise()
	.then(
	function(response){
		var peoples = response;
		for(p of peoples){
			var trElement = document.createElement("tr");
			for(todo of todos){
				if(p[todo]){
					var tdElement = document.createElement("td");
					var textTodo = document.createTextNode(p[todo]);
					tdElement.appendChild(textTodo);
					trElement.appendChild(tdElement);
					tableElement.appendChild(trElement);	
				}else{
					break;
				}
			}
		}
	})
	.catch(function (error){
		console.warn(error);
	});
