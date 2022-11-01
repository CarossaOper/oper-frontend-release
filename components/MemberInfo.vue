<template>
  <section class="bg-[#f7f7f7] text-gray-600 body-font">
    <div class="container px-5 pt-8 py-24 mx-auto">
      <h1 class="text-4xl text-center font-bold tracking-tight text-gray-600 font-vollkornsc">Das sind wir</h1>
      <div class="mt-8 flex flex-wrap mx-auto">
        <MemberCard class="mx-auto inline-block" 
          imagesrc="man-1.png"
          username="Max Mustermann"
          :description="placeholder"
          role="Oberknecht"
          />
        <MemberCard class="mx-auto inline-block" 
          imagesrc="woman-1.png"
          username="Marianne Mustermann"
          :description="placeholder"
          role="Knechtin"
        />
        <MemberCard class="mx-auto inline-block" 
          imagesrc="man-2.png"
          username="Martin Mustermann"
          :description="placeholder"
          role="Knecht" 
        />
        <MemberCard class="mx-auto inline-block" 
          imagesrc="man-1.png"
          username="Max Mustermann"
          :description="placeholder"
          role="Oberknecht"
          />
        <MemberCard class="mx-auto inline-block" 
          imagesrc="woman-1.png"
          username="Marianne Mustermann"
          :description="placeholder"
          role="Knechtin"
        />
        <MemberCard class="mx-auto inline-block" 
          imagesrc="man-2.png"
          username="Martin Mustermann"
          :description="placeholder"
          role="Knecht" 
        />
      </div>
    </div>
  </section>
  <!--<div class="min-h-[100vh] block">
    <div class="max-h-[90%] flex px-5rem align-middle justify-items-center">
      <MemberCard class="mx-auto inline-block" 
        imagesrc="../static/placeholder/man-1.png"
        username="Max Mustermann"
        :description="placeholder"
        role="Oberknecht"
      />
    <MemberCard class="mx-auto inline-block" 
      imagesrc="../static/placeholder/woman-1.png"
      username="Marianne Mustermann"
      :description="placeholder"
      role="Knechtin"
    />
    <MemberCard class="mx-auto inline-block" 
      imagesrc="../static/placeholder/man-2.png"
      username="Martin Mustermann"
      :description="placeholder"
      role="Knecht" 
    />
    </div>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  },
}
</script>