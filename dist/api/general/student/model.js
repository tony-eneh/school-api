"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaLogin = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _model = require("../state/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../county/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../parent/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../classe/model");

var _model8 = _interopRequireDefault(_model7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// import Hostel from "../hostel/model";

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Student ObjectId primaryKey
 * @property {String} first_name Student first_name (optional)
 * @property {String} middle_name Student middle_name (optional)
 * @property {String} last_name Student first_name (optional)
 * @property {String} gender Student gender (optional)
 * @property {Date} date_of_birth Student date_of_birth (optional)
 * @property {String} address Student address (optional)
 * @property {String} state Student state (optional)
 * @property {String} county Student county (optional)
 * @property {String} email Student email (optional)
 * @property {String} phone Student office phone (optional)
 * @property {String} password Student password (optional)
 * @property {String} blood_group Student blood_group (optional)
 * @property {String} classe Student classe (optional)
 * @property {String} level Student level (optional)
 * @property {String} subsidiary Student subsidiary (required)
 * @property {String} hostel Student hostel (optional)
 * @property {String} photo Student photo (optional)
 * @property {String} parents_name Student parents_name (optional)
 * @property {String} created_by Student record created by
 * @property {String} updated_by Student record modified by
 * @description Student holds record of all students in the school.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["EMAIL", "PHONE", "OTP"]).optional()
};

var schemaCreate = exports.schemaCreate = {
    first_name: _joi2.default.string().trim().optional(),
    middle_name: _joi2.default.string().trim().optional(),
    last_name: _joi2.default.string().trim().optional(),
    gender: _joi2.default.string().optional(),
    date_of_birth: _joi2.default.date().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    blood_group: _joi2.default.string().optional(),
    classe: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    hostel: _joi2.default.string().trim().optional(),
    photo: _joi2.default.string().optional(),
    parents_name: _joi2.default.string().trim().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    first_name: _joi2.default.string().trim().optional(),
    middle_name: _joi2.default.string().trim().optional(),
    last_name: _joi2.default.string().trim().optional(),
    gender: _joi2.default.string().optional(),
    date_of_birth: _joi2.default.date().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    blood_group: _joi2.default.string().optional(),
    classe: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    hostel: _joi2.default.string().trim().optional(),
    photo: _joi2.default.string().optional(),
    parents_name: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    first_name: { type: String, required: [true, "Why no firstname?"] },
    middle_name: { type: String },
    last_name: { type: String, required: [true, "Why no lastname?"] },
    gender: {
        type: String,
        enum: Object.values(_constants.GENDER),
        default: _constants.GENDER.MALE,
        required: [false, "Why no gender?"]
    },
    date_of_birth: { type: Date, required: [false, "Why no Date?"] },
    address: { type: String, required: [false, "Why no Address?"] },
    state: { type: String, required: [false, "Why no State?"] },
    county: { type: String, required: [false, "Why no Country?"] },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    phone: {
        type: String,
        required: [false, "Why no phone?"],
        unique: true
    },
    password: { type: String, required: [false, "Why no password?"] },
    blood_group: { type: String },
    classe: { type: ObjectId, ref: "Classe", required: [false, "Why no class?"] },
    level: { type: String },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    hostel: { type: ObjectId, ref: "Hostel" },
    photo: { type: String },
    parents_name: { type: ObjectId, ref: "Parent", required: [false, "Why no Parent's name?"] },
    created_by: { type: ObjectId, ref: "Student", required: true },
    updated_by: { type: ObjectId, ref: "Student", required: true }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "student");
newSchema.plugin(_mongooseCsv2.default);

var Student = _mongoose2.default.model("Student", newSchema);

Student.findOne({ email: "student@royalacademy.ng" }).then(function (user) {
    if (!user) {
        console.log(_table2.default[0]);
        var newRecord = new Student(_table2.default[0]);
        newRecord.save();
        delete _table2.default[0];
    }
}).catch(function (err) {
    return console.log(__dirname, err.message);
});

if (preload) {
    Student.insertMany(_table2.default);
}

exports.default = Student;
//# sourceMappingURL=model.js.map