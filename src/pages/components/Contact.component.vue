
<script setup lang="ts">
// https://vuejs.org/guide/essentials/forms
// https://digitalpatio.hashnode.dev/build-better-forms-with-vuejs-3-composition-api-a-practical-guide
import { computed, reactive, ref } from 'vue';
import debounce from 'lodash.debounce'
import telegramMessage from '../../utils/telegramMessage'
import checkEmailValid from '../../utils/checkEmailValid'


// The type of the form data
import formDataType from '../../types/contactFormDataType'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Monitoring inputs
const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
} as formDataType);

const resetForm = () => {
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
};


// Wether or not to show the error message under the email field
const showErrorMessage = ref(false);

// Define the debounced validation function
const validateEmailDebounced = debounce(() => checkEmailValid(
    formData.email,
    showErrorMessage,
    emailRegex

), 1000);


const isFormValid = computed(() => {
    return formData.name.length > 0
        && emailRegex.test(formData.email)
        && formData.subject.length > 0
        && formData.message.length > 0;
});

const submitForm = () => {

    if (isFormValid.value) {
        console.log('Form valid:');
        telegramMessage(formData)
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

