<template>
  <div class="h-screen flex flex-col">
    <div class="border-b shadow-md py-4">
      <UContainer class="w-full">
        <Header />
      </UContainer>
    </div>
    <div class="relative flex justify-center flex-1 w-full">
      <div class="py-6">
        <slot />
      </div>
    </div>
  </div>
</template>
