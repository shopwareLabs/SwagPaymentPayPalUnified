//{namespace name="backend/paypal_unified_settings/tabs/general"}
//{block name="backend/paypal_unified_settings/tabs/general"}
Ext.define('Shopware.apps.PaypalUnifiedSettings.view.tabs.General', {
    extend: 'Ext.form.Panel',
    alias: 'widget.paypal-unified-settings-tabs-general',
    title: '{s name="title"}General settings{/s}',

    anchor: '100%',
    border: false,
    bodyPadding: 10,

    style: {
        background: '#EBEDEF'
    },

    fieldDefaults: {
        anchor: '100%',
        labelWidth: '180px'
    },

    /**
     * @type { Ext.form.FieldSet }
     */
    restContainer: null,

    /**
     * @type { Ext.form.FieldSet }
     */
    behaviorContainer: null,

    initComponent : function () {
        var me = this;

        me.items = me.createItems();

        me.callParent(arguments);

        //Manually set the background color of the toolbar.
        me.down('*[name=toolbarContainer]').setBodyStyle(me.style);
    },

    registerEvents: function () {
        var me = this;

        me.addEvents(
            /**
             * Will be fired when the user clicks on the register webhook button
             */
            'registerWebhook',

            /**
             * Will be fired when the user clicks on the Test API settings button
             */
            'validateAPI'
        );
    },

    /**
     * @returns { Array }
     */
    createItems: function () {
        var me = this;

        return [ me.createRestContainer(), me.createBehaviorContainer() ]
    },

    /**
     * @returns { Ext.form.FieldSet }
     */
    createRestContainer: function () {
        var me = this;

        me.restContainer = Ext.create('Ext.form.FieldSet', {
            title: '{s name="fieldset/rest/title"}API Settings{/s}',

            items: [{
                xtype: 'checkbox',
                name: 'sandbox',
                inputValue: true,
                uncheckedValue:false,
                fieldLabel: '{s name="fieldset/rest/enableSandbox"}Enable sandbox{/s}',
                boxLabel: '{s name="fieldset/rest/enableSandbox/help"}Enable this option to test the integration.{/s}'
            }, {
                xtype: 'textfield',
                name: 'clientId',
                fieldLabel: '{s name="fieldset/rest/clientId"}Client-ID{/s}',
                helpText: '{s name="fieldset/rest/clientId/help"}The REST-API Client-ID that is being used to authenticate this plugin to the PayPal API.{/s}',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'clientSecret',
                fieldLabel: '{s name="fieldset/rest/clientSecret"}Client-Secret{/s}',
                helpText: '{s name="fieldset/rest/clientSecret/help"}The REST-API Client-Secret that is being used to authenticate this plugin to the PayPal API.{/s}',
                allowBlank: false
            }, me.createToolbar()]
        });

        return me.restContainer;
    },

    /**
     * @returns { Ext.form.FieldSet }
     */
    createBehaviorContainer: function () {
        var me = this;

        me.behaviorContainer = Ext.create('Ext.form.FieldSet', {
            title: '{s name="fieldset/behavior/title"}API Settings{/s}',
            items: [{
                xtype: 'checkbox',
                name: 'showSidebarLogo',
                inputValue: true,
                uncheckedValue:false,
                fieldLabel: '{s name="fieldset/behavior/showSidebarLogo"}Show logo in sidebar{/s}',
                boxLabel: '{s name="fieldset/behavior/showSidebarLogo/help"}Enable this option to show the PayPal logo in the storefront sidebar.{/s}'
            }, {
                xtype: 'textfield',
                name: 'brandName',
                fieldLabel: '{s name="fieldset/behavior/brandName"}Brand name{/s}',
                helpText: '{s name="fieldset/behavior/brandName/help"}The text you enter here will be displayed as the brand name on the PayPal payment page.{/s}'
            }, {
                xtype: 'base-element-media',
                name: 'logoImage',
                fieldLabel: '{s name="fieldset/behavior/logoImage"}Logo{/s}',
                helpText: '{s name="fieldset/behavior/logoImage/help"}The image you select here will be displayed as the brand logo on the PayPal payment page.{/s}',
                allowBlank: false
            }, {
                xtype: 'checkbox',
                name: 'sendOrderNumber',
                inputValue: true,
                uncheckedValue:false,
                fieldLabel: '{s name="fieldset/behavior/sendOrderNumber"}Send order number to PayPal{/s}',
                boxLabel: '{s name="fieldset/behavior/sendOrderNumber/help"}Enable this option to send the order number to PayPal after an order has been complete.{/s}',
                handler: Ext.bind(me.onSendOrderNumberChecked, me)
            }, {
                xtype: 'textfield',
                name: 'orderNumberPrefix',
                fieldLabel: '{s name="fieldset/behavior/orderNumberPrefix"}Order number prefix{/s}',
                helpText: '{s name="fieldset/behavior/orderNumberPrefix/help"}The text you enter here will be placed before the actual order number (e.g MyShop_%orderNumber%). This helps to identify the shop in which this order has been taken in.{/s}',
                disabled: true
            }]
        });

        return me.behaviorContainer;
    },

    /**
     * @returns { Ext.form.Panel }
     */
    createToolbar: function () {
        var me = this;

        return Ext.create('Ext.form.Panel', {
            dock: 'bottom',
            border: false,
            bodyPadding: 5,
            name: 'toolbarContainer',

            items: [{
                xtype: 'button',
                cls: 'primary',
                text: '{s name="fieldset/rest/testButton"}Test API settings{/s}',
                style: {
                    float: 'right'
                },
                handler: Ext.bind(me.onValidateAPIButtonClick, me)
            }, {
                xtype: 'button',
                cls: 'secondary',
                text: '{s name="fieldset/rest/webhookButton"}Register Webhook{/s}',
                style: {
                    float: 'right'
                },
                handler: Ext.bind(me.onRegisterWebhookButtonClick, me)
            }]
        });
    },

    /**
     * @param { Shopware.apps.Base.view.element.Boolean } element
     * @param { Boolean } checked
     */
    onSendOrderNumberChecked: function (element, checked) {
        var me = this;

        me.down('*[name=orderNumberPrefix]').setDisabled(!checked);
    },

    onValidateAPIButtonClick: function () {
        var me = this;

        me.fireEvent('validateAPI');
    },

    onRegisterWebhookButtonClick: function () {
        var me = this;

        me.fireEvent('registerWebhook');
    }
});
//{/block}