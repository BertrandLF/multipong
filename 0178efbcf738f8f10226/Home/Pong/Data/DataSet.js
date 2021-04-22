
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Data_Set_01645fe6873aeea59e64           = '01645fe6873aeea59e64';
const _Game_0178f3776a851b19e18d               = '0178f3776a851b19e18d';
const _NumberColor_0178f4712c1770ee79cf        = '0178f4712c1770ee79cf';
const _Player_0178f3760227c2853e6f             = '0178f3760227c2853e6f';


// Definition of tags of defined properties
const _NumberColor_Color_0178f471da73de494e54       = '0178f471da73de494e54';
const _NumberColor_Number_0178f4716ad5b78fce65      = '0178f4716ad5b78fce65';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Player_colour_0178f377161c74798ce4           = '0178f377161c74798ce4';
const _Player_life_0178f3774f3374670cef             = '0178f3774f3374670cef';
const _Player_name_0178f37b8ec7b9c01295             = '0178f37b8ec7b9c01295';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _Game_playing_0178f37946d6c3959d61            = '0178f37946d6c3959d61';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Project_primordialItemRel_ff02200000000000002a = 'ff02200000000000002a';


// Definition of tags used for newly created instances 
const _instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0 = db.assignTag('0178f3ae68793da5d7b0');
const _instance_of_NumberColor____NumberColor_0178f4730cc2f46802f0 = db.assignTag('0178f4730cc2f46802f0');
const _instance_of_NumberColor____NumberColor_0178f47326f005e35941 = db.assignTag('0178f47326f005e35941');
const _instance_of_NumberColor____NumberColor_0178f473489f55bf0770 = db.assignTag('0178f473489f55bf0770');
const _instance_of_NumberColor____NumberColor_0178f4735dad5fac71ed = db.assignTag('0178f4735dad5fac71ed');
const _instance_of_NumberColor____NumberColor_0178f473733e87a790aa = db.assignTag('0178f473733e87a790aa');
const _instance_of_NumberColor____NumberColor_0178f47391b720b856be = db.assignTag('0178f47391b720b856be');
const _instance_of_Game____Game_0178f8ca10b414513094 = db.assignTag('0178f8ca10b414513094');
const _instance_of_Player____Player_0178f8ca3163d7c7bf1d = db.assignTag('0178f8ca3163d7c7bf1d');
const _instance_of_Player____Player_0178f8ca35ac92acfbb4 = db.assignTag('0178f8ca35ac92acfbb4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Data_0178f374f0d9562a9861               = '0178f374f0d9562a9861';
const _Pong_0178efbcf738f8f10226               = '0178efbcf738f8f10226';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0
db.newInstance(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Data_Set_01645fe6873aeea59e64)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'DataSet',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0);
// :_instance_of_NumberColor____NumberColor_0178f4730cc2f46802f0
db.newInstance(_instance_of_NumberColor____NumberColor_0178f4730cc2f46802f0)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(255,0,0,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_NumberColor____NumberColor_0178f47326f005e35941
db.newInstance(_instance_of_NumberColor____NumberColor_0178f47326f005e35941)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(255,165,0,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_NumberColor____NumberColor_0178f473489f55bf0770
db.newInstance(_instance_of_NumberColor____NumberColor_0178f473489f55bf0770)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(0,0,255,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_NumberColor____NumberColor_0178f4735dad5fac71ed
db.newInstance(_instance_of_NumberColor____NumberColor_0178f4735dad5fac71ed)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(255,0,255,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_NumberColor____NumberColor_0178f473733e87a790aa
db.newInstance(_instance_of_NumberColor____NumberColor_0178f473733e87a790aa)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(200,200,200,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:5,
        'v'                                     :1
    })
    .done();
// :_instance_of_NumberColor____NumberColor_0178f47391b720b856be
db.newInstance(_instance_of_NumberColor____NumberColor_0178f47391b720b856be)
    .setModelTag(_NumberColor_0178f4712c1770ee79cf) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_NumberColor_Color_0178f471da73de494e54]:db.createColor(233,214,107,1),
        [_NumberColor_Number_0178f4716ad5b78fce65]:6,
        'v'                                     :1
    })
    .done();
// :_instance_of_Game____Game_0178f8ca10b414513094
db.newInstance(_instance_of_Game____Game_0178f8ca10b414513094)
    .setModelTag(_Game_0178f3776a851b19e18d) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Player____Player_0178f8ca3163d7c7bf1d
db.newInstance(_instance_of_Player____Player_0178f8ca3163d7c7bf1d)
    .setModelTag(_Player_0178f3760227c2853e6f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_Player_colour_0178f377161c74798ce4]   :db.createColor(255,0,0,1),
        [_Player_life_0178f3774f3374670cef]     :3,
        [_Player_name_0178f37b8ec7b9c01295]     :'Alice',
        'v'                                     :1
    })
    .done();
// :_instance_of_Player____Player_0178f8ca35ac92acfbb4
db.newInstance(_instance_of_Player____Player_0178f8ca35ac92acfbb4)
    .setModelTag(_Player_0178f3760227c2853e6f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0)
    .setNameOrProperties({
        [_Player_colour_0178f377161c74798ce4]   :db.createColor(0,255,0,1),
        [_Player_life_0178f3774f3374670cef]     :3,
        [_Player_name_0178f37b8ec7b9c01295]     :'Bob',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Game____Game_0178f8ca10b414513094    , _Game_playing_0178f37946d6c3959d61                , _instance_of_Player____Player_0178f8ca3163d7c7bf1d);
db.assign(_instance_of_Game____Game_0178f8ca10b414513094    , _Game_playing_0178f37946d6c3959d61                , _instance_of_Player____Player_0178f8ca35ac92acfbb4);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f4730cc2f46802f0);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f47326f005e35941);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f473489f55bf0770);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f4735dad5fac71ed);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f473733e87a790aa);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_NumberColor____NumberColor_0178f47391b720b856be);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Game____Game_0178f8ca10b414513094    );
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Player____Player_0178f8ca3163d7c7bf1d);
db.assign(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Player____Player_0178f8ca35ac92acfbb4);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f4730cc2f46802f0);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f47326f005e35941);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f473489f55bf0770);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f4735dad5fac71ed);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f473733e87a790aa);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_NumberColor____NumberColor_0178f47391b720b856be);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Game____Game_0178f8ca10b414513094    );
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Player____Player_0178f8ca3163d7c7bf1d);
db.assign(_Pong_0178efbcf738f8f10226                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Player____Player_0178f8ca35ac92acfbb4);
db.assignOptional(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _Object_gooRel_ff022000000000000003, _Data_0178f374f0d9562a9861);
db.assignOptional(_instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0, _GOO_parentGooRel_ff02200000000000000u, _Data_0178f374f0d9562a9861);
db.assignOptional(_Data_0178f374f0d9562a9861, _Object_containsRel_ff02200000000000000f, _instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0);
db.assignOptional(_Data_0178f374f0d9562a9861, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Data_Set____DataSet_0178f3ae68793da5d7b0);
