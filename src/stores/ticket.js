import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', () => {
  let ticketNumberStore = ref('');
  return { 
    ticketNumberStore
  }
})
