 /* jslint node: true */
 /* global angular, $ */
'use strict';

var app = angular.module( 'renderteam.formBuilder', []);
app.directive( 'formElement', formElement );
app.directive( 'formBuilder', formBuilder );

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
                placeholder: 'Pistda'
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
          case 'inline_radios':
            scope.form.inputs.push(
              {
                type: 'inline_radios',
                label: 'Radios en línea',
                radios: []
              });
            break;
          case 'list_radios':
            scope.form.inputs.push(
              {
                type: 'list_radios',
                label: 'Radios en lista',
                radios: []
              });
            break;
          case 'inline_checkboxes':
            scope.form.inputs.push(
              {
                type: 'inline_checkboxes',
                label: 'Checks en línea',
                checkboxes: []
              });
            break;
          case 'list_checkboxes':
            scope.form.inputs.push(
              {
                type: 'list_checkboxes',
                label: 'Checks en lista',
                checkboxes: []
              });
            break;
          case 'insert_button':
            scope.form.inputs.push(
              {
                type: 'button',
                value: 'input_value_button',
                label: 'input_label_button' ? 'input_label_button' : 'btn btn-default',
                size: 'input_size_button' ? 'input_size_button' : 'btn btn-default',
              });
            break;
        }
      };
    }
  };
}

formElement.$inject = ['$http', '$templateCache', '$compile', '$parse'];
function formElement ( http, templateCache, compile, parse ) {
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

      var template = templateCache.get('templates/' + scope.input.type + '.html');
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

      scope.removeRadioOrCheckbox = function () {
        if ( (/radio/g).test( this.$parent.input.type ) ) {
          this.$parent.input.radios.splice( this.$index, 1 );
        } else {
          this.$parent.input.checkboxe.splice( this.$index, 1 );
        }
      };
    }
  };
}
