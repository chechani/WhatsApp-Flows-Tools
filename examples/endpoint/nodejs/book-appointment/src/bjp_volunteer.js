// Import required modules
import axios from 'axios';

// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    INTRO_SCREEN: {
        "version": "3.0",
        "screen": "INTRO_SCREEN",
        "data": {
            "mobile": "918000000000",
            "interests": [
                {
                    "id": "\u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u094d\u0930\u092c\u0902\u0927\u0928",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u094d\u0930\u092c\u0902\u0927\u0928"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930"
                },
                {
                    "id": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928",
                    "title": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928"
                },
                {
                    "id": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e",
                    "title": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e"
                },
                {
                    "id": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930"
                },
                {
                    "id": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928",
                    "title": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928"
                },
                {
                    "id": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e",
                    "title": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e"
                },
                {
                    "id": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935",
                    "title": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935"
                },
                {
                    "id": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923",
                    "title": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923"
                }
            ],
            "tahsil": [
                {
                    "id": "\u092d\u0940\u0932\u0935\u093e\u0921\u093c\u093e",
                    "title": "\u092d\u0940\u0932\u0935\u093e\u0921\u093c\u093e"
                },
                {
                    "id": "\u0906\u0938\u0940\u0902\u0926",
                    "title": "\u0906\u0938\u0940\u0902\u0926"
                },
                {
                    "id": "\u092e\u093e\u0902\u0921\u0932",
                    "title": "\u092e\u093e\u0902\u0921\u0932"
                },
                {
                    "id": "\u091c\u0939\u093e\u091c\u092a\u0941\u0930",
                    "title": "\u091c\u0939\u093e\u091c\u092a\u0941\u0930"
                },
                {
                    "id": "\u092e\u093e\u0902\u0921\u0932\u0917\u0922\u093c",
                    "title": "\u092e\u093e\u0902\u0921\u0932\u0917\u0922\u093c"
                },
                {
                    "id": "\u0915\u094b\u091f\u0930\u0940",
                    "title": "\u0915\u094b\u091f\u0930\u0940"
                },
                {
                    "id": "\u0936\u093e\u0939\u092a\u0941\u0930\u093e",
                    "title": "\u0936\u093e\u0939\u092a\u0941\u0930\u093e"
                },
                {
                    "id": "\u0938\u0939\u093e\u0921\u093c\u093e",
                    "title": "\u0938\u0939\u093e\u0921\u093c\u093e"
                },
                {
                    "id": "\u0939\u0941\u0930\u0921\u093c\u093e",
                    "title": "\u0939\u0941\u0930\u0921\u093c\u093e"
                },
                {
                    "id": "\u092c\u0928\u0947\u0921\u093c\u093e",
                    "title": "\u092c\u0928\u0947\u0921\u093c\u093e"
                },
                {
                    "id": "\u0930\u093e\u092f\u092a\u0941\u0930",
                    "title": "\u0930\u093e\u092f\u092a\u0941\u0930"
                },
                {
                    "id": "\u092c\u0940\u091c\u094b\u0932\u093f\u092f\u093e",
                    "title": "\u092c\u0940\u091c\u094b\u0932\u093f\u092f\u093e"
                }
            ],
            "business": [
                {
                    "id": "\u0938\u0930\u0915\u093e\u0930\u0940 \u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940",
                    "title": "\u0938\u0930\u0915\u093e\u0930\u0940 \u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940"
                },
                {
                    "id": "\u0915\u093f\u0938\u093e\u0928",
                    "title": "\u0915\u093f\u0938\u093e\u0928"
                },
                {
                    "id": "\u0917\u0943\u0939\u093f\u0923\u0940",
                    "title": "\u0917\u0943\u0939\u093f\u0923\u0940"
                },
                {
                    "id": "\u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940",
                    "title": "\u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u0935\u0930\u094d\u0915\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u0935\u0930\u094d\u0915\u0930"
                },
                {
                    "id": "\u0938\u094d\u0935-\u0930\u094b\u091c\u0917\u093e\u0930",
                    "title": "\u0938\u094d\u0935-\u0930\u094b\u091c\u0917\u093e\u0930"
                },
                {
                    "id": "\u0930\u093f\u091f\u0947\u0932 \u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940",
                    "title": "\u0930\u093f\u091f\u0947\u0932 \u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940"
                },
                {
                    "id": "\u0915\u0932\u093e\u0915\u093e\u0930",
                    "title": "\u0915\u0932\u093e\u0915\u093e\u0930"
                }
            ]
        }
    },
    PERSONAL_INFO_SCREEN: {
        "version": "3.0",
        "screen": "PERSONAL_INFO_SCREEN",
        "data": {
            "mobile": "918000000000",
            "tahsil": [
                {
                    "id": "\u092d\u0940\u0932\u0935\u093e\u0921\u093c\u093e",
                    "title": "\u092d\u0940\u0932\u0935\u093e\u0921\u093c\u093e"
                },
                {
                    "id": "\u0906\u0938\u0940\u0902\u0926",
                    "title": "\u0906\u0938\u0940\u0902\u0926"
                },
                {
                    "id": "\u092e\u093e\u0902\u0921\u0932",
                    "title": "\u092e\u093e\u0902\u0921\u0932"
                },
                {
                    "id": "\u091c\u0939\u093e\u091c\u092a\u0941\u0930",
                    "title": "\u091c\u0939\u093e\u091c\u092a\u0941\u0930"
                },
                {
                    "id": "\u092e\u093e\u0902\u0921\u0932\u0917\u0922\u093c",
                    "title": "\u092e\u093e\u0902\u0921\u0932\u0917\u0922\u093c"
                },
                {
                    "id": "\u0915\u094b\u091f\u0930\u0940",
                    "title": "\u0915\u094b\u091f\u0930\u0940"
                },
                {
                    "id": "\u0936\u093e\u0939\u092a\u0941\u0930\u093e",
                    "title": "\u0936\u093e\u0939\u092a\u0941\u0930\u093e"
                },
                {
                    "id": "\u0938\u0939\u093e\u0921\u093c\u093e",
                    "title": "\u0938\u0939\u093e\u0921\u093c\u093e"
                },
                {
                    "id": "\u0939\u0941\u0930\u0921\u093c\u093e",
                    "title": "\u0939\u0941\u0930\u0921\u093c\u093e"
                },
                {
                    "id": "\u092c\u0928\u0947\u0921\u093c\u093e",
                    "title": "\u092c\u0928\u0947\u0921\u093c\u093e"
                },
                {
                    "id": "\u0930\u093e\u092f\u092a\u0941\u0930",
                    "title": "\u0930\u093e\u092f\u092a\u0941\u0930"
                },
                {
                    "id": "\u092c\u0940\u091c\u094b\u0932\u093f\u092f\u093e",
                    "title": "\u092c\u0940\u091c\u094b\u0932\u093f\u092f\u093e"
                }
            ],
            "business": [
                {
                    "id": "\u0938\u0930\u0915\u093e\u0930\u0940 \u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940",
                    "title": "\u0938\u0930\u0915\u093e\u0930\u0940 \u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940"
                },
                {
                    "id": "\u0915\u093f\u0938\u093e\u0928",
                    "title": "\u0915\u093f\u0938\u093e\u0928"
                },
                {
                    "id": "\u0917\u0943\u0939\u093f\u0923\u0940",
                    "title": "\u0917\u0943\u0939\u093f\u0923\u0940"
                },
                {
                    "id": "\u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940",
                    "title": "\u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u0935\u0930\u094d\u0915\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u0935\u0930\u094d\u0915\u0930"
                },
                {
                    "id": "\u0938\u094d\u0935-\u0930\u094b\u091c\u0917\u093e\u0930",
                    "title": "\u0938\u094d\u0935-\u0930\u094b\u091c\u0917\u093e\u0930"
                },
                {
                    "id": "\u0930\u093f\u091f\u0947\u0932 \u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940",
                    "title": "\u0930\u093f\u091f\u0947\u0932 \u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940"
                },
                {
                    "id": "\u0915\u0932\u093e\u0915\u093e\u0930",
                    "title": "\u0915\u0932\u093e\u0915\u093e\u0930"
                }
            ],
            "interests": [
                {
                    "id": "polling_station_management",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u094d\u0930\u092c\u0902\u0927\u0928"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930"
                },
                {
                    "id": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928",
                    "title": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928"
                },
                {
                    "id": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e",
                    "title": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e"
                },
                {
                    "id": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930"
                },
                {
                    "id": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928",
                    "title": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928"
                },
                {
                    "id": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e",
                    "title": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e"
                },
                {
                    "id": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935",
                    "title": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935"
                },
                {
                    "id": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923",
                    "title": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923"
                }
            ]
        }
    },
    VOLUNTEER_INTEREST_SCREEN: {
        "version": "3.0",
        "screen": "VOLUNTEER_INTEREST_SCREEN",
        "data": {
            "mobile": "918000000000",
            "name": "Bhag Chand Chechani",
            "village": "Bamniya",
            "tahsil": "Banera",
            "business": "Banera",
            "email": "Bhag Chand Chechani",
            "interests": [
                {
                    "id": "polling_station_management",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u094d\u0930\u092c\u0902\u0927\u0928"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930"
                },
                {
                    "id": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928",
                    "title": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928"
                },
                {
                    "id": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e",
                    "title": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e"
                },
                {
                    "id": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930"
                },
                {
                    "id": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928",
                    "title": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928"
                },
                {
                    "id": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e",
                    "title": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e"
                },
                {
                    "id": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935",
                    "title": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935"
                },
                {
                    "id": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923",
                    "title": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923"
                }
            ]
        }
    },
    FINAL_CONFIRMATION_SCREEN: {
        "version": "3.0",
        "screen": "FINAL_CONFIRMATION_SCREEN",
        "data": {
            "mobile": "918000000000",
            "name": "Bhag Chand Chechani",
            "village": "Bamniya",
            "business": "Banera",
            "tahsil": "Banera",
            "interests": [
                {
                    "id": "polling_station_management",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u094d\u0930\u092c\u0902\u0927\u0928"
                },
                {
                    "id": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930",
                    "title": "\u0938\u094b\u0936\u0932 \u092e\u0940\u0921\u093f\u092f\u093e \u092a\u094d\u0930\u091a\u093e\u0930"
                },
                {
                    "id": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928",
                    "title": "\u091c\u0928\u0938\u0902\u092a\u0930\u094d\u0915 \u0905\u092d\u093f\u092f\u093e\u0928"
                },
                {
                    "id": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e",
                    "title": "\u092f\u0941\u0935\u093e \u092e\u0924\u0926\u093e\u0924\u093e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e"
                },
                {
                    "id": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930",
                    "title": "\u092e\u0924\u0926\u093e\u0928 \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0936\u093f\u0935\u093f\u0930"
                },
                {
                    "id": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928",
                    "title": "\u0930\u0948\u0932\u0940 \u0914\u0930 \u0938\u092d\u093e\u0913\u0902 \u0915\u093e \u0906\u092f\u094b\u091c\u0928"
                },
                {
                    "id": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e",
                    "title": "\u0928\u0940\u0924\u093f \u0914\u0930 \u092e\u0941\u0926\u094d\u0926\u094b\u0902 \u092a\u0930 \u0936\u093f\u0915\u094d\u0937\u093e"
                },
                {
                    "id": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935",
                    "title": "\u0935\u094b\u091f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928 \u0921\u094d\u0930\u093e\u0907\u0935"
                },
                {
                    "id": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923",
                    "title": "\u091a\u0941\u0928\u093e\u0935\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0935\u093f\u0924\u0930\u0923"
                }
            ],
            "email": "Bhag Chand Chechani"
        }
    },
    SUCCESS: {
        "version": "3.0",
        "screen": "SUCCESS",
        "data": {
            "extension_message_response": {
                "params": {
                    "flow_token": "REPLACE_FLOW_TOKEN",
                    "some_param_name": "PASS_CUSTOM_VALUE"
                }
            }
        }
    },
};
// Function to handle next screen request
export const getNextVolunteerScreen = async (decryptedBody) => {
	const { screen, data, version, action, flow_token } = decryptedBody;
;

	// Handle ping action
	if (action === "ping") {
		return {
			version,
			data: {
				status: "active",
			},
		};
	}

	// Handle error notification
	if (data?.error) {
		console.warn("Received client error:", data);
		return {
			version,
			data: {
				acknowledged: true,
			},
		};
	}

	console.log("mydata", data);
	business_list = data.business;
	
	// Handle initial request
	if (action === "INIT") {
	
		console.log("data", data);
		return {
			...SCREEN_RESPONSES.INTRO_SCREEN,
			data: {
				business: business_list,
				tahsil: data.tahsil,
				interests: data.interests,
				mobile: mobile,

			},
		};
	}



	// Handle data exchange action
	if (action === "data_exchange") {
		// Handle request based on the current screen
		switch (screen) {
			case "QUESTION_ONE":
				// Update the appointment fields based on current user selection

				if (anaesthetics_list.length === 0) {
					await fetchAnaestheticsList();
				}

				const date = data.date;
				const slot_id = data.slot;
				const slots = [
					{'id': "1", 'title': '30 Min'},
					{'id': "2", 'title': '60 Min'},
					{'id': "3", 'title': '90 Min'},
					{'id': "4", 'title': '120 Min'},
					{'id': "5", 'title': '150 Min'},
					{'id': "6", 'title': '180 Min'},
					{'id': "7", 'title': '210 Min'}
				];
				const requested_minutes = parseInt(slots.find(slot => slot.id === slot_id).title);

				// const choosen_minutes = slots.find(slot => slot.id === slot_id).title;
				
				const choosen_minutes = requested_minutes.toString();				

				await fetchTimeList(date, requested_minutes);

				let response;

				if (time_list.length === 0) {
					response = {
						...SCREEN_RESPONSES.QUESTION_THREE,
						data: {
							department: data.department,
							date: data.date,
							slot: choosen_minutes,
							anesthetic_name: anaesthetics_list,
							mobile: data.mobile,
							is_time_enabled: true,
						}
					};
				} else {
					response = {
						...SCREEN_RESPONSES.QUESTION_TWO,
						data: {
							department: data.department,
							date: data.date,
							slot: choosen_minutes,
							preferred_time: time_list,
							anesthetic_name: anaesthetics_list,
							mobile: data.mobile,
							is_time_enabled: true,
						}
					};
				}



				return response;

			

			case "QUESTION_TWO":
				//wriite a function to get preferred time title based on id from time_list
				const pref_id = data.preferred_time;
				const getPreferredTimeTitle = (pref_id) => {
					const time = time_list.find(time => time.id === pref_id);
					return time ? time.title : "";
				}		
				
				console.log("pref_id", pref_id);
				console.log("getPreferredTimeTitle", getPreferredTimeTitle(pref_id));
				// Return the next screen response				
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								department: data.department,
								date: data.date,
								slot: data.slot,
								anesthetic_name: data.anesthetic_name,
								preferred_time: getPreferredTimeTitle(pref_id),
								mobile: data.mobile,

							},
						},

						
					},
					
					
				};





			case "QUESTION_THREE":
				//wriite a function to get preferred time title based on id from time_list

				if (department_list.length === 0) {
					await fetchDepartmentList();
				}
		
				// Fetch date list if it's empty
				if (date_list.length === 0) {
					await fetchDateList();
				}
		
				// Fetch slot list if it's empty
				if (slot_list.length === 0) {
					await fetchSlotList();
				}		
				
				
				// Return the next screen response				
				return {
					...SCREEN_RESPONSES.QUESTION_ONE,
					data: {
						department: department_list,
						date: date_list,
						slot: slot_list,
						is_date_enabled: true,
						mobile: doctor_mobile,
		
					},
				};
	

	

			default:
				break;
		}
	}

	console.error("Unhandled request body:", decryptedBody);
	throw new Error("Unhandled endpoint request. Make sure you handle the request action & screen logged above.");
};