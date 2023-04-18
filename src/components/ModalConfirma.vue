<template>
  <div>
    <div v-if="openModal">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Você tem certeza?</h2>
          <p class="mb-4">Tem certeza de que deseja realizar esta ação?</p>
          <div class="flex justify-center">
            <button class="bg-gray-500 text-white px-4 py-2 mr-2 rounded-md" @click="cancel">
              Cancelar
            </button>
            <button @click="confirmAction" class="bg-red-500 text-white px-4 py-2 rounded-md">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalConfirma',

  props: {
    openModal: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    cancel() {
      this.$emit('close');
    },

    confirmAction(id) {
      this.$emit('delete', id);
    },
  },
};
</script>
