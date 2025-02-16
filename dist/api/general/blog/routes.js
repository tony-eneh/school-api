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
 * @api {get} /api/v1/blogs?id={recordId} Retrieve one or all records
 * @apiName RetrieveBlog
 * @apiGroup Blog
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/blogs
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/blogs", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/blogs Create blogs
 * @apiName CreateBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} title Blog title
 * @apiParam {String} body Blog body field will hold the body of the article as HTML
 * @apiParam {Array} tags Blog tags field will store the post’s tags, eg: “great, article”
 * @apiParam {ObjectId} author_id Blog tags field will store the post’s author
 * @apiParam {String} slug Blog slug field will store the URL-friendly version
 * of the post’s title, eg: “a-great-article”
 * @apiParam {String} is_published Blog published status
 * @apiParam {Array} comment_ids Blog Array-of-Comments (prohibited)
 * @apiSuccess {Object} Blog Blog's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.post("/blogs", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/blogs/{recordId} Update blogs
 * @apiName UpdateBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId record ObjectId
 * @apiParam {String} title Blog title
 * @apiParam {String} body Blog body field will hold the body of the article as HTML
 * @apiParam {Array} tags Blog tags field will store the post’s tags, eg: “great, article”
 * @apiParam {ObjectId} author_id Blog tags field will store the post’s author
 * @apiParam {String} slug Blog slug field will store the URL-friendly version
 * of the post’s title, eg: “a-great-article”
 * @apiParam {String} is_published Blog published status
 * @apiParam {Array} comment_ids Blog Array-of-Comments (prohibited)
 * @apiSuccess {Object} Blog Blog's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.put("/blogs/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/blogs/{recordId} Delete blogs
 * @apiName DeleteBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.delete("/blogs/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map