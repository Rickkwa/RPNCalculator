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
        type: "table",
        columns: 3
    },

    header: {
        // Display screen for the calculator results
        items: [{
            xtype: 'displayfield',
            fieldName: 'Result Screen',
            name: 'calc_result',
            colspan: 3
        }]
    },

    defaults: {
        xtype: 'button',
        handler: 'onNumberInput'
    },

    items: [{
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
        text: '0',
        colspan: 3
    }]

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
