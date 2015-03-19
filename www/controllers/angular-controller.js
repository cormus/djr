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
	
	//cadastro-nome
	//cadastro-endereco
	//cadastro-cep
	//cadastro-cidade
	//cadastro-bairro
	//cadastro-estado
	//cadastro-nascimento
	//cadastro-email
	//cadastro-telefone
	//cadastro-celular
	//cadastro-whatsapp
	//cadastro-receer-informacao
	
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
	
	
	//historico-medicamento
	//historico-medicamento-tipo
	//historico-alergia
	//historico-alergia-tipo
	//historico-cardiaco
	//historico-cardiaco-tipo
	//historico-hormonais
	//historico-hormonais-tipo
	//historico-tratamento
	//historico-hipertensao
	//historico-diabetico
	//historico-clinico
	
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
	
	//habitos-filtro
	//habitos-cosmeticos
	//habitos-sol
	//habitos-tabagismo
	//habitos-tratamento
	//habitos-tratamento-quais
	
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