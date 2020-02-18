var tableElement = document.querySelector("table");

<<<<<<< HEAD
var todos = ["name", "surname", "gender", "region", "age", "phone", "email", "password", "photo", "off"];
=======
var todos = ["name", "surname", "gender", "region", "off"];
>>>>>>> 7ead2a97883aa7b8bff518a6942c4701fa604ad5

var minhaPromise = function(){
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
<<<<<<< HEAD
		// https://uinames.com/api/?ext&region=Brazil
		xhr.open('GET', 'https://uinames.com/api/?ext&region=Brazil&amount=250');
=======

		xhr.open('GET', 'https://uinames.com/api/?amount=250');
>>>>>>> 7ead2a97883aa7b8bff518a6942c4701fa604ad5
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
<<<<<<< HEAD

=======
>>>>>>> 7ead2a97883aa7b8bff518a6942c4701fa604ad5
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