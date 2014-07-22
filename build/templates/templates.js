app.run( templates );

templates.$inject = ['$templateCache'];
function templates( $templateCache ) {
  'use strict';

  $templateCache.put('templates/append_checkbox_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control><span class=input-group-addon><div class=checkbox-form><input type=checkbox name=checkbox-form-append></div></span></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/append_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><input placeholder={{input.placeholder}} type={{input.input_type}} class=form-control><span ng-bind=input.append class=input-group-addon></span></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Prefijo</label><div class=col-sm-9><input ng-model=input.append placeholder=Prefijo class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input ng-model=input.placeholder placeholder=Pista class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/button_dropdown.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-lg-7><div class=input-group><div class=input-append><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control></div><div class=input-group-btn><button type=button data-toggle=dropdown class=\"btn btn-default dropdown-toggle\">{{input.button_text}}<span class=caret></span></button><ul class=dropdown-menu><li><a href=#>{{input.options}}</a></li><li><a href=#>Option two</a></li><li><a href=#>Option three</a></li></ul></div></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Opciones</label><div class=col-sm-9><textarea id=buttonoptions data-type=textarea-split style=\"min-height: 200px\" class=field>{{input.options}}\n" +
    "Option two\n" +
    "Option three</textarea></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/form_builder.html',
    "<!DOCTYPE html><div class=col-md-12><ul class=\"nav nav-tabs\"><li class=active><a data-target=#inputs data-toggle=tab>Inputs</a></li><li><a data-target=#checkboxes data-toggle=tab>Radios / Checkboxes</a></li></ul><div class=tab-content><div id=inputs class=\"tab-pane fade in active\"><br><span ng-click=insert(&quot;text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;textarea_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Área de texto:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;prepend_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con prefijo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;append_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con postfijo:&nbsp;</span><input disabled></span>&nbsp;<br><br><span ng-click=insert(&quot;prepend_checkbox_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con checkbox prefijo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;append_checkbox_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con checkbox postfijo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;button_dropdown&quot;) class=\"label label-default form-builder-preview pointer\"><span>Lista Desplegable:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;simple_select&quot;) class=\"label label-default form-builder-preview pointer\"><span>Seleción Simple:&nbsp;</span><input disabled></span></div><div id=checkboxes class=\"tab-pane fade\"><br><span ng-click=insert(&quot;inline_radios&quot;) class=\"label label-default form-builder-preview pointer\"><span>Radios en línea:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;list_radios&quot;) class=\"label label-default form-builder-preview pointer\"><span>Radios en lista:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;inline_checkboxes&quot;) class=\"label label-default form-builder-preview pointer\"><span>Checkboxes en línea:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;list_checkboxes&quot;) class=\"label label-default form-builder-preview pointer\"><span>Checkboxes en lista:&nbsp;</span><input disabled></span></div></div><br><div class=\"col-md-10 center\"><form name={{form.name}}><legend ng-bind=form.name></legend><form-element form=form input=input index=$index ng-repeat=\"input in form.inputs\"></form-element></form></div></div>"
  );


  $templateCache.put('templates/inline_radios.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label></span><div class=col-md-7><label ng-repeat=\"radio in input.radios\" class=radio-inline><input value={{radio.value}} type=radio><span ng-bind=radio.label></span></label></div></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div id=radios class=panel-group><div ng-repeat=\"radio in input.radios\" class=\"panel panel-default\"><div data-parent=#radios data-target=#radio{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Radio {{ $index + 1 }}</a></h4></div><div id=radio{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=radio.label placeholder=Etiqueta class=form-control></div><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input placeholder=Valor ng-model=radio.value class=form-control></div></div><div class=panel-footer><button ng-click=removeRadioOrCheckbox() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><button ng-click=addRadioOrCheckbox() class=\"pull-right btn btn-success\">Agregar</button><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/prepend_checkbox_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><span class=input-group-addon><div class=checkbox-form><input type=checkbox name=checkbox-form-prepend></div></span><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/prepend_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><span ng-bind=input.prepend class=input-group-addon></span><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Prefijo</label><div class=col-sm-9><input placeholder=Prefijo ng-model=input.prepend class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/simple_select.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-lg-7><div class=input-group><div class=input-append><select class=form-control><option>{{input.options}}</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Opciones</label><div class=col-sm-9><textarea id=buttonoptions data-type=textarea-split style=\"min-height: 200px\" class=field>{{input.options}}\n" +
    "Option two\n" +
    "Option three</textarea></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><label ng-bind=input.label></label><label ng-show=input.required>*</label><input placeholder={{input.placeholder}} type={{input.input_type}} class=form-control></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input ng-model=input.placeholder placeholder=Pista class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required>Requerido</label></div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/textarea_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=\"col-md-6 pointer\"><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><label ng-bind=input.label></label><label ng-show=input.required>*</label><textarea placeholder={{input.placeholder}} class=form-control></textarea></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input ng-model=input.placeholder placeholder=Pista class=form-control></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox>Requerido</label></div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );
}