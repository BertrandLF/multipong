
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Folder_01612df1db9749227626             = '01612df1db9749227626';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Folder____GameApp_0178f39af43a4d3a98b6 = db.assignTag('0178f39af43a4d3a98b6');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Visual_Component_0178f393a50cc7d75aba   = '0178f393a50cc7d75aba';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____GameApp_0178f39af43a4d3a98b6
db.newInstance(_instance_of_Folder____GameApp_0178f39af43a4d3a98b6, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'GameApp',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____GameApp_0178f39af43a4d3a98b6);
db.assignOptional(_instance_of_Folder____GameApp_0178f39af43a4d3a98b6, _Object_gooRel_ff022000000000000003, _Visual_Component_0178f393a50cc7d75aba);
db.assignOptional(_instance_of_Folder____GameApp_0178f39af43a4d3a98b6, _GOO_parentGooRel_ff02200000000000000u, _Visual_Component_0178f393a50cc7d75aba);
db.assignOptional(_Visual_Component_0178f393a50cc7d75aba, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____GameApp_0178f39af43a4d3a98b6);
db.assignOptional(_Visual_Component_0178f393a50cc7d75aba, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____GameApp_0178f39af43a4d3a98b6);
