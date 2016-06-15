Ext.define('CalculatorApp.view.calculator.CalcController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calc',

    // onItemSelected: function (sender, record) {
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    onNumberInput: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    }

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }
});
