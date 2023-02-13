<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { API_URL, AXIOS_URL } from '../plugins/axios.js'
import axios from 'axios'
</script>

<template>
  <div class="top-panel">
    <div>
      <h1>Product List</h1>
      <nav>
        <div>
          <RouterLink to="/add-product" class="button success">Add</RouterLink>
          <button class="danger" :disabled="selectedProducts == 0" @click="deleteSelected">Mass Delete</button>
        </div>
      </nav>
    </div>
  </div>
  <main>
    <section>
      <div class="product-cards-container">
          <div v-for="product in products" class="product-card" :key="product.id">
            <input type="checkbox" class="delete-checkbox" v-model="selectedProducts" :value="product.id" />
            <h2>{{ product.name }}</h2>
            <ul>
              <li>ID: {{ product.id }}</li>
              <li>Category: {{ product.category_name }}</li>
              <li>SKU: {{ product.sku }}</li>
              <li>Price (&dollar;): {{ product.price }} USD</li>
            </ul>
          </div>
        </div>
    </section>
  </main>
</template>

<style lang="sass">
.top-panel
  background-color: var(--santorin-blue)
  color: white
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  padding: 1rem 0

.top-panel > div
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  max-width: 1200px
  width: 100%
  padding: 0 1rem

.top-panel h1
  min-width: 60%

nav
  width: 100%
  display: flex
  flex-direction: column
  align-items: center

nav > div
  width: 100%
  display: flex 
  flex-direction: row
  justify-content: flex-end
  max-width: 1260px

main
  display: flex
  flex-direction: column
  align-items: center
  justify-content: start
  min-height: 70vh
  width: 100%

.product-cards-container
  display: grid
  grid-template-columns: repeat(4,1fr)
  max-width: 1260px
  gap: 1rem
  
@media (max-width: 1400px)
  .product-cards-container
    grid-template-columns: repeat(3,1fr)

@media (max-width: 1040px)
  .product-cards-container
    grid-template-columns: repeat(2,1fr)

@media (max-width: 720px)
  .product-cards-container
    grid-template-columns: repeat(1,1fr)

.product-card
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
  border-radius: 0.4rem
  width: 280px
  min-height: 380px
  background-color: white
  padding: 2rem
  display: flex
  flex-direction: column
  align-items: flex-start

  input
    width: 20px
    height: 20px
    margin-block-end: 1rem
    align-self: flex-end

  h2
    marrgin-block-end: 1rem
    font-weight: 300

</style>

<script>

export default {
  data() {
    return {
      products: [],
      selectedProducts: [],
      errors: []
    }
  },

  created() {
    AXIOS_URL.get()
      .then(response => {
        this.products = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    deleteSelected() {
      axios
        .post(API_URL + 'delete/', {
          ids: this.selectedProducts
        })
        .then(
          window.location.replace("/")
        )
    }
  }
}
</script>