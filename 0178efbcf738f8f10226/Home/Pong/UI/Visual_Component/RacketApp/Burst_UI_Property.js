
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
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Property_ff021000000000000005           = 'ff021000000000000005';
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
const _instance_of_Ascender_0178f9926b06472076a4    = db.assignTag('0178f9926b06472076a4');
const _instance_of_Runnable_Input____New_input_0178f9926b06603221f6 = db.assignTag('0178f9926b06603221f6');
const _instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe = db.assignTag('0178f9926b066797bebe');
const _instance_of_Descender_0178f9926b06ab2e202b   = db.assignTag('0178f9926b06ab2e202b');
const _instance_of_Runnable_Output____New_output_0178f9926b06c977e376 = db.assignTag('0178f9926b06c977e376');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e = db.assignTag('0178f9926b06d905e87e');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c = db.assignTag('0178f9926b06dc50a57c');
const _instance_of_Runnable_Input____property_0178f996e8506873b754 = db.assignTag('0178f996e8506873b754');
const _instance_of_Runnable_Input____instance_0178f997145d41fd9352 = db.assignTag('0178f997145d41fd9352');
const _instance_of_Runnable_Input____value_0178f9974ab23d5c6af4 = db.assignTag('0178f9974ab23d5c6af4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _RacketApp_0178f39b0bbbad11abdd          = '0178f39b0bbbad11abdd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe
db.newModel(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, 'Burst UI Property') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Burst UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe);
// :_instance_of_Ascender_0178f9926b06472076a4
db.newInstance(_instance_of_Ascender_0178f9926b06472076a4)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_0178f9926b06603221f6
db.newInstance(_instance_of_Runnable_Input____New_input_0178f9926b06603221f6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_0178f9926b06ab2e202b
db.newInstance(_instance_of_Descender_0178f9926b06ab2e202b)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_0178f9926b06c977e376
db.newInstance(_instance_of_Runnable_Output____New_output_0178f9926b06c977e376)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____property_0178f996e8506873b754
db.newInstance(_instance_of_Runnable_Input____property_0178f996e8506873b754)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____instance_0178f997145d41fd9352
db.newInstance(_instance_of_Runnable_Input____instance_0178f997145d41fd9352)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'instance',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____value_0178f9974ab23d5c6af4
db.newInstance(_instance_of_Runnable_Input____value_0178f9974ab23d5c6af4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_0178f9926b06472076a4        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_0178f9926b06603221f6);
db.assign(_instance_of_Ascender_0178f9926b06472076a4        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c);
db.assign(_instance_of_Descender_0178f9926b06ab2e202b       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e);
db.assign(_instance_of_Descender_0178f9926b06ab2e202b       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_0178f9926b06c977e376);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____property_0178f996e8506873b754);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____instance_0178f997145d41fd9352);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____value_0178f9974ab23d5c6af4);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c);
db.assign(_instance_of_Runnable_Input____New_input_0178f9926b06603221f6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_0178f9926b06c977e376, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____property_0178f996e8506873b754, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____instance_0178f997145d41fd9352, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____value_0178f9974ab23d5c6af4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_0178f9926b06472076a4        );
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_0178f9926b06ab2e202b       );
db.assign(_instance_of_Ascender_0178f9926b06472076a4        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_0178f9926b06603221f6);
db.assign(_instance_of_Ascender_0178f9926b06472076a4        , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0178f9926b06dc50a57c);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____property_0178f996e8506873b754);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____instance_0178f997145d41fd9352);
db.assign(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____value_0178f9974ab23d5c6af4);
db.assign(_instance_of_Descender_0178f9926b06ab2e202b       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_0178f9926b06c977e376);
db.assign(_instance_of_Descender_0178f9926b06ab2e202b       , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0178f9926b06d905e87e);
db.assignOptional(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _Object_gooRel_ff022000000000000003, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe, _GOO_parentGooRel_ff02200000000000000u, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Burst_UI_Property_0178f9926b066797bebe);
