

// The type of the form data
import contactFormDataType from '../types/contactFormDataType';
import reservationFormDataType from '../types/reservationFormDataType';

const resetForm = (formData: contactFormDataType | reservationFormDataType) => {
    // Looping through the form data and empty fields
    Object.keys(formData).forEach((key: string) => {
        formData[key as keyof (contactFormDataType | reservationFormDataType)] = '';
    });
};

export default resetForm;