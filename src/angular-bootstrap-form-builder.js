 /* jslint node: true */
 /* global angular, $ */
'use strict';

var app = angular.module( 'renderteam.formBuilder', []);
app.directive( 'formElement', formElement );
app.directive( 'formBuilder', formBuilder );
app.directive( 'formInterpreter', formInterpreter );
app.directive( 'formElementInterpreter', formElementInterpreter );

formBuilder.$inject = ['$templateCache'];
function formBuilder ( templateCache ) {
  return {
    restrict: 'E',
    scope: {
      form: '='
    },
    template: templateCache.get('templates/form_builder.html'),
    link: function ( scope, element, attrs ){
      scope.editable = {};

      scope.insert = function ( type ) {
        switch ( type ) {
          case 'text_input':
            scope.form.inputs.push(
              {
                type: 'text_input',
                input_type: 'text',
                label: 'Campo de texto',
                placeholder: 'Pista'
              });
            break;
          case 'textarea_input':
            scope.form.inputs.push(
              {
                type: 'textarea_input',
                label: 'Área de texto',
                placeholder: 'Pista'
              });
            break;
          case 'prepend_text_input':
            scope.form.inputs.push(
              {
                type: 'prepend_text_input',
                input_type: 'text',
                label: 'Texto prefijo',
                prepend: 'TP',
                placeholder: 'Pista'
              });
            break;
          case 'append_text_input':
            scope.form.inputs.push(
              {
                type: 'append_text_input',
                input_type: 'text',
                label: 'Texto postfijo',
                append: 'M.N.',
                placeholder: 'Pista'
              });
            break;
          case 'prepend_checkbox_text_input':
            scope.form.inputs.push(
              {
                type: 'prepend_checkbox_text_input',
                input_type: 'text',
                label: 'Texto con check box prefijo',
                placeholder: 'Elemento'
              });
            break;
          case 'append_checkbox_text_input':
            scope.form.inputs.push(
              {
                type: 'append_checkbox_text_input',
                input_type: 'text',
                label: 'Texto con check box prefijo',
                placeholder: 'Elemento'
              });
            break;
          case 'button_dropdown':
            scope.form.inputs.push(
              {
                type: 'button_dropdown',
                input_type: 'text',
                label: 'Lista Desplegble',
                placeholder: 'Items',
                button_text: 'ItemSelec',
                options: 'Opcion 1'
              });
            break;
          case 'inline_radios':
            scope.form.inputs.push(
              {
                type: 'inline_radios',
                label: 'Radios en línea',
                id: scope.form.inputs.length ? 0 : scope.form.inputs.length,
                radios: []
              });
            break;
          case 'list_radios':
            scope.form.inputs.push(
              {
                type: 'list_radios',
                label: 'Radios en lista',
                id: scope.form.inputs.length ? 0 : scope.form.inputs.length,
                radios: []
              });
            break;
          case 'inline_checkboxes':
            scope.form.inputs.push(
              {
                type: 'inline_checkboxes',
                label: 'Checks en línea',
                id: scope.form.inputs.length ? 0 : scope.form.inputs.length,
                checkboxes: []
              }
            );
            break;
          case 'list_checkboxes':
            scope.form.inputs.push(
              {
                type: 'list_checkboxes',
                label: 'Checks en lista',
                id: scope.form.inputs.length ? 0 : scope.form.inputs.length,
                checkboxes: []
              });
            break;
          case 'append_input_buttons':
            scope.form.inputs.push(
              {
                type: 'append_input_buttons',
                value: 'Button',
                class: 'btn-default',
                size: 'btn-default',
                label: 'Inline Button'
              });
            break;
          case 'inline_double_botton':
            scope.form.inputs.push({
                type: 'inline_double_botton',
                buttons:[
                  {
                    value: 'Button',
                    class: 'btn-default',
                    size: '',
                    label: 'Inline Button'
                  },
                  {
                    value: 'Button',
                    class: 'btn-default',
                    size: '',
                    label: 'Inline Button'
                  }
                ]
              });
            break;
          case 'inline_file_button':
            scope.form.inputs.push(
              {
                type: 'inline_file_button',
                value: 'Button'
              });
            console.log(scope.form.inputs);
            break;
          case 'simple_select':
            scope.form.inputs.push(
              {
                type: 'simple_select',
                input_type: 'text',
                label: 'Seleccionar',
                options: [],
                labelOption: 'Opciones'
              });
            break;
        }
      };
    }
  };
}

