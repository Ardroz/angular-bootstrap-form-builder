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
                button_text: 'ItemSelec'
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
            value: this.input.radios.length + 1
          });
        } else {

        }
      };

      scope.removeRadioOrCheckbox = function () {
        if ( (/radio/g).test( this.$parent.input.type ) ) {
          this.$parent.input.radios.splice( this.$index, 1 );
        } else {

        }
      };
    }
  };
}
