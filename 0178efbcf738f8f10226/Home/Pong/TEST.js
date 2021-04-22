
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Absolute_016c2458e07561155a49           = '016c2458e07561155a49';
const _Game_0178f3ab4e2c7c412ad6               = '0178f3ab4e2c7c412ad6';
const _Screen_01612df349e137bbb30b             = '01612df349e137bbb30b';
const _Screen_01612df3703450d895ac             = '01612df3703450d895ac';
const _Screen_Metadata_01618a2027d80b4df10a    = '01618a2027d80b4df10a';
const _Screenflow_0163f87334925ee199c4         = '0163f87334925ee199c4';
const _Screenflow_definition_016c8f3b84720165aac5 = '016c8f3b84720165aac5';
const _UI_App_011203100000000adef1             = '011203100000000adef1';
const _UI_Application_0113031000000aca1101     = '0113031000000aca1101';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Component_Rank_016c23bd12493a7e1b2e          = '016c23bd12493a7e1b2e';
const _Component_X_01611d99243ad989b91b             = '01611d99243ad989b91b';
const _Component_Y_01611d9962e7f4f9a26d             = '01611d9962e7f4f9a26d';
const _Group_Definition_Layout_016be61ab921cb3bdef9 = '016be61ab921cb3bdef9';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Renderable_Height_01611d9a0452a179c68f       = '01611d9a0452a179c68f';
const _Renderable_Width_01611d99ec0553b5926e        = '01611d99ec0553b5926e';
const _Screen_Metadata_x_01618a205d68abad408d       = '01618a205d68abad408d';
const _Screen_Metadata_y_01618a2046c5fefd75b6       = '01618a2046c5fefd75b6';


// Definition of tags of defined relations
const _Application_Definition_app_project_import_0171bc1f15da96dfdb89 = '0171bc1f15da96dfdb89';
const _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b = '0161ae97622bb21f335b';
const _Delegate_Delegator_Relation_016c3cb7742ec9309e0b = '016c3cb7742ec9309e0b';
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
const _instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e = db.assignTag('0178f45482ea0e085e1e');
const _instance_of_Screen_Metadata_0178f45482eaa9e7aabd = db.assignTag('0178f45482eaa9e7aabd');
const _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536 = db.assignTag('0178f45482eacf89c536');
const _instance_of_UI_App_model____TEST_0178f45482ead7145953 = db.assignTag('0178f45482ead7145953');
const _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7 = db.assignTag('0178f45482eae362d7f7');
const _instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9 = db.assignTag('0178f45482eaf80bdfa9');
const _instance_of_Absolute_0178f45482eaf90557c4    = db.assignTag('0178f45482eaf90557c4');
const _instance_of_Game____New_Game_0178f455bcbeede793dd = db.assignTag('0178f455bcbeede793dd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Default_Theme_01644110be563fae3bf9      = '01644110be563fae3bf9';
const _Pong_0178efbcf738f8f10226               = '0178efbcf738f8f10226';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_UI_App_model____TEST_0178f45482ead7145953
db.newModel(_instance_of_UI_App_model____TEST_0178f45482ead7145953, 'TEST') // tag and name of the model 
    .extends(_UI_Application_0113031000000aca1101).setModelTag(_UI_App_011203100000000adef1) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_UI_App_model____TEST_0178f45482ead7145953, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'TEST',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_UI_App_model____TEST_0178f45482ead7145953);
// >>model_dep:>>goo_dep::_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536
db.newModel(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536)
    .setModelTag(_Screenflow_definition_016c8f3b84720165aac5) // tag of the model
    .setParentTag(_Screenflow_0163f87334925ee199c4) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____TEST_0178f45482ead7145953)
    // Tag of parent goos
    .addParentGoo(_instance_of_UI_App_model____TEST_0178f45482ead7145953)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// >>model_dep::_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9
db.newModel(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9)
    .setModelTag(_Screen_01612df349e137bbb30b) // tag of the model
    .setParentTag(_Screen_01612df3703450d895ac) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536)
    // Tag of parent goos
    .addParentGoo(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536)
    .setNameOrProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'private',
        [_Object_name_ff023000000000000011]     :'Home screen',
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Home screen',
        'v'                                     :2
    });
// :_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e
db.newInstance(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e)
    .setModelTag(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Home screen',
        'v'                                     :1
    })
    .done();
