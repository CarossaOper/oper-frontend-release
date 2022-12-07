<template>
<div class="min-h-[100px] bg-[#f2f2f2] pb-10">
    <div class="flex flex-col-reverse lg:flex-row justify-between w-11/12 mx-auto">
        <div class="lg:w-8/12">
            <div class="lg:w-3/4 lg:float-right mt-5 lg:mt-0 relative h-full">
                <h1 class="font-vollkornsc text-4xl mb-2 text-gray-700 font-bold">Lorem ipsum dolor</h1>
                <span class="font-vollkornsc text-sm font-bold tracking-tights text-gray-400">15. Nov. 2022</span>
                <p class="font-noto text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a class="lg:absolute lg:bottom-0 font-noto text-gray-700 underline" href="#">Mehr →</a>
            </div>
        </div>
        <img class="lg:w-3/12" src="/placeholder/placeholder_presentation.JPG" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'News',
}
</script>