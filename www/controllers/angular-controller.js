var usuario = {};
var historico = {};
var habito = {};
var tratamento = {};
angularConfig.controller('HomeCtrl', ['$rootScope', '$location', function($rootScope, $location){
	
	 //fecha o snap
    appClass.snap.close();
    
    $rootScope.page = {};
    $rootScope.page.cadastro = false;
    $rootScope.page.cadastro = false;
    $rootScope.page.historico = false;
    $rootScope.page.habitos = false;
    $rootScope.page.tratamentos = false;
    $rootScope.page.tratamentosLista = false;
	
	//função apra ir para a opagina de novo cadastro
	$rootScope.novoCadastro = function()
	{
        $rootScope.page.cadastro= true;
        setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#cadastro-formulario');
        }, 200);
	}
    
    $rootScope.usuario = usuario;
    $rootScope.historicoFormulario = function(data)
	{
        usuario = data;
        $rootScope.page.historico = true;
        setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#historico-formulario');
        }, 200);
    }
    
    $rootScope.historico = historico;
    $rootScope.habitosFormulario = function(data)
	{
         historico = data;
		 $rootScope.page.habitos = true;
         setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#habitos-formulario');
        }, 200);
	}
    
    $rootScope.habito = habito;
    $rootScope.tratamentosFormulario = function(data)
	{
         habito = data;
		 $rootScope.page.tratamentos = true;
         setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#tratamentos-formulario');
        }, 200);
	}
    
    $rootScope.tratamento = tratamento;
	$rootScope.tratamentosLista = function(data)
	{
        tratamento = data;
		$rootScope.page.tratamentosLista = true;
        setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#tratamentos-lista');
        }, 200);
	}
    
    setTimeout(function(){
        appClass.initIScroll();
    }, 1000);
}]);

var cadastroNomeValor       = '';
var cadastroEnderecoValor   = '';
var cadastroCepValor        = '';
var cadastroCidadeValor     = '';
var cadastroBairroValor     = '';
var cadastroEstadoValor     = '';
var cadastroNascimentoValor = '';
var cadastroEmailValor      = '';
var cadastroTelefoneValor   = '';
var cadastroCelularValor    = '';
var cadastroWhatsappValor   = '';
var cadastroReceberInformacaoValor = [];
	
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
	
	$rootScope.cadastroReceberInformacaoValor1 = (cadastroReceberInformacaoValor.indexOf('1') > -1);
	$rootScope.cadastroReceberInformacaoValor2 = (cadastroReceberInformacaoValor.indexOf('2') > -1);
	$rootScope.cadastroReceberInformacaoValor3 = (cadastroReceberInformacaoValor.indexOf('3') > -1);
	$rootScope.cadastroReceberInformacaoValor4 = (cadastroReceberInformacaoValor.indexOf('4') > -1);
	
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
		
		cadastroReceberInformacaoValor = [];
		for (var i=0;i<cadastroReceberInformacao.length;i++)
		{ 
			if (cadastroReceberInformacao[i].checked == true)
			{ 
				cadastroReceberInformacaoValor.push(cadastroReceberInformacao[i].value);
			}
		}
		
		cadastroNomeValor       = cadastroNome[0].value;
		cadastroEnderecoValor   = cadastroEndereco[0].value;
		cadastroCepValor        = cadastroCep[0].value;
		cadastroCidadeValor     = cadastroCidade[0].value;
		cadastroBairroValor     = cadastroBairro[0].value;
		cadastroEstadoValor     = cadastroEstado[0].value;
		cadastroNascimentoValor = cadastroNascimento[0].value;
		cadastroEmailValor      = cadastroEmail[0].value;
		cadastroTelefoneValor   = cadastroTelefone[0].value;
		cadastroCelularValor    = cadastroCelular[0].value;
		cadastroWhatsappValor   = cadastroWhatsapp[0].value;
		
		$location.path('historico_formulario');
	}
	
    
	//aplica as mudanças
	//$rootScope.$apply();
});


var historicoMedicamentoValor     = '';
var historicoMedicamentoTipoValor = '';
var historicoAlergiaValor       = '';
var historicoAlergiaTipoValor   = '';
var historicoCardiacoValor      = '';
var historicoCardiacoTipoValor  = '';
var historicoHormonaisValor     = '';
var historicoHormonaisTipoValor = '';
var historicoTratamentoValor    = '';
var historicoHipertensaoValor   = '';
var historicoDiabeticoValor     = '';
var historicoClinicoValor       = '';

