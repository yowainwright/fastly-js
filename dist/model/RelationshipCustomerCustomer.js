"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberCustomer = _interopRequireDefault(require("./RelationshipMemberCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipCustomerCustomer model module.
 * @module model/RelationshipCustomerCustomer
 * @version 3.0.0-alpha1
 */
var RelationshipCustomerCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipCustomerCustomer</code>.
   * @alias module:model/RelationshipCustomerCustomer
   */
  function RelationshipCustomerCustomer() {
    _classCallCheck(this, RelationshipCustomerCustomer);

    RelationshipCustomerCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipCustomerCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipCustomerCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipCustomerCustomer} obj Optional instance to populate.
     * @return {module:model/RelationshipCustomerCustomer} The populated <code>RelationshipCustomerCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipCustomerCustomer();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberCustomer["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipCustomerCustomer;
}();
/**
 * @member {Array.<module:model/RelationshipMemberCustomer>} data
 */


RelationshipCustomerCustomer.prototype['data'] = undefined;
var _default = RelationshipCustomerCustomer;
exports["default"] = _default;