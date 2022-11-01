<template>
  <div class="p-4 md:w-1/2 lg:w-1/3">
    <div class="h-full bg-gray-50 shadow-sm">
      <img class="h-[30vh] w-full object-cover object-center" src="/placeholder/man-1.png" alt="blog" />
      <div class="p-6">
        <h1 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 font-vollkornsc">{{ username }}</h1>
        <div class="align-center border-red-700 border-4 rounded-full mt-[1rem] max-w-fit items-center mx-auto">
          <div class="px-[0.5rem]">
            <div class="h-[10px] w-[10px] bg-red-700 inline-block rounded-full"></div>
            <div class="text-center min-h-fit inline-block font-semibold font-vollkornsc">{{ role }}</div>
          </div>
        </div>
        <p class="mt-8 mb-3 font-normal text-justify text-gray-700 font-noto">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesrc: String,
    username: String,
    description: String,
    role: String,
  }
}
</script>