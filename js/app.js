angular.module('Comunicacao', ['ngAnimate', 'ngRoute', 'User', 'UserPaciente', 'Terapeuta'])
  .config(config);

function config($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
	$routeProvider
    .otherwise({
      redirectTo: '/'
    });
    $routeProvider
		.when('/', {
			templateUrl: 'views/inicial.html'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'UserController',
			controllerAs: 'User'
		})
		.when('/loginParciente', {
			templateUrl: 'views/loginParciente.html',
			controller: 'UserPaciente',
			controllerAs: 'UserPaciente'
		})
		.when('/registerParciente', {
			templateUrl: 'views/formularioPaciente.html',
			controller: 'UserPaciente',
			controllerAs: 'UserPaciente'
		})
		.when('/register', {
			templateUrl: 'views/formulario.html',
			controller: 'UserController',
			controllerAs: 'User'
		})
		.when('/homeTerapeuta', {
			templateUrl: 'views/terapeutaHome.html',
			controller: 'TerapeutaController',
			controllerAs: 'Terapeuta'
		});
}


// var ref = db.ref("/Users");
// ref.once("value", function(snapshot) {
//    console.log(snapshot.val());
// });

// const _user = {
//   name: 'Isabela Maria Fortaleza Neves',
// 	email: 'isabela@gmail.com',
// 	cpf: '949.027.022-03',
// 	estado: 'Ceará',
// 	senha: '654321'
// }

// var usersRef = ref.child("Terapeuta");
// var newPostRef = usersRef.push();
// newPostRef.set(_user);