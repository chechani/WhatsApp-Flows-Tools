// Import required modules
import axios from 'axios';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    NewPatientbyDoctor: {
        "version": "3.0",
        "screen": "NewPatientbyDoctor",
        "data": {
            "first_name": "John",
            "last_name": "Doe",
            "city": "New Delhi",
            "patient_mobile": "918875627151",
            "mobile": "918875627151"
        }
    },
    OTPVerificationScreen: {
        "version": "3.0",
        "screen": "OTPVerificationScreen",
        "data": {
            "first_name": "John",
            "last_name": "Doe",
            "city": "New Delhi",
            "patient_mobile": "918875627151",
            "mobile": "918875627151",
            "otp": 918875627151
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
export const getPatientRegistrationByDoctor = async (decryptedBody) => {
	const { screen, data, version, action, flow_token } = decryptedBody;
	if (action === "ping") {
		return {
			version,
			data: {
				status: "active",
			},
		};
	}

	if (data?.error) {
		console.warn("Received client error:", data);
		return {
			version,
			data: {
				acknowledged: true,
			},
		};
	}

	// Handle data exchange action
	if (action === "data_exchange") {
		// Handle request based on the current screen
		switch (screen) {

			case "NewPatientbyDoctor":
				
				return {
					...SCREEN_RESPONSES.OTPVerificationScreen,
					data: {
						first_name: data.first_name,
						last_name: data.last_name,
						city: data.city	,
						patient_mobile: data.patient_mobile,		
						mobile : data.mobile
					}
				};

			case "OTPVerificationScreen":
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								first_name: data.first_name,
								last_name: data.last_name,
								city: data.city	,
								patient_mobile: data.patient_mobile,
								mobile: data.mobile,	
								otp: data.otp					

							},
						},
					},
				};
		}
	}

	console.error("Unhandled request body:", decryptedBody);
	throw new Error("Unhandled endpoint request. Make sure you handle the request action & screen logged above.");
};
