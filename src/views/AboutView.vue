<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="flex flex-col">
      <div class="bottom-2">tailwindcss</div>
      <div class="flex-1 border">hello tailwindcss</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
