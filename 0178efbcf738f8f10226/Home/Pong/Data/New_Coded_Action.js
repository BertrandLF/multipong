
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
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2 = db.assignTag('0178f98f54cec9b186a2');
const _instance_of_Ascender_0178f98f54cf1091a3b7    = db.assignTag('0178f98f54cf1091a3b7');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820 = db.assignTag('0178f98f54cf1c878820');
const _instance_of_Descender_0178f98f54cf3d965dd1   = db.assignTag('0178f98f54cf3d965dd1');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed = db.assignTag('0178f98f54cf503427ed');
const _instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374 = db.assignTag('0178f98f54cf9b7d4374');
const _instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1 = db.assignTag('0178f98f54cfa01f1bc1');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Data_0178f374f0d9562a9861               = '0178f374f0d9562a9861';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2
db.newModel(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, 'New Coded Action') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2);
// :_instance_of_Ascender_0178f98f54cf1091a3b7
db.newInstance(_instance_of_Ascender_0178f98f54cf1091a3b7)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_0178f98f54cf3d965dd1
db.newInstance(_instance_of_Descender_0178f98f54cf3d965dd1)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374
db.newInstance(_instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1
db.newInstance(_instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_0178f98f54cf1091a3b7        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1);
db.assign(_instance_of_Ascender_0178f98f54cf1091a3b7        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed);
db.assign(_instance_of_Descender_0178f98f54cf3d965dd1       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820);
db.assign(_instance_of_Descender_0178f98f54cf3d965dd1       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374);
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820);
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_0178f98f54cf1091a3b7        );
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_0178f98f54cf3d965dd1       );
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820);
db.assign(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed);
db.assign(_instance_of_Ascender_0178f98f54cf1091a3b7        , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f98f54cf503427ed);
db.assign(_instance_of_Ascender_0178f98f54cf1091a3b7        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_0178f98f54cfa01f1bc1);
db.assign(_instance_of_Descender_0178f98f54cf3d965dd1       , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f98f54cf1c878820);
db.assign(_instance_of_Descender_0178f98f54cf3d965dd1       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_0178f98f54cf9b7d4374);
db.assignOptional(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _Object_gooRel_ff022000000000000003, _Data_0178f374f0d9562a9861);
db.assignOptional(_instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2, _GOO_parentGooRel_ff02200000000000000u, _Data_0178f374f0d9562a9861);
db.assignOptional(_Data_0178f374f0d9562a9861, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2);
db.assignOptional(_Data_0178f374f0d9562a9861, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____New_Coded_Action_0178f98f54cec9b186a2);
