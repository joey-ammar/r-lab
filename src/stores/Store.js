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

async function loadLabel(prefix) {
  const data = await loadFromGitlab(`groups/mcp-development/labels?only_group_labels=true&search=${prefix}::`)
  return data.map((item) => {
      [, item.prefix, item.value] = item.name.match(/^(\w+)::(.*)$/) ?? [];
      return item;
  });
};

async function loadApps() {
  const data = await loadFromGitlab(`groups/mcp-development%2Fmcp-app/projects`)
   console.log(data);
  return data;
}


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

  loadLabel('quap').then((data) => quap.value = data);
  loadLabel('Prio').then((data) => priority.value = data);
  loadLabel('Team').then((data) => teams.value = data);
  loadLabel('Projekt').then((data) => projects.value = data);
  return { quap, priority, teams, projects }
})
