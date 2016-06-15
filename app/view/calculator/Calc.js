/**
 * This view is an example list of people.
 */
Ext.define('CalculatorApp.view.calculator.Calc', {
    extend: 'Ext.panel.Panel',
    xtype: 'calc',

    requires: [
        'CalculatorApp.view.calculator.CalcController'
    ],

    controller: 'calc',

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
        xtype: 'displayfield',
        value: 'test test test',
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
        text: "C"
    },
    {
        text: "Enter",
        colspan: 2
    },
    {
        text: "+"
    }, 
    {
        text: "-"
    },
    {
        text: "X"
    },
    {
        text: "/"
    }]
});
