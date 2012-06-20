enyo.kind({
    name: "Facelift.ColorEditor",
    kind: "enyo.Control",
    classes: "Facelift-ColorEditor",
    published: {
        color: "",
        label: "COLOR",
        classBase: "",
        setting: ""
    },
    events: {
        onColorChanged: ""
    },
    components: [
        { name: "Label" },
        { name: "input", kind: "enyo.Input", oninput: "input" }
    ],
    create: function() {
        this.inherited(arguments);
        this.labelChanged();
        this.colorChanged();
    },
    labelChanged: function() {
        this.$.Label.setContent(this.label);
    },
    colorChanged: function() {
        this.$.input.setContent(this.color);
        // TODO: set background color and pick appropriate text color
    },
    input: function() {
        addCSSRule(this.classBase, this.setting, this.$.input.getValue());
    }
});
