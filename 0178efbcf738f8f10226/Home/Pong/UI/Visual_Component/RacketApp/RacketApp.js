
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _GameOverScreen_0178f39c4908d9be6692     = '0178f39c4908d9be6692';
const _PlayingScreen_0178f39dcd281e39173b      = '0178f39dcd281e39173b';
const _Property_mapper_0162d3e045580eac6c53    = '0162d3e045580eac6c53';
const _Screen_Metadata_01618a2027d80b4df10a    = '01618a2027d80b4df10a';
const _Screen_Transition_01619a10457e749fdf59  = '01619a10457e749fdf59';
const _Screenflow_0163f87334925ee199c4         = '0163f87334925ee199c4';
const _Screenflow_definition_016c8f3b84720165aac5 = '016c8f3b84720165aac5';
const _UI_App_011203100000000adef1             = '011203100000000adef1';
const _UI_Application_0113031000000aca1101     = '0113031000000aca1101';
const _WelcomeScreen_0178f39bd876585f73df      = '0178f39bd876585f73df';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _PlayingScreen_Player_0178f4821d66be5fbc38    = '0178f4821d66be5fbc38';
const _Screen_Metadata_x_01618a205d68abad408d       = '01618a205d68abad408d';
const _Screen_Metadata_y_01618a2046c5fefd75b6       = '01618a2046c5fefd75b6';
const _WelcomeScreen_Player_0178f452d7481f747885    = '0178f452d7481f747885';


// Definition of tags of defined relations
const _Application_Definition_app_project_import_0171bc1f15da96dfdb89 = '0171bc1f15da96dfdb89';
const _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b = '0161ae97622bb21f335b';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Property_mapper_from_0162bef0c00ce7782cee    = '0162bef0c00ce7782cee';
const _Property_mapper_to_0162bef120e8ca8f61a3      = '0162bef120e8ca8f61a3';
const _Runnable_Anonymous_definition_01756a18d4921c103111 = '01756a18d4921c103111';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d = '01692a4af82e8984742d';
const _Runnable_Definition_of_runnable_01692a4af82e8984742b = '01692a4af82e8984742b';
const _Screen_Transition_from_01619a16a406bf504c9e  = '01619a16a406bf504c9e';
const _Screen_Transition_propertyMapper_0162befc703dfd7b93b4 = '0162befc703dfd7b93b4';
const _Screen_Transition_to_01619a16a406bf504c9f    = '01619a16a406bf504c9f';
const _UI_App_Theme_016200d21c9069cf23b4            = '016200d21c9069cf23b4';
const _UISwitcher_Definition_Initial_Screen_0163f988aa658051daeb = '0163f988aa658051daeb';


// Definition of tags used for newly created instances 
const _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720 = db.assignTag('0178f39c965e6b036720');
const _instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a = db.assignTag('0178f39c965e7bb2b67a');
const _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768 = db.assignTag('0178f39c965e80858768');
const _instance_of_Screen_Metadata_0178f39d962c03e52c05 = db.assignTag('0178f39d962c03e52c05');
const _instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8 = db.assignTag('0178f39d962c0f68a2c8');
const _instance_of_Screen_Metadata_0178f39df6c94dccd03b = db.assignTag('0178f39df6c94dccd03b');
const _instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6 = db.assignTag('0178f39df6c9f12c84c6');
const _instance_of_Screen_Transition_0178f39e0614485c57fc = db.assignTag('0178f39e0614485c57fc');
const _instance_of_Screen_Metadata_0178f3c330d93f65a791 = db.assignTag('0178f3c330d93f65a791');
const _instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6 = db.assignTag('0178f3c330d9e7f340e6');
const _instance_of_Screen_Transition_0178f3c33b01eb5494e6 = db.assignTag('0178f3c33b01eb5494e6');
const _instance_of_Property_mapper_0178f4828bbfedac2e79 = db.assignTag('0178f4828bbfedac2e79');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Default_Theme_01644110be563fae3bf9      = '01644110be563fae3bf9';
const _Pong_0178efbcf738f8f10226               = '0178efbcf738f8f10226';
const _RacketApp_0178f39b0bbbad11abdd          = '0178f39b0bbbad11abdd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a
db.newModel(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, 'RacketApp') // tag and name of the model 
    .extends(_UI_Application_0113031000000aca1101).setModelTag(_UI_App_011203100000000adef1) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'RacketApp',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a);
// >>model_dep::_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768
db.newModel(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setModelTag(_Screenflow_definition_016c8f3b84720165aac5) // tag of the model
    .setParentTag(_Screenflow_0163f87334925ee199c4) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a)
    // Tag of parent goos
    .addParentGoo(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// :_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720
db.newInstance(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720)
    .setModelTag(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Metadata_0178f39d962c03e52c05
db.newInstance(_instance_of_Screen_Metadata_0178f39d962c03e52c05)
    .setModelTag(_Screen_Metadata_01618a2027d80b4df10a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        [_Screen_Metadata_x_01618a205d68abad408d]:20273,
        [_Screen_Metadata_y_01618a2046c5fefd75b6]:19803,
        'v'                                     :1
    })
    .done();
// :_instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8
db.newInstance(_instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8)
    .setModelTag(_GameOverScreen_0178f39c4908d9be6692) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Metadata_0178f39df6c94dccd03b
db.newInstance(_instance_of_Screen_Metadata_0178f39df6c94dccd03b)
    .setModelTag(_Screen_Metadata_01618a2027d80b4df10a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        [_Screen_Metadata_x_01618a205d68abad408d]:19883,
        [_Screen_Metadata_y_01618a2046c5fefd75b6]:19759,
        'v'                                     :1
    })
    .done();
