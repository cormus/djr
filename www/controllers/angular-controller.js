var usuario = {};
var historico = {};
var habito = {};
var tratamento = {};
angularConfig.controller('HomeCtrl', ['$rootScope', '$location', function($rootScope, $location){
	
	appClass = new App();
	appClass.initialize();
	appClass.initIScroll();
		
	 //fecha o snap
    appClass.snap.close();
    
    $rootScope.page = {};
    $rootScope.page.cadastro 		 = false;
    $rootScope.page.cadastro 		 = false;
    $rootScope.page.historico 	     = false;
    $rootScope.page.habitos 	     = false;
    $rootScope.page.tratamentos 	 = false;
    $rootScope.page.tratamentosLista = false;
	
	$rootScope.dadosEnviados = false;
	
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
		
		/*
		if(!usuario.nome)
		{
			alert('Informe seu nome');
			return false;
		}
		if(!usuario.endereco)
		{
			alert('Informe seu endereco');
			return false;
		}
		if(!usuario.cep)
		{
			alert('Informe seu CEP');
			return false;
		}
		if(!usuario.cidade)
		{
			alert('Informe sua cidade');
			return false;
		}
		if(!usuario.bairro)
		{
			alert('Informe seu bairro');
			return false;
		}
		if(!usuario.estado)
		{
			alert('Informe seu estado');
			return false;
		}
		if(!usuario.nascimento)
		{
			alert('Informe sua data de nascimento');
			return false;
		}
		if(!usuario.email)
		{
			alert('Informe seu email');
			return false;
		}
		if(!usuario.telefone)
		{
			alert('Informe seu telefone');
			return false;
		}
		if(!usuario.celular)
		{
			alert('Informe seu celular');
			return false;
		}
		if(!usuario.whatsapp)
		{
			alert('Informe seu whatsapp');
			return false;
		}
		*/
		
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

		/*
		if(!historico.medicamento)
		{
			alert('Informe se está com algum medicamento em uso');
			return false;
		}
		else if(historico.medicamento == 1)
		{
			if(!historico.medicamento_valor){
				alert('Informe qual o medicamento');
				return false;
			}
		}
		
		if(!historico.alergia)
		{
			alert('Informe se você é alérgico');
			return false;
		}
		else if(historico.alergia == 1)
		{
			if(!historico.alergia_valor){
				alert('Informe informe qual o tipo de alergia');
				return false;
			}
		}
		
		if(!historico.cardiaco)
		{
			alert('Informe se você é cardiáco');
			return false;
		}
		else if(historico.cardiaco == 1)
		{
			if(!historico.cardiaco_valor){
				alert('Informe qual problema cardiáco');
				return false;
			}
		}
		
		if(!historico.hormonais)
		{
			alert('Informe se você tem problemas hormonais');
			return false;
		}
		else if(historico.hormonais == 1)
		{
			if(!historico.hormonais_valor){
				alert('Informe quais os problemas hormonais');
				return false;
			}
		}
		
		if(!historico.tratamento_atual)
		{
			alert('Informe se você esta em tratamento médico');
			return false;
		}
		
		if(!historico.hipertensao)
		{
			alert('Informe se você tem hipertensão');
			return false;
		}
		
		if(!historico.diabetico)
		{
			alert('Informe se você é diabético');
			return false;
		}
		*/
		
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
		
		/*
		if(!habito.filtro)
		{
			alert('Informe se você usa filtro solar');
			return false;
		}
		
		if(!habito.cosmetico)
		{
			alert('Informe se você faz uso de cosméticos');
			return false;
		}
		
		if(!habito.sol)
		{
			alert('Informe se você se expõe ao sol');
			return false;
		}
		
		if(!habito.tabagismo)
		{
			alert('Informe se você faz uso de cigarros');
			return false;
		}
		
		if(!habito.tratamento_anterior)
		{
			alert('Informe se você ja fez tratamentos estéticos');
			return false;
		}
		else if(habito.tratamento_anterior == 1)
		{
			if(!habito.tratamento_anterior_valor){
				alert('Informe quais tratamentos estéticos');
				return false;
			}
		}
		*/
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
		
		/*
		if(!tratamento.depilacao)
		{
			alert('Informe se já fez depilação a Laser');
			return false;
		}
		
		if(!tratamento.toxina)
		{
			alert('Informe se gostaria de conhecer a toxina botulínica');
			return false;
		}
		
		if(!tratamento.preenchimento)
		{
			alert('Informe se realizou ou conhece o tratamento com preenchimento');
			return false;
		}
		
		if(!tratamento.rejuvenescimento)
		{
			alert('Informe se conhece nossas técnicas de rejuvenescimento facial a laser');
			return false;
		}
		
		if(!tratamento.estetico)
		{
			alert('Informe se gostaria de fazer tratamentos estéticos');
			return false;
		}
		*/
		
		$rootScope.page.tratamentosLista = true;
        setTimeout(function(){
            appClass.myScroll.refresh();
            appClass.myScroll.scrollToElement('#tratamentos-lista');
        }, 200);
	}
    
    $rootScope.cadastrar = function()
	{
        var dataValues = {
            usuario:usuario,
            historico:historico,
            habito:habito,
            tratamento:tratamento
        };
        
		//id INTEGER PRIMARY KEY ASC, status INTEGER, data
		db.transaction(function(tx){
			tx.executeSql("INSERT INTO  djr_cadastros(status, data) VALUES (0, ?)", [JSON.stringify(dataValues)], function(tx, results){
			 	//se a tabela não existir ela é criada
				//$rootScope.enviarDados(results.insertId);
				$rootScope.enviarTodosDados();
				
				$rootScope.dadosEnviados = true;
				//aplica as mudanças
				$rootScope.$apply();
			});
		}, errorCB);
	}
	
	//$rootScope.enviarDados = function(id)
	$rootScope.enviarTodosDados = function()
	{
		db.transaction(function(tx){
			 tx.executeSql("SELECT * FROM djr_cadastros WHERE status = ?", [0], function(tx, results){
				 var len = results.rows.length;
				 for(var i=0; i < len; i++)
				 {
					var row  = results.rows.item(i);
					enviarDado(row.id);
				 }
			});
		}, errorCB);
	}
    
    setTimeout(function(){
        appClass.initIScroll();
    }, 1000);
	
}]);


