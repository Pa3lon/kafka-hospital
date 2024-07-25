<template>
  <div
    class="bg-green-700 first-letter:uppercase text-white font-bold text-center py-2 rounded-t-lg border-b-2 border-gray-500"
  >
    {{ props.title }} ({{ patients.length }})
  </div>
  <ul
    style="max-height: 37.5rem"
    class="text-xs shadow-lg scroll-none overflow-y-scroll hide-scrollbar"
  >
    <li
      v-for="(patient, index) in props.patients"
      :class="index % 2 === 0 ? '' : 'bg-gray-100 '"
      class="flex items-center py-2 px-4 space-x-2 border h-10 border-gray-100"
    >
      <UIcon
        :name="'i-map:female'"
        dynamic
        :class="
          patient.gender === 'male'
            ? 'text-blue-500 w-4 h-4'
            : 'text-pink-500 w-4 h-4'
        "
      />
      <p class="truncate ... max-w-32">{{ patient.name }}</p>
      ,
      <p>{{ patient.age }}</p>
    </li>
    <li>
      <p v-if="props.patients?.length === 0" class="text-center py-2">
        No patients {{ props.title }}
      </p>
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  title: String,
  patients: Array,
});
</script>
