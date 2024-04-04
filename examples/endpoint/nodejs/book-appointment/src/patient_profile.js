// Import required modules
import axios from 'axios';
// To navigate to a screen, return the corresponding response from the endpoint. Make sure the response is enccrypted.
const SCREEN_RESPONSES = {
    addpatientprofile: {
        "version": "3.0",
        "screen": "addpatientprofile",
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
export const getPatientProfileScreen = async (decryptedBody) => {
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

			case "addpatientprofile":
				
				const gender_list = [
					{'id': "1", 'title': 'Male'},
					{'id': "2", 'title': 'Female'},
					{'id': "3", 'title': 'Transgender'}				
				];

				const bg_list = [
					{
						"id": "1",
						"title": "A Positive"
					},
					{
						"id": "2",
						"title": "A Negative"
					},
					{
						"id": "3",
						"title": "AB Positive"
					},
					{
						"id": "4",
						"title": "AB Negative"
					},
					{
						"id": "5",
						"title": "B Positive"
					},
					{
						"id": "6",
						"title": "B Negative"
					},
					{
						"id": "7",
						"title": "O Positive"
					},
					{
						"id": "8",
						"title": "O Negative"
					}
				]	;	
				

				const martial_status_list = [
					{
						"id": "1",
						"title": "Single"
					},
					{
						"id": "2",
						"title": "Married"
					},
					{
						"id": "3",
						"title": "Divorced"
					},
					{
						"id": "4",
						"title": "Widow"
					}
				]	;	
				

				const gender = gender_list.find(gender => gender.id === data.gender).title;
				const blood_group = bg_list.find(blood_group => blood_group.id === data.blood_group).title;
				const marital_status = martial_status_list.find(marital_status => marital_status.id === data.marital_status).title;

				return {
					...SCREEN_RESPONSES.SUCCESS,
					data: {
						extension_message_response: {
							
							params: {
								flow_token,
								gender: gender,
								father_husband: data.father_husband,
								dob : data.dob,
								age : data.age,
								marital_status : marital_status,
								blood_group : blood_group,
								aadhar_number: data.aadhar_number,
								mobile : data.mobile

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

