/**
 * This view is an example list of people.
 */
Ext.define('CalculatorApp.view.calculator.Calc', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-calc',

    requires: [
        'CalculatorApp.view.calculator.CalcController',
        'CalculatorApp.view.calculator.CalcModel'
    ],

    controller: 'calc',
    viewModel: 'calc',

    title: 'Reverse Polish Notation Calculator',

    layout: {
        type: "table", // https://docs.sencha.com/extjs/6.0/6.0.1-classic/#!/api/Ext.layout.container.Table
        columns: 3,
        tableAttrs: {
            style: {
                width: "240px"
            }
        }
    },

    defaults: {
        xtype: 'button',
        handler: 'onNumberInput',
        width: "100%"
    },

    items: [{
        xtype: 'displayfield', // https://docs.sencha.com/extjs/6.0/6.0.1-classic/#!/api/Ext.form.field.Display
        bind: {
            value: '{displayValue}'
        },
        cls: "display-screen",
        fieldName: 'Result screen',
        name: 'calc_result',
        colspan: 3
    },

    {
        text: '1'
    },
    {
        text: '2'
    },
    {
        text: '3'
    },
    {
        text: '4'
    },
    {
        text: '5'
    },
    {
        text: '6'
    },
    {
        text: '7'
    },
    {
        text: '8'
    },
    {
        text: '9'
    },
    {
        text: '0'
    },
    {
        text: '.'
    }, 
    {
        text: "C",
        handler: "onClear",
        cls: "operator"
    },
    {
        text: "Enter",
        colspan: 2,
        handler: "onEnter",
        cls: "operator"
    },
    {
        text: "+",
        handler: "onOperator",
        cls: "operator"
    }, 
    {
        text: "-",
        handler: "onOperator",
        cls: "operator"
    },
    {
        text: "X",
        handler: "onOperator",
        cls: "operator"
    },
    {
        text: "/",
        handler: "onOperator",
        cls: "operator"
    }]
});
