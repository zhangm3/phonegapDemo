/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'SenchaPhoneGapCameraDemo',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.define('ListItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['text']
    }
});

var treeStore = Ext.create('Ext.data.TreeStore', {
    model: 'ListItem',
    defaultRootProperty: 'items',
    root: {
        items: [
            {
                text: 'Drinks',
                items: [
                    {
                        text: 'Water',
                        items: [
                            { text: 'Still', leaf: true },
                            { text: 'Sparkling', leaf: true }
                        ]
                    },
                    { text: 'Soda', leaf: true }
                ]
            },
            {
                text: 'Snacks',
                items: [
                    { text: 'Nuts', leaf: true },
                    { text: 'Pretzels', leaf: true },
                    { text: 'Wasabi Peas', leaf: true  }
                ]
            }
        ]
    }
});

//Ext.create('Ext.NestedList', {
//    fullscreen: true,
//    store: treeStore
//});
          Ext.Viewport.add({
            xtype: 'tabpanel',
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
//                 This is the home page, just some simple HTML
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>Building the Getting Started app.</p>",
                        '<h2>Sencha Touch</h2>'
                    ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    cls: 'blog',
                    store: treeStore

                    
                },
                {
                    xtype: 'formpanel',
                    title: 'Contact Us',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: 'Email address is optional',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email',
                                    name: 'email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message',
                                    name: 'message',
                                    height: 90
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',

                            // The handler is called when the button is tapped
                            handler: function() {

                                // Look up the items stack and get a reference to the first form it finds
                                var form = this.up('formpanel');

                                // Send an AJAX request with form data to the URL for contact.php
                                // Call the success callback if we get a non-error response from the server
                                form.submit({
                                    success: function() {
                                        // Run the callback function when a user taps the OK button
                                        Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                            form.reset();
                                        });
                                    }
                                });
                            }
                        }
                    ]
                }
            ]
        });
        // Initialize the main view
//        Ext.Viewport.add(Ext.create('SenchaPhoneGapCameraDemo.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
