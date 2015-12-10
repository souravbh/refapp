
define(['app'], function(landingApp){


  return function ($scope,$location) {

$scope.login = function(user){


		if(user && user.username && user.password){

				if(user && user.username && user.password){
				console.log(user);
				require(['/pnt/app.js'], function(pnt){

					$location.path('/pnt');

				});
				
		}
		}


}


};

});
