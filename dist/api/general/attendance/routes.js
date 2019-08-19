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
 * @api {get} /api/attendances?id={recordId} Retrieve one or all records
 * @apiName RetrieveAttendance
 * @apiGroup Attendance
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/attendances?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Attendance holds record of all attendances involving company vehicles
 */
router.get("/attendances", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/attendances Create attendances
 * @apiName CreateAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} staff_id Attendance staff_id
 * @apiParam {Number} paid_by Attendance paid_by
 * @apiParam {Date} paid_date Attendance paid_date
 * @apiParam {String} pay_status Attendance pay_status
 * @apiParam {String} subsidiary Attendance subsidiary
 * @apiParam {Number} terminal_id Attendance terminal_id
 * @apiParam {Date} arrival_time Attendance arrival_time
 * @apiParam {Date} departure_time Attendance departure_time
 * @apiSuccess {Object} Attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.post("/attendances", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/attendances/{recordId} Update attendances
 * @apiName UpdateAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} staff_id Attendance staff_id
 * @apiParam {Number} paid_by Attendance paid_by
 * @apiParam {Date} paid_date Attendance paid_date
 * @apiParam {String} pay_status Attendance pay_status
 * @apiParam {String} subsidiary Attendance subsidiary
 * @apiParam {Number} terminal_id Attendance terminal_id
 * @apiParam {Date} arrival_time Attendance arrival_time
 * @apiParam {Date} departure_time Attendance departure_time
 * @apiSuccess {Object} Attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.put("/attendances/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/attendances/{recordId} Delete attendances
 * @apiName DeleteAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.delete("/attendances/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map