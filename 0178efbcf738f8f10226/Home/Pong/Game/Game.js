
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_UI_Component_0166446c1f124f078a11 = '0166446c1f124f078a11';
const _Component_01612df263119ee77622          = '01612df263119ee77622';
const _Composer_Property_016d1bb681929c2cc3f0  = '016d1bb681929c2cc3f0';
const _Game_0178f3776a851b19e18d               = '0178f3776a851b19e18d';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _UI_Event_0163fe51d83dad2a0f4b           = '0163fe51d83dad2a0f4b';


// Definition of tags of defined properties
const _Composer_Property_computable_016d1bb681929c2cc3f3 = '016d1bb681929c2cc3f3';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Composer_Property_Category_016d1bb681929c2cc3f4 = '016d1bb681929c2cc3f4';
const _Composer_Property_InlineEditor_016d1bb681929c2cc3f6 = '016d1bb681929c2cc3f6';
const _Composer_Property_Property_016d1bb681929c2cc3f5 = '016d1bb681929c2cc3f5';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Object_propertyRel_ff02200000000000000c      = 'ff02200000000000000c';
const _Property_typeRel_ff02200000000000000d        = 'ff02200000000000000d';
const _Renderable_Definition_themable_property_016951f802614c4350bf = '016951f802614c4350bf';


// Definition of tags used for newly created instances 
const _instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6 = db.assignTag('0178f3ab4e2c7c412ad6');
const _instance_of_Composer_Property_0178f3ab976022e5d2e2 = db.assignTag('0178f3ab976022e5d2e2');
const _instance_of_Property__Game____game_0178f3ab97607d70df76 = db.assignTag('0178f3ab97607d70df76');
const _instance_of_Composer_Property_0178f98d4b0a0444e8a6 = db.assignTag('0178f98d4b0a0444e8a6');
const _instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160 = db.assignTag('0178f98d4b0a0de20160');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Custom_events_0165335122d2ea44dd92      = '0165335122d2ea44dd92';
const _Custom_properties_0164188f5cc0c205bc06  = '0164188f5cc0c205bc06';
const _eventInlineEditorInstance_0163fd9cf509d0d15a1e = '0163fd9cf509d0d15a1e';
const _Game_0178f3ab3520acba5680               = '0178f3ab3520acba5680';
const _instanceOfBusinessModelInlineEditorInstance_016fc353e828dfdae63a = '016fc353e828dfdae63a';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






db.newInstance(_instance_of_Property__Game____game_0178f3ab97607d70df76, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'game',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'trigger pop',
        'v'                                     :1
    })
.done();
// :_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6
db.newModel(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, 'Game') // tag and name of the model 
    .extends(_Component_01612df263119ee77622).setModelTag(_Coded_UI_Component_0166446c1f124f078a11) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Game',
        'v'                                     :2
    });
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Game____game_0178f3ab97607d70df76);
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160);
db.setRootInstanceTag(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6);
// :_instance_of_Composer_Property_0178f3ab976022e5d2e2
db.newInstance(_instance_of_Composer_Property_0178f3ab976022e5d2e2)
    .setModelTag(_Composer_Property_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6)
    .setNameOrProperties({
        [_Composer_Property_computable_016d1bb681929c2cc3f3]:true,
        'v'                                     :1
    })
    .done();
// :_instance_of_Composer_Property_0178f98d4b0a0444e8a6
db.newInstance(_instance_of_Composer_Property_0178f98d4b0a0444e8a6)
    .setModelTag(_Composer_Property_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6)
    .setNameOrProperties({
        [_Composer_Property_computable_016d1bb681929c2cc3f3]:false,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Property__Game____game_0178f3ab97607d70df76, _Property_typeRel_ff02200000000000000d            , _Game_0178f3776a851b19e18d                        );
db.assign(_instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160, _Property_typeRel_ff02200000000000000d            , _UI_Event_0163fe51d83dad2a0f4b                    );
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Renderable_Definition_themable_property_016951f802614c4350bf, _instance_of_Property__Game____game_0178f3ab97607d70df76);
db.assign(_instance_of_Composer_Property_0178f3ab976022e5d2e2, _Composer_Property_Category_016d1bb681929c2cc3f4  , _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Composer_Property_0178f98d4b0a0444e8a6, _Composer_Property_Category_016d1bb681929c2cc3f4  , _Custom_events_0165335122d2ea44dd92               );
db.assign(_instance_of_Composer_Property_0178f3ab976022e5d2e2, _Composer_Property_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Game____game_0178f3ab97607d70df76);
db.assign(_instance_of_Composer_Property_0178f98d4b0a0444e8a6, _Composer_Property_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160);
db.assign(_instance_of_Composer_Property_0178f3ab976022e5d2e2, _Composer_Property_InlineEditor_016d1bb681929c2cc3f6, _instanceOfBusinessModelInlineEditorInstance_016fc353e828dfdae63a);
db.assign(_instance_of_Composer_Property_0178f98d4b0a0444e8a6, _Composer_Property_InlineEditor_016d1bb681929c2cc3f6, _eventInlineEditorInstance_0163fd9cf509d0d15a1e   );
db.assign(_instance_of_Property__Game____game_0178f3ab97607d70df76, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6);
db.assign(_instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6);
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_containsRel_ff02200000000000000f          , _instance_of_Composer_Property_0178f3ab976022e5d2e2);
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Game____game_0178f3ab97607d70df76);
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_containsRel_ff02200000000000000f          , _instance_of_Composer_Property_0178f98d4b0a0444e8a6);
db.assign(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Game____trigger_pop_0178f98d4b0a0de20160);
db.assignOptional(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _Object_gooRel_ff022000000000000003, _Game_0178f3ab3520acba5680);
db.assignOptional(_instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6, _GOO_parentGooRel_ff02200000000000000u, _Game_0178f3ab3520acba5680);
db.assignOptional(_Game_0178f3ab3520acba5680, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6);
db.assignOptional(_Game_0178f3ab3520acba5680, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_UI_Component_model____Game_0178f3ab4e2c7c412ad6);
