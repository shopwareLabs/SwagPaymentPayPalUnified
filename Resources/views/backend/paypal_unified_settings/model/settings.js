// {block name="backend/paypal_unified_settings/model/settings"}
Ext.define('Shopware.apps.PaypalUnifiedSettings.model.Settings', {
    extend: 'Shopware.data.Model',

    configure: function() {
        return {
            controller: 'PaypalUnifiedSettings'
        };
    },

    fields: [
        // {block name="backend/paypal_unified_settings/model/settings/fields"}{/block}
        { name: 'id', type: 'int' },
        { name: 'shopId', type: 'int' },
        { name: 'active', type: 'bool' },
        { name: 'clientId', type: 'string' },
        { name: 'clientSecret', type: 'string' },
        { name: 'sandbox', type: 'bool' },
        { name: 'showSidebarLogo', type: 'bool' },
        { name: 'brandName', type: 'string' },
        { name: 'logoImage', type: 'string' },
        { name: 'sendOrderNumber', type: 'bool' },
        { name: 'orderNumberPrefix', type: 'string' },
        { name: 'useInContext', type: 'bool', defaultValue: true },
        { name: 'paypalPaymentIntent', type: 'int' },
        { name: 'plusActive', type: 'bool' },
        { name: 'plusRestyle', type: 'bool' },
        { name: 'plusLanguage', type: 'string' },
        { name: 'installmentsActive', type: 'bool' },
        { name: 'installmentsPresentmentDetail', type: 'int' },
        { name: 'installmentsPresentmentCart', type: 'int' },
        { name: 'installmentsShowLogo', type: 'bool' },
        { name: 'ecActive', type: 'bool' },
        { name: 'ecDetailActive', type: 'bool' },
        { name: 'logLevel', type: 'int', defaultValue: 0 },
        { name: 'displayErrors', type: 'bool' },
        { name: 'ecSubmitCart', type: 'bool', defaultValue: true },
        { name: 'ecDetailActive', type: 'bool' },
        { name: 'ecButtonStyleColor', type: 'string', defaultValue: 'gold' },
        { name: 'ecButtonStyleShape', type: 'string', defaultValue: 'rect' },
        { name: 'ecButtonStyleSize', type: 'string', defaultValue: 'medium' }
    ]
});
// {/block}
