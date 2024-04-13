// Import required modules
import axios from 'axios';
const leavefrom_date = '';
const leavetill_date = '';
const mobile = '';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    Doctor_Leave_notification: {
        "version": "3.0",
        "screen": "Doctor_Leave_notification",
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
export const DoctorleaveNextScreen = async (decryptedBody) => {
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
				case "Doctor_Leave_notification":
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token: flow_token,
								Leavefromdate: leavefrom_date,
								leavetilldate: leavetill_date,
								mobile: mobile,
							}
							
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

