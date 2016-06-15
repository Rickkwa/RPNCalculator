/**
 * This view is an example list of people.
 */
Ext.define('CalculatorApp.view.main.Calc', {
    extend: 'Ext.grid.Panel',
    xtype: 'maincalc',

    requires: [
    ],

    title: 'Reverse Polish Notation Calculator',

    columns: [
        // { text: 'Name',  dataIndex: 'name' },
        // { text: 'Email', dataIndex: 'email', flex: 1 },
        // { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
