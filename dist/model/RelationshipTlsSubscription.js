"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsSubscriptionTlsSubscription = _interopRequireDefault(require("./RelationshipTlsSubscriptionTlsSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsSubscription model module.
 * @module model/RelationshipTlsSubscription
 * @version 3.0.0-alpha1
 */
var RelationshipTlsSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsSubscription</code>.
   * @alias module:model/RelationshipTlsSubscription
   */
  function RelationshipTlsSubscription() {
    _classCallCheck(this, RelationshipTlsSubscription);

    RelationshipTlsSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsSubscription} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsSubscription} The populated <code>RelationshipTlsSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsSubscription();

        if (data.hasOwnProperty('tls_subscription')) {
          obj['tls_subscription'] = _RelationshipTlsSubscriptionTlsSubscription["default"].constructFromObject(data['tls_subscription']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsSubscription;
}();
/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscription
 */


RelationshipTlsSubscription.prototype['tls_subscription'] = undefined;
var _default = RelationshipTlsSubscription;
exports["default"] = _default;