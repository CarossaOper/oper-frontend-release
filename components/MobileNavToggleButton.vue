<template>
  <button class="right-5 collapsed lg:hidden inline-block" type="button" v-on:click="extend()">
    <div :class="{ 'hamburger-open': !collapsed }" class="hamburger-div">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    collapsed: Boolean,
  }
}
</script>
