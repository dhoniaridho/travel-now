<template>
  <header>
    <nav>
      <div class="flex h-16 justify-between place-items-center px-5 md:px-24">
        <div>
          <h1 class="text-3xl text-yellow-400">Travel<span class="text-gray-800">now</span></h1>
        </div>
        <ul class="hidden md:flex place-items-center">
          <li v-for="nav in navigations" :key="nav.name" class="mx-2">
            <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
          </li>
        </ul>
        <div class="hidden md:block">
         <Link href="/book">
            Book A Tour
         </Link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'Discover',
          href: '/discover',
        },
        {
          name: 'Destination',
          href: '/destination',
        },
        {
          name: 'About Us',
          href: '/about',
        },
      ],
    }
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  color: #fbb667;
}
</style>