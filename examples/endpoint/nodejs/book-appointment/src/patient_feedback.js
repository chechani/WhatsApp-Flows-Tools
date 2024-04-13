// Import required modules
import axios from 'axios';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.

// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    patient_rating: {
        "version": "3.0",
        "screen": "patient_rating",
        "data": {}
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
export const PatientFeedbackNextScreen = async (decryptedBody) => {
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
				case "patient_rating":
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								finding_doctor: data.finding_doctor,
								booking_rating: data.booking_rating,
								overall_rating: data.overall_rating,
								detailed_feedback: data.detailed_feedback,
								mobile: data.mobile,				
				

							},
						},
					},
				};

			default:
				break;
		}
	}

	console.error("Unhandled request body:", decryptedBody);
	throw new Error("Unhandled endpoint request. Make sure you handle the request action & screen logged above.");
};

