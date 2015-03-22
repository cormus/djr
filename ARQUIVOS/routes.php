<?php

header("Access-Control-Allow-Origin:*");
/*
	//cria um usuário
	$user = Sentry::createUser(array(
		'email'     => 'super@super.com',
		'password'  => 'super',
		'activated' => true,
	));
	$adminGroup = Sentry::findGroupById(1);
	$user->addGroup($adminGroup);

    //cria um usuário
	$user = Sentry::createUser(array(
		'email'     => 'funcionario@funcionario.com',
		'password'  => 'funcionario',
		'activated' => true,
	));
	$adminGroup = Sentry::findGroupById(5);
	$user->addGroup($adminGroup);

    //cria um usuário
	$user = Sentry::createUser(array(
		'email'     => 'morador@morador.com',
		'password'  => 'morador',
		'activated' => true,
	));
	$adminGroup = Sentry::findGroupById(3);
	$user->addGroup($adminGroup);

//cria um usuário
	$user = Sentry::createUser(array(
		'email'     => 'sindico@sindico.com',
		'password'  => 'sindico',
		'activated' => true,
	));
	$adminGroup = Sentry::findGroupById(2);
	$user->addGroup($adminGroup);
/**/
	
/**
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
| 
| http://laravel.com/docs/routing
|
*/

// Todas as outras rotas:
//Route::get('/login',  'AuthController@loginForm');
//Route::post('/login', 'AuthController@login');
//Route::get('/logout', 'AuthController@logout');
//Route::get('/auth/passwordReset/{token}',  'AuthController@passwordReset');
//Route::post('/auth/recoverPassword',       'AuthController@recoverPassword');
//Route::post('/auth/passwordReset/{token}', 'AuthController@passwordReset');


$user  		   = Sentry::getUser();
$grupo  	   = 0; 
$id_condominio = 0; 
if($user)
{
	$admin = Sentry::findGroupByName('admins');
	if($user->inGroup($admin))
	{
		$grupo = 1;
	}
	
	$id_condominio = $user->id_condominio;
}

//ajax do sistema para quando existem relação entro os campos select
Route::post('/ajax/relationship', function()
{
    $id      = Input::get('id');
    $id_camp = Input::get('id_camp');
    $table   = Input::get('table');
    $camp    = Input::get('camp');
    return DB::table($table)->where($id_camp, '=', $id)->select('id', $camp)->get();
});


//ajax do sistema para quando existem relação entro os campos select
Route::post('/ajax/cadastro', function()
{
    $post = Input::get('data');
    $data = json_decode($post);
    
    $noticia = array();
    if(isset($data->noticiaTelefone) && $data->noticiaTelefone)
        $noticia[] = 1;
    if(isset($data->noticiaSms) && $data->noticiaSms)
        $noticia[] = 2;
    if(isset($data->noticiaWhatsapp) && $data->noticiaWhatsapp)
        $noticia[] = 3;
    if(isset($data->noticiaEmail) && $data->noticiaEmail)
        $noticia[] = 4;
    
    $data = array(
          'nome' => $data->nome,
          'endereco' => $data->endereco,
          'cep' => $data->cep,
          'bairro' => $data->bairro,
          'cidade' => $data->cidade,
          'estado' => $data->estado,
          'nascimento' => $data->nascimento,
          'telefone' => $data->telefone,
          'email' => $data->email,
          'celular' => $data->celular,
          'whatsapp' => $data->whatsapp,
          'noticia' => json_encode($noticia)
    );
    return DB::table('djr_cadastros')->insertGetId($data); 
});

$myApp = new XApp();
$myApp->setTitle('Djr');


$page  = new XPage();
    $page->setShowInMenu(false);
    $page->setRout('/login/{action?}');
    $page->setTitle('login');
    $homeController = new AuthController();
    $page->addModule('center', $homeController);
    $page->addHtml('header', View::make('adm_header', array()));
    $page->setTemplate('app.login');
$myApp->addPage($page);



$page  = new XPage();
    $page->setRout('/');
    $page->setTitle('Djr');
    $page->setLoginRequired(false);
    $page->setShowInMenuIfLogged(false);
    $page->setShowInMenu(false);
    $page->setTemplate('layouts.adm');
    //$homeController = new HomeController();
    //$page->addModule('center', $homeController->render());
    //$asideController = new AsideController();
    //$page->addModule('aside', $asideController->render());
$myApp->addPage($page);



