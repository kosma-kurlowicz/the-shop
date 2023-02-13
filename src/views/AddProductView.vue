<template>
  <main class="add-product-page">
    <section>
      <FormKit type="form" :actions="false" #default="{ disabled }" @submit="saveProduct" id="product-form">
        <h1>Add Product</h1>
        <div class="add-product-form-body">
          <FormKit name="name" type="text" validation="required:trim" label="Name" help="Enter your new product's name." v-model="formData.name" id="name" />
          <FormKit name="sku" type="text" validation="required:trim" label="SKU" help="Enter your new product's SKU. SKU must be unique." v-model="formData.sku" id="sku" />
          <FormKit name="price" type="number" validation="required|number|min:0.01" step="0.01" min="0.01" :validation-messages="{'min': 'Price must be equal to or greater than $0.01.'}" label="Price ($)" help="Enter the price." v-model="formData.price" id="price" />
          <div class="add-product-form-category">
            <FormKit name="categorySwitcher" type="select" validation="required" label="Type switcher" placeholder="Please select product's category" v-model="formData.category" :options="this.categories" id="productType" />
            <div v-if="formData.category === 'Book'">
              <FormKit name="weight" type="number" validation="required|number|min:0.01" step="0.01" min="0.01" label="Weight (kg)" :validation-messages="{'min': 'Weight must be at least 0.01 kg.'}" help="Enter this book weight in Kg. Weight must be equal to or greater than 0.01 Kg." v-model="formData.weight" id="weight" />
            </div>
            <div v-if="formData.category === 'DVD'">
              <FormKit name="size" type="number" validation="required|number|min:0.01" step="0.01" min="0.01" label="Size (MB)" :validation-messages="{'min': 'Size must be at least 0.01 MB.'}" help="Enter this DVD size in MB. Size must be equal to or greater than 0.01 MB." v-model="formData.size" id="size" />
            </div>
            <div v-if="formData.category === 'Furniture'">
              <FormKit name="height" type="number" validation="required|number|min:0.1" step="0.1" min="0.1" label="Heigt (cm)" :validation-messages="{'min': 'Height must be at least 0.1 cm.'}" help="Enter the height in cm. Height must be equal to or greater than 0.1 cm." v-model="formData.height" id="height" />
              <FormKit name="width" type="number" validation="required|number|min:0.1" step="0.1" min="0.1" label="Width (cm)" :validation-messages="{'min': 'Width must be at least 0.1 cm.'}" help="Enter the width in cm. Width must be equal to or greater than 0.1 cm." v-model="formData.width" id="width" />
              <FormKit name="length" type="number" validation="required|number|min:0.1" step="0.1" min="0.1" label="Length (cm)" :validation-messages="{'min': 'Length must be at least 0.1 cm.'}" help="Enter the length in cm. Length must be equal to or greater than 0.1 cm." v-model="formData.length" id="length" />
            </div>
          </div>
        </div>
        <div class="add-product-form-footer">
          <FormKit type="submit" label="Save" outer-class="success" />
          <RouterLink to="/" class="button">Cancel</RouterLink>
        </div>
      </FormKit>
    </section>
  </main>
</template>

<style lang="sass">
section
  max-width: 1200px
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  padding: 0 1rem

section > *
  width: 100%
  margin-block-end: 2rem


#product-form
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
  background-color: white
  border-radius: 0.3rem
  overflow: hidden
  padding: 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-items: flex-start
  max-width: 1200px
  width: 100%

  h1
    font-size: 2rem
    font-weight: 400
    padding: 1rem 2rem
    width: 100%
    background-color: var(--santorin-blue)
    color: var(--blanc-de-blanc)
  
  .add-product-form-body
    width: 100%
    padding: 2rem

  input, option, select
    padding: 0.4rem

  input, label, select
    width: 100%
    font-size: 1rem

  .add-product-form-category
    background-color: var(--blanc-de-blanc)
    width: 100%
    padding: 1rem
    margin-block-start: 1rem
  
  .add-product-form-footer
    background-color: var(--blanc-de-blanc)
    padding: 2rem
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-end

    .formkit-outer
      margin-block-end: 0

  .formkit-outer
    margin-block-end: 1rem
    
  .formkit-help
    color: rgb(90,90,90)
    font-size: 0.9rem
  
  .formkit-messages
    margin-block-end: 1rem
    font-size: 0.9rem
    color: rgb(211, 22, 63)
    padding: 0

    li
      list-style: none
    
  > .formkit-messages
    background-color: rgb(211, 22, 63)
    width: 100%
    margin: 0
    padding: 1rem 2rem
    color: white


.columns-two
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  padding: 0 1rem

.column-left
  width: 30%

.column-right
  width: 66%

hr
  height: 4px
  width: 100px
  background-color: var(--santorin-blue)
  margin-block-end: 1rem
</style>

<script>
export default {
  data() {
    return {
      categories: ['Book', 'DVD', 'Furniture'],
      formData: {
        category: '',
        name: '',
        sku: '',
        price: '',
        weight: '',
        length: '',
        height: '',
        width: '',
      }
    }
  },
  methods: {
    saveProduct() {
      axios
        .post(API_URL + "new", {
          productData: this.formData
        })
        .then(
          window.location.replace("/")
        )
    }
  }
}
</script>