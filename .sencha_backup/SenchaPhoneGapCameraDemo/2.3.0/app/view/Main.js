Ext.define('SenchaPhoneGapCameraDemo.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.Button',
        'Ext.Img'
    ],
    config: {
        layout: {
            type:"vbox",
            pack:"center",
            align:"center"
        },

        items: [
            {
                xtype: "image",
                src: "http://placehold.it/200x200",
                width: 200,
                height: 200
            },
            {
                xtype: "button",
                text: "Photo",
                handler: function() {
                    function success(image_uri) {
                        var img = Ext.ComponentQuery.query("image")[0];
                        img.setSrc(image_uri);
                    }

                    function fail(message) {
                        alert("Failed: Not Get it" + message);
                    }

                    navigator.camera.getPicture(success, fail, 
                        {
                            quality: 50,
                            destinationType: navigator.camera.DestinationType.FILE_URI,
                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                        }
                    );
                }
            }
        ]
    }
});
