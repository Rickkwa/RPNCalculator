Ext.define('CalculatorApp.view.calculator.CalcController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calc',

    // model: "calc",

    onNumberInput: function(sender, record) {
        let viewModel = this.getViewModel();
        viewModel.set('displayValue', viewModel.get('displayValue') + sender.text);
    },

    onEnter: function () {
        
    }
});
