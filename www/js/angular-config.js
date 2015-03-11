var angularConfig = angular.module('app',['ngRoute']);
 
angularConfig.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   //$locationProvider.html5Mode(true);
	
   $routeProvider.when('/', {
      templateUrl : 'views/home.html',
      controller     : 'HomeCtrl',
   })
   .when('/cadastro_formulario', {
      templateUrl : 'views/cadastro_formulario.html',
      controller     : 'CadastroFormularioCtrl',
   })
   .when('/historico_formulario', {
      templateUrl : 'views/historico_formulario.html',
      controller     : 'HistoricoFormularioCtrl',
   })
   .when('/habitos_formulario', {
      templateUrl : 'views/habitos_formulario.html',
      controller  : 'HabitosFormularioCtrl',
   })
   .when('/historico_formulario', {
      templateUrl : 'views/tratamentos_formulario.html',
      controller  : 'TratamentosFormularioCtrl',
   })
   .when('/historico_formulario', {
      templateUrl : 'views/tratamentos_lista.html',
      controller  : 'TratamentosListaCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
    
});

angularConfig.run(function($rootScope, $location) {
    //$rootScope.$on("$routeChangeSuccess", function(event, next, current){
    //$rootScope.$on("$routeChangeStart", function(event, next, current){
    //$rootScope.$on("$locationChangeStart", function(event, next, current){
    //$rootScope.$on("$routeChangeStart", function(event, next, current){
            //$rootScope.voltar = ' aaaaa';
            //if($rootScope.voltar == undefined)
                //alert('undefinedaaa');
   //});
});