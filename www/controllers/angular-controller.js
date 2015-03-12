angularConfig.controller('HomeCtrl', function($rootScope, $location){
	
	 //fecha o snap
    appClass.snap.close();
	
	//função apra ir para a opagina de novo cadastro
	$rootScope.novoCadastro = function()
	{
		$location.path('cadastro_formulario');
	}
	
});
	
angularConfig.controller('CadastroFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	$rootScope.historicoFormulario = function()
	{
		$location.path('historico_formulario');
	}
});

angularConfig.controller('HistoricoFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	
	$rootScope.habitosFormulario = function()
	{
		$location.path('habitos_formulario');
	}
	
});  
	
angularConfig.controller('HabitosFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	$rootScope.tratamentosFormulario = function()
	{
		$location.path('tratamentos_formulario');
	}
});  
	
angularConfig.controller('TratamentosFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	$rootScope.tratamentosLista = function()
	{
		$location.path('tratamentos_lista');
	}
});  

angularConfig.controller('TratamentosListaCtrl', function($rootScope, $location){
	//$location.path('tela'); 
	//fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
}); 