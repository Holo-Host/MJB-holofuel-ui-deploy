(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./js/home.html":
/*!**********************!*\
  !*** ./js/home.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hf-summary-page\">\n\n    <div class=\"p-2\">\n\t<mdc-headline class=\"mb-0\">{{ whoami.agent_id && whoami.agent_id.nick || \"Account\" }}</mdc-headline>\n\t<mdc-textfield v-model=\"whoami.agent_address\"\n\t\t       readonly fullwidth dense\n\t\t       label=\"HoloFuel ID\"\n\t\t       helptext=\"Copy to clipboard\"\n\t\t       trailing-icon=\"file_copy\"\n\t\t       @icon-action=\"$root.copyToClipboard( whoami.agent_address )\" />\n\t<mdc-display class=\"my-0\">\n\t    <hf-symbol />{{ ledger.available | currency }}<br>\n\t</mdc-display>\n    </div>\n    \n    <mdc-tab-bar @change=\"selectTab\">\n\t<mdc-tab icon=\"swap_horiz\">Transactions</mdc-tab>\n\t<mdc-tab icon=\"toc\">Details</mdc-tab>\n    </mdc-tab-bar>\n\n    <section v-if=\"selectedTab === 0\">\n\t<table>\n\t    <thead>\n\t\t<tr>\n\t\t    <th><mdc-text>Details</mdc-text></th>\n\t\t    <th><mdc-text>In</mdc-text></th>\n\t\t    <th><mdc-text>Out</mdc-text></th>\n\t\t</tr>\n\t    </thead>\n\t    <tbody>\n\t\t<tr class=\"table-grouping-title\">\n\t\t    <th colspan=\"3\"><mdc-subheading class=\"m-1\">Pending</mdc-subheading></th>\n\t\t</tr>\n\t\t<!--\n\t\t  -- Each preath has an event: (<commit>, <timestamp>, <entry>), and a provenance: [<agent-id>, <signature>].\n\t\t  -- This data is ultimately used to construct a HoloFuel Zome `promise` or `receive_payment` call.\n\t\t  -->\n\t\t<tr v-for=\"(preauth, index) in pending.requests\" :key=\"preauth.event[0]\">\n\t\t    <td style=\"width: 60%\">\n\t\t\t<mdc-body>\n\t\t\t    <b>{{ datetime( preauth.event[1], 'long' ) }}</b><br>\n\t\t\t    {{ preauth.event[2].Request.to }}<br>\n\t\t\t    {{ preauth.event[2].Request.notes }}\n\t\t\t</mdc-body>\n\n\t\t\t<div class=\"flex-table\">\n\t\t\t    <div>\n\t\t\t\t<mdc-button dense raised @click=\"dialog_request_confirm( preauth )\">Send</mdc-button>\n\t\t\t    </div>\t\t\t\t\n\t\t\t    <div style=\"text-align: right;\">\n\t\t\t\t<mdc-button dense outlined @click=\"dialog_request_decline( preauth )\">Decline</mdc-button>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t    </td>\n\t\t    <td style=\"width: 20%; text-align: right;\"></td>\n\t\t    <td style=\"width: 20%; text-align: right;\">\n\t\t\t<mdc-body style=\"color: #C00;\">\n\t\t\t    <hf-symbol />{{ pending_request_amount( preauth ) | currency }}\n\t\t\t    <br>\n\t\t\t    <small>Fee {{ pending_request_fees( preauth ) | currency }}</small>\n\t\t\t</mdc-body>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr v-for=\"(preauth, index) in pending.promises\" :key=\"preauth.event[0]\">\n\t\t    <td style=\"width: 60%\">\n\t\t\t<mdc-body>\n\t\t\t    <b>{{ datetime( preauth.event[1], 'long' ) }}</b><br>\n\t\t\t    {{ preauth.event[2].Promise.tx.from }}<br>\n\t\t\t    {{ preauth.event[2].Promise.tx.notes }}\n\t\t\t</mdc-body>\n\n\t\t\t<div class=\"flex-table\">\n\t\t\t    <div>\n\t\t\t\t<mdc-button dense raised @click=\"dialog_promise_confirm( preauth )\">Receive</mdc-button>\n\t\t\t    </div>\t\t\t\t\n\t\t\t    <div style=\"text-align: right;\">\n\t\t\t\t<mdc-button dense outlined @click=\"dialog_promise_decline( preauth )\">Decline</mdc-button>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t    </td>\n\t\t    <td style=\"width: 20%; text-align: right;\">\n\t\t\t<mdc-body style=\"color: #0C0;\">\n\t\t\t    <hf-symbol />{{ pending_promise_amount( preauth ) | currency }}\n\t\t\t</mdc-body>\n\t\t    </td>\n\t\t    <td style=\"width: 20%; text-align: right;\"></td>\n\t\t</tr>\n\t    </tbody>\n\t    <tbody>\n\t\t<tr class=\"table-grouping-title\">\n\t\t    <th colspan=\"3\"><mdc-subheading class=\"m-1\">Transactions</mdc-subheading></th>\n\t\t</tr>\n\t\t<!--\n\t\t  -- Each tx has:\n\t\t  --   .index\t   Ordinal index of this transaction, eg. 115th\n\t\t  --   .state\t   Description, eg. \"incoming/accepted\"\n\t\t  --   .origin\t   Address of commit that originated the transaction\n\t\t  --   .event\t   This entry in the transaction\n\t\t  --   .timestamp\n\t\t  --\t .origin   Original entry's time\n\t\t  --\t .event\t   This event's time\n\t\t  --   .adjustment The net change to the Ledger produced by transaction, so far\n\t\t  -->\n\t\t<tr v-for=\"tx in transactions\" :key=\"tx.index\">\n\t\t    <td style=\"width: 60%\">\n\t\t\t<mdc-body>\n\t\t\t    <b>{{ datetime( tx.timestamp.event, 'long' ) }}</b><br>\n\t\t\t    {{ counterparty( tx ) }}\n\t\t\t</mdc-body>\n\t\t    </td>\n\t\t    <td style=\"width: 20%; text-align: right;\">\n\t\t\t<mdc-body v-if=\"tx.state.startsWith('incoming')\"\n\t\t\t\t  style=\"color: #0A0;\">\n\t\t\t    {{ state_name( tx ) }}<br/>\n\t\t\t    <hf-symbol />{{ transaction( tx ).amount | currency }}\n\t\t\t</mdc-body>\n\t\t    </td>\n\t\t    <td style=\"width: 20%; text-align: right;\">\n\t\t\t<mdc-body v-if=\"tx.state.startsWith('outgoing')\"\n\t\t\t\t  style=\"color: #A00;\">\n\t\t\t    {{ state_name( tx ) }}<br/>\n\t\t\t    <hf-symbol />{{ transaction( tx ).amount | currency }}\n\t\t\t    <br/>\n\t\t\t    <small>Fee {{ transaction( tx ).fee | currency }}</small>\n\t\t\t</mdc-body>\n\t\t    </td>\n\t\t</tr>\n\t    </tbody>\n\t</table>\n    </section>\n    \n    <section v-if=\"selectedTab === 1\">\n\t<table>\n\t    <tbody>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Available</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.available | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Credit</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.credit | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Balance</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.balance | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Payable</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.payable | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Fees Due</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.fees | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t    <td style=\"width: 50%\">\n\t\t\t<mdc-subheading>Receivable</mdc-subheading>\n\t\t    </td>\n\t\t    <td style=\"width: 50%; text-align: right;\">\n\t\t\t<mdc-text><hf-symbol />{{ ledger.receivable | currency }}</mdc-text>\n\t\t    </td>\n\t\t</tr>\n\t    </tbody>\n\t</table>\t\n    </section>\n\n    <div v-if=\"request_preauth\">\n\t<mdc-dialog v-model=\"dialog_request_confirm_open\"\n\t\t    title=\"Approve requested funds\"\n\t\t    accept=\"Yes, send funds\" cancel=\"Cancel\"\n\t\t    @accept=\"send_promise_for_request( request_preauth )\">\n\t    Are you sure you want to send <hf-symbol />{{ request_preauth.event[2].Request.amount | currency }}\n\t    to {{ request_preauth.event[2].Request.to }}?\n\t</mdc-dialog>\n\t\n\t<mdc-dialog v-model=\"dialog_request_decline_open\"\n\t\t    title=\"Decline requested funds\"\n\t\t    accept=\"Yes, decline request\" cancel=\"Cancel\"\n\t\t    @accept=\"send_decline_for_request( request_preauth )\">\n\t    Are you sure you want to decline the request from {{ request_preauth.event[2].Request.to }}\n\t    for <hf-symbol />{{ request_preauth.event[2].Request.amount | currency }}?\n\t</mdc-dialog>\n    </div>\n    \n    <div v-if=\"promise_preauth\">\n\t<mdc-dialog v-model=\"dialog_promise_confirm_open\"\n\t\t    title=\"Receive promised funds\"\n\t\t    accept=\"Yes, accept funds\" cancel=\"Cancel\"\n\t\t    @accept=\"send_receive_payment( promise_preauth )\">\n\t    Are you sure you want accept <hf-symbol />{{ promise_preauth.event[2].Promise.tx.amount | currency }}\n\t    from {{ promise_preauth.event[2].Promise.tx.from }}?\n\t</mdc-dialog>\n\t\n\t<mdc-dialog v-model=\"dialog_promise_decline_open\"\n\t\t    title=\"Decline promiseed funds\"\n\t\t    accept=\"Yes, decline promise\" cancel=\"Cancel\"\n\t\t    @accept=\"send_decline_payment( promise_preauth )\">\n\t    Are you sure you want to decline the funds from {{ promise_preauth.event[2].Promise.tx.from }}\n\t    for <hf-symbol />{{ promise_preauth.event[2].Promise.tx.amount | currency }}?\n\t</mdc-dialog>\n    </div>\n    \n</div>\n";

/***/ })

}]);
//# sourceMappingURL=0.webpacked.app.js.map