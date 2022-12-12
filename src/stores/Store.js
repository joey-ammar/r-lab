import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

async function loadFromGitlab(path) {
    const cfg = {
        headers: {
            'PRIVATE-TOKEN': 'glpat-TXfsvETTAfiaJ_UApvzS',
        },
    };
    const resp = await axios.get('http://gitlab.dev.local/api/v4/'+path, cfg);
    return resp.data;
}

loadFromGitlab(`groups/mcp-development%2Fmcp-app/projects`)


export const useTicketStore = defineStore('ticket', () => {
  let ticket = ref('');
  let from = ref('');
  let description = ref('');
  let projects = ref('');
  let labels = ref('');
  let teams = ref([]);
  let priority = ref([]);
  let quap = ([]);
  let planned = true;
  let ticketNumberStore = ref('');
  return { 
    ticketNumberStore
  }
})
