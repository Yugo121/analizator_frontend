<template>
    <Teleport to="body">
        <div 
            class="modal fade" 
            :class="{ show: isOpen, 'd-block': isOpen }" 
            tabindex="-1" 
            role="dialog"
        >
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #ffc107;">
                    <h1 class="modal-title fs-5 text-center w-100">{{ title }}</h1>
                </div>
                <div class="modal-body">
                    <div v-for="(field, index) in filters" :key="index" class="mb-3">
                        <label :for="'filter-' + index" class="form-label">{{ field.label }}</label>
                                <input 
                                    v-model="filterValues[field.name]" 
                                    :type="field.type || 'text'"  
                                    :id="'filter-' + index" 
                                    :placeholder="field.placeholder || ''"
                                    class="form-control"
                                />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-outline-warning" @click="applyFilters">Apply filters</button>
                </div>
            </div>
        </div>
        </div>
    </Teleport>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
      title: String,
      filters: Array
    },
    data(){
        return {
            filterValues: {},
        }
    },
    watch: {

    },
    emits: ["close", "apply"],
    methods: {
      closeModal() {
        this.$emit("close");
      },
      applyFilters(){
        this.$emit("apply", this.filterValues);
        this.closeModal();
      }
    },
  };
  </script>

  <style scoped>
.modal {
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease-in-out;
}
.btn-outline-warning{
    color: black
}
</style>