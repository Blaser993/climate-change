<template>
  <div>
    <h1>{{ temperatureData }}</h1>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // Utilizzo di ref per creare reattività
    const temperatureData = ref(null);

    // Utilizzo di onMounted per chiamare la funzione quando il componente è montato
    onMounted(async () => {
      await fetchTemperatureData();
    });

    // Funzione per effettuare la richiesta API
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get('https://global-warming.org/api/temperature-api');
        temperatureData.value = response.data; // Assicurati che la struttura del dato sia adatta alle tue esigenze
      } catch (error) {
        console.error('Errore durante il recupero dei dati dalla API:', error);
      }
    };

    // Restituzione dei dati e delle funzioni necessari nel setup
    return {
      temperatureData,
      fetchTemperatureData,
    };
  },
};
</script>

<!-- https://global-warming.org/api/temperature-api
https://global-warming.org/api/co2-api
https://global-warming.org/api/methane-api
https://global-warming.org/api/nitrous-oxide-api
https://global-warming.org/api/arctic-api
https://global-warming.org/api/ocean-warming-api -->