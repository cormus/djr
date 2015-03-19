var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);

//deleteTable();

function errorCB(err) 
{
	console.log("Error processing SQL: ");
	console.log(err);
}

function deleteTable()
{
	db.transaction(function(tx){
		tx.executeSql("DROP TABLE IF EXISTS user");
	}, errorCB);
}

/*------------- CRIA A TABELA DE stoledo_grupo----------------*/

//verifica se a tabela existe
db.transaction(function(tx){
	tx.executeSql("SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'framwork_teste'", [], function(tx, results){
		 //se a tabela não existir ela é criada
		 if(results.rows.length == 0)
		 {
		 	createTableCadastros();
		 }
	});
}, errorCB);
//função para criar
function createTableCadastros()
{
	db.transaction(function(tx) {
		tx.executeSql("CREATE TABLE IF NOT EXISTS djr_cadastros (id INTEGER PRIMARY KEY ASC, status INTEGER, nome TEXT, cadastro TEXT, historico TEXT, habitos TEXT, tratamentos TEXT)");
		//tx.executeSql("INSERT INTO djr_cadastros (id, nome) VALUES (1,  ?)", ['dados']);
	}, errorCB);
}