$page  = new XPage();
    $page->setTemplate('layouts.adm');
    $page->setLoginRequired(true);
    $page->setShowInMenuIfLogged(true);
    $page->setRout('cadastros');
    $page->setTitle('Cadastros');
    $page->setIco('fa fa-cogs');

    $form = new XForm();
    $form->setTable('djr_cadastros');
    $form->setTitle('Cadastros');

 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('nome');
	$field->setTitle('Nome');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('endereco');
	$field->setTitle('Endereço');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('cep');
	$field->setTitle('Cep');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('bairro');
	$field->setTitle('Bairro');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('cidade');
	$field->setTitle('Cidade');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('estado');
	$field->setTitle('Estado');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('nascimento');
	$field->setTitle('Data nascimento');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('telefone');
	$field->setTitle('Telefone');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('email');
	$field->setTitle('Email');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	 
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('celular');
	$field->setTitle('Celular');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);
	
 	//coloca o campo de texto
	$field = $form->field('text');
	$field->setName('whatsapp');
	$field->setTitle('Whatsapp');
	$field->setRequired(false);
	$field->setFilter(true);
	$form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('noticia');
    $field->setTitle('Receber informações via');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Telefone',
        2 => 'SMS',
        3 => 'Whatsapp',
        4 => 'Email'
    ));
    $form->addField($field);


    //histórico clínico

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('medicamento');
    $field->setTitle('Está com algum medicamento em uso ?');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de texto
	$field = $form->field('text');
	$field->setName('medicamento_valor');
	$field->setTitle('Medicamento');
	$field->setRequired(false);
	$field->setFilter(true);
    $field->setShowList(false);
	$form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('alergia');
    $field->setTitle('Tem antecedentes alérgicos? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de texto
	$field = $form->field('text');
	$field->setName('alergia_valor');
	$field->setTitle('Alergia');
	$field->setRequired(false);
	$field->setFilter(true);
 $field->setShowList(false);
	$form->addField($field);


    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('cardiaco');
    $field->setTitle('Possui alterações cardíacas?');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de texto
	$field = $form->field('text');
	$field->setName('cardiaco_valor');
	$field->setTitle('Cardiaco');
	$field->setRequired(false);
	$field->setFilter(true);
 $field->setShowList(false);
	$form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('hormonais');
    $field->setTitle('Possui distúrbios hormonais?');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de texto
	$field = $form->field('text');
	$field->setName('hormonais_valor');
	$field->setTitle('Hormonais');
	$field->setRequired(false);
	$field->setFilter(true);
 $field->setShowList(false);
	$form->addField($field);



    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('tratamento_atual');
    $field->setTitle('Você está em tratamento medico Atual?');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);
	

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('hipertensao');
    $field->setTitle('Tem hipertensão arterial? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    
    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('diabetico');
    $field->setTitle('É diabético? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('textarea');
    $field->setName('clinico');
    $field->setTitle('E algum outro informações de histórico clínico? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $form->addField($field);


    //habitos


    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('filtro');
    $field->setTitle('Você sempre usa filtro solar? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('cosmetico');
    $field->setTitle('Faz uso de cosméticos?');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('sol');
    $field->setTitle('Você se expõe ao sol diariamente? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('tabagismo');
    $field->setTitle('Tabagismo? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('tratamento_anterior');
    $field->setTitle('Já fez tratamentos estético anterior? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de texto
	$field = $form->field('text');
	$field->setName('tratamento_anterior_valor');
	$field->setTitle('Tratamentos anteriores');
	$field->setRequired(false);
	$field->setFilter(true);
 $field->setShowList(false);
	$form->addField($field);


    
    
    //tratamentos


    
    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('depilacao');
    $field->setTitle('Já fez depilação a Laser? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);
    
   
    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('toxina');
    $field->setTitle('Você gostaria de conhecer os beneficios da toxina botulinica? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('preenchimento');
    $field->setTitle('Já realizou ou conhece o tratamento com preenchimento?   ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);

    
    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('rejuvenescimento');
    $field->setTitle('Você já conhece nossas técnicas de rejuvenescimento facial a laser? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Sim',
        0 => 'Não'
    ));
    $form->addField($field);
    

    //coloca o campo de select
    $field = $form->field('checkbox');
    $field->setName('estetico');
    $field->setTitle('Você gostaria de fazer tratamentos estéticos? ');
    $field->setRequired(true);
    $field->setFilter(false);
    $field->setShowList(false);
    $field->setOptions(array(
        1 => 'Facial',
        2 => 'Corporal',
        3 => 'Nenhum',
    ));
    $form->addField($field);


    $page->addModule('center', $form);    
$myApp->addPage($page);  	



//coloca os módulos padrão a todas as páginas
$headerController = new  HeaderController();
$FooterController = new  FooterController();
$MenuController   = new  MenuController();
$PageHeaderController = new  PageHeaderController();
$myApp->addDefullModules(array(
    'header' => $headerController->render(),
    'header_adm' => View::make('adm_header', array()),
    'footer' => $FooterController->render(),
    'pageheader' => $PageHeaderController->render(),
    'menu'   => $MenuController->render(array('projectName' => $myApp->getTitle(), 'pages' => $myApp->getPages())),
    'menu_adm'   => View::make('adm_menu', array('projectName' => $myApp->getTitle(), 'pages' => $myApp->getPages(), 'logued' => Sentry::check(), 'email' => ''))
));


//executa o aplicativo
$myApp->run();