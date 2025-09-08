import { PHONE_NUMBER } from "./Constant";


/**
 * Opens a WhatsApp chat with a predefined message.
 * 
 * @param {string} textMessage - The message to be pre-filled in the WhatsApp chat
 * @returns {void} - This function doesn't return a value
 * 
 * @example
 * // Opens WhatsApp web with the message "Hello there"
 * whatsAppBotListener("Hello there");
 * 
 * @description
 * This function navigates from a web bot to a WhatsApp chat by:
 * 1. Encoding the message for URL use
 * 2. Opening a new tab with WhatsApp web directed to the specified phone number
 * 3. Pre-filling the chat with the provided message
 */
export const whatsAppBotListener = (textMessage) => {
  const message = encodeURIComponent(textMessage);
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
};


/**
 * To get current date in DD/MM/YY format.
 * @returns {string} - date
 */
export const getCurrentDateFormatted = () => {
  const today = new Date();
  
  // Get day, month, and year
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  const year = String(today.getFullYear()).slice(-2); // Get last 2 digits
  
  // Return formatted date
  return `${day}/${month}/${year}`;
};


/**
 * Scroll down and up to given id section
 * @param {id} id - id of respective section 
 */
export const handleScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
