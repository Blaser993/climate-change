<!-- TemperatureView.vue -->
<template>
  <div>
    <ClientAPI :endpoint="temperatureEndpoint" :title="title" @data-fetched="showDataFetched">
      <template v-slot="{ fetchData }">
        <div v-if="fetchData && fetchData.result.length > 0">
         
          <div v-for="(entry, index) in fetchData.result" :key="index">
            <p>Time: {{ entry.time }}</p>
            <p>Station: {{ entry.station }}</p>
            <p>Land: {{ entry.land }}</p>
          </div>
          
        </div>
        <p v-else>No data available</p>
      </template>
    </ClientAPI>
  </div>
</template>

<script>
import ClientAPI from '../components/ClientAPI.vue';

export default {
  components: {
    ClientAPI,
  },
  data() {
    return {
      title: 'Temperature',
      temperatureEndpoint: 'https://global-warming.org/api/temperature-api',
    };
  },
  methods: {
    showDataFetched(data) {
      console.log('Temperature data fetched:', data);
    },
  },
};
</script>


