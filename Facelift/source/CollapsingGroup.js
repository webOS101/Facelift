enyo.kind({
    name: "Facelift.CollapsingGroup",
    published: {
        label: "Group",
        open: false
    },
    controlParentName: "Drawer",
    components: [
        // TODO: Add icon
        { name: "Label", ontap: "onHeaderTap" },
        { name: "Drawer", kind: "onyx.Drawer", style: "background-color: red;" }
    ],
    create: function() {
        this.inherited(arguments);
        this.labelChanged();
        this.openChanged();
    },
    labelChanged: function() {
        this.$.Label.setContent(this.label);
    },
    openChanged: function() {
        this.$.Drawer.setOpen(this.open);
    },
    onHeaderTap: function() {
        this.$.Drawer.setOpen(!this.$.Drawer.open);
    }
});
