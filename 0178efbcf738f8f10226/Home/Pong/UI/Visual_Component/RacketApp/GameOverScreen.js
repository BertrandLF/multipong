
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Absolute_016c2458e07561155a49           = '016c2458e07561155a49';
const _Screen_01612df349e137bbb30b             = '01612df349e137bbb30b';
const _Screen_01612df3703450d895ac             = '01612df3703450d895ac';


// Definition of tags of defined properties
const _Group_Definition_Layout_016be61ab921cb3bdef9 = '016be61ab921cb3bdef9';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Absolute_0178f39c490866294df2    = db.assignTag('0178f39c490866294df2');
const _instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692 = db.assignTag('0178f39c4908d9be6692');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _RacketApp_0178f39b0bbbad11abdd          = '0178f39b0bbbad11abdd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692
db.newModel(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692, 'GameOverScreen') // tag and name of the model 
    .extends(_Screen_01612df3703450d895ac).setModelTag(_Screen_01612df349e137bbb30b) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'GameOverScreen',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692);
// :_instance_of_Absolute_0178f39c490866294df2
db.newInstance(_instance_of_Absolute_0178f39c490866294df2)
    .setModelTag(_Absolute_016c2458e07561155a49) // tag of the model
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692, {
        [_Group_Definition_Layout_016be61ab921cb3bdef9]:db.createReference(_instance_of_Absolute_0178f39c490866294df2),
        'v'                                     :3
    });
db.assignOptional(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692, _Object_gooRel_ff022000000000000003, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692, _GOO_parentGooRel_ff02200000000000000u, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Object_containsRel_ff02200000000000000f, _instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Screen_model____GameOverScreen_0178f39c4908d9be6692);
