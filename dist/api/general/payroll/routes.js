"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../../middleware/authorization");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * @api {get} /api/v1/payrolls?id={recordId} Retrieve Payroll records
 * @apiName RetrievePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/payroll?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/payrolls", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/payrolls Create a Payroll record
 * @apiName CreatePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {Date} period Payroll period YYYY-MM salary month
 * @apiParam {String} code Payroll code of transaction
 * @apiParam {String} subsidiary Payroll subsidiary of company eg PML
 * @apiParam {String} voucher Payroll voucher raised for salary
 * @apiParam {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @apiParam {Number} total Payroll total sum of salary paid
 * @apiParam {Date} pay_start Payroll pay_start commence payment date
 * @apiParam {String} remark Payroll remark or any comment
 * @apiSuccess {Object} Payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.post("/payrolls", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/payrolls/{recordId} Update a Payroll record
 * @apiName UpdatePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Date} period Payroll period YYYY-MM salary month
 * @apiParam {String} code Payroll code of transaction
 * @apiParam {String} subsidiary Payroll subsidiary of company eg PML
 * @apiParam {String} voucher Payroll voucher raised for salary
 * @apiParam {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @apiParam {Number} total Payroll total sum of salary paid
 * @apiParam {Date} pay_start Payroll pay_start commence payment date
 * @apiParam {String} remark Payroll remark or any comment
 * @apiSuccess {Object} Payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.put("/payrolls/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/payrolls/{recordId} Delete a Payroll record
 * @apiName DeletePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.delete("/payrolls/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map