angularConfig.controller('HistoricoFormularioCtrl', function($rootScope, $location){
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
	
	$rootScope.historicoMedicamentoValor    = historicoMedicamentoValor;
	$rootScope.historicoMedicamentoTipoValor = historicoMedicamentoTipoValor;
	
	$rootScope.historicoAlergiaValor      = historicoAlergiaValor;
	$rootScope.historicoAlergiaTipoValor   = historicoAlergiaTipoValor;
	
	$rootScope.historicoCardiacoValor     = historicoCardiacoValor;
	$rootScope.historicoCardiacoTipoValor  = historicoCardiacoTipoValor;
	
	$rootScope.historicoHormonaisValor    = historicoHormonaisValor;
	$rootScope.historicoHormonaisTipoValor = historicoHormonaisTipoValor;
	
	$rootScope.historicoTratamentoValor   = historicoTratamentoValor;
	
	$rootScope.historicoHipertensaoValor  = historicoHipertensaoValor;
	
	$rootScope.historicoDiabeticoValor    = historicoDiabeticoValor;
	
	$rootScope.historicoClinicoValor       = historicoClinicoValor;
	
	$rootScope.habitosFormulario = function()
	{
		var historicoMedicamento     = document.getElementsByName('historico-medicamento');
		var historicoMedicamentoTipo = document.getElementsByName('historico-medicamento-tipo');
		var historicoAlergia         = document.getElementsByName('historico-alergia');
		var historicoAlergiaTipo     = document.getElementsByName('historico-alergia-tipo');
		var historicoCardiaco        = document.getElementsByName('historico-cardiaco');
		var historicoCardiacoTipo    = document.getElementsByName('historico-cardiaco-tipo');
		var historicoHormonais       = document.getElementsByName('historico-hormonais');
		var historicoHormonaisTipo   = document.getElementsByName('historico-hormonais-tipo');
		var historicoTratamento      = document.getElementsByName('historico-tratamento');
		var historicoHipertensao     = document.getElementsByName('historico-hipertensao');
		var historicoDiabetico       = document.getElementsByName('historico-diabetico');
		var historicoClinico         = document.getElementsByName('historico-clinico');
		
		historicoMedicamentoTipoValor = historicoMedicamentoTipo[0].value;
		historicoAlergiaTipoValor     = historicoAlergiaTipo[0].value;
		historicoCardiacoTipoValor    = historicoCardiacoTipo[0].value;
		historicoHormonaisTipoValor   = historicoHormonaisTipo[0].value;
		historicoClinicoValor         = historicoClinico[0].value;
		
		for(var i=0;i<historicoMedicamento.length;i++)
		{ 
			if (historicoMedicamento[i].checked == true)
			{ 
				historicoMedicamentoValor = historicoMedicamento[i].value;
			}
		}
		
		for(var i=0;i<historicoAlergia.length;i++)
		{ 
			if (historicoAlergia[i].checked == true)
			{ 
				historicoAlergiaValor = historicoAlergia[i].value;
			}
		}
		
		for(var i=0;i<historicoCardiaco.length;i++)
		{ 
			if (historicoCardiaco[i].checked == true)
			{ 
				historicoCardiacoValor = historicoCardiaco[i].value;
			}
		}
		
		for(var i=0;i<historicoHormonais.length;i++)
		{ 
			if (historicoHormonais[i].checked == true)
			{ 
				historicoHormonaisValor = historicoHormonais[i].value;
			}
		}
		
		for(var i=0;i<historicoTratamento.length;i++)
		{ 
			if (historicoTratamento[i].checked == true)
			{ 
				historicoTratamentoValor = historicoTratamento[i].value;
			}
		}
		
		for(var i=0;i<historicoHipertensao.length;i++)
		{ 
			if (historicoHipertensao[i].checked == true)
			{ 
				historicoHipertensaoValor = historicoHipertensao[i].value;
			}
		}
		
		for(var i=0;i<historicoDiabetico.length;i++)
		{ 
			if (historicoDiabetico[i].checked == true)
			{ 
				historicoDiabeticoValor = historicoDiabetico[i].value;
			}
		}
		
		//$location.path('habitos_formulario');
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