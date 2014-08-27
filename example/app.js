var app = angular.module( 'Example', ['renderteam.formBuilder']);

app.controller( 'Main', main );
main.$inject = ['$scope'];
function main ( scope ) {
  scope.form  = {
      name: 'Formulario',
      inputs: []
    };

  scope.save = function ( values ) {
    console.log(values);
  };
}
