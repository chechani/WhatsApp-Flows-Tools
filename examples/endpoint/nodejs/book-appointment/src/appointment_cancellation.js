// Import required modules
import axios from 'axios';
let appointment_list= []
let patient_mobile = '';


const appointment = async () => {
	
	try {
		const response = await axios.get('https://app.bhilwarahealthcare.in/api/method/sahaj.patient_flow.get_patient_upcoming_appointment_flow?mobile_no=?mobile=9079894667');
		appointment_list = response.data.data.open_appointments_list;
		patient_mobile = response.data.data.mobile_no;
		console.log("mobile_data", patient_mobile);
		console.log("appointment_list", appointment_list);

	} catch (error) {
		console.error("Error fetching appointment list:", error);
		// Handle error if API call fails
		throw new Error("Error fetching appointment list");
	}
};


// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    appointmentcancel: {
        "version": "3.0",
        "screen": "appointmentcancel",
        "data": {
            "mobile": "919079894667",
            "appointment_list": [
                {
                    "id": "0_Apt_1",
                    "title": "Apt_1"
                },
                {
                    "id": "1_Apt_1",
                    "title": "Apt_1"
                },
                {
                    "id": "2_Apt_2",
                    "title": "Apt_2"
                },
                {
                    "id": "3_Apt_3",
                    "title": "Apt_3"
                },
                {
                    "id": "4_Apt_4",
                    "title": "Apt_4"
                }
            ]
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
export const appointmentcancelNextScreen = async (decryptedBody) => {
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

	if (action === "INIT") {

		if (appointment_list.length === 0) {
			await appointment();
		}
		return {
			...SCREEN_RESPONSES.appointmentcancel,
			data: {
				appointment_list: appointment_list,
				mobile: patient_mobile,
					

			},
		};
	}

	// Handle data exchange action
	if (action === "data_exchange") {
		// Handle request based on the current screen
		console.log("mobileiexchange", data.mobile);
		switch (screen) {
				case "appointmentcancel":
				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
                                appointment_list: data.appointment_list,
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

