<template>
  <div class="p-4 md:w-1/2 lg:w-1/3">
    <div class="h-full bg-gray-50 shadow-sm">
      <NuxtImg class="h-[30vh] w-full object-cover object-center" :src="imagesrc" alt="blog" />
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
  <!--<div class="block card max-w-sm bg-gray-100">
    <div class="h-[15rem] overflow-hidden">
        <NuxtImg class="rounded-t-lg" :src="imagesrc" alt="" />
    </div>
    <div class="align-center border-red-700 border-4 rounded-full mt-[1rem] max-w-fit items-center mx-auto">
      <div class="px-[0.5rem]">
        <div class="h-[10px] w-[10px] bg-red-700 inline-block rounded-full"></div>
        <div class="text-center min-h-fit inline-block font-vollkornsc">{{role}}</div>
      </div>
    </div>
    <div class="p-5">
        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 font-vollkornsc">{{username}}</h5>
        <p class="mb-3 font-normal text-justify text-gray-700 font-noto">{{description}}</p>
        <a href="#" class="font-vollkornsc inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none">
            
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    
    </div>
  </div>-->
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