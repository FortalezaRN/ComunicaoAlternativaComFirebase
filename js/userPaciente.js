angular.module('UserPaciente', ['ngAnimate', 'ngRoute'])
  .controller('UserPaciente', UserPaciente);

function UserPaciente($routeParams, $window) {

	const DB = firebase.database();
	var vm = this;

	vm.pacienteSubmit = pacienteSubmit;
	
	function pacienteSubmit(){
		var uid;
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				var _user = {
					nome: vm.nome,
					email: vm.email,
					cpf: vm.cpf,
					idade: vm.idade,
					sexo: vm.sexo,
					endereco: vm.endereco,
					patologia: vm.patologia,			
					senha: vm.senha
				}

				var ref = DB.ref("/Users/Terapeuta/" + user.uid + "/Alunos");
				var childData, id;
				ref.once("value").then(function(dataSnapshot) {
					id = (dataSnapshot.val()) ? 1 : 1;
					dataSnapshot.forEach(function(childSnapshot) {
						childData = childSnapshot.val().i
						console.log(childData);
						id = childData + 1;
						id = id.toString();
						console.log(id);
					});
					ref.child(id).set(_user);
					$window.location.href = '/homeTerapeuta';
				});
				
				console.log(_user);
			}
		});					
	}
}