
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useFormStore = defineStore('FormStore', () => {
    let ticket = ref('');
    let from = ref('');
    let description = ref('');
    let projects = ref('');
    let labels = ref('');
    let teams = ref([]);
    let priority = ref([]);
    let quap = ([]);
    let planned = true;
})