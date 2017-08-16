// firebase.initializeApp({
// 	
// });
//const DB = firebase.database();

angular.module('Terapeuta', ['ngAnimate', 'ngRoute'])
  .controller('TerapeutaController', TerapeutaController);



function TerapeutaController($scope, $routeParams, $window) {
	var vm = this;
	$scope.nome="fodase"
	const DB = firebase.database();
	var ref2 = DB.ref("/Users/Terapeuta/");
	var dados = [];
	ref2.once("value").then(function(dataSnapshot) {
		var childData;
		dataSnapshot.forEach(function(childSnapshot) {
			childData = childSnapshot.val();
			dados = [...dados, childData]
			console.log(dados);
		});
		// setTimeout(function () {
			
		// }, 10);
		
	});
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			var ref = DB.ref("/Users/Terapeuta/" + user.uid);
			ref.once("value").then(function(dataSnapshot) {
				var childData;
				
				childData = dataSnapshot.val();
				
				vm.nome = childData.nome;
				$scope.$apply(function () {});
				
			});
		} else {
			document.getElementById("conteudo").innerHTML = "<h1>Vc está deslogado</h1>"
		}
	});
}