<template>
  <div>
    <ClientAPI
      :endpoint="temperatureEndpoint"
      :title="title"
      @data-fetched="showDataFetched"
    >
    </ClientAPI>
    <Chart :chartData="chartData"> </Chart>
  </div>
</template>

<script>
import ClientAPI from "../components/ClientAPI.vue";
import Chart from "../components/Chart.vue";

export default {
  components: {
    ClientAPI,
    Chart: Chart,
  },
  data() {
    return {
      title: "Temperature",
      temperatureEndpoint: "https://global-warming.org/api/temperature-api",
      chartData: null,
    };
  },
  methods: {
    showDataFetched(dataAPI) {
      console.log("Temperature data fetched:", dataAPI);
      this.chartData = dataAPI;
    },
  },
};
</script>
