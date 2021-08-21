/* eslint-disable vue/require-prop-types */
<template>
  <NuxtLink class="px-5 py-2 text-md bg-yellow-400 hover:bg-yellow-500 text-white rounded-full shadow-lg" :to="href">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
    props: ['href']
}
</script>