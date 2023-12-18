

// The type of the form data
import contactFormDataType from '../types/contactFormDataType';
import reservationFormDataType from '../types/reservationFormDataType';

// This is the way of using environment variables in Vue 3 with Vite
// https://vitejs.dev/guide/env-and-mode.html#env-files
const BOT_TOKEN = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_APP_TELEGRAM_CHAT_ID;


// The message that will be sent to the Telegram chat
let message = '';


// Function to send a message to a Telegram chat when a form is submitted
const telegramMessage = async (formData: contactFormDataType | reservationFormDataType) => {

    // Constructing the URL
    const BASE_URL = `https://api.telegram.org/${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=`;

    // Looping through the form data and adding it to the message
    Object.keys(formData).forEach((key: string) => {
        message += `${key}: ${formData[key as keyof (contactFormDataType | reservationFormDataType)]}%0A`;
    });

    // Sending the message
    try {
        const response = await fetch(BASE_URL + message);
        const data = await response.json();
        console.log(data)

    } catch (error) {
        console.log(error);
    }
};

export default telegramMessage;