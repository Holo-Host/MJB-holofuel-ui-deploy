(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/promise.html":
/*!*************************!*\
  !*** ./js/promise.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hf-summary-page\">\n\n    <div class=\"p-2\">\n\t<mdc-headline class=\"mb-0\">{{ whoami.agent_id && whoami.agent_id.nick || \"Account\" }}</mdc-headline>\n\t<mdc-textfield v-model=\"whoami.agent_address\"\n\t\t       readonly fullwidth dense\n\t\t       label=\"HoloFuel ID\"\n\t\t       helptext=\"Copy to clipboard\"\n\t\t       trailing-icon=\"file_copy\"\n\t\t       @icon-action=\"$root.copyToClipboard( whoami.agent_address )\" />\n\t<mdc-display class=\"my-0\">\n\t    <hf-symbol />{{ ledger.available | currency }}<br>\n\t</mdc-display>\n    </div>\n\n    <div class=\"px-3\">\n\t<mdc-title>Send funds</mdc-title>\n\t\n\t<mdc-textfield v-model=\"receiver_id\" required fullwidth label=\"Receiver HoloFuel ID\" />\n\t<mdc-textfield v-model=\"amount\" required fullwidth label=\"Amount\" />\n\t<mdc-textfield v-model=\"calculated_fee\" readonly fullwidth label=\"Calculated fee\" />\n\t<mdc-textfield v-model=\"hours\" required fullwidth label=\"Hours until expire\" />\n\t<mdc-textfield v-model=\"notes\" fullwidth multiline rows=\"4\" label=\"Notes\" />\n\t\n\t<mdc-button raised @click=\"confirm_promise=true\">Send</mdc-button>\n    </div>\n\n    <mdc-dialog v-model=\"confirm_promise\"\n\t\ttitle=\"Confirm send\"\n\t\taccept=\"Yes, send funds\" cancel=\"Cancel\"\n\t\t@accept=\"send_promise( receiver_id, amount, hours, notes )\">\n\tAre you sure you want to send <hf-symbol />{{ amount }} to {{ receiver_id }}?\n    </mdc-dialog>\n    \n</div>\n";

/***/ })

}]);
//# sourceMappingURL=1.webpacked.app.js.map