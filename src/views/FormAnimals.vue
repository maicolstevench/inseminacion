<template>
  <div class="p-4 max-w-lg mx-auto bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Formulario de Inseminación</h2>
    
    <form @submit.prevent="guardarInseminacion">
      <div class="mb-4">
        <label class="block mb-1">Fecha de Inseminación</label>
        <input type="date" v-model="form.fecha" class="w-full border px-2 py-1 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">Animal</label>
        <select v-model="form.animalId" class="w-full border px-2 py-1 rounded" required>
          <option value="" disabled>Selecciona un animal</option>
          <option v-for="animal in animales" :key="animal.id" :value="animal.id">
            {{ animal.nombre }}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-1">Toro utilizado</label>
        <input type="text" v-model="form.toro" class="w-full border px-2 py-1 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">Tipo de Semen</label>
        <select v-model="form.tipoSemen" class="w-full border px-2 py-1 rounded" required>
          <option value="">Selecciona un tipo</option>
          <option value="convencional">Convencional</option>
          <option value="sexado">Sexado</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-1">Técnico Responsable</label>
        <input type="text" v-model="form.tecnico" class="w-full border px-2 py-1 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">Observaciones</label>
        <textarea v-model="form.observaciones" class="w-full border px-2 py-1 rounded" rows="3"></textarea>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Guardar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Simulamos una lista de animales (idealmente esto vendría de una API)
const animales = ref([
  { id: 1, nombre: 'Vaca #101' },
  { id: 2, nombre: 'Vaca #202' },
  { id: 3, nombre: 'Vaca #303' }
])

// Modelo del formulario
const form = ref({
  fecha: '',
  animalId: '',
  toro: '',
  tipoSemen: '',
  tecnico: '',
  observaciones: ''
})

const guardarInseminacion = () => {
  console.log('Datos del formulario:', form.value)

  // Aquí puedes hacer la lógica para enviar los datos al backend
  // Ejemplo:
  // await axios.post('/api/inseminaciones', form.value)

  alert('¡Inseminación registrada con éxito!')
  // Limpia el formulario si deseas
  form.value = {
    fecha: '',
    animalId: '',
    toro: '',
    tipoSemen: '',
    tecnico: '',
    observaciones: ''
  }
}
</script>

<style scoped>
input, select, textarea {
  transition: border-color 0.2s;
}
input:focus, select:focus, textarea:focus {
  border-color: #2563eb;
  outline: none;
}
</style>
