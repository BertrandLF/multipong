
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _MainScreen_0178f3944ca3868808df         = '0178f3944ca3868808df';
const _Screen_Metadata_01618a2027d80b4df10a    = '01618a2027d80b4df10a';
const _Screenflow_0163f87334925ee199c4         = '0163f87334925ee199c4';
const _Screenflow_definition_016c8f3b84720165aac5 = '016c8f3b84720165aac5';
const _UI_App_011203100000000adef1             = '011203100000000adef1';
const _UI_Application_0113031000000aca1101     = '0113031000000aca1101';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Screen_Metadata_x_01618a205d68abad408d       = '01618a205d68abad408d';
const _Screen_Metadata_y_01618a2046c5fefd75b6       = '01618a2046c5fefd75b6';


// Definition of tags of defined relations
const _Application_Definition_app_project_import_0171bc1f15da96dfdb89 = '0171bc1f15da96dfdb89';
const _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b = '0161ae97622bb21f335b';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Anonymous_definition_01756a18d4921c103111 = '01756a18d4921c103111';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d = '01692a4af82e8984742d';
const _Runnable_Definition_of_runnable_01692a4af82e8984742b = '01692a4af82e8984742b';
const _UI_App_Theme_016200d21c9069cf23b4            = '016200d21c9069cf23b4';
const _UISwitcher_Definition_Initial_Screen_0163f988aa658051daeb = '0163f988aa658051daeb';


// Definition of tags used for newly created instances 
const _instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c = db.assignTag('0178f39e54fc5e620c2c');
const _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257 = db.assignTag('0178f39e54fcaa668257');
const _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14 = db.assignTag('0178f39e54fcdf8f5e14');
const _instance_of_Screen_Metadata_0178f39e8a4f2dbae212 = db.assignTag('0178f39e8a4f2dbae212');
const _instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4 = db.assignTag('0178f39e8a4fc08c71a4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Default_Theme_01644110be563fae3bf9      = '01644110be563fae3bf9';
const _GameApp_0178f39af43a4d3a98b6            = '0178f39af43a4d3a98b6';
const _Pong_0178efbcf738f8f10226               = '0178efbcf738f8f10226';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c
db.newModel(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, 'GameApp') // tag and name of the model 
    .extends(_UI_Application_0113031000000aca1101).setModelTag(_UI_App_011203100000000adef1) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'GameApp',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c);
// >>model_dep::_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14
db.newModel(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14)
    .setModelTag(_Screenflow_definition_016c8f3b84720165aac5) // tag of the model
    .setParentTag(_Screenflow_0163f87334925ee199c4) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c)
    // Tag of parent goos
    .addParentGoo(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// :_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257
db.newInstance(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257)
    .setModelTag(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Metadata_0178f39e8a4f2dbae212
db.newInstance(_instance_of_Screen_Metadata_0178f39e8a4f2dbae212)
    .setModelTag(_Screen_Metadata_01618a2027d80b4df10a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14)
    .setNameOrProperties({
        [_Screen_Metadata_x_01618a205d68abad408d]:19792,
        [_Screen_Metadata_y_01618a2046c5fefd75b6]:19786,
        'v'                                     :1
    })
    .done();
// :_instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4
db.newInstance(_instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4)
    .setModelTag(_MainScreen_0178f3944ca3868808df) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Screen_Metadata_0178f39e8a4f2dbae212 );
db.assign(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _UI_App_Theme_016200d21c9069cf23b4                , _Default_Theme_01644110be563fae3bf9               );
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14, _UISwitcher_Definition_Initial_Screen_0163f988aa658051daeb, _instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14);
db.assign(_instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _MainScreen_0178f3944ca3868808df                  );
db.assign(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14, _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d, _instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4);
db.assign(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _Application_Definition_app_project_import_0171bc1f15da96dfdb89, _Pong_0178efbcf738f8f10226                        );
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257, _Runnable_Anonymous_definition_01756a18d4921c103111, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14);
db.assign(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _Object_containsRel_ff02200000000000000f          , _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f39e54fcaa668257, _Object_containsRel_ff02200000000000000f          , _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f39e54fcdf8f5e14, _Object_containsRel_ff02200000000000000f          , _instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4);
db.assign(_instance_of_MainScreen____MainScreen_0178f39e8a4fc08c71a4, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Metadata_0178f39e8a4f2dbae212 );
db.assignOptional(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _Object_gooRel_ff022000000000000003, _GameApp_0178f39af43a4d3a98b6);
db.assignOptional(_instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c, _GOO_parentGooRel_ff02200000000000000u, _GameApp_0178f39af43a4d3a98b6);
db.assignOptional(_GameApp_0178f39af43a4d3a98b6, _Object_containsRel_ff02200000000000000f, _instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c);
db.assignOptional(_GameApp_0178f39af43a4d3a98b6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_UI_App_model____GameApp_0178f39e54fc5e620c2c);
