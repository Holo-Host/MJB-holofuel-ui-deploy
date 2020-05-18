(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./js/request.html":
/*!*************************!*\
  !*** ./js/request.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hf-summary-page\">\n\n    <div class=\"p-2\">\n\t<mdc-headline class=\"mb-0\">{{ whoami.agent_id && whoami.agent_id.nick || \"Account\" }}</mdc-headline>\n\t<mdc-textfield v-model=\"whoami.agent_address\"\n\t\t       readonly fullwidth dense\n\t\t       label=\"HoloFuel ID\"\n\t\t       helptext=\"Copy to clipboard\"\n\t\t       trailing-icon=\"file_copy\"\n\t\t       @icon-action=\"$root.copyToClipboard( whoami.agent_address )\" />\n\t<mdc-display class=\"my-0\">\n\t    <hf-symbol />{{ ledger.available | currency }}<br>\n\t</mdc-display>\n    </div>\n\n    <div class=\"px-3\">\n\t<mdc-title>Request funds</mdc-title>\n\t\n\t<mdc-textfield v-model=\"spender_id\" required fullwidth label=\"Request from HoloFuel ID\" />\n\t<mdc-textfield v-model=\"amount\" required fullwidth label=\"Amount\" />\n\t<mdc-textfield v-model=\"hours\" required fullwidth label=\"Hours until expire\" />\n\t<mdc-textfield v-model=\"notes\" fullwidth multiline rows=\"4\" label=\"Notes\" />\n\t\n\t<mdc-button raised @click=\"confirm_request=true\">Request</mdc-button>\n    </div>\n\n    <mdc-dialog v-model=\"confirm_request\"\n\t\ttitle=\"Confirm request\"\n\t\taccept=\"Yes, request funds\" cancel=\"Cancel\"\n\t\t@accept=\"send_request( spender_id, amount, hours, notes )\">\n\tAre you sure you want to request <hf-symbol />{{ amount }} from {{ spender_id }}?\n    </mdc-dialog>\n    \n</div>\n";

/***/ })

}]);
//# sourceMappingURL=2.webpacked.app.js.map