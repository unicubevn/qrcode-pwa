enum EMVQRField {
    // Main fields
    F00_PAYLOAD_FORMAT_INDICATOR = "00",
    F01_POINT_OF_INITIATION_METHOD = "01",
    F26_MERCHANT_ACCOUNT_INFO = "26",
    F27_MERCHANT_ACCOUNT_INFO = "27",
    F28_MERCHANT_ACCOUNT_INFO = "28",
    F29_MERCHANT_ACCOUNT_INFO = "29",
    F30_MERCHANT_ACCOUNT_INFO = "30",
    F31_MERCHANT_ACCOUNT_INFO = "31",
    F32_MERCHANT_ACCOUNT_INFO = "32",
    F33_MERCHANT_ACCOUNT_INFO = "33",
    F34_MERCHANT_ACCOUNT_INFO = "34",
    F35_MERCHANT_ACCOUNT_INFO = "35",
    F36_MERCHANT_ACCOUNT_INFO = "36",
    F37_MERCHANT_ACCOUNT_INFO = "37",
    F38_MERCHANT_ACCOUNT_INFO = "38",
    F39_MERCHANT_ACCOUNT_INFO = "39",
    F40_MERCHANT_ACCOUNT_INFO = "40",
    F41_MERCHANT_ACCOUNT_INFO = "41",
    F42_MERCHANT_ACCOUNT_INFO = "42",
    F43_MERCHANT_ACCOUNT_INFO = "43",
    F44_MERCHANT_ACCOUNT_INFO = "44",
    F45_MERCHANT_ACCOUNT_INFO = "45",
    F46_MERCHANT_ACCOUNT_INFO = "46",
    F47_MERCHANT_ACCOUNT_INFO = "47",
    F48_MERCHANT_ACCOUNT_INFO = "48",
    F49_MERCHANT_ACCOUNT_INFO = "49",
    F50_MERCHANT_ACCOUNT_INFO = "50",
    F51_MERCHANT_ACCOUNT_INFO = "51",
    F52_MERCHANT_CATEGORY_CODE = "52",
    F53_TRANSACTION_CURRENCY = "53",
    F54_TRANSACTION_AMOUNT = "54",
    F55_TIP_OR_CONVENIENCE_INDICATOR = "55",
    F56_VALUE_OF_CONVENIENCE_FEE_FIXED = "56",
    F57_VALUE_OF_CONVENIENCE_FEE_PERCENTAGE = "57",
    F58_COUNTRY_CODE = "58",
    F59_MERCHANT_NAME = "59",
    F60_MERCHANT_CITY = "60",
    F61_POSTAL_CODE = "61",
    F62_ADDITIONAL_DATA_FIELD_TEMPLATE = "62",
    F63_CRC = "63",
    F64_MERCHANT_INFORMATION_LANGUAGE_TEMPLATE = "64",

    // Additional Data Field Template (sub-fields of F62)
    F62_01_BILL_NUMBER = "62.01",
    F62_02_MOBILE_NUMBER = "62.02",
    F62_03_STORE_LABEL = "62.03",
    F62_04_LOYALTY_NUMBER = "62.04",
    F62_05_REFERENCE_LABEL = "62.05",
    F62_06_CUSTOMER_LABEL = "62.06",
    F62_07_TERMINAL_LABEL = "62.07",
    F62_08_PURPOSE_OF_TRANSACTION = "62.08",
    F62_09_ADDITIONAL_CONSUMER_DATA_REQUEST = "62.09",

    // Merchant Information Language Template (sub-fields of F64)
    F64_00_LANGUAGE_PREFERENCE = "64.00",
    F64_01_MERCHANT_NAME_ALTERNATE_LANGUAGE = "64.01",
    F64_02_MERCHANT_CITY_ALTERNATE_LANGUAGE = "64.02",

    // RFU for EMVCo
    F65_RFU_FOR_EMVCO = "65",
    F66_RFU_FOR_EMVCO = "66",
    F67_RFU_FOR_EMVCO = "67",
    F68_RFU_FOR_EMVCO = "68",
    F69_RFU_FOR_EMVCO = "69",
    F70_RFU_FOR_EMVCO = "70",
    F71_RFU_FOR_EMVCO = "71",
    F72_RFU_FOR_EMVCO = "72",
    F73_RFU_FOR_EMVCO = "73",
    F74_RFU_FOR_EMVCO = "74",
    F75_RFU_FOR_EMVCO = "75",
    F76_RFU_FOR_EMVCO = "76",
    F77_RFU_FOR_EMVCO = "77",
    F78_RFU_FOR_EMVCO = "78",
    F79_RFU_FOR_EMVCO = "79",

    // Unreserved Templates
    F80_UNRESERVED_TEMPLATES = "80",
    F81_UNRESERVED_TEMPLATES = "81",
    F82_UNRESERVED_TEMPLATES = "82",
    F83_UNRESERVED_TEMPLATES = "83",
    F84_UNRESERVED_TEMPLATES = "84",
    F85_UNRESERVED_TEMPLATES = "85",
    F86_UNRESERVED_TEMPLATES = "86",
    F87_UNRESERVED_TEMPLATES = "87",
    F88_UNRESERVED_TEMPLATES = "88",
    F89_UNRESERVED_TEMPLATES = "89",
    F90_UNRESERVED_TEMPLATES = "90",
    F91_UNRESERVED_TEMPLATES = "91",
    F92_UNRESERVED_TEMPLATES = "92",
    F93_UNRESERVED_TEMPLATES = "93",
    F94_UNRESERVED_TEMPLATES = "94",
    F95_UNRESERVED_TEMPLATES = "95",
    F96_UNRESERVED_TEMPLATES = "96",
    F97_UNRESERVED_TEMPLATES = "97",
    F98_UNRESERVED_TEMPLATES = "98",
    F99_UNRESERVED_TEMPLATES = "99",
}

export default EMVQRField;

