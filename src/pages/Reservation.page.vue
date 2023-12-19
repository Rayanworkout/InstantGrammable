


<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import telegramMessage from '../utils/telegramMessage'
import resetForm from '../utils/resetForm'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// The type of the form data
import reservationFormDataType from '../types/reservationFormDataType'
import debounce from 'lodash.debounce';

// Change the date input into a flatpickr object
onMounted(() => {
    flatpickr('#date-input', {
        dateFormat: 'd-m-Y',
    });
});

const formData = reactive({
    name: '',
    phone: '',
    datetime: '',
    peopleQty: 0,
} as reservationFormDataType);


// Wether or not to show the error message under the email field
const showPhoneErrorMessage = ref(false);

// And a success / error message
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);

const frenchPhoneRegex = /^(\+33|0)(6|7)\d{8}$/;

// Define the debounced validation function
const validatePhoneDebounced = debounce(() => {
    if (formData.phone.length > 6) {
        showPhoneErrorMessage.value = !frenchPhoneRegex.test(formData.phone);
    } else {
        showPhoneErrorMessage.value = false;
    }
}, 500);

const handlePhoneInput = () => {
    if (/[^+\d]/.test(formData.phone)) {
        formData.phone = formData.phone.replace(/[^+\d]/g, ''); // Remove all non-digit characters except +
    }

    // Check if the number starts with 33
    // If so, I add + to the beginning of the number
    if (/^33/.test(formData.phone) && formData.phone.length > 2) {
        formData.phone = '+' + formData.phone;
    }

    validatePhoneDebounced();
};

const handleQtyInput = () => {

    formData.peopleQty = parseInt(formData.peopleQty.toString().replace(/\D/g, ''));

    if (formData.peopleQty < 0) {
        formData.peopleQty = 0;
    }

    if (formData.peopleQty > 20) {
        formData.peopleQty = 20;
    }
};


const isFormValid = computed(() => {
    return formData.name.length > 0 && frenchPhoneRegex.test(formData.phone) && formData.peopleQty > 0 && formData.datetime.length > 0;
});

const submitForm = () => {

    if (isFormValid.value) {
        telegramMessage(formData)
        resetForm(formData);

        // Show success message for 5 seconds
        showSuccessMessage.value = true;
        setTimeout(() => {
            showSuccessMessage.value = false;
        }, 3500);
    } else {
        showErrorMessage.value = true;

        setTimeout(() => {
            showErrorMessage.value = false;
        }, 3500);
    }

};


</script>


<template>
    <div id="contact-section" class="container-fluid py-3 mt-3">
        <div class="container">
            <img src="../static/img/reservation-bg-compressed.jpg" alt="brunch table picture" class="form-background">
            <div class="form-container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">

                        <div class="contact-form bg-light rounded p-5">
                            <h1 class="section-title position-relative text-center mb-5 pink-icon">Formulaire de Réservation</h1>
                            <transition name="fade">
                                <div v-if="showSuccessMessage" class="pb-2 px-3 success-message" style="font-size: larger;">
                                    Votre réservation
                                    a
                                    bien été prise en compte, à bientôt ! <i class="bi bi-emoji-smile pink-icon"></i></div>
                            </transition>
                            <transition name="fade">
                                <div v-if="showErrorMessage" class="pb-2 px-3 error-message" style="font-size: larger;">Une
                                    erreur est survenue, veuillez réessayer plus tard ou nous contacter par téléphone. 😔
                                </div>
                            </transition>
                            <form @submit.prevent="submitForm" name="sentMessage" id="contactForm">
                                <div class="form-row">
                                    <div class="col-sm-6 control-group py-3 text-center">
                                        <label for="name-input" class="px-3 pt-2">Nom</label>
                                        <input v-model="formData.name" type="text" class="form-control p-4"
                                            placeholder="ou prénom 😊" />
                                    </div>
                                    <div class="col-sm-6 control-group py-3 text-center">
                                        <label for="phone-input" class="px-3 pt-2">Téléphone</label>
                                        <input v-model="formData.phone" @input="handlePhoneInput" type="phone"
                                            class="form-control p-4" maxlength="12"
                                            placeholder="Pour confirmer la réservation" />
                                        <transition name="fade">
                                            <p v-if="showPhoneErrorMessage" class="help-block text-danger px-3">Format
                                                incorrect
                                            </p>
                                        </transition>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group py-3 col-sm-6 text-center">
                                        <label for="date-input" class="px-3 pt-2">Date Souhaitée</label>
                                        <input v-model="formData.datetime" type="date" id="date-input"
                                            class="form-control p-4" placeholder="Tous les jours !" />
                                    </div>
                                    <div class="control-group py-3 col-sm-6 text-center">
                                        <label for="peopleQty" class="px-3 pt-2">Nombre de personnes</label>
                                        <input id="peopleQty" @input="handleQtyInput" type="number"
                                            v-model="formData.peopleQty" class="form-control p-4"
                                            placeholder="Combien de chanceux ?">

                                    </div>
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

<style>
.form-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

</style>