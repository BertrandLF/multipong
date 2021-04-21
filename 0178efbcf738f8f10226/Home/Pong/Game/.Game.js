
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
const _instance_of_Folder____Game_0178f3ab3520acba5680 = db.assignTag('0178f3ab3520acba5680');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Pong_0178efbcf738f8f10226               = '0178efbcf738f8f10226';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Game_0178f3ab3520acba5680
db.newInstance(_instance_of_Folder____Game_0178f3ab3520acba5680, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Game',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____Game_0178f3ab3520acba5680);
db.assignOptional(_instance_of_Folder____Game_0178f3ab3520acba5680, _Object_gooRel_ff022000000000000003, _Pong_0178efbcf738f8f10226);
db.assignOptional(_instance_of_Folder____Game_0178f3ab3520acba5680, _GOO_parentGooRel_ff02200000000000000u, _Pong_0178efbcf738f8f10226);
db.assignOptional(_Pong_0178efbcf738f8f10226, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Game_0178f3ab3520acba5680);
db.assignOptional(_Pong_0178efbcf738f8f10226, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Game_0178f3ab3520acba5680);
