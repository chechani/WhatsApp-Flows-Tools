// Import required modules
import axios from 'axios';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.

const SCREEN_RESPONSES = {
    vitalbydoctor: {
        "version": "3.0",
        "screen": "vitalbydoctor",
        "data": {
            "mobile": "918875627151"
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
export const VitalByDoctor = async (decryptedBody) => {
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
				case "vitalbydoctor":
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								patient_mobile: data.patient_mobile,
								pulse_rate: data.pulse_rate,
								bps: data.bps,
								bpd: data.bpd,
								body_temperature: data.body_temperature,
								fbs: data.fbs,
								rbs: data.rbs,
								hba1c : data.hba1c,
								weight: data.weight,
								height: data.height,
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