formInterpreter.$inject = ['$templateCache'];
function formInterpreter ( templateCache ) {
  return {
    restrict: 'E',
    scope: {
      form: '=',
      onSave: '&'
    },
    template: templateCache.get('templates/form_interpreter.html'),
    link: function ( scope, element, attrs ){
      scope.values = {};

      scope.save = function () {
        scope.onSave({ values: scope.values});
      };
    }
  };
}

formElementInterpreter.$inject = ['$templateCache', '$compile'];
function formElementInterpreter ( templateCache, compile ) {
  return {
    restrict: 'E',
    scope: {
      values: '=',
      form: '=',
      input: '=',
      index: '='
    },
    link: function ( scope, element, attrs ){
      var template = templateCache.get('templates/interpreter/' + scope.input.type + '.html');
      element = element.replaceWith( compile( template )( scope ) );
      scope.validations=[];

      scope.generateInputName = function ( input ) {
        return input.label.toLowerCase().replace(/\s/g, '_') + scope.index;
      };

      scope.validateRadioButton = function  (input, values) {
        var value = scope.values[scope.generateInputName(input)];
        scope.validations[scope.generateInputName(input)] = value ? false : true;
      };
      scope.validateCheckbox = function  (input, values) {
        var value = scope.values[scope.generateInputName(input)];

        console.log( value);
        if ( value ) {
          scope.validations[scope.generateInputName(input)] = true;
          angular.forEach(value, function(value) {
            if( value ){
              scope.validations[scope.generateInputName(input)] = false;
            }
          });

        }
        else {
          scope.validations[scope.generateInputName(input)] = true;
        }
      };
    }
  };
}

formElement.$inject = ['$templateCache', '$compile'];
function formElement ( templateCache, compile ) {
  return {
    restrict: 'E',
    scope: {
      form: '=',
      input: '=',
      index: '=',
      editable: '='
    },
    link: function ( scope, element, attrs ){
      scope.input.editable = false;
      scope.input.required = false;
      var template = templateCache.get('templates/builder/' + scope.input.type + '.html');
      element = element.replaceWith( compile( template )( scope ) );

      scope.remove = function () {
        scope.form.inputs.splice( this.index, 1 );
        $('#input' + this.index).remove();
      };

      scope.inputTypes = [
        { label: 'Color', value: 'color' },
        { label: 'Contraseña', value: 'password' },
        { label: 'Correo', value: 'email' },
        { label: 'Fecha', value: 'date' },
        { label: 'Fecha y hora', value: 'datetime-local' },
        { label: 'Mes', value: 'month' },
        { label: 'Número', value: 'number' },
        { label: 'Semana', value: 'week' },
        { label: 'Texto', value: 'text' }
      ];

      scope.inputButtonTypes = [
        { label: 'Succes', value: 'btn-success' },
        { label: 'Danger', value: 'btn-danger' },
        { label: 'Info', value: 'btn-info' },
        { label: 'Default', value: 'btn-default' },
        { label: 'Warning', value: 'btn-warning' }
      ];

      scope.inputButtonSizes = [
        { label: 'Grande', value: 'btn-lg' },
        { label: 'Normal', value: '' },
        { label: 'Pequeño', value: 'btn-sm' },
        { label: 'Muy Perqueño', value: 'btn-xs' }
      ];

      scope.addRadioOrCheckbox = function () {
        if ( (/radio/g).test( this.input.type ) ) {
          this.input.radios.push({
            label: 'Radio ' + ( this.input.radios.length + 1 ),
            value: this.input.radios.length + 1,
            name : this.input.radios.name//check for the name is dinamyc or static
          });
        } else {
          this.input.checkboxes.push({
            label: 'Checkbox ' + ( this.input.checkboxes.length + 1 ),
            value: this.input.checkboxes.length + 1,
            name : this.input.checkboxes.name//check for the name is dinamyc or static
          });
        }
      };

      scope.addOptions = function () {
        if ( (/select/g).test( this.input.type ) ) {
          this.input.options.push({
            label: this.input.labelOption
          });
        } else {

        }
      };

      scope.removeOption = function () {
        if ( (/select/g).test( this.$parent.input.type ) ) {
          this.$parent.input.options.splice( this.$index, 1 );
        } else {

        }
      };

      scope.removeRadioOrCheckbox = function () {
        if ( (/radio/g).test( this.$parent.input.type ) ) {
          this.$parent.input.radios.splice( this.$index, 1 );
        } else {
          this.$parent.input.checkboxes.splice( this.$index, 1 );
        }
      };

      scope.$watch( 'input', function ( input ) {
        // body...
        console.log(scope.form.inputs);

      }, true);
    }
  };
}
