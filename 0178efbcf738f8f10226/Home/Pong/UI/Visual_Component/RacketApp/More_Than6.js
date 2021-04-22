
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Absolute_016c2458e07561155a49           = '016c2458e07561155a49';
const _Center$_124_$Middle_016f8a9d9ea15c1f31c2 = '016f8a9d9ea15c1f31c2';
const _Label_01612df39109cf82fa8d              = '01612df39109cf82fa8d';
const _Pipe_0168a431d91f25780000               = '0168a431d91f25780000';
const _Rectangle_01646f6a3fa5615a5bd1          = '01646f6a3fa5615a5bd1';
const _Visual_Component_01664466071746f5e167   = '01664466071746f5e167';
const _Visual_Component_0166446c1f124f078a5f   = '0166446c1f124f078a5f';


// Definition of tags of defined properties
const _Component_Rank_016c23bd12493a7e1b2e          = '016c23bd12493a7e1b2e';
const _Component_X_01611d99243ad989b91b             = '01611d99243ad989b91b';
const _Component_Y_01611d9962e7f4f9a26d             = '01611d9962e7f4f9a26d';
const _Group_Definition_Layout_016be61ab921cb3bdef9 = '016be61ab921cb3bdef9';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Renderable_Height_01611d9a0452a179c68f       = '01611d9a0452a179c68f';
const _Renderable_Width_01611d99ec0553b5926e        = '01611d99ec0553b5926e';
const _TextComponent_Text_01633fa386be67e6fd1d      = '01633fa386be67e6fd1d';


// Definition of tags of defined relations
const _Delegate_Delegator_Relation_016c3cb7742ec9309e0b = '016c3cb7742ec9309e0b';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Pipe_Destination_Input_0168a431d91f2578000b  = '0168a431d91f2578000b';
const _Pipe_Destination_Property_0168a431d91f2578000c = '0168a431d91f2578000c';
const _Pipe_Destination_Scope_0168a431d91f2578000a  = '0168a431d91f2578000a';
const _Pipe_Source_Output_0168a431d91f25780003      = '0168a431d91f25780003';
const _Pipe_Source_Property_0168a431d91f25780004    = '0168a431d91f25780004';
const _Pipe_Source_Scope_0168a431d91f25780002       = '0168a431d91f25780002';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_of_runnable_01692a4af82e8984742b = '01692a4af82e8984742b';


// Definition of tags used for newly created instances 
const _instance_of_Absolute_0178f8c15aac24d8f339    = db.assignTag('0178f8c15aac24d8f339');
const _instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656 = db.assignTag('0178f8c15aac55fca656');
const _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe = db.assignTag('0178f8c1c0726c80e1fe');
const _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9 = db.assignTag('0178f8c1e8ba1fdb17d9');
const _instance_of_Pipe_0178f8c1e8bb55f1c1f8        = db.assignTag('0178f8c1e8bb55f1c1f8');
const _instance_of_Pipe_0178f8c1e8bb9cdec4fe        = db.assignTag('0178f8c1e8bb9cdec4fe');
const _instance_of_Pipe_0178f8c1e8bbb60c45fc        = db.assignTag('0178f8c1e8bbb60c45fc');
const _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6 = db.assignTag('0178f8c1f1b2734d41a6');
const _instance_of_Pipe_0178f8c1f1b3525ef78a        = db.assignTag('0178f8c1f1b3525ef78a');
const _instance_of_Pipe_0178f8c1f1b361f99fc8        = db.assignTag('0178f8c1f1b361f99fc8');
const _instance_of_Pipe_0178f8c1f1b3f6b4c475        = db.assignTag('0178f8c1f1b3f6b4c475');
const _instance_of_Label____New_Label_0178f8c2bdb28e50512c = db.assignTag('0178f8c2bdb28e50512c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _containerLength_016f8ab7aa1eec9b9f0a    = '016f8ab7aa1eec9b9f0a';
const _elementLength_016f8af383a2db284c53      = '016f8af383a2db284c53';
const _RacketApp_0178f39b0bbbad11abdd          = '0178f39b0bbbad11abdd';
const _result_016f8aa140e84a037378             = '016f8aa140e84a037378';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656
db.newModel(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, 'More Than6') // tag and name of the model 
    .extends(_Visual_Component_01664466071746f5e167).setModelTag(_Visual_Component_0166446c1f124f078a5f) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, {
        [db.DEFAULT+_Renderable_Width_01611d99ec0553b5926e]:600,
        [db.DEFAULT+_Object_name_ff023000000000000011]:'More Than6',
        [db.DEFAULT+_Renderable_Height_01611d9a0452a179c68f]:300,
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656);
// :_instance_of_Absolute_0178f8c15aac24d8f339
db.newInstance(_instance_of_Absolute_0178f8c15aac24d8f339)
    .setModelTag(_Absolute_016c2458e07561155a49) // tag of the model
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe
db.newInstance(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe)
    .setModelTag(_Rectangle_01646f6a3fa5615a5bd1) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    // Tag of parent goos
    .addParentGoo(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        [_Component_Rank_016c23bd12493a7e1b2e]  :0,
        [_Component_X_01611d99243ad989b91b]     :203,
        [_Component_Y_01611d9962e7f4f9a26d]     :26,
        [_Object_name_ff023000000000000011]     :'New Rectangle',
        [_Renderable_Height_01611d9a0452a179c68f]:649,
        [_Renderable_Width_01611d99ec0553b5926e]:658,
        'v'                                     :1
    })
    .done();
