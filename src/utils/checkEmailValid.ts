import { Ref } from "vue";

const checkEmailValid = (email: string, showErrorMessage: Ref<boolean>, emailRegex: RegExp) => {
    if (email.length <= 3) {
        showErrorMessage.value = false;
        return;
    } else if (emailRegex.test(email)) {
        showErrorMessage.value = false;
        return;
    } else {
        showErrorMessage.value = true;
    }
};

export default checkEmailValid;