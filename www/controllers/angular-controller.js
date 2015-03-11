angularConfig.controller('TelaCtrl', function($rootScope, $location)
{
	window.setTimeout(function(){

		var gruposList		   = [];

		function loadGrupo()
		{
			//realiza uma busca no banco de dados
			function queryDBGrupo(tx) 
			{
				tx.executeSql("SELECT * FROM framwork_teste", [], querySuccessGrupo, errorCB);
			}
			function querySuccessGrupo(tx, results) 
			{
				gruposList = results.rows;
			}
			db.transaction(queryDBGrupo, errorCB);
		}
});

angularConfig.controller('ContatoCtrl', function($rootScope, $location)
{
    //fecha o snap
    appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    $rootScope.activetab = $location.path();
});  

angularConfig.controller('HomeCtrl', function($rootScope, $location)
{
	$location.path('tela');    
}); 