// :_instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9
db.newInstance(_instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9)
    .setModelTag(_Center$_124_$Middle_016f8a9d9ea15c1f31c2) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1e8bb55f1c1f8
db.newInstance(_instance_of_Pipe_0178f8c1e8bb55f1c1f8)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1e8bb9cdec4fe
db.newInstance(_instance_of_Pipe_0178f8c1e8bb9cdec4fe)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1e8bbb60c45fc
db.newInstance(_instance_of_Pipe_0178f8c1e8bbb60c45fc)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6
db.newInstance(_instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6)
    .setModelTag(_Center$_124_$Middle_016f8a9d9ea15c1f31c2) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1f1b3525ef78a
db.newInstance(_instance_of_Pipe_0178f8c1f1b3525ef78a)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1f1b361f99fc8
db.newInstance(_instance_of_Pipe_0178f8c1f1b361f99fc8)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Pipe_0178f8c1f1b3f6b4c475
db.newInstance(_instance_of_Pipe_0178f8c1f1b3f6b4c475)
    .setModelTag(_Pipe_0168a431d91f25780000) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Label____New_Label_0178f8c2bdb28e50512c
db.newInstance(_instance_of_Label____New_Label_0178f8c2bdb28e50512c)
    .setModelTag(_Label_01612df39109cf82fa8d) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    // Tag of parent goos
    .addParentGoo(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656)
    .setNameOrProperties({
        [_Component_Rank_016c23bd12493a7e1b2e]  :1,
        [_Component_X_01611d99243ad989b91b]     :321,
        [_Component_Y_01611d9962e7f4f9a26d]     :177,
        [_Object_name_ff023000000000000011]     :'New Label',
        [_Renderable_Width_01611d99ec0553b5926e]:423,
        [_TextComponent_Text_01633fa386be67e6fd1d]:'Max. number of player reached .... please wait',
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, {
        [_Group_Definition_Layout_016be61ab921cb3bdef9]:db.createReference(_instance_of_Absolute_0178f8c15aac24d8f339),
        'v'                                     :3
    });
db.assign(_instance_of_Pipe_0178f8c1e8bb55f1c1f8            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656);
db.assign(_instance_of_Pipe_0178f8c1e8bb9cdec4fe            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Pipe_0178f8c1e8bbb60c45fc            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9);
db.assign(_instance_of_Pipe_0178f8c1f1b3525ef78a            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Pipe_0178f8c1f1b361f99fc8            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656);
db.assign(_instance_of_Pipe_0178f8c1f1b3f6b4c475            , _Pipe_Source_Scope_0168a431d91f25780002           , _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6);
db.assign(_instance_of_Pipe_0178f8c1e8bbb60c45fc            , _Pipe_Source_Output_0168a431d91f25780003          , _result_016f8aa140e84a037378                      );
db.assign(_instance_of_Pipe_0178f8c1f1b3f6b4c475            , _Pipe_Source_Output_0168a431d91f25780003          , _result_016f8aa140e84a037378                      );
db.assign(_instance_of_Pipe_0178f8c1e8bb55f1c1f8            , _Pipe_Source_Property_0168a431d91f25780004        , _Renderable_Width_01611d99ec0553b5926e            );
db.assign(_instance_of_Pipe_0178f8c1e8bb9cdec4fe            , _Pipe_Source_Property_0168a431d91f25780004        , _Renderable_Width_01611d99ec0553b5926e            );
db.assign(_instance_of_Pipe_0178f8c1f1b3525ef78a            , _Pipe_Source_Property_0168a431d91f25780004        , _Renderable_Height_01611d9a0452a179c68f           );
db.assign(_instance_of_Pipe_0178f8c1f1b361f99fc8            , _Pipe_Source_Property_0168a431d91f25780004        , _Renderable_Height_01611d9a0452a179c68f           );
db.assign(_instance_of_Pipe_0178f8c1e8bb55f1c1f8            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9);
db.assign(_instance_of_Pipe_0178f8c1e8bb9cdec4fe            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9);
db.assign(_instance_of_Pipe_0178f8c1e8bbb60c45fc            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Pipe_0178f8c1f1b3525ef78a            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6);
db.assign(_instance_of_Pipe_0178f8c1f1b361f99fc8            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6);
db.assign(_instance_of_Pipe_0178f8c1f1b3f6b4c475            , _Pipe_Destination_Scope_0168a431d91f2578000a      , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Pipe_0178f8c1e8bb55f1c1f8            , _Pipe_Destination_Input_0168a431d91f2578000b      , _containerLength_016f8ab7aa1eec9b9f0a             );
db.assign(_instance_of_Pipe_0178f8c1e8bb9cdec4fe            , _Pipe_Destination_Input_0168a431d91f2578000b      , _elementLength_016f8af383a2db284c53               );
db.assign(_instance_of_Pipe_0178f8c1f1b3525ef78a            , _Pipe_Destination_Input_0168a431d91f2578000b      , _elementLength_016f8af383a2db284c53               );
db.assign(_instance_of_Pipe_0178f8c1f1b361f99fc8            , _Pipe_Destination_Input_0168a431d91f2578000b      , _containerLength_016f8ab7aa1eec9b9f0a             );
db.assign(_instance_of_Pipe_0178f8c1e8bbb60c45fc            , _Pipe_Destination_Property_0168a431d91f2578000c   , _Component_X_01611d99243ad989b91b                 );
db.assign(_instance_of_Pipe_0178f8c1f1b3f6b4c475            , _Pipe_Destination_Property_0168a431d91f2578000c   , _Component_Y_01611d9962e7f4f9a26d                 );
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Rectangle_01646f6a3fa5615a5bd1                   );
db.assign(_instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Center$_124_$Middle_016f8a9d9ea15c1f31c2         );
db.assign(_instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Center$_124_$Middle_016f8a9d9ea15c1f31c2         );
db.assign(_instance_of_Label____New_Label_0178f8c2bdb28e50512c, _Runnable_Definition_of_runnable_01692a4af82e8984742b, _Label_01612df39109cf82fa8d                       );
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9);
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6);
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Label____New_Label_0178f8c2bdb28e50512c);
db.assign(_instance_of_Absolute_0178f8c15aac24d8f339        , _Delegate_Delegator_Relation_016c3cb7742ec9309e0b , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Absolute_0178f8c15aac24d8f339        , _Delegate_Delegator_Relation_016c3cb7742ec9309e0b , _instance_of_Label____New_Label_0178f8c2bdb28e50512c);
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Object_containsRel_ff02200000000000000f          , _instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe);
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1e8bb55f1c1f8            );
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1f1b361f99fc8            );
db.assign(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Object_containsRel_ff02200000000000000f          , _instance_of_Label____New_Label_0178f8c2bdb28e50512c);
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Center$_124_$Middle_0178f8c1e8ba1fdb17d9);
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1e8bb9cdec4fe            );
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1e8bbb60c45fc            );
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Center$_124_$Middle_0178f8c1f1b2734d41a6);
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1f1b3525ef78a            );
db.assign(_instance_of_Rectangle____New_Rectangle_0178f8c1c0726c80e1fe, _Object_containsRel_ff02200000000000000f          , _instance_of_Pipe_0178f8c1f1b3f6b4c475            );
db.assignOptional(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _Object_gooRel_ff022000000000000003, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656, _GOO_parentGooRel_ff02200000000000000u, _RacketApp_0178f39b0bbbad11abdd);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Object_containsRel_ff02200000000000000f, _instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656);
db.assignOptional(_RacketApp_0178f39b0bbbad11abdd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Visual_Component_model____More_Than6_0178f8c15aac55fca656);