function enviarDado(id)
{
	db.transaction(function(tx){
		 tx.executeSql("SELECT * FROM djr_cadastros WHERE id = ?", [id], function(tx, results){
			var row  = results.rows.item(0);
			var ajax = new Ajax();
			ajax.post(
				'http://localhost/htdocs/djr/adm/public/ajax/cadastro',
				JSON.parse(row.data),
				function(data)
				{
					if(data)
					{
						updateCadastro(row.id);
					}
				}
			);
		});
	}, errorCB);
}

function updateCadastro(id)
{
	db.transaction(function(tx){
		tx.executeSql("UPDATE djr_cadastros SET status = 1 WHERE id = ?", [id], function(tx, results){ });
	}, errorCB);
}
	
angularConfig.controller('AdmCtrl', function($rootScope, $location){
    
	db.transaction(function(tx){
		 tx.executeSql("SELECT * FROM djr_cadastros", [], function(tx, results){
			 $rootScope.rows = [];
			 var len = results.rows.length;
			 for(var i=0; i < len; i++)
			 {
				var row  = results.rows.item(i);
				row.values = JSON.parse(row.data);
				$rootScope.rows.push(row);
			 }
			 
			 //aplica as mudanças
			 $rootScope.$apply();
			 appClass.myScroll.refresh();
		});
	}, errorCB);
	
	$rootScope.enviarDado = function(id)
	{	
		enviarDado(id);
	}

    appClass.myScroll.refresh();
    
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
});



/*

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

*/