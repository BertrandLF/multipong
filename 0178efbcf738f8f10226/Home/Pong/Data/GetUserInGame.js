
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Function_01621fb84e320000f000           = '01621fb84e320000f000';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Function_Metadata_01621f6ab29d770a3bba  = '01621f6ab29d770a3bba';
const _Game_0178f3776a851b19e18d               = '0178f3776a851b19e18d';
const _Get_Related_Objects_0168190b633088746a60 = '0168190b633088746a60';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _ObjectRef_0163c9ae01f2d6e9ca49          = '0163c9ae01f2d6e9ca49';
const _Pipe_0168a431d91f25780000               = '0168a431d91f25780000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Function_Metadata_x_01621f6ab58c2f884654     = '01621f6ab58c2f884654';
const _Function_Metadata_y_01621f6ab6ac89348f20     = '01621f6ab6ac89348f20';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Pipe_Source_Value_0168a431d91f25780001       = '0168a431d91f25780001';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b = '0161ae97622bb21f335b';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _Game_playing_0178f37946d6c3959d61            = '0178f37946d6c3959d61';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _ObjectRef_reference_0169b5a8a33144fb0b49     = '0169b5a8a33144fb0b49';
const _Pipe_Destination_Input_0168a431d91f2578000b  = '0168a431d91f2578000b';
const _Pipe_Destination_Scope_0168a431d91f2578000a  = '0168a431d91f2578000a';
const _Pipe_Source_Output_0168a431d91f25780003      = '0168a431d91f25780003';
const _Pipe_Source_Scope_0168a431d91f25780002       = '0168a431d91f25780002';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_of_runnable_01692a4af82e8984742b = '01692a4af82e8984742b';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00 = db.assignTag('0178f3e9195ce68bad00');
const _instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef = db.assignTag('0178f3e97d714a5c00ef');
const _instance_of_Descender_0178f3e97d7151997da6   = db.assignTag('0178f3e97d7151997da6');
const _instance_of_Runnable_Input____Game_0178f3e97d716c57a781 = db.assignTag('0178f3e97d716c57a781');
const _instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69 = db.assignTag('0178f3e9df9c15bf8b69');
const _instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341 = db.assignTag('0178f3e9df9c7db31341');
const _instance_of_Ascender_0178f3e9df9cc8949970    = db.assignTag('0178f3e9df9cc8949970');
const _instance_of_Function_Metadata_0178f3ea08e5789a442e = db.assignTag('0178f3ea08e5789a442e');
const _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f = db.assignTag('0178f3ea08e5fe20044f');
const _instance_of_Pipe_0178f3ea10be2c308807        = db.assignTag('0178f3ea10be2c308807');
const _instance_of_Pipe_0178f3ea1415300a1a12        = db.assignTag('0178f3ea1415300a1a12');
const _instance_of_ObjectRef_0178f3ea5bdf3ba02e67   = db.assignTag('0178f3ea5bdf3ba02e67');
const _instance_of_Pipe_0178f3ea69ff9e89f4cd        = db.assignTag('0178f3ea69ff9e89f4cd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Data_0178f374f0d9562a9861               = '0178f374f0d9562a9861';
const _Object_0168190b63307b8b2cf9             = '0168190b63307b8b2cf9';
const _Relation_0168190b63308379f6e2           = '0168190b63308379f6e2';
const _Value_0168190b633078dba329              = '0168190b633078dba329';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00
db.newModel(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, 'GetUserInGame') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Function_01621fb84e320000f000) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'GetUserInGame',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00);
// :_instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef
db.newInstance(_instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_0178f3e97d7151997da6
db.newInstance(_instance_of_Descender_0178f3e97d7151997da6)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Game_0178f3e97d716c57a781
db.newInstance(_instance_of_Runnable_Input____Game_0178f3e97d716c57a781)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Game',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69
db.newInstance(_instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UsersList',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341
db.newInstance(_instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_0178f3e9df9cc8949970
db.newInstance(_instance_of_Ascender_0178f3e9df9cc8949970)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// >>goo_dep::_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f
db.newInstance(_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f)
    .setModelTag(_Get_Related_Objects_0168190b633088746a60) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    // Tag of parent goos
    .addParentGoo(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'private',
        'v'                                     :1
    })
    .done();
// :_instance_of_Function_Metadata_0178f3ea08e5789a442e
db.newInstance(_instance_of_Function_Metadata_0178f3ea08e5789a442e)
    .setModelTag(_Function_Metadata_01621f6ab29d770a3bba) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f)
    .setNameOrProperties({
        [_Function_Metadata_x_01621f6ab58c2f884654]:20002,
        [_Function_Metadata_y_01621f6ab6ac89348f20]:19906,
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f3ea10be2c308807
db.newInstance(_instance_of_Pipe_0178f3ea10be2c308807)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f3ea1415300a1a12
db.newInstance(_instance_of_Pipe_0178f3ea1415300a1a12)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_ObjectRef_0178f3ea5bdf3ba02e67
db.newInstance(_instance_of_ObjectRef_0178f3ea5bdf3ba02e67)
    .setModelTag(_ObjectRef_0163c9ae01f2d6e9ca49) // tag of the model
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f3ea69ff9e89f4cd
db.newInstance(_instance_of_Pipe_0178f3ea69ff9e89f4cd)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Pipe_0178f3ea1415300a1a12, {
        [_Pipe_Source_Value_0168a431d91f25780001]:db.createReference(_instance_of_ObjectRef_0178f3ea5bdf3ba02e67),
        'v'                                     :3
    });
db.assign(_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f, _Brick_Metadata_$_40_$Runtime$_41_$_metadata_0161ae97622bb21f335b, _instance_of_Function_Metadata_0178f3ea08e5789a442e);
db.assign(_instance_of_Ascender_0178f3e9df9cc8949970        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341);
db.assign(_instance_of_Ascender_0178f3e9df9cc8949970        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69);
db.assign(_instance_of_Descender_0178f3e97d7151997da6       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Runnable_Input____Game_0178f3e97d716c57a781);
db.assign(_instance_of_Descender_0178f3e97d7151997da6       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef);
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Game_0178f3e97d716c57a781);
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69);
db.assign(_instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Game_0178f3776a851b19e18d                        );
db.assign(_instance_of_Runnable_Input____Game_0178f3e97d716c57a781, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Game_0178f3776a851b19e18d                        );
db.assign(_instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Pipe_0178f3ea10be2c308807            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Descender_0178f3e97d7151997da6       );
db.assign(_instance_of_Pipe_0178f3ea69ff9e89f4cd            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f);
db.assign(_instance_of_Pipe_0178f3ea10be2c308807            , _Pipe_Source_Output_0168a431d91f25780003          , _instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef);
db.assign(_instance_of_Pipe_0178f3ea69ff9e89f4cd            , _Pipe_Source_Output_0168a431d91f25780003          , _Value_0168190b633078dba329                       );
db.assign(_instance_of_Pipe_0178f3ea10be2c308807            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f);
db.assign(_instance_of_Pipe_0178f3ea1415300a1a12            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f);
db.assign(_instance_of_Pipe_0178f3ea69ff9e89f4cd            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Ascender_0178f3e9df9cc8949970        );
db.assign(_instance_of_Pipe_0178f3ea10be2c308807            , _Pipe_Destination_Input_0168a431d91f2578000b      , _Object_0168190b63307b8b2cf9                      );
db.assign(_instance_of_Pipe_0178f3ea1415300a1a12            , _Pipe_Destination_Input_0168a431d91f2578000b      , _Relation_0168190b63308379f6e2                    );
db.assign(_instance_of_Pipe_0178f3ea69ff9e89f4cd            , _Pipe_Destination_Input_0168a431d91f2578000b      , _instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341);
db.assign(_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Get_Related_Objects_0168190b633088746a60         );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_0178f3e97d7151997da6       );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_0178f3e9df9cc8949970        );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f);
db.assign(_instance_of_ObjectRef_0178f3ea5bdf3ba02e67       , _ObjectRef_reference_0169b5a8a33144fb0b49         , _Game_playing_0178f37946d6c3959d61                );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Game_0178f3e97d716c57a781);
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69);
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Get_Related_Objects_0178f3ea08e5fe20044f);
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f3ea10be2c308807            );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f3ea1415300a1a12            );
db.assign(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f3ea69ff9e89f4cd            );
db.assign(_instance_of_Descender_0178f3e97d7151997da6       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_0178f3e97d714a5c00ef);
db.assign(_instance_of_Descender_0178f3e97d7151997da6       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Game_0178f3e97d716c57a781);
db.assign(_instance_of_Ascender_0178f3e9df9cc8949970        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____UsersList_0178f3e9df9c15bf8b69);
db.assign(_instance_of_Ascender_0178f3e9df9cc8949970        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_0178f3e9df9c7db31341);
db.assign(_instance_of_Get_Related_Objects_0178f3ea08e5fe20044f, _Object_containsRel_ff02200000000000000f          , _instance_of_Function_Metadata_0178f3ea08e5789a442e);
db.assignOptional(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _Object_gooRel_ff022000000000000003, _Data_0178f374f0d9562a9861);
db.assignOptional(_instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00, _GOO_parentGooRel_ff02200000000000000u, _Data_0178f374f0d9562a9861);
db.assignOptional(_Data_0178f374f0d9562a9861, _Object_containsRel_ff02200000000000000f, _instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00);
db.assignOptional(_Data_0178f374f0d9562a9861, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_model____GetUserInGame_0178f3e9195ce68bad00);
