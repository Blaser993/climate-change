<template>
    <div>
      <h1>Chart</h1>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    props: {
      chartData: {
        type: Object,
        default: null,
      },
    },
    watch: {
      chartData: {
        handler(newChartData) {
          this.updateChart(newChartData);
        },
        immediate: true,
      },
    },
    methods: {
      updateChart(data) {
        if (!data) return;
  
        const labels = data.result.map(entry => entry.time);
        const values = data.result.map(entry => entry.value);
  
        const ctx = this.$refs.chartCanvas.getContext('2d');
        if (this.chartInstance) {
          // Se il grafico esiste, distruggilo prima di crearne uno nuovo
          this.chartInstance.destroy();
        }
  
        this.chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Chart Data',
              borderColor: 'rgb(75, 192, 192)',
              data: values,
            }],
          },
        });
      },
    },
    beforeDestroy() {
      // Pulisco il grafico
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
    },
  };
  </script>
  