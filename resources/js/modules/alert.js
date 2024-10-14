import { defineStore } from 'pinia'
import { ref } from 'vue'

const alertStore = defineStore('alert', () => {
    const alert = ref({
        visible: false,
        title: '',
        text: '',
        type: 'success'
    });
    
    // types: 'success' 'info' 'warning' 'error'
    const setAlert = (title, text, type = 'success') => {
        alert.value.visible = true;
        alert.value.title = title;
        alert.value.text = text;
        alert.value.type = type;
    };

    return { alert, setAlert }
});

export default alertStore;