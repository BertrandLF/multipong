
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _File_ff021000000000000030               = 'ff021000000000000030';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e = db.assignTag('0178f48fb5ca071cfb6e');
const _instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f = db.assignTag('0178f48fb5cb371b9e7f');
const _instance_of_Ascender_0178f48fb5cb37d28b97    = db.assignTag('0178f48fb5cb37d28b97');
const _instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14 = db.assignTag('0178f48fb5cb76f76f14');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c = db.assignTag('0178f48fb5cbcb49244c');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784 = db.assignTag('0178f48fb5cbd2b0b784');
const _instance_of_Descender_0178f48fb5cbda378a1f   = db.assignTag('0178f48fb5cbda378a1f');
const _instance_of_Runnable_Input____file_0178f4910fa5b0a5d514 = db.assignTag('0178f4910fa5b0a5d514');
const _instance_of_Documentation_Function_Metadata_0178f49f62cba4db4523 = db.assignTag('0178f49f62cba4db4523');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Game_0178f3ab3520acba5680               = '0178f3ab3520acba5680';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e
db.newModel(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, 'Emit sound') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Emit sound',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e);
// :_instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f
db.newInstance(_instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_0178f48fb5cb37d28b97
db.newInstance(_instance_of_Ascender_0178f48fb5cb37d28b97)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14
db.newInstance(_instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_0178f48fb5cbda378a1f
db.newInstance(_instance_of_Descender_0178f48fb5cbda378a1f)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_0178f4910fa5b0a5d514
db.newInstance(_instance_of_Runnable_Input____file_0178f4910fa5b0a5d514)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_0178f49f62cba4db4523
db.newInstance(_instance_of_Documentation_Function_Metadata_0178f49f62cba4db4523)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0178f4910fa5b0a5d514-File | File |  |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nUses Howler.js, plays the file given as input.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Plays the sound given as input',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_0178f48fb5cb37d28b97        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14);
db.assign(_instance_of_Ascender_0178f48fb5cb37d28b97        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c);
db.assign(_instance_of_Descender_0178f48fb5cbda378a1f       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784);
db.assign(_instance_of_Descender_0178f48fb5cbda378a1f       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_0178f4910fa5b0a5d514);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c);
db.assign(_instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____file_0178f4910fa5b0a5d514, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                        );
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_0178f48fb5cb37d28b97        );
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_0178f48fb5cbda378a1f       );
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_0178f49f62cba4db4523);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_0178f4910fa5b0a5d514);
db.assign(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_0178f49f62cba4db4523);
db.assign(_instance_of_Ascender_0178f48fb5cb37d28b97        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_0178f48fb5cb76f76f14);
db.assign(_instance_of_Ascender_0178f48fb5cb37d28b97        , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f48fb5cbcb49244c);
db.assign(_instance_of_Descender_0178f48fb5cbda378a1f       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_0178f48fb5cb371b9e7f);
db.assign(_instance_of_Descender_0178f48fb5cbda378a1f       , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f48fb5cbd2b0b784);
db.assignOptional(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _Object_gooRel_ff022000000000000003, _Game_0178f3ab3520acba5680);
db.assignOptional(_instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e, _GOO_parentGooRel_ff02200000000000000u, _Game_0178f3ab3520acba5680);
db.assignOptional(_Game_0178f3ab3520acba5680, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e);
db.assignOptional(_Game_0178f3ab3520acba5680, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Emit_sound_0178f48fb5ca071cfb6e);
