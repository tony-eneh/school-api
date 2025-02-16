import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { code: "11000", name: "Accident ", category: "OPERATION", description: "Accident ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "12000", name: "Advert & Publicity", category: "OPERATION", description: "Advert & Publicity", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "13000", name: "Asset Disposal", category: "OPERATION", description: "Asset Disposal", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "14000", name: "Auditors Fees & Charges", category: "ADMINISTRATIVE", description: "Auditors Fees & Charges", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "15000", name: "Carriage Cost", category: "OPERATION", description: "Carriage Cost", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "16000", name: "Directors Emoluments", category: "ADMINISTRATIVE", description: "Directors Emoluments", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "17000", name: "Entertainment", category: "ADMINISTRATIVE", description: "Entertainment", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "18000", name: "Feeding", category: "ADMINISTRATIVE", description: "Feeding", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "19000", name: "Fittings", category: "ADMINISTRATIVE", description: "Fittings", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "20000", name: "Foundation", category: "ADMINISTRATIVE", description: "Foundation", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "21000", name: "Freight Charges", category: "OPERATION", description: "Freight Charges", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "22000", name: "Fuel Cost", category: "OPERATION", description: "Fuel Cost", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "23000", name: "Government Charges", category: "ADMINISTRATIVE", description: "Government Charges", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "24000", name: "Guest House", category: "ADMINISTRATIVE", description: "Guest House", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "25000", name: "Insurance", category: "ADMINISTRATIVE", description: "Insurance", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "26000", name: "IT", category: "ADMINISTRATIVE", description: "IT", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "27000", name: "Legal ", category: "OPERATION", description: "Legal ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "28000", name: "Licensing & Registration.", category: "OPERATION", description: "Licensing & Registration.", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "29000", name: "Lubricants", category: "OPERATION", description: "Lubricants", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "30000", name: "Maintenance & Repair of Bus", category: "OPERATION", description: "Maintenance & Repair of Bus", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "31000", name: "Maintenance & Repair of Generators  ", category: "ADMINISTRATIVE", description: "Maintenance & Repair of Generators  ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "32000", name: "Maintenance & Repair of Official Car", category: "ADMINISTRATIVE", description: "Maintenance & Repair of Official Car", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "33000", name: "Maintenance & Repair of Tow Van ", category: "OPERATION", description: "Maintenance & Repair of Tow Van ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "34000", name: "Maintenance & Repair Office Equipment", category: "ADMINISTRATIVE", description: "Maintenance & Repair Office Equipment", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "35000", name: "Medical", category: "ADMINISTRATIVE", description: "Medical", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "36000", name: "Office Supplies", category: "ADMINISTRATIVE", description: "Office Supplies", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "37000", name: "Passengers Manifest", category: "OPERATION", description: "Passengers Manifest", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "38000", name: "Patrol", category: "OPERATION", description: "Patrol", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "39000", name: "Printing Stationeries", category: "ADMINISTRATIVE", description: "Printing Stationeries", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "40000", name: "Purchasing - Local", category: "OPERATION", description: "Purchasing - Local", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "41000", name: "Purchasing - Foreign ", category: "OPERATION", description: "Purchasing - Foreign ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "42000", name: "Rent", category: "ADMINISTRATIVE", description: "Rent", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "43000", name: "Sanitation & Waste Management ", category: "ADMINISTRATIVE", description: "Sanitation & Waste Management ", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "44000", name: "Sanitation (Cleaning Materials)", category: "ADMINISTRATIVE", description: "Sanitation (Cleaning Materials)", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "45000", name: "Security", category: "ADMINISTRATIVE", description: "Security", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "46000", name: "Staff Benefits", category: "ADMINISTRATIVE", description: "Staff Benefits", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "47000", name: "Staff Remuneration", category: "ADMINISTRATIVE", description: "Staff Remuneration", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "48000", name: "Staff Training & Seminar", category: "ADMINISTRATIVE", description: "Staff Training & Seminar", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "49000", name: "Structural Modification", category: "ADMINISTRATIVE", description: "Structural Modification", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "50000", name: "Taxation", category: "ADMINISTRATIVE", description: "Taxation", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "51000", name: "Telephone Call", category: "ADMINISTRATIVE", description: "Telephone Call", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "52000", name: "Traffic Violation Charges", category: "ADMINISTRATIVE", description: "Traffic Violation Charges", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "53000", name: "Transport & Accommodation", category: "OPERATION", description: "Transport & Accommodation", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "54000", name: "Unforeseen Loses", category: "ADMINISTRATIVE", description: "Unforeseen Loses", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "55000", name: "Uniforms & Safety kits", category: "ADMINISTRATIVE", description: "Uniforms & Safety kits", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "56000", name: "Union Dues", category: "ADMINISTRATIVE", description: "Union Dues", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "57000", name: "Utility (Electricity, Water)", category: "ADMINISTRATIVE", description: "Utility (Electricity, Water)", class_type: "EXPENSES", subsidiary: "PMT" },
    { code: "58000", name: "Wisdom Clinic", category: "ADMINISTRATIVE", description: "Wisdom Clinic", class_type: "EXPENSES", subsidiary: "PMT" },
];

const accountClassBaseId = DATABASE.BASE_ID.ACCOUNT;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(accountClassBaseId, 1 + index);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
