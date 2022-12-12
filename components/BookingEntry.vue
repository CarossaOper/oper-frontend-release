<template>
    <div class="w-11/12 lg:border-x-0 border border-black flex lg:flex-row flex-col lg:justify-between lg:items-center font-noto text-lg mx-auto relative z-40">
        <div class="flex lg:flex-row flex-col px-3 py-2">
            <span class="flex flex-row items-center lg:ml-2 my-2 lg:pr-6 lg:border-r border-black mx-auto">{{day}}<b class="font-semibold mx-2 text-3xl">{{date}}</b>{{month}}</span>
            <span class="flex flex-row items-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:mx-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span class="lg:border-r border-black pr-3">Theaterzelt Landshut</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>19:00</span>
            </span>
        </div>

        <a v-if="status === 1" class="border border-black flex flex-row items-center px-3 py lg:mr-2 w-fit lg:mx-0 mx-auto my-1 lg:my-0" :href="href">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            Karten
        </a>

        <a v-else-if="status === 2" class="border border-red-400 flex flex-row items-center px-3 py lg:mr-2 text-red-400 hover:cursor-not-allowed w-fit lg:mx-0 mx-auto my-1 lg:my-0" href="javascript:;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            ausverkauft
        </a>

        <a v-else-if="status === 0" class="border border-gray-900 text-gray-900 flex flex-row items-center px-3 py lg:mr-2 hover:cursor-not-allowed w-fit lg:mx-0 mx-auto my-1 lg:my-0" href="javascript:;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            bald verfügbar
        </a>

    </div>
</template>

<script>
export default {
    name: 'BookingEntry',
    props: {
        day: String,
        date: Number,
        month: String,
        status: Number,
        href: String
    }
}
</script>