// :_instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6
db.newInstance(_instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6)
    .setModelTag(_PlayingScreen_0178f39dcd281e39173b) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Transition_0178f39e0614485c57fc
db.newInstance(_instance_of_Screen_Transition_0178f39e0614485c57fc)
    .setModelTag(_Screen_Transition_01619a10457e749fdf59) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Metadata_0178f3c330d93f65a791
db.newInstance(_instance_of_Screen_Metadata_0178f3c330d93f65a791)
    .setModelTag(_Screen_Metadata_01618a2027d80b4df10a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        [_Screen_Metadata_x_01618a205d68abad408d]:19557,
        [_Screen_Metadata_y_01618a2046c5fefd75b6]:19765,
        'v'                                     :1
    })
    .done();
// :_instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6
db.newInstance(_instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6)
    .setModelTag(_WelcomeScreen_0178f39bd876585f73df) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Transition_0178f3c33b01eb5494e6
db.newInstance(_instance_of_Screen_Transition_0178f3c33b01eb5494e6)
    .setModelTag(_Screen_Transition_01619a10457e749fdf59) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_mapper_0178f4828bbfedac2e79
db.newInstance(_instance_of_Property_mapper_0178f4828bbfedac2e79)
    .setModelTag(_Property_mapper_0162d3e045580eac6c53) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Screen_Transition_0178f39e0614485c57fc, _Screen_Transition_from_01619a16a406bf504c9e      , _instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6);
db.assign(_instance_of_Screen_Transition_0178f3c33b01eb5494e6, _Screen_Transition_from_01619a16a406bf504c9e      , _instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6);
db.assign(_instance_of_Screen_Transition_0178f39e0614485c57fc, _Screen_Transition_to_01619a16a406bf504c9f        , _instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8);
db.assign(_instance_of_Screen_Transition_0178f3c33b01eb5494e6, _Screen_Transition_to_01619a16a406bf504c9f        , _instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6);
db.assign(_instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Screen_Metadata_0178f39d962c03e52c05 );
db.assign(_instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Screen_Metadata_0178f39df6c94dccd03b );
db.assign(_instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Screen_Metadata_0178f3c330d93f65a791 );
db.assign(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _UI_App_Theme_016200d21c9069cf23b4                , _Default_Theme_01644110be563fae3bf9               );
db.assign(_instance_of_Property_mapper_0178f4828bbfedac2e79 , _Property_mapper_from_0162bef0c00ce7782cee        , _WelcomeScreen_Player_0178f452d7481f747885        );
db.assign(_instance_of_Property_mapper_0178f4828bbfedac2e79 , _Property_mapper_to_0162bef120e8ca8f61a3          , _PlayingScreen_Player_0178f4821d66be5fbc38        );
db.assign(_instance_of_Screen_Transition_0178f3c33b01eb5494e6, _Screen_Transition_propertyMapper_0162befc703dfd7b93b4, _instance_of_Property_mapper_0178f4828bbfedac2e79 );
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _UISwitcher_Definition_Initial_Screen_0163f988aa658051daeb, _instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768);
db.assign(_instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _GameOverScreen_0178f39c4908d9be6692              );
db.assign(_instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _PlayingScreen_0178f39dcd281e39173b               );
db.assign(_instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _WelcomeScreen_0178f39bd876585f73df               );
db.assign(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d, _instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d, _instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d, _instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6);
db.assign(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _Application_Definition_app_project_import_0171bc1f15da96dfdb89, _Pong_0178efbcf738f8f10226                        );
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720, _Runnable_Anonymous_definition_01756a18d4921c103111, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720, _Object_containsRel_ff02200000000000000f          , _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768);
db.assign(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _Object_containsRel_ff02200000000000000f          , _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39c965e6b036720);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Transition_0178f39e0614485c57fc);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Transition_0178f3c33b01eb5494e6);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39c965e80858768, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_mapper_0178f4828bbfedac2e79 );
db.assign(_instance_of_GameOverScreen____GameOverScreen_0178f39d962c0f68a2c8, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Metadata_0178f39d962c03e52c05 );
db.assign(_instance_of_PlayingScreen____PlayingScreen_0178f39df6c9f12c84c6, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Metadata_0178f39df6c94dccd03b );
db.assign(_instance_of_WelcomeScreen____WelcomeScreen_0178f3c330d9e7f340e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Metadata_0178f3c330d93f65a791 );
db.assignOptional(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _Object_gooRel_ff022000000000000003, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a, _GOO_parentGooRel_ff02200000000000000u, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Object_containsRel_ff02200000000000000f, _instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_UI_App_model____RacketApp_0178f39c965e7bb2b67a);
