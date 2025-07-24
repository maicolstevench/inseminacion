<template>
  <div class="form-container">
    <div class="form-card">
      <div class="form-header">
        <h2>Formulario de Inseminación Artificial</h2>
        <p>Registro de procedimiento veterinario</p>
      </div>

      <form @submit.prevent="submitForm" class="form">
        <div class="section">
          <h3>Información del Animal</h3>
          <div class="form-row">
            <div class="form-group">
              <label>ID del Animal *</label>
              <input v-model="form.animalId" required placeholder="Ej: A001">
            </div>
            <div class="form-group">
              <label>Nombre del Animal</label>
              <input v-model="form.animalName" placeholder="Nombre del animal">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Especie *</label>
              <select v-model="form.species" required>
                <option value="">Seleccionar especie</option>
                <option value="bovino">Bovino</option>
                <option value="porcino">Porcino</option>
                <option value="ovino">Ovino</option>
                <option value="caprino">Caprino</option>
                <option value="equino">Equino</option>
              </select>
            </div>
            <div class="form-group">
              <label>Raza</label>
              <input v-model="form.breed" placeholder="Raza del animal">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Edad (años)</label>
              <input type="number" v-model="form.age" min="0" max="30" placeholder="Edad">
            </div>
            <div class="form-group">
              <label>Peso (kg)</label>
              <input type="number" v-model="form.weight" min="0" step="0.1" placeholder="Peso en kg">
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Información del Procedimiento</h3>
          <div class="form-row">
            <div class="form-group">
              <label>Fecha del Procedimiento *</label>
              <input type="date" v-model="form.procedureDate" required>
            </div>
            <div class="form-group">
              <label>Hora del Procedimiento</label>
              <input type="time" v-model="form.procedureTime">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Origen del Semen *</label>
              <input v-model="form.semenSource" required placeholder="Proveedor o banco de semen">
            </div>
            <div class="form-group">
              <label>Lote del Semen</label>
              <input v-model="form.semenBatch" placeholder="Número de lote">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Técnica Utilizada *</label>
              <select v-model="form.technique" required>
                <option value="">Seleccionar técnica</option>
                <option value="cervical">Inseminación Cervical</option>
                <option value="intrauterina">Inseminación Intrauterina</option>
                <option value="laparoscopica">Inseminación Laparoscópica</option>
              </select>
            </div>
            <div class="form-group">
              <label>Sincronización de Estro</label>
              <select v-model="form.estrusSync">
                <option value="">No aplicado</option>
                <option value="prostaglandinas">Prostaglandinas</option>
                <option value="progestágenos">Progestágenos</option>
                <option value="gnrh">GnRH</option>
                <option value="combinado">Protocolo Combinado</option>
              </select>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Información del Veterinario</h3>
          <div class="form-row">
            <div class="form-group">
              <label>Nombre del Veterinario *</label>
              <input v-model="form.veterinarianName" required placeholder="Nombre completo">
            </div>
            <div class="form-group">
              <label>Número de Licencia</label>
              <input v-model="form.licenseNumber" placeholder="Número de colegiatura">
            </div>
          </div>
          <div class="form-group">
            <label>Clínica/Establecimiento</label>
            <input v-model="form.clinic" placeholder="Nombre de la clínica o establecimiento">
          </div>
        </div>

        <div class="section">
          <h3>Observaciones y Notas</h3>
          <div class="form-group">
            <label>Observaciones del Procedimiento</label>
            <textarea v-model="form.observations" rows="4" placeholder="Detalles adicionales, complicaciones, observaciones especiales..."></textarea>
          </div>
          <div class="form-group">
            <label>Fecha de Seguimiento</label>
            <input type="date" v-model="form.followUp">
          </div>
        </div>

        <div class="form-actions">
          <button type="button" @click="resetForm" class="btn btn-secondary">Limpiar Formulario</button>
          <button type="submit" class="btn btn-primary">Registrar Procedimiento</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtificialInseminationForm',
  data: () => ({
    form: {
      animalId: '', animalName: '', species: '', breed: '', age: '', weight: '',
      procedureDate: '', procedureTime: '', semenSource: '', semenBatch: '',
      technique: '', estrusSync: '', veterinarianName: '', licenseNumber: '',
      clinic: '', observations: '', followUp: ''
    }
  }),
  methods: {
    submitForm() {
      const required = ['animalId', 'species', 'procedureDate', 'semenSource', 'technique', 'veterinarianName'];
      if (required.some(field => !this.form[field])) {
        alert('Por favor complete todos los campos requeridos (*)');
        return;
      }
      console.log('Formulario enviado:', this.form);
      alert('Procedimiento registrado exitosamente');
    },
    resetForm() {
      Object.keys(this.form).forEach(key => this.form[key] = '');
    }
  }
}
</script>

<style scoped>
.form-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.form-card {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: slideUp 0.6s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.form-header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 30px;
  text-align: center;
}
.form-header h2 {
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: 600;
}
.form-header p {
  margin: 0;
  opacity: 0.9;
  font-size: 1.1rem;
}
.form { padding: 40px; }
.section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f8f9fa;
}
.section:last-of-type {
  border-bottom: none;
  margin-bottom: 20px;
}
.section h3 {
  color: #2c3e50;
  margin: 0 0 25px 0;
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
  display: inline-block;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: 600;
  color: #34495e;
  margin-bottom: 8px;
  font-size: 0.95rem;
}
input, select, textarea {
  padding: 12px 16px;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fafbfc;
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #3498db;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  transform: translateY(-1px);
}
input:hover, select:hover, textarea:hover {
  border-color: #bdc3c7;
}
textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}
select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
  appearance: none;
}
.form-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #f8f9fa;
}
.btn {
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.btn-primary {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
}
.btn-primary:hover {
  background: linear-gradient(135deg, #2980b9 0%, #1f5f8b 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
}
.btn-secondary {
  background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
  color: white;
}
.btn-secondary:hover {
  background: linear-gradient(135deg, #7f8c8d 0%, #6c7b7d 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(149, 165, 166, 0.3);
}
@media (max-width: 768px) {
  .form-container { padding: 10px; }
  .form { padding: 20px; }
  .form-header { padding: 20px; }
  .form-header h2 { font-size: 1.5rem; }
  .form-row { grid-template-columns: 1fr; gap: 15px; }
  .form-actions { flex-direction: column; }
  .btn { width: 100%; }
}
@media (max-width: 480px) {
  .form-header h2 { font-size: 1.3rem; }
  .form-header p { font-size: 1rem; }
  .section h3 { font-size: 1.2rem; }
}
</style>