app.run( templates );

templates.$inject = ['$templateCache'];
function templates( $templateCache ) {
  'use strict';

  $templateCache.put('templates/append_checkbox_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control><span class=input-group-addon><div class=checkbox-form><input type=checkbox name=checkbox-form-append></div></span></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/append_input_buttons.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><div class=col-md-5><input type=button value={{input.value}} class=\"input-control btn {{input.class}} {{input.size}}\"><p class=clearfix></p></div></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Label</label><div class=col-sm-9><input ng-model=input.value placeholder=Prefijo class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.class ng-options=\"input.value as input.label for input in inputButtonTypes\" class=form-control></select></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tamaño</label><div class=col-sm-9><select ng-model=input.size ng-options=\"input.value as input.label for input in inputButtonSizes\" class=form-control></select></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
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
    "<!DOCTYPE html><div class=col-md-12><ul class=\"nav nav-tabs\"><li class=active><a data-target=#inputs data-toggle=tab>Inputs</a></li><li><a data-target=#checkboxes data-toggle=tab>Radios / Checkboxes</a></li><li><a data-target=#buttons data-toggle=tab>Buttons</a></li></ul><div class=tab-content><div id=inputs class=\"tab-pane fade in active\"><br><span ng-click=insert(&quot;text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;textarea_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Área de texto:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;prepend_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con prefijo:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;append_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con postfijo:&nbsp;</span><input disabled></span>&nbsp;<br><br><span ng-click=insert(&quot;prepend_checkbox_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con checkbox prefijo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;append_checkbox_text_input&quot;) class=\"label label-default form-builder-preview pointer\"><span>Campo con checkbox postfijo:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;button_dropdown&quot;) class=\"label label-default form-builder-preview pointer\"><span>Lista Desplegable:&nbsp;</span><input disabled></span>&nbsp;<span ng-click=insert(&quot;simple_select&quot;) class=\"label label-default form-builder-preview pointer\"><span>Seleción Simple:&nbsp;</span><input disabled></span></div><div id=checkboxes class=\"tab-pane fade\"><br><span ng-click=insert(&quot;inline_radios&quot;) class=\"label label-default form-builder-preview pointer\"><span>Radios en línea:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;list_radios&quot;) class=\"label label-default form-builder-preview pointer\"><span>Radios en lista:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;inline_checkboxes&quot;) class=\"label label-default form-builder-preview pointer\"><span>Checkboxes en línea:&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;list_checkboxes&quot;) class=\"label label-default form-builder-preview pointer\"><span>Checkboxes en lista:&nbsp;</span></span></div><div id=buttons class=\"tab-pane fade\"><br><span ng-click=insert(&quot;append_input_buttons&quot;) class=\"label label-default form-builder-preview pointer\"><span>Botón&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;inline_double_botton&quot;) class=\"label label-default form-builder-preview pointer\"><span>Doble Botón&nbsp;</span></span>&nbsp;<span ng-click=insert(&quot;inline_file_button&quot;) class=\"label label-default form-builder-preview pointer\"><span>File Botón&nbsp;</span></span>&nbsp;</div></div><br><div class=\"col-md-10 center\"><form name={{form.name}}><legend ng-bind=form.name></legend><form-element form=form input=input index=$index ng-repeat=\"input in form.inputs\" ng-init=\"outterIndex = $index\">{{outterIndex}}</form-element></form></div></div>"
  );


  $templateCache.put('templates/inline_checkboxes.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label></span><div class=col-md-7><label ng-repeat=\"checkbox in input.checkboxes\" class=checkbox-inline><input value={{checkbox.value}} type=checkbox><span ng-bind=checkbox.label></span></label></div></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div id=checkboxes class=panel-group><div ng-repeat=\"checkbox in input.checkboxes\" class=\"panel panel-default\"><div data-parent=#checkboxes{{input.id}} data-target=#checkbox{{input.id}}{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Radio {{ $index + 1 }}</a></h4></div><div id=checkbox{{input.id}}{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=checkbox.label placeholder=Etiqueta class=form-control></div><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input placeholder=Valor ng-model=checkbox.value class=form-control></div></div><div class=panel-footer><button ng-click=removeRadioOrCheckbox() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><button ng-click=addRadioOrCheckbox() class=\"pull-right btn btn-success\">Agregar</button><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/inline_double_botton.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><div class=\"col-md-15 btn-group\"><input type=button value={{button.value}} ng-repeat=\"button in input.buttons\" class=\"btn {{button.class}} {{button.size}}\"></div></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div ng-repeat=\"button in input.buttons\"><div class=form-group><label class=\"col-sm-3 control-label\">Valor Botón {{$index+1}}</label><div class=col-sm-9><input ng-model=button.value placeholder=\"Valor del botón\" class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=button.class ng-options=\"input.value as input.label for input in inputButtonTypes\" class=form-control></select></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tamaño</label><div class=col-sm-9><select ng-model=button.size ng-options=\"input.value as input.label for input in inputButtonSizes\" class=form-control></select></div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/inline_file_button.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><div class=col-md-5><div class=input-group><input type=file class=form-control><p class=clearfix></p></div></div></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input ng-model=input.value placeholder=Prefijo class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.class ng-options=\"input.value as input.label for input in inputButtonTypes\" class=form-control></select></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/inline_radios.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label></span><div class=col-md-7><label ng-repeat=\"radio in input.radios\" class=radio-inline><input value={{radio.value}} type=radio name=radios{{input.radios.length}}><span ng-bind=radio.label></span></label></div></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div id=radios class=panel-group><div ng-repeat=\"radio in input.radios\" class=\"panel panel-default\"><div data-parent=#radios data-target=#radio{{input.id}}{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Radio {{ $index + 1 }}</a></h4></div><div id=radio{{input.id}}{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=radio.label placeholder=Etiqueta class=form-control></div><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input placeholder=Valor ng-model=radio.value class=form-control></div></div><div class=panel-footer><button ng-click=removeRadioOrCheckbox() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><button ng-click=addRadioOrCheckbox() class=\"pull-right btn btn-success\">Agregar</button><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/list_checkboxes.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label></span><div class=col-md-7><label ng-repeat=\"checkbox in input.checkboxes\" class=\"checkbox-inline .col-md-4\"><input value={{checkbox.value}} type=checkbox><span ng-bind=checkbox.label></span></label></div></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div id=checkboxes class=panel-group><div ng-repeat=\"checkbox in input.checkboxes\" class=\"panel panel-default\"><div data-parent=#checkboxes data-target=#checkbox{{input.id}}{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Radio {{ $index + 1 }}</a></h4></div><div id=checkbox{{input.id}}{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=checkbox.label placeholder=Etiqueta class=form-control></div><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input placeholder=Valor ng-model=checkbox.value class=form-control></div></div><div class=panel-footer><button ng-click=removeRadioOrCheckbox() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><button ng-click=addRadioOrCheckbox() class=\"pull-right btn btn-success\">Agregar</button><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/list_radios.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label></span><div class=col-md-3><label ng-repeat=\"radio in input.radios\" class=radio-inline><input value={{radio.value}} type=radio name=radios-{{input.radios.length}}><span ng-bind=radio.label></span></label></div></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div id=radios class=panel-group><div ng-repeat=\"radio in input.radios\" class=\"panel panel-default\"><div data-parent=#radios{{input.id}} data-target=#radio{{input.id}}{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Radio {{ $index + 1 }}</a></h4></div><div id=radio{{input.id}}{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=radio.label placeholder=Etiqueta class=form-control></div><label class=\"col-sm-3 control-label\">Valor</label><div class=col-sm-9><input placeholder=Valor ng-model=radio.value class=form-control></div></div><div class=panel-footer><button ng-click=removeRadioOrCheckbox() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><button ng-click=addRadioOrCheckbox() class=\"pull-right btn btn-success\">Agregar</button><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/prepend_checkbox_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><span class=input-group-addon><div class=checkbox-form><input type=checkbox name=checkbox-form-prepend></div></span><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/prepend_text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-md-7><div class=input-group><span ng-bind=input.prepend class=input-group-addon></span><input type={{input.input_type}} placeholder={{input.placeholder}} class=form-control></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Prefijo</label><div class=col-sm-9><input placeholder=Prefijo ng-model=input.prepend class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input placeholder=Pista ng-model=input.placeholder class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/simple_select.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=form-group><span class=\"col-md-5 control-label\"><label ng-bind=input.label></label><label ng-show=input.required>*</label></span><div class=col-lg-7><div class=input-group><div class=input-append><select class=form-control><option ng-repeat=\"select in input.options\">{{select.label}}</option></select></div></div></div><p class=clearfix></p></div></div><form role=form ng-show=input.editable class=\"form-horizontal col-md-6 form-element-editable\"><button type=button aria-hidden=true ng-click=\"input.editable = false\" class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input placeholder=Etiqueta ng-model=input.label class=form-control></div></div><div id=options class=panel-group><div ng-repeat=\"select in input.options\" class=\"panel panel-default\"><div data-parent=#options data-target=#option{{$index}} data-toggle=collapse class=\"panel-heading pointer\"><h4 class=panel-title><a>Opción {{ $index + 1 }}</a></h4></div><div id=option{{$index}} class=\"panel-collapse collapse\"><div class=panel-body><label class=\"col-sm-3 control-label\">Opción</label><div class=col-sm-9><input ng-model=select.label placeholder=\"Que Opción\" class=form-control></div></div><div class=panel-footer><button ng-click=removeOption() class=\"btn btn-danger btn-block\">Eliminar</button></div></div></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Opciones</label><div class=col-lg-9><div class=input-group><input ng-model=input.labelOption class=form-control><span class=input-group-addon><button ng-click=addOptions() class=\"btn btn-success btn-xs\">Agregar</button></span></div></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required></label>Requerido</div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );


  $templateCache.put('templates/text_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=col-md-6><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><label ng-bind=input.label></label><label ng-show=input.required>*</label><input placeholder={{input.placeholder}} type={{input.input_type}} class=form-control></div></div><div ng-show=input.editable class=\"col-md-6 form-element-editable\"><form role=form class=form-horizontal><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input ng-model=input.placeholder placeholder=Pista class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Tipo</label><div class=col-sm-9><select ng-model=input.input_type ng-options=\"input.value as input.label for input in inputTypes\" class=form-control></select></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input type=checkbox ng-model=input.required>Requerido</label></div></div></div></form><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></div></div>"
  );


  $templateCache.put('templates/textarea_input.html',
    "<!DOCTYPE html><div id=input{{index}} class=\"col-md-12 form-element-container\"><div class=\"col-md-6 pointer\"><div ng-click=\"input.editable = true\" class=\"form-group form-element\"><label ng-bind=input.label></label><label ng-show=input.required>*</label><textarea placeholder={{input.placeholder}} class=form-control></textarea></div></div><form ng-show=input.editable role=form class=\"form-horizontal col-md-6 form-element-editable\"><button aria-hidden=true ng-click=\"input.editable = false\" type=button class=close>&times;</button><br><div class=form-group><label class=\"col-sm-3 control-label\">Etiqueta</label><div class=col-sm-9><input ng-model=input.label placeholder=Etiqueta class=form-control></div></div><div class=form-group><label class=\"col-sm-3 control-label\">Pista</label><div class=col-sm-9><input ng-model=input.placeholder placeholder=Pista class=form-control></div></div><div class=form-group><div class=\"col-sm-offset-3 col-sm-10\"><div class=checkbox><label><input ng-model=input.required type=checkbox>Requerido</label></div></div></div><button ng-click=remove() class=\"btn btn-block btn-danger\">Eliminar</button></form></div>"
  );
}