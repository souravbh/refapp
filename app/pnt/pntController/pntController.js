
//var phonecatApp = angular.module('phonecatApp', []);
define(['pnt/app.js'], function(pntApp){

pntApp.controller('selectSourceAcct',[$scope, function ($scope) {

$scope.header = "Transfer between own accounts";

$scope.subheader = "Select to and from accounts";

$scope.contextualDisplayTop = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

$scope.contextualDisplayBottom = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose";

$scope.sourceAccounts = [
{'identifier':'-1',
'formatValue':'Select a account'
},
{'identifier':'123451',
'formatValue':'Checking 12xxx345'
},
{'identifier':'123452',
'formatValue':'Saving 12xxx345'
},
{'identifier':'123453',
'formatValue':'Loan 12xxx345'
},
{'identifier':'123454',
'formatValue':'Credit 12xxx345'
},
{'identifier':'123455',
'formatValue':'Mortgage 12xxx345'
},
{'identifier':'123456',
'formatValue':'Sbob 12xxx345'
}];

$scope.destinationAccounts =[
{'identifier':'-1',
'formatValue':'Select a account'
},
{'identifier':'123451',
'formatValue':'Checking 12xxx345'
},
{'identifier':'123452',
'formatValue':'Saving 12xxx345'
},
{'identifier':'123453',
'formatValue':'Loan 12xxx345'
},
{'identifier':'123454',
'formatValue':'Credit 12xxx345'
},
{'identifier':'123455',
'formatValue':'Mortgage 12xxx345'
},
{'identifier':'123456',
'formatValue':'Sbob 12xxx345'
}];


}]);




});
