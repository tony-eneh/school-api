import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/courses?id={recordId} Retrieve one or all records
 * @apiName RetrieveCourse
 * @apiGroup Course
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/courses?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of courses in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/courses", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/courses Create courses
 * @apiName CreateCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Course name - external (required)
 * @apiParam {String} code Course code - internal (required)
 * @apiParam {String} subsidiary Course subsidiary (required)
 * @apiParam {String} level Course level [1-7]
 * @apiParam {ObjectId} master Course master or form teacher (optional)
 * @apiParam {ObjectId} prefect Course prefect or class captain (optional)
 * @apiParam {ObjectId} classroom Course classroom or lesson venue (optional)
 * @apiParam {ObjectId} category Course category or type (optional)
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.post("/courses", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/courses/{recordId} Update courses
 * @apiName UpdateCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} name Course name - external (required)
 * @apiParam {String} code Course code - internal (required)
 * @apiParam {String} subsidiary Course subsidiary (required)
 * @apiParam {String} level Course level [1-7]
 * @apiParam {ObjectId} master Course master or form teacher (optional)
 * @apiParam {ObjectId} prefect Course prefect or class captain (optional)
 * @apiParam {ObjectId} classroom Course classroom or lesson venue (optional)
 * @apiParam {ObjectId} category Course category or type (optional)
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.put("/courses/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/courses/{recordId} Delete courses
 * @apiName DeleteCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.delete("/courses/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;