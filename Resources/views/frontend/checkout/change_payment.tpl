{extends file='parent:frontend/checkout/change_payment.tpl'}

{* PayPal Plus integration *}
{block name='frontend_checkout_payment_fieldset_description'}
    {block name='frontend_checkout_payment_fieldset_description_paypal_unified_plus'}
        {if $paypalUnifiedUsePlus && $paypalUnifiedApprovalUrl && $payment_mean.id == $paypalUnifiedPaymentId}
            <div id="ppplus" class="method--description">
            </div>
        {elseif $payment_mean.name === "SwagPaymentPayPalUnified" && $paypalUnifiedUseSmartPaymentButtons}
            {$smarty.block.parent}

            {block name='frontend_paypal_unified_confirm_smart_payment_buttons_marks'}
                <div id="spbMarksContainer" class="method--description is--last">
                </div>

                {include file="frontend/paypal_unified/spb/smart_payment_buttons.tpl" marksOnly=true}
            {/block}
        {else}
            {$smarty.block.parent}
        {/if}
    {/block}
{/block}

{* PayPal Plus integration *}
{block name='frontend_checkout_payment_content'}
    {block name='frontend_checkout_payment_content_paypal_unified_plus'}
        {if $paypalUnifiedUsePlus && $paypalUnifiedApprovalUrl && $paypalUnifiedRestylePaymentSelection}
            {include file='frontend/paypal_unified/plus/checkout/custom_shipping_payment/change_payment.tpl'}
        {else}
            {$smarty.block.parent}
        {/if}
    {/block}
{/block}
