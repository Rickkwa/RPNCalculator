Ext.define('CalculatorApp.view.calculator.CalcController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calc',

    onNumberInput: function(el) {
        var viewModel = this.getViewModel();
        var newVal = (viewModel.get("displayValue") == "0") ? el.text : viewModel.get("displayValue") + el.text;
        viewModel.set("displayValue", newVal);
    },

    onDecimal: function(el) {
        var viewModel = this.getViewModel();
        if (!viewModel.get("displayValue").includes("."))
            viewModel.set("displayValue", viewModel.get("displayValue") + ".");
    },

    onClear: function(el) {
        var viewModel = this.getViewModel();
        viewModel.set("displayValue", "0");
        // Reset stack
    },

    onEnter: function () {
        // Get the textbox value, parse to number and append to stack
    }
});
