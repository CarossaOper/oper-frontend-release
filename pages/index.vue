<template>
    <NuxtLayout name="site">
      <NuxtLayout name="hero">
        <MainTitle title="Die Göttin wird modern" />
      </NuxtLayout>
      <Bookings :sale="false"/>
      <!--<News/>-->
      <Sponsors />
    </NuxtLayout>
</template>