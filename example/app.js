var app = angular.module( 'Example', ['ardroz.formBuilder']);

app.controller( 'Main', main );
main.$inject = ['$scope'];
function main ( scope ) {
  scope.form  = {
      name: 'Formulario',
      inputs: []
    };
}
