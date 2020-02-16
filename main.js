var tableElement = document.querySelector("table");

var todos = ["name", "surname", "gender", "region", "off"];

var minhaPromise = function(){
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://uinames.com/api/?amount=250');
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
		//istElement.innerHTML = '';
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