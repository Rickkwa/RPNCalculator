Ext.define('CalculatorApp.view.calculator.CalcController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calc',

    stack: [],
    didInput: false,

    onNumberInput: function(el) {
        var viewModel = this.getViewModel();
        var newVal = (viewModel.get("displayValue") == "0" || !this.didInput) ? el.text : viewModel.get("displayValue") + el.text;
        viewModel.set("displayValue", newVal);
        this.didInput = true;
    },

    onDecimal: function(el) {
        var viewModel = this.getViewModel();
        if (!viewModel.get("displayValue").includes("."))
            viewModel.set("displayValue", viewModel.get("displayValue") + ".");
    },

    onClear: function(el) {
        var viewModel = this.getViewModel();
        viewModel.set("displayValue", "0");
        this._stackClear(); // Reset stack
        this.didInput = false;
    },

    onEnter: function () {
        // Get the textbox value, parse to number and append to stack
        var viewModel = this.getViewModel();
        this._stackPush(parseFloat(viewModel.get("displayValue")));
        this.didInput = false;
    },

    onOperator: function(el) {
        var viewModel = this.getViewModel();

        // Put current display into the stack
        if (this.didInput)
            this._stackPush(parseFloat(viewModel.get('displayValue')));

        // Grab the last 2 values from the stack and apply the operator
        var v1 = this._stackPop();
        var v2 = this._stackPop();

        var result = 0;

        switch (el.text) {
            case '+':
                result = v1 + v2;
                break;
            case '-':
                result = v2 - v1;
                break;
            case 'X':
                result = v1 * v2;
                break;
            case '/':
                result = v2 / v1;
                break;
        }

        // Place result back into stack and display value
        this._stackPush(result);
        viewModel.set("displayValue", result);
        this.didInput = false;
    },

    _stackPop: function() {
        if (this.stack.length == 0)
            return 0;
        return this.stack.pop();
    },

    _stackPush: function(n) {
        this.stack.push(n);
    },

    _stackClear: function() {
        this.stack = [];
    }
});
