<template>
  <footer>
    <div class="overflow-hidden footer object-fill bg-no-repeat px-5 md:py-20 pt-20 pb-5 px-5 md:px-20">
      <div class="flex justify-around flex-col md:flex-row relative">
          <div class="md:w-1/4">
            <h1 class="text-3xl text-yellow-400">Travel<span class="text-gray-800">now</span></h1>
            <p class="text-sm font-thin">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          </div>
          <div class="md:w-1/4">
          <h1 class="font-bold text-lg">Tour</h1>
              <ul class="text-sm font-normal mt-1">
                <li v-for="tour in tours" :key="tour" class="my-1">
                  <a href="#">{{tour}}</a>
                </li>
              </ul>
          </div>
          <div class="md:w-1/4">
          <h1 class="font-bold text-lg">Support</h1>
              <ul class="text-sm font-normal mt-1">
                <li v-for="support in supports" :key="support" class="my-1">
                  <a href="#">{{support}}</a>
                </li>
              </ul>
          </div>
          <div class="md:w-1/4">
          <h1 class="font-bold text-lg">Useful Pages</h1>
              <ul class="text-sm font-normal mt-1">
                <li v-for="useful in usefuls" :key="useful" class="my-1">
                  <a href="#">{{useful}}</a>
                </li>
              </ul>
          </div>
      </div>
    </div>
    <div
      class="
        bg-yellow-400
        text-white
        h-16
        flex
        place-items-center
        justify-center
      "
    >
      <p>&copy;2021. All Right Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tours: ['Thailand', 'Canada', 'Korea', 'Italy'],
      supports: ['Account', 'Legal', 'Contact', 'Privacy Policy'],
      usefuls: ['Deals', 'FAQs', 'Why us'],
    }
  }
}
</script>

<style scoped>
  .footer{
    background-image: url('https://i.ibb.co/0cxZ0QS/Vector-5.png');
    background-size: cover;
  }
</style>