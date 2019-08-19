/* eslint-disable no-multi-spaces */
import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { name: "Access",           label: "access",               url: "accesses",            description: "Manages Staff and Office access to the ERP" },
    { name: "Accident",         label: "accident",             url: "accidents",           description: "Manages Drivers and Vehicles that have accident" },
    { name: "AccidentCause",    label: "accident_cause",       url: "accident-causes",     description: "Manages the cause of accidents" },
    { name: "AccidentVictim",   label: "accident_victim",      url: "accident-victims",    description: "Manages accident victims" },
    { name: "AccountClass",     label: "account_class",        url: "account-classes",     description: "Manages records of account classifications" },
    { name: "AccountHeading",   label: "account_heading",      url: "account-headings",    description: "Manages records of account headings belonging to one classification" },
    { name: "AccountPosting",   label: "account_posting",      url: "account-posting",     description: "Manages records of account posting belonging to one classification" },
    { name: "AncillaryRevenue", label: "ancillary_revenue",    url: "ancillary-revenues",  description: "Manages records of income other than regular ones" },
    { name: "Asset",            label: "asset",                url: "assets",              description: "Manages " },
    { name: "AssetAssignment",  label: "asset_assignment",     url: "asset-assignments",   description: "Manages the assignment of Assets to Staff on request" },
    { name: "Attendance",       label: "attendance",           url: "attendances",         description: "Manages Staff and Office attendance to the ERP" },
    { name: "Bank",             label: "bank",                 url: "banks",               description: "Manages records of Corporate commercial banks operating Groups bank account(s)" },
    { name: "BankAccounts",     label: "bank_account",         url: "bank-accounts",       description: "Manages Records of Corporate Bank-accounts for all terminals and management operations" },
    { name: "BankRegister",     label: "bank_register",        url: "bank-registers",      description: "Manages Records of Deposites made by terminals at the end of each day" },
    { name: "BankTransaction",  label: "bank_transaction",     url: "bank-transactions",   description: "Manages Records of bank-transactions against various terminal bank-accounts" },
    { name: "Blog",             label: "blog",                 url: "blogs",               description: "Manages Records of posts and comments from client and staff" },
    { name: "BlogComment",      label: "blog_comment",         url: "blog-comments",       description: "Manages records of comments from blog" },
    { name: "Crm",              label: "crm",                  url: "crm",                 description: "Manages Records of consolidated Customer Relationship Management records for PMT, PML, PET, Shop etc" },
    { name: "Calendar",         label: "calendar",             url: "calendar",            description: "Manages calenders" },
    { name: "Carts",            label: "carts",                url: "carts",               description: " " },
    { name: "Category",         label: "category",             url: "categories",          description: "" },
    { name: "Chat",             label: "chat",                 url: "chats",               description: "" },
    { name: "ChatRoom",         label: "chatRoom",             url: "chat-rooms",          description: "" },
    { name: "City",             label: "city",                 url: "cities",              description: "Manages Records of Cities where terminals are located found in States" },
    { name: "ContactUs",        label: "contact_us",           url: "contact-us",          description: "Manages Staff and Office access to the ERP" },
    { name: "Country",          label: "country",              url: "countries",           description: "Manages Staff and Office access to the ERP" },
    { name: "County",           label: "county",               url: "counties",            description: "Manages Staff and Office access to the ERP" },
    { name: "Customer",         label: "customer",             url: "customers",           description: "Manages Staff and Office access to the ERP" },
    { name: "DocumentType",     label: "document_type",        url: "document-type",       description: "Manages Staff and Office access to the ERP" },
    { name: "FlutterwaveSubaccount", label: "flutterwave_subaccount", url: "flutterwave-subaccounts", description: "Manages Staff and Office access to the ERP" },
    { name: "FlutterwaveTransaction", label: "flutterwave_transaction", url: "flutterwave-transactions",    description: "Manages Staff and Office access to the ERP" },
    { name: "Hub",              label: "hub",                  url: "hubs",                description: "Manages Staff and Office access to the ERP" },
    { name: "Image",            label: "image",                url: "images",              description: "Manages Staff and Office access to the ERP" },
    { name: "Material",         label: "material",             url: "materials",           description: "Manages Staff and Office access to the ERP" },
    { name: "Message",          label: "message",              url: "messages",            description: "Manages Staff and Office access to the ERP" },
    { name: "Notification",     label: "notification",         url: "notifications",       description: "Manages Staff and Office access to the ERP" },
    { name: "Offence",          label: "offence",              url: "offences",            description: "Manages Staff and Office access to the ERP" },
    { name: "OffenceType",      label: "offence_type",         url: "offence-types",       description: "Manages Staff and Office access to the ERP" },
    { name: "Office",           label: "office",               url: "offices",             description: "Manages Staff and Office access to the ERP" },
    { name: "Partner",          label: "partner",              url: "partners",            description: "Manages Staff and Office access to the ERP" },
    { name: "Payroll",          label: "payroll",              url: "payrolls",            description: "Manages Staff and Office access to the ERP" },
    { name: "PayrollDetail",    label: "payroll_detail",       url: "payroll-details",     description: "Manages Staff and Office access to the ERP" },
    { name: "PaystackTransaction", label: "paystack_transaction",  url: "paystack-transactions", description: "Manages Staff and Office access to the ERP" },
    { name: "PmlBilling",       label: "pml_billing",          url: "pml-billings",        description: "Manages Staff and Office access to the ERP" },
    { name: "PmlRouting",       label: "pml_routing",          url: "pml-routings",        description: "Manages Staff and Office access to the ERP" },
    { name: "PmlShipment",      label: "pml_shipment",         url: "pml-shipments",       description: "Manages Staff and Office access to the ERP" },
    { name: "PmlWaybill",       label: "pml_waybill",          url: "pml-waybills",        description: "Manages Staff and Office access to the ERP" },
    { name: "PmtBoarding",      label: "pmt_boarding",         url: "pmt-boardings",       description: "Manages Staff and Office access to the ERP" },
    { name: "PmtBookingServices", label: "pmt_booking_services", url: "pmt-booking-services",   description: "Manages Staff and Office access to the ERP" },
    { name: "PmtHiring",        label: "pmt_hiring",           url: "pmt-hirings",            description: "Manages Staff and Office access to the ERP" },
    { name: "PmtMaintenance",   label: "pmt_maintenance",      url: "pmt-maintenances",       description: "Manages Staff and Office access to the ERP" },
    { name: "PmtMaintenanceFault",   label: "pmt_maintenance_fault",   url: "pmt-maintenance-faults", description: "Manages Staff and Office access to the ERP" },
    { name: "PmtMaintenanceGroup",   label: "pmt_maintenance_group",   url: "pmt-maintenance-groups", description: "Manages Staff and Office access to the ERP" },
    { name: "PmtMaintenanceStages",  label: "pmt_maintenance_stages",  url: "pmt-maintenance-stages", description: "Manages Staff and Office access to the ERP" },
    { name: "PmtReservation",        label: "pmt_reservation",         url: "pmt-reservations",       description: "Manages Staff and Office access to the ERP" },
    { name: "PmtRoute",              label: "pmt_route",               url: "pmt-routes",             description: "Manages Staff and Office access to the ERP" },
    { name: "PmtRouteAllocation",    label: "pmt_route_allocation",    url: "pmt-route-allocations",  description: "Manages Staff and Office access to the ERP" },
    { name: "PmtSchedules",          label: "pmt_schedules",           url: "pmt-schedules", description: "Manages Staff and Office access to the ERP" },
    { name: "Product",           label: "product",         url: "products",               description: "Manages Staff and Office access to the ERP" },
    { name: "Production",        label: "production",      url: "productions",            description: "Manages Staff and Office access to the ERP" },
    { name: "PurchaseOrders",    label: "purchase_orders", url: "purchase-orders",        description: "Manages Staff and Office access to the ERP" },
    { name: "Rating",            label: "rating",          url: "ratings",                description: "Manages Staff and Office access to the ERP" },
    { name: "Report",            label: "report",          url: "reports",                description: "Manages Staff and Office access to the ERP" },
    { name: "SalesOrders",       label: "sales_orders",    url: "sales-orders",           description: "Manages Staff and Office access to the ERP" },
    { name: "Setting",           label: "setting",         url: "settings/public",        description: "Manages Staff and Office access to the ERP" },
    { name: "Setup",             label: "setup",           url: "setups/system",          description: "Manages Staff and Office access to the ERP" },
    { name: "Sms",               label: "sms",             url: "sms",                    description: "Manages Staff and Office access to the ERP" },
    { name: "Spare",             label: "spare",           url: "spares",                 description: "Manages Staff and Office access to the ERP" },
    { name: "Staff",             label: "staff",           url: "staff",                  description: "Manages Staff and Office access to the ERP" },
    { name: "StaffDocument",     label: "staff_document",  url: "staff-documents",        description: "Manages Staff and Office access to the ERP" },
    { name: "Stage",             label: "stage",           url: "stages",                 description: "Manages Staff and Office access to the ERP" },
    { name: "State",             label: "state",           url: "states",                 description: "Manages Staff and Office access to the ERP" },
    { name: "Stock",             label: "stock",           url: "stocks",                 description: "Manages Staff and Office access to the ERP" },
    { name: "StockTransfer",     label: "stock_transfer",  url: "stock-transfers",        description: "Manages Staff and Office access to the ERP" },
    { name: "Store",             label: "store",           url: "stores",                 description: "Manages Staff and Office access to the ERP" },
    { name: "Supplier",          label: "supplier",        url: "suppliers",              description: "Manages Staff and Office access to the ERP" },
    { name: "Task",              label: "task",            url: "tasks",                  description: "Manages Staff and Office access to the ERP" },
    { name: "Terminal",          label: "terminal",        url: "terminals",              description: "Manages Staff and Office access to the ERP" },
    { name: "Ticket",            label: "ticket",          url: "tickets",                description: "Manages Staff and Office access to the ERP" },
    { name: "UnionbankTransactions", label: "unionbank_transactions",   url: "unionbank-transactions", description: "Manages Staff and Office access to the ERP" },
    { name: "Vehicle",           label: "vehicle",         url: "vehicles",               description: "Manages Staff and Office access to the ERP" },
    { name: "VehicleDocument",   label: "vehicle_document", url: "vehicle-documents",      description: "Manages Staff and Office access to the ERP" },
    { name: "VehicleTracking",   label: "vehicle_tracking", url: "vehicle-trackings",      description: "Manages Staff and Office access to the ERP" },
    { name: "Voucher",           label: "voucher",         url: "vouchers",               description: "Manages Staff and Office access to the ERP" },
];

const baseId = DATABASE.BASE_ID.TABLE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(baseId, 1 + index);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
