<template>
  <div>
    <h2>{{ title }}</h2>
    <slot :fetchData="fetchData" />
  </div>
</template>

<script>
import { ref, onMounted} from 'vue';

export default {
  props: ['endpoint', 'title'],
  setup(props, { emit }) {
    const fetchData = ref(null);

    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(props.endpoint);
        const jsonData = await response.json();
        fetchData.value = jsonData; 
        emit('data-fetched', fetchData.value);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };

    onMounted(() => {
      fetchDataFromAPI();
    });
    return { fetchData };
  },
};
</script>



<!-- https://global-warming.org/api/temperature-api
https://global-warming.org/api/co2-api
https://global-warming.org/api/methane-api
https://global-warming.org/api/nitrous-oxide-api
https://global-warming.org/api/arctic-api
https://global-warming.org/api/ocean-warming-api -->