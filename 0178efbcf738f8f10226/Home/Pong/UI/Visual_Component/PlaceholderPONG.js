
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Absolute_016c2458e07561155a49           = '016c2458e07561155a49';
const _Visual_Component_01664466071746f5e167   = '01664466071746f5e167';
const _Visual_Component_0166446c1f124f078a5f   = '0166446c1f124f078a5f';


// Definition of tags of defined properties
const _Group_Definition_Layout_016be61ab921cb3bdef9 = '016be61ab921cb3bdef9';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Renderable_Height_01611d9a0452a179c68f       = '01611d9a0452a179c68f';
const _Renderable_Width_01611d99ec0553b5926e        = '01611d99ec0553b5926e';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Absolute_0178f398eb3b00ed36ad    = db.assignTag('0178f398eb3b00ed36ad');
const _instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7 = db.assignTag('0178f398eb3b221022e7');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Visual_Component_0178f393a50cc7d75aba   = '0178f393a50cc7d75aba';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7
db.newModel(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7, 'PlaceholderPONG') // tag and name of the model 
    .extends(_Visual_Component_01664466071746f5e167).setModelTag(_Visual_Component_0166446c1f124f078a5f) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7, {
        [db.DEFAULT+_Renderable_Width_01611d99ec0553b5926e]:600,
        [db.DEFAULT+_Object_name_ff023000000000000011]:'PlaceholderPONG',
        [db.DEFAULT+_Renderable_Height_01611d9a0452a179c68f]:300,
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7);
// :_instance_of_Absolute_0178f398eb3b00ed36ad
db.newInstance(_instance_of_Absolute_0178f398eb3b00ed36ad)
    .setModelTag(_Absolute_016c2458e07561155a49) // tag of the model
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7, {
        [_Group_Definition_Layout_016be61ab921cb3bdef9]:db.createReference(_instance_of_Absolute_0178f398eb3b00ed36ad),
        'v'                                     :3
    });
db.assignOptional(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7, _Object_gooRel_ff022000000000000003, _Visual_Component_0178f393a50cc7d75aba);
db.assignOptional(_instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7, _GOO_parentGooRel_ff02200000000000000u, _Visual_Component_0178f393a50cc7d75aba);
db.assignOptional(_Visual_Component_0178f393a50cc7d75aba, _Object_containsRel_ff02200000000000000f, _instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7);
db.assignOptional(_Visual_Component_0178f393a50cc7d75aba, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Visual_Component_model____PlaceholderPONG_0178f398eb3b221022e7);
