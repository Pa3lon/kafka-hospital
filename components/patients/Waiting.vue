<template>
  <div class="w-64">
    <PatientsTable title="waiting" :patients="patients" />
    <div class="flex mt-2 w-full text-xs justify-between">
      <UButton
        color="blue"
        class="w-28 justify-center text-xs"
        :disabled="addingPatient"
        @click="addPatient"
      >
        Add Patient
      </UButton>
      <UButton
        color="blue"
        class="w-28 justify-center text-xs"
        v-if="isSimulating === null"
        @click="openModal"
      >
        Start Generator
      </UButton>
      <UButton
        color="red"
        class="w-28 justify-center text-xs"
        v-if="isSimulating !== null"
        @click="stopGenerator"
      >
        Stop Generator
      </UButton>
    </div>
  </div>
  <UModal v-model="isOpen">
    <div class="p-4 flex flex-col space-y-4 items-center">
      <h2 class="text-lg font-bold">Input generator intevall</h2>
      <UInput
        v-model="generatorInterval"
        placeholder="Time between new patients"
      >
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">ms</span>
        </template>
      </UInput>
      <div class="flex justify-end mt-4">
        <UButton
          class="w-48 justify-center"
          color="blue"
          @click="startGenerator"
          >Start</UButton
        >
      </div>
    </div>
  </UModal>
</template>
<script setup>
const patients = useState("patients-waiting", () => []);
const isSimulating = ref(null);
const addingPatient = ref(false);
const generatorInterval = ref(5000);
const isOpen = ref(false);

// Adding a single random patient
const addPatient = async () => {
  addingPatient.value = true;
  const res = await generatePatient();
  if (res.status === 200) {
    patients.value = [...patients.value, res.data];
  }
  addingPatient.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

const startGenerator = () => {
  isOpen.value = false;
  isSimulating.value = true;
  const interval = setInterval(async () => {
    const res = await generatePatient();
    if (res.status === 200) patients.value = [...patients.value, res.data];
  }, generatorInterval.value);
  isSimulating.value = interval;
};

const stopGenerator = () => {
  clearInterval(isSimulating.value);
  isSimulating.value = null;
};

// Api call that generate a random patient
const generatePatient = () =>
  $fetch("/api/patients/create", {
    method: "POST",
    body: JSON.stringify({ topic: "hospital.patients-waiting" }),
  });
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
</style>
