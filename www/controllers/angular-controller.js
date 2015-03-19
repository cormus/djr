angularConfig.controller('HomeCtrl', function($rootScope, $location){
	
	 //fecha o snap
    appClass.snap.close();
	
	//função apra ir para a opagina de novo cadastro
	$rootScope.novoCadastro = function()
	{
		$location.path('cadastro_formulario');
	}
	
});


var cadastroNomeValor       = 'Nome';
var cadastroEnderecoValor   = 'Endereço';
var cadastroCepValor        = 'CEP';
var cadastroCidadeValor     = 'Cidade';
var cadastroBairroValor     = 'Bairro';
var cadastroEstadoValor     = 'Estado';
var cadastroNascimentoValor = 'Data nascimento';
var cadastroEmailValor      = 'Email';
var cadastroTelefoneValor   = 'Telefone';
var cadastroCelularValor    = 'Celular';
var cadastroWhatsappValor   = 'Whatsapp';
var cadastroReceberInformacaoValor = '';
	
angularConfig.controller('CadastroFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	$rootScope.cadastroNomeValor       = cadastroNomeValor;
	$rootScope.cadastroEnderecoValor   = cadastroEnderecoValor;
	$rootScope.cadastroCepValor        = cadastroCepValor;
	$rootScope.cadastroCidadeValor     = cadastroCidadeValor;
	$rootScope.cadastroBairroValor     = cadastroBairroValor;
	$rootScope.cadastroEstadoValor     = cadastroEstadoValor;
	$rootScope.cadastroNascimentoValor = cadastroNascimentoValor;
	$rootScope.cadastroEmailValor      = cadastroEmailValor;
	$rootScope.cadastroTelefoneValor   = cadastroTelefoneValor;
	$rootScope.cadastroCelularValor    = cadastroCelularValor;
	$rootScope.cadastroWhatsappValor   = cadastroWhatsappValor;
	$rootScope.cadastroReceberInformacaoValor = cadastroReceberInformacaoValor;
	
	$rootScope.historicoFormulario = function()
	{
		var cadastroNome       = document.getElementsByName('cadastro-nome');
		var cadastroEndereco   = document.getElementsByName('cadastro-endereco');
		var cadastroCep        = document.getElementsByName('cadastro-cep');
		var cadastroCidade     = document.getElementsByName('cadastro-cidade');
		var cadastroBairro     = document.getElementsByName('cadastro-bairro');
		var cadastroEstado     = document.getElementsByName('cadastro-estado');
		var cadastroNascimento = document.getElementsByName('cadastro-nascimento');
		var cadastroEmail      = document.getElementsByName('cadastro-email');
		var cadastroTelefone   = document.getElementsByName('cadastro-telefone');
		var cadastroCelular    = document.getElementsByName('cadastro-celular');
		var cadastroWhatsapp   = document.getElementsByName('cadastro-whatsapp');
		var cadastroReceberInformacao = document.getElementsByName('cadastro-receber-informacao');

		$location.path('historico_formulario');
	}
});

angularConfig.controller('HistoricoFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	
	var historicoMedicamento     =  document.getElementsByName('historico-medicamento');
	var historicoMedicamentoTipo =  document.getElementsByName('historico-medicamento-tipo');
	var historicoAlergia       = document.getElementsByName('historico-alergia');
	var historicoAlergiaTipo   = document.getElementsByName('historico-alergia-tipo');
	var historicoCardiaco      = document.getElementsByName('historico-cardiaco');
	var historicoCardiacoTipo  = document.getElementsByName('historico-cardiaco-tipo');
	var historicoHormonais     = document.getElementsByName('historico-hormonais');
	var historicoHormonaisTipo = document.getElementsByName('historico-hormonais-tipo');
	var historicoTratamento    = document.getElementsByName('historico-tratamento');
	var historicoHipertensao   = document.getElementsByName('historico-hipertensao');
	var historicoDiabetico     = document.getElementsByName('historico-diabetico');
	var historicoClinico       = document.getElementsByName('historico-clinico');
	
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
	
	var habitosFiltro     = document.getElementsByName('habitos-filtro');
	var habitosCosmeticos = document.getElementsByName('habitos-cosmeticos');
	var habitosSol        = document.getElementsByName('habitos-sol');
	var habitosTabagismo  = document.getElementsByName('habitos-tabagismo');
	var habitosTratamento = document.getElementsByName('habitos-tratamento');
	var habitosTratamentoQuais = document.getElementsByName('habitos-tratamentoQuais');
	
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