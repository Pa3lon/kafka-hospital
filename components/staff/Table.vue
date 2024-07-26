<template>
  <div class="flex flex-col">
    <div
      class="bg-green-700 first-letter:uppercase text-white font-bold text-center py-2 rounded-t-lg border-b-2 border-gray-500"
    >
      {{ props.title }} ({{ props.staff?.length }})
    </div>
    <div class="flex w-full justify-between">
      <div class="border border-gray-200 px-2 py-1 font-bold text-xs w-40">
        Name
      </div>
      <div class="border border-gray-200 px-2 py-1 font-bold text-xs w-40">
        Status
      </div>
    </div>
    <ul class="text-xs">
      <li v-for="(staff, index) in props.staff">
        <div :class="index % 2 === 0 ? '' : 'bg-gray-100 '" class="flex">
          <p class="w-40 px-2 py-1 border border-gray-200 truncate">
            {{ staff.name }}
          </p>
          <p
            :class="staff.available ? 'text-green-500' : 'text-red-500'"
            class="w-40 px-2 py-1 border border-gray-200 font-bold"
          >
            {{ staff.available ? "Available" : "Unavailable" }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  staff: Array,
});
</script>
