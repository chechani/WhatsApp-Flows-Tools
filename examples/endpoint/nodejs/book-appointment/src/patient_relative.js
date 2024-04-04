// Import required modules
import axios from 'axios';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    patientfamilymember: {
        "version": "3.0",
        "screen": "patientfamilymember",
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
export const getPatientRelativeScreen = async (decryptedBody) => {
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

			case "patientfamilymember":			


				const relation_list = [
					{
						"id": "Father",
						"title": "Father"
					},
					{
						"id": "Mother",
						"title": "Mother"
					},
					{
						"id": "Brother",
						"title": "Brother"
					},
					{
						"id": "Sister",
						"title": "Sister"
					},
					{
						"id": "Spouse",
						"title": "Spouse"
					},
					{
						"id": "Grand Father",
						"title": "Grand Father"
					},
					{
						"id": "Grand Mother",
						"title": "Grand Mother"
					},
					{
						"id": "Son",
						"title": "Son"
					},
					{
						"id": "Daughter",
						"title": "Daughter"
					},
					{
						"id": "Uncle",
						"title": "Uncle"
					}
				]	;	
				

				const relative = relation_list.find(relation => relation.id === data.relation).title;


				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								relative_name: data.relative_name,
								relation: relative,
								relative_mobile: data.relative_mobile,
								mobile: data.mobile

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

