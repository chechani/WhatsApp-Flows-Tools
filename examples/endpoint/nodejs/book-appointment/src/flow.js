/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// this object is generated from Flow Builder under "..." > Endpoint > Snippets > Responses

import axios from "axios";

const SCREEN_RESPONSES = {
  APPOINTMENT: {
    version: "3.0",
    screen: "APPOINTMENT",
    data: {
      department: [
        {
          id: "shopping",
          title: "Shopping & Groceries",
        },
        {
          id: "clothing",
          title: "Clothing & Apparel",
        },
        {
          id: "home",
          title: "Home Goods & Decor",
        },
        {
          id: "electronics",
          title: "Electronics & Appliances",
        },
        {
          id: "beauty",
          title: "Beauty & Personal Care",
        },
      ],
      location: [
        {
          id: "1",
          title: "King\u2019s Cross, London",
        },
        {
          id: "2",
          title: "Oxford Street, London",
        },
        {
          id: "3",
          title: "Covent Garden, London",
        },
        {
          id: "4",
          title: "Piccadilly Circus, London",
        },
      ],
      is_location_enabled: true,
      date: [
        {
          id: "2024-01-01",
          title: "Mon Jan 01 2024",
        },
        {
          id: "2024-01-02",
          title: "Tue Jan 02 2024",
        },
        {
          id: "2024-01-03",
          title: "Wed Jan 03 2024",
        },
      ],
      is_date_enabled: true,
      time: [
        {
          id: "10:30",
          title: "10:30",
        },
        {
          id: "11:00",
          title: "11:00",
          enabled: false,
        },
        {
          id: "11:30",
          title: "11:30",
        },
        {
          id: "12:00",
          title: "12:00",
          enabled: false,
        },
        {
          id: "12:30",
          title: "12:30",
        },
      ],
      is_time_enabled: true,
    },
  },
  DETAILS: {
    version: "3.0",
    screen: "DETAILS",
    data: {
      department: "beauty",
      location: "1",
      date: "2024-01-01",
      time: "11:30",
    },
  },
  SUMMARY: {
    version: "3.0",
    screen: "SUMMARY",
    data: {
      appointment:
        "Beauty & Personal Care Department at Kings Cross, London\nMon Jan 01 2024 at 11:30.",
      details:
        "Name: John Doe\nEmail: john@example.com\nPhone: 123456789\n\nA free skin care consultation, please",
      department: "beauty",
      location: "1",
      date: "2024-01-01",
      time: "11:30",
      name: "John Doe",
      email: "john@example.com",
      phone: "123456789",
      more_details: "A free skin care consultation, please",
    },
  },
  TERMS: {
    version: "3.0",
    screen: "TERMS",
    data: {},
  },
  SUCCESS: {
    version: "3.0",
    screen: "SUCCESS",
    data: {
      extension_message_response: {
        params: {
          flow_token: "flows-builder-2c8e04d8",
          some_param_name: "PASS_CUSTOM_VALUE",
        },
      },
    },
  },
};


export const getNextScreen = async (decryptedBody) => {
	const { screen, data, version, action, flow_token } = decryptedBody;
  
	// handle health check request
	if (action === "ping") {
	  return {
		version,
		data: {
		  status: "active",
		},
	  };
	}
  
	// handle error notification
	if (data?.error) {
	  console.warn("Received client error:", data);
	  return {
		version,
		data: {
		  acknowledged: true,
		},
	  };
	}
  
	// handle initial request when opening the flow and display APPOINTMENT screen
	if (action === "INIT") {
	  return {
		...SCREEN_RESPONSES.APPOINTMENT,
		data: {
		  ...SCREEN_RESPONSES.APPOINTMENT.data,
		  // these fields are disabled initially. Each field is enabled when previous fields are selected
		  is_location_enabled: false,
		  is_date_enabled: false,
		  is_time_enabled: false,
		},
	  };
	}
  
	// handle data exchange for different screens
	if (action === "data_exchange") {
	  try {
		let responseData;
  
		switch (screen) {
		  case "APPOINTMENT":
			const apiUrl = "https://app.bhilwarahealthcare.in/api/method/sahaj.api.get_department_list";
			const apiResponse = await axios.get(apiUrl);
			responseData = apiResponse.data.data; // Assuming the API returns a list of times
			break;
  
		  case "DETAILS":
			// Assume data mapping logic for DETAILS screen
			const departmentName = SCREEN_RESPONSES.APPOINTMENT.data.department.find(
			  (dept) => dept.id === data.department
			).title;
			const locationName = SCREEN_RESPONSES.APPOINTMENT.data.location.find(
			  (loc) => loc.id === data.location
			).title;
			const dateName = SCREEN_RESPONSES.APPOINTMENT.data.date.find(
			  (date) => date.id === data.date
			).title;
  
			const appointment = `${departmentName} at ${locationName} ${dateName} at ${data.time}`;
  
			const details = `Name: ${data.name} Email: ${data.email} Phone: ${data.phone} "${data.more_details}"`;
  
			responseData = {
			  ...SCREEN_RESPONSES.SUMMARY,
			  data: {
				appointment,
				details,
				// return the same fields sent from client back to submit in the next step
				...data,
			  },
			};
			break;
  
		  default:
			throw new Error("Unhandled screen type for data exchange.");
		}
  
		return responseData;
	  } catch (error) {
		console.error("Error calling external API or handling DETAILS screen:", error);
		throw new Error("Failed to fetch data or process screen data.");
	  }
	}
  
	console.error("Unhandled request body:", decryptedBody);
	throw new Error(
	  "Unhandled endpoint request. Make sure you handle the request action & screen logged above."
	);
  };
  
