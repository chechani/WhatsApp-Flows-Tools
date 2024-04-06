import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

// Setup Axios with cookie support
const cookieJar = new CookieJar();
const axiosClient = wrapper(axios.create({ jar: cookieJar, withCredentials: true }));

const frappeEndpoint = 'https://foss-erp.in';
const credentials = { usr: 'Administrator', pwd: 'Mohit@256951' };

// Login function
const login = async () => {
    try {
        const response = await axiosClient.post(`${frappeEndpoint}/api/method/login`, credentials);
        console.log('Logged in successfully using Axios.');
        return response;
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error);
        throw error;
    }
};

// Create lead function
const createLead = async (loginResponse) => {
    console.log('Creating lead using Axios.');

    // Define the new Lead record data
    const leadData = {
        // Replace these with actual field names and values for your Lead doctype
        "doctype": "Lead",
        "lead_name": "John Doe",
        "company_name": "John Doe Inc.",
        "email_id": "johndoe@example.com"
        // Add other necessary fields according to your doctype definition
    };

    try {
        const response = await axiosClient.post(`${frappeEndpoint}/api/resource/Lead`, leadData, {
            headers: {
                Cookie: loginResponse.headers['set-cookie'].join(';') // Pass the login response cookies in the request headers
            }
        });
        console.log('Lead created successfully:', response.data);
        return response;
    } catch (error) {
        console.error('Error creating lead:', error.response ? error.response.data : error);
        throw error;
    }
};

// Get lead by email function
const getLeadByEmail = async (email_id, loginResponse) => {
    console.log('Fetching lead details using Axios.');

    // Encode the email ID to ensure the URL is valid
    const encodedEmail = encodeURIComponent(email_id);

    // Build the query URL to search for the lead by email
    const queryUrl = `${frappeEndpoint}/api/resource/Lead?filters=[["email_id","=","${encodedEmail}"]]`;

    try {
        const response = await axiosClient.get(queryUrl, {
            headers: {
                Cookie: loginResponse.headers['set-cookie'].join(';') // Pass the login response cookies in the request headers
            }
        });

        // Handle the successful response here
        // This assumes the API returns an array of matches; you might need to adjust based on actual API response
        if (response.data && response.data.data && response.data.data.length > 0) {
            console.log('Lead found:', response.data.data[0]);
            return response.data.data[0]; // Returning the first match
        } else {
            console.log('No lead found with the provided email ID.');
            return null; // No lead found
        }
    } catch (error) {
        console.error('Error fetching lead:', error);
        throw error;
    }
};

// Get lead by ID function
const getLeadById = async (leadId, loginResponse) => {
    console.log('Fetching lead details by ID using Axios.');

    // Build the query URL to search for the lead by ID
    const queryUrl = `${frappeEndpoint}/api/resource/Lead/${leadId}`;

    try {
        const response = await axiosClient.get(queryUrl, {
            headers: {
                Cookie: loginResponse.headers['set-cookie'].join(';') // Pass the login response cookies in the request headers
            }
        });

        // Handle the successful response here
        console.log('Lead found:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching lead:', error);
        throw error;
    }
};

// Delete lead by ID function
const deleteLeadById = async (leadId, loginResponse) => {
    console.log('Deleting lead by ID using Axios.');

    // Build the delete URL for the lead by ID
    const deleteUrl = `${frappeEndpoint}/api/resource/Lead/${leadId}`;

    try {
        const response = await axiosClient.delete(deleteUrl, {
            headers: {
                Cookie: loginResponse.headers['set-cookie'].join(';') // Pass the login response cookies in the request headers
            }
        });

        // Handle the successful response here
        console.log('Lead deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting lead:', error);
        throw error;
    }
};

// Perform login, create lead, get lead by email, get lead by ID, and delete lead operations
(async () => {
    try {
        const loginResponse = await login();
        await createLead(loginResponse);
        const leadByEmail = await getLeadByEmail('johndoe@example.com', loginResponse);
        await getLeadById(leadByEmail.name, loginResponse);
        await deleteLeadById(leadByEmail.name, loginResponse);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
