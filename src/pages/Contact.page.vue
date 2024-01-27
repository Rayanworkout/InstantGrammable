
<script setup lang="ts">
// https://vuejs.org/guide/essentials/forms
// https://digitalpatio.hashnode.dev/build-better-forms-with-vuejs-3-composition-api-a-practical-guide

import { computed, reactive, ref } from 'vue';
import debounce from 'lodash.debounce'
import telegramMessage from '../utils/telegramMessage'
import checkEmailValid from '../utils/checkEmailValid'
import resetForm from '../utils/resetForm'


// The type of the form data
import formDataType from '../types/contactFormDataType'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Monitoring inputs
const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
} as formDataType);


// Wether or not to show the error message under the email field
const showErrorMessage = ref(false);
const showSuccessMessage = ref(false);

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
        telegramMessage(formData)
        resetForm(formData);

        // Scroll to top of the page so the user can see the success message
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Show success message for 5 seconds
        showSuccessMessage.value = true;
        setTimeout(() => {
            showSuccessMessage.value = false;
        }, 3500);

    } else {
        console.log('Form invalid:', formData);
    }

};


</script>

<template>
    <div id="contact-section" class="container-fluid py-3 mt-3">
        <img src="../static/img/contact-bg-compressed.jpg" alt="brunch table picture" class="form-background">
        <div class="form-container">
            <div class="container py-3">
                <div class="row justify-content-center">
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-9">

                        <div class="contact-form bg-light rounded p-3">
                            <h1 class="section-title position-relative text-center pink-icon">Contact</h1>
                            <div class="text-center">
                                <img src="../static/img/logo2.png" alt="carte" class="img-fluid" width="200px">
                            </div>
                            <transition name="fade">
                                <div v-if="showSuccessMessage" class=" success-message text-center py-3">Votre message a
                                    bien été envoyé. <i class="bi bi-emoji-smile success-message"></i></div>
                            </transition>
                            <form @submit.prevent="submitForm" name="sentMessage" id="contactForm">
                                <div class="form-row">
                                    <div class="col-sm-6 control-group">
                                        <input v-model="formData.name" type="text" class="form-control p-4"
                                            placeholder="Nom" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-sm-6 control-group">
                                        <input v-model="formData.email" @input="validateEmailDebounced" type="email"
                                            class="form-control p-4" placeholder="Email" />
                                        <transition name="fade">
                                            <p v-if="showErrorMessage" class="help-block text-danger">Adresse email
                                                incorrecte
                                            </p>
                                        </transition>

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
    </div>
</template>

<style scoped>

h1 {
    margin: 0;
}


@media (max-width: 768px) {
    .img-fluid {
        width: 120px;
    }
}

</style>