"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Invitation = _interopRequireDefault(require("./Invitation"));

var _InvitationResponseAllOf = _interopRequireDefault(require("./InvitationResponseAllOf"));

var _InvitationResponseData = _interopRequireDefault(require("./InvitationResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationResponse model module.
 * @module model/InvitationResponse
 * @version 3.0.0-alpha1
 */
var InvitationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationResponse</code>.
   * @alias module:model/InvitationResponse
   * @implements module:model/Invitation
   * @implements module:model/InvitationResponseAllOf
   */
  function InvitationResponse() {
    _classCallCheck(this, InvitationResponse);

    _Invitation["default"].initialize(this);

    _InvitationResponseAllOf["default"].initialize(this);

    InvitationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponse} obj Optional instance to populate.
     * @return {module:model/InvitationResponse} The populated <code>InvitationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationResponse();

        _Invitation["default"].constructFromObject(data, obj);

        _InvitationResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _InvitationResponseData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InvitationResponse;
}();
/**
 * @member {module:model/InvitationResponseData} data
 */


InvitationResponse.prototype['data'] = undefined; // Implement Invitation interface:

/**
 * @member {module:model/InvitationData} data
 */

_Invitation["default"].prototype['data'] = undefined; // Implement InvitationResponseAllOf interface:

/**
 * @member {module:model/InvitationResponseData} data
 */

_InvitationResponseAllOf["default"].prototype['data'] = undefined;
var _default = InvitationResponse;
exports["default"] = _default;