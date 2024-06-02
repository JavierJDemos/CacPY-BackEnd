import api from '@./assets/services/api';

export default {
  data() {
    return {
      datos: []
    };
  },
  methods: {
    async fetchProductos() {
      const response = await api.getProductos();
      this.datos = response.data;
    }
  },
  mounted() {
    this.fetchProductos();
  }
};