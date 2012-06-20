var settings = [
    ["Background", {kind: "Facelift.ColorEditor", classBase: ".app1", setting: "background-color"}, {}],
    ["Toolbar", {kind: "Facelift.ColorEditor", classBase: ".app1 .onyx.onyx-toolbar", setting: "background-color"}, { kind: "onyx.Toolbar", content: "App" }],
    ["Text", {kind: "Facelift.ColorEditor", classBase: ".app1", setting: "color"}, { content: "App Text" }],
    ["LinkText", {kind: "Facelift.ColorEditor", classBase: ".app1 a", setting: "color"}, { content: "<a href='#'>Link</a>", allowHtml: true }],
    ["Button", {kind: "Facelift.ColorEditor", classBase: ".app1 .onyx-button", setting: "background-color"}, { kind: "onyx.Button", content: "Button 1" }],
    ["Input", {kind: "Facelift.ColorEditor", classBase: ".app1 input", setting: "background-color"}, { kind: "onyx.Input", value: "Input Box" }],
    ["Slider", {kind: "Facelift.ColorEditor", classBase: ".app1 .onyx-progress-bar-bar", setting: "background-color"},{ kind: "onyx.Slider", min: 10, max: 50, value: 30 }]
//    ["Background", {kind: "Facelift.ColorEditor", classBase: "", setting: "background-color"}, {}],
];

enyo.kind({
    name: "Facelift.App",
    components: [
        { name: "outer", kind: "FittableRows", classes: "enyo-fit",
            components: [
                { name: "header", kind: "onyx.Toolbar"},
                { name: "inner", fit: true, kind: "FittableColumns",
                    components: [
                        { name: "leftbar", classes: "Facelift-Leftbar",
                            components: [
//                                { kind: "Facelift.CollapsingGroup",
//                                    label: "Background Color",
//                                    components: [
//                                        { kind: "Facelift.ColorEditor" }
//                                    ]
//                                },
                            ]
                        },
                        { content: "middle", fit: true,
                            components: [
                                { name: "AppSample", classes: "app1 Facelift-AppSample" }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    create: function() {
        var i;
        this.inherited(arguments);

        if(settings.length > 0) {
            this.$.leftbar.createComponent(settings[0][1]);
        }
        for(i = 1; i < settings.length; i++) {
            this.$.leftbar.createComponent(settings[i][1]);
            this.$.AppSample.createComponent(settings[i][2]);
        }
    }
});