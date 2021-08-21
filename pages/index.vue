<template>
  <main>
    <section
      class="min-h-screen flex place-items-center px-20 object-cover hero"
    >
      <div class="-mt-52 mx-5">
        <h1 class="text-5xl font-mono font-light">
          Find your next place <br />
          to travel
        </h1>
        <p class="text-sm font-medium mt-5">
          Lorem Ipsum has been the industry's standard dummy text ever since<br />
          the 1500s, when an unknown printer took a galley of type.
        </p>
        <form class="mt-6">
          <fieldset class="shadow-lg rounded-full inline">
            <input
              placeholder="Burj khalifa, Dub"
              class="py-2 px-7 rounded-full focus:outline-none"
            />
            <button class="px-6 m-1 py-2 rounded-full text-white bg-yellow-400">
              Search
            </button>
          </fieldset>
        </form>
      </div>
      <div class="mx-5">
        <img
          draggable="false"
          class="-mt-20"
          src="https://i.ibb.co/bF55m8K/hero.png"
          alt=""
        />
      </div>
    </section>
    <section class="flex justify-between px-20 py-16">
      <div class="mx-3">
        <img src="https://i.ibb.co/27tWjbG/travel.png" alt="" />
      </div>
      <div class="mx-3">
        <h1 class="text-5xl font-mono font-light">
          Travel to any corner of the <br />
          World
        </h1>
        <p class="mt-5 text-sm font-light">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <div class="grid grid-cols-3 mt-5 w-3/4">
          <div>
            <h1 class="text-4xl font-bold text-yellow-500">20</h1>
            <p class="text-light">
              Years <br />
              Experience
            </p>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-yellow-500">55</h1>
            <p class="text-light">
              Destination <br />
              Collaboration
            </p>
          </div>
          <div>
            <h1 class="text-4xl font-bold text-yellow-500">600+</h1>
            <p class="text-light">
              Tourist <br />
              Destination
            </p>
          </div>
        </div>
        <button class="py-2 px-5 bg-blue-900 text-white rounded-full mt-5">
          Explore Destination
        </button>
      </div>
    </section>
    <section class="px-20 py-32">
      <div class="grid grid-cols-3 gap-3">
        <div v-for="explore in explores" :key="explore.image" class="relative">
          <div>
            <img class="z-0" :src="explore.image" alt="" />
          </div>
          <div
            class="
              bg-white
              shadow-lg
              absolute
              py-5
              px-3
              w-4/5
              -mt-16
              block
              z-10
              rounded-lg
            "
          >
            <div class="flex justify-end">
              <h1 class="text-sm">{{ explore.location }}</h1>
            </div>
            <h1 class="text-xl font-mono">{{ explore.title }}</h1>
            <div class="flex justify-end">
              <h1 class="font-light">{{ explore.price }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-20 py-16 flex justify-between">
      <div class="mx-3">
        <img src="https://i.ibb.co/27tWjbG/travel.png" alt="" />
      </div>
      <div class="mx-3">
        <h1 class="text-5xl font-mono font-light">
          Our Quality Services
        </h1>
        <p class="mt-5 text-sm font-light">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <div class="grid grid-cols-1 mt-5 w-3/4">
          <div class="flex place-items-center">
            <div class="mr-7 text-3xl">1</div>
            <div>
              <h1 class="text-4xl font-mono font-light text-yellow-500 capitalize">ticket</h1>
              <p class="text-light text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="flex place-items-center">
            <div class="mr-7 text-3xl">1</div>
            <div>
              <h1 class="text-4xl font-mono font-light text-yellow-500 capitalize">ticket</h1>
              <p class="text-light text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="flex place-items-center">
            <div class="mr-7 text-3xl">1</div>
            <div>
              <h1 class="text-4xl font-mono font-light text-yellow-500 capitalize">ticket</h1>
              <p class="text-light text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      explores: [
        {
          image: 'https://i.ibb.co/vPRZmrm/destination1.png',
          title: 'Travel to Mountains',
          location: 'Brazil',
          price: '$6000',
        },
        {
          image: 'https://i.ibb.co/f0gwTzc/destination2.png',
          title: 'Travel to Deserts',
          location: 'Alaska',
          price: '$9000',
        },
        {
          image: 'https://i.ibb.co/Vgz632C/destination3.png',
          title: 'Travel to Hills',
          location: 'GreenLand',
          price: '$8000',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero {
  background-position-y: -10rem;
  background-size: cover;
  background-image: url('https://i.ibb.co/K9JFyVw/hero-bg.png');
}
</style>
