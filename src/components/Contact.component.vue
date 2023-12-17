
<script setup lang="ts">
// https://vuejs.org/guide/essentials/forms
// https://digitalpatio.hashnode.dev/build-better-forms-with-vuejs-3-composition-api-a-practical-guide
import { computed, reactive, ref } from 'vue';
import debounce from 'lodash.debounce'

// This is the way of using environment variables in Vue 3 with Vite
// https://vitejs.dev/guide/env-and-mode.html#env-files
const BOT_TOKEN = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_APP_TELEGRAM_CHAT_ID;

// Creating an interface for the form data
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
} as FormData);

const resetForm = () => {
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
};

const telegramMessage = async () => {
    const BASE_URL = `https://api.telegram.org/${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=`;
    const message = `
    Name: ${formData.name} \n
    Email: ${formData.email} \n
    Subject: ${formData.subject} \n
    Message: ${formData.message}
`;

    try {
        const response = await fetch(BASE_URL + message);
        const data = await response.json();
        console.log(data)

    } catch (error) {
        console.log(error);
    }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Wether or not to show the error message under the email field
const showErrorMessage = ref(false);

// Define the debounced validation function
const validateEmailDebounced = debounce(() => {
    if (formData.email.length <= 3) {
        showErrorMessage.value = false;
        return;
    } else if (emailRegex.test(formData.email)) {
        showErrorMessage.value = false;
        return;
    } else {
        showErrorMessage.value = true;
    }
}, 1000);


const isFormValid = computed(() => {
    return formData.name.length > 0
        && emailRegex.test(formData.email)
        && formData.subject.length > 0
        && formData.message.length > 0;
});

const submitForm = () => {

    if (isFormValid.value) {
        console.log('Form valid:');
        telegramMessage()
        resetForm();
    } else {
        console.log('Form invalid:', formData);
    }

};


</script>



<template>
    <div id="contact-section" class="container-fluid py-3 mt-3">
        <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <h1 class="section-title position-relative text-center mb-5">Contact</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="contact-form bg-light rounded p-5">
                        <div id="success"></div>
                        <form @submit.prevent="submitForm" name="sentMessage" id="contactForm">
                            <div class="form-row">
                                <div class="col-sm-6 control-group">
                                    <input v-model="formData.name" type="text" class="form-control p-4" placeholder="Nom" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="col-sm-6 control-group">
                                    <input v-model="formData.email" @input="validateEmailDebounced" type="email"
                                        class="form-control p-4" placeholder="Email" />
                                    <p v-if="showErrorMessage" class="help-block text-danger">Adresse email incorrecte
                                    </p>
                                </div>
                            </div>
                            <div class="control-group pt-2">
                                <input v-model="formData.subject" type="text" class="form-control p-4"
                                    placeholder="Sujet" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea v-model="formData.message" class="form-control p-4" rows="6"
                                    placeholder="Message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button :disabled="!isFormValid" class="btn btn-primary btn-block py-3 px-5"
                                    type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

