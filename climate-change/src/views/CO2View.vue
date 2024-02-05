
<template>
  <div>
    <h1>CO2</h1>
  </div>
  <ClientAPI :endpoint="endpoint" :title="title"></ClientAPI>
</template>

  <script>
  import ClientAPI from '../components/ClientAPI.vue';
  
  export default {
    components: {
      ClientAPI,
    },
    props: ['endpoint', 'title'],
  
  }
  </script>