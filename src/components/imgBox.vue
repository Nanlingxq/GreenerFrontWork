<template>
    <div class="container">
      <div class="box">
        <div class="image-box">
            <img :src="props.image.src" alt="">
        </div>
        <div class="text-box">
          <div>
            <h2>
              {{props.image.title}}
            </h2>
            <p>
              {{ props.image.discription }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import '@/css/imageBox.css'
  const props = defineProps({
    image: {
      type:Object,
      require:true,
    }
  })
  console.log(props.image)
  console.log(props.image.src)
</script>