// :_instance_of_Screen_Metadata_0178f45482eaa9e7aabd
db.newInstance(_instance_of_Screen_Metadata_0178f45482eaa9e7aabd)
    .setModelTag(_Screen_Metadata_01618a2027d80b4df10a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536)
    .setNameOrProperties({
        [_Screen_Metadata_x_01618a205d68abad408d]:19800,
        [_Screen_Metadata_y_01618a2046c5fefd75b6]:19800,
        'v'                                     :1
    })
    .done();
// :_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7
db.newInstance(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7)
    .setModelTag(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_UI_App_model____TEST_0178f45482ead7145953)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UIApp Screenflow',
        'v'                                     :1
    })
    .done();
// :_instance_of_Absolute_0178f45482eaf90557c4
db.newInstance(_instance_of_Absolute_0178f45482eaf90557c4)
    .setModelTag(_Absolute_016c2458e07561155a49) // tag of the model
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Game____New_Game_0178f455bcbeede793dd
db.newInstance(_instance_of_Game____New_Game_0178f455bcbeede793dd)
    .setModelTag(_Game_0178f3ab4e2c7c412ad6) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9)
    // Tag of parent goos
    .addParentGoo(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9)
    .setNameOrProperties({
        [_Component_Rank_016c23bd12493a7e1b2e]  :0,
        [_Component_X_01611d99243ad989b91b]     :8,
        [_Component_Y_01611d9962e7f4f9a26d]     :4,
        [_Object_name_ff023000000000000011]     :'New Game',
        [_Renderable_Height_01611d9a0452a179c68f]:776,
        [_Renderable_Width_01611d99ec0553b5926e]:1115,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9, {
        [_Group_Definition_Layout_016be61ab921cb3bdef9]:db.createReference(_instance_of_Absolute_0178f45482eaf90557c4),
        'v'                                     :3
    });
db.assign(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Screen_Metadata_0178f45482eaa9e7aabd );
db.assign(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _UI_App_Theme_016200d21c9069cf23b4                , _Default_Theme_01644110be563fae3bf9               );
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536, _UISwitcher_Definition_Initial_Screen_0163f988aa658051daeb, _instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e);
db.assign(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536);
db.assign(_instance_of_Game____New_Game_0178f455bcbeede793dd, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Game_0178f3ab4e2c7c412ad6                        );
db.assign(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7);
db.assign(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Game____New_Game_0178f455bcbeede793dd);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536, _Runnable_Definition_Conditional_Calls_Runnable_01692a4af82e8984742d, _instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e);
db.assign(_instance_of_Absolute_0178f45482eaf90557c4        , _Delegate_Delegator_Relation_016c3cb7742ec9309e0b , _instance_of_Game____New_Game_0178f455bcbeede793dd);
db.assign(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _Application_Definition_app_project_import_0171bc1f15da96dfdb89, _Pong_0178efbcf738f8f10226                        );
db.assign(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e, _Runnable_Anonymous_definition_01756a18d4921c103111, _instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7, _Runnable_Anonymous_definition_01756a18d4921c103111, _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536);
db.assign(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_Metadata_0178f45482eaa9e7aabd );
db.assign(_instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e, _Object_containsRel_ff02200000000000000f          , _instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9);
db.assign(_instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536, _Object_containsRel_ff02200000000000000f          , _instance_of_Home_screen____Home_screen_0178f45482ea0e085e1e);
db.assign(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _Object_containsRel_ff02200000000000000f          , _instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7);
db.assign(_instance_of_UIApp_Screenflow____UIApp_Screenflow_0178f45482eae362d7f7, _Object_containsRel_ff02200000000000000f          , _instance_of_Screenflow_definition_model____UIApp_Screenflow_0178f45482eacf89c536);
db.assign(_instance_of_Screen_model____Home_screen_0178f45482eaf80bdfa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Game____New_Game_0178f455bcbeede793dd);
db.assignOptional(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _Object_gooRel_ff022000000000000003, _Pong_0178efbcf738f8f10226);
db.assignOptional(_instance_of_UI_App_model____TEST_0178f45482ead7145953, _GOO_parentGooRel_ff02200000000000000u, _Pong_0178efbcf738f8f10226);
db.assignOptional(_Pong_0178efbcf738f8f10226, _Object_containsRel_ff02200000000000000f, _instance_of_UI_App_model____TEST_0178f45482ead7145953);
db.assignOptional(_Pong_0178efbcf738f8f10226, _Folder_itemRel_016a697ef00ce7554692, _instance_of_UI_App_model____TEST_0178f45482ead7145953);
