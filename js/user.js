
firebase.initializeApp({
		
});


angular.module('User', ['ngAnimate', 'ngRoute'])
  .controller('UserController', UserController);



function UserController($routeParams, $window) {

	var vm = this;
  	console.log("vm ", vm);
	  firebase.auth().signOut().then(function() {
				console.log("saiu");
			}, function(error) {
				console.log("errado ", error);
			});
	vm.terapeutaSubmit = terapeutaSubmit;
	vm.loginSubmit = loginSubmit;

	function loginSubmit(){
		console.log(vm.email, vm.password);
		firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(function(){
			console.log("logou");
			$window.location.href = '/homeTerapeuta';
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
				alert('The password is too weak.');
			} else {
				alert(errorMessage);
			}
			console.log(errorCode, errorMessage);
		});
	}
	function terapeutaSubmit(){
	
		const DB = firebase.database();
			console.log("porra é");
		// ref.once("value", function(snapshot) {
		// 	console.log(snapshot.val());
		// });

		var _user = {
			nome: vm.nome,
			email: vm.email,
			cpf: vm.cpf,
			estado: vm.estado,
			senha: vm.senha
		}
		
		firebase.auth().createUserWithEmailAndPassword(_user.email, _user.senha).then(function(result){
			_user.uid = result.uid;
			var ref = DB.ref("/Users/Terapeuta/"+_user.uid).set(_user);	
			console.log(result);
			$window.location.href = '/login';
			firebase.auth().signOut().then(function() {
				console.log("saiu");
			}, function(error) {
				console.log("errado ", error);
			});
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
			
	}
}