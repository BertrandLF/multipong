
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Function_01621fb84e320000f000           = '01621fb84e320000f000';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Function_model____PlayerSet_0178f482e0d40454ddad = db.assignTag('0178f482e0d40454ddad');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Data_0178f374f0d9562a9861               = '0178f374f0d9562a9861';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad
db.newModel(_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad, 'PlayerSet') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Function_01621fb84e320000f000) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'PlayerSet',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad);
db.assignOptional(_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad, _Object_gooRel_ff022000000000000003, _Data_0178f374f0d9562a9861);
db.assignOptional(_instance_of_Function_model____PlayerSet_0178f482e0d40454ddad, _GOO_parentGooRel_ff02200000000000000u, _Data_0178f374f0d9562a9861);
db.assignOptional(_Data_0178f374f0d9562a9861, _Object_containsRel_ff02200000000000000f, _instance_of_Function_model____PlayerSet_0178f482e0d40454ddad);
db.assignOptional(_Data_0178f374f0d9562a9861, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_model____PlayerSet_0178f482e0d40454ddad);
