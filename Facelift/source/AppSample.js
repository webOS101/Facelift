enyo.kind({
    name: "Facelift.AppSample",
    classes: "Facelift-AppSample",
    published: {
        title: "App",
        controller: undefined
    },
    components: [
        { name: "Title", kind: "onyx.Toolbar"},
        { content: "App Text" },
        { content: "<a href='#'>Link</a>", allowHtml: true },
        { tag: "br" },
        { kind: "onyx.Button", content: "Button 1", ontap: "buttonTapped" },
        { kind: "onyx.Input", value: "Input Box" },
        { kind: "onyx.Slider", min: 10, max: 50, value: 30 }
    ],
    create: function() {
        this.inherited(arguments);
        this.titleChanged();
    },
    titleChanged: function() {
        this.$.Title.setContent(this.title);
    },
    buttonTapped: function() {
        addCSSRule(".app1", "background-color", "green");
    }
});