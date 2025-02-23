<template>
  <div class="image-slider">
    <transition-group name="fade" tag="div">
      <div
        class="slider-item"
        v-for="(image, index) in images"
        :key="index"
        :style="{ ...borderStyle, ...itemStyle }"
        :class="{'active': index === currentIndex}"
      >
        <img :src="image.url" alt="Image faild to Load" />
      </div>
    </transition-group>
  </div>
</template>

<script setup>
  import { defineProps, ref, onMounted, watch, reactive, computed } from 'vue';
  import { homeStore } from '../store/homeStore'

  const store = homeStore()

  // 图片数据
  const imagesObjectList = reactive([
    [ { url: 'src/assets/lunBo/0/2000Moran_I1.png' },
      { url: 'src/assets/lunBo/0/2005Moran_I1.png' },
      { url: 'src/assets/lunBo/0/2010Moran_I1.png' },
      { url: 'src/assets/lunBo/0/2005Moran_I1.png' },
      { url: 'src/assets/lunBo/0/2019Moran_I1.png' }],
    [ { url: 'src/assets/lunBo/1/0.png' },
      { url: 'src/assets/lunBo/1/1.jpg' },
      { url: 'src/assets/lunBo/1/2.jpg' },
      { url: 'src/assets/lunBo/1/3.jpg' },
      { url: 'src/assets/lunBo/1/4.jpg' },
      { url: 'src/assets/lunBo/1/5.jpg' }],
    [ { url: 'src/assets/lunBo/2/0.jpg' },
      { url: 'src/assets/lunBo/2/1.jpg' },
      { url: 'src/assets/lunBo/2/2.jpg' },
      { url: 'src/assets/lunBo/2/3.jpg' },
      { url: 'src/assets/lunBo/2/4.jpg' }],
    [ { url: 'src/assets/lunBo/3/0.png' },
      { url: 'src/assets/lunBo/3/1.png' },
      { url: 'src/assets/lunBo/3/2.png' },
      { url: 'src/assets/lunBo/3/3.png' },
    ],
  ])

  let images = imagesObjectList[0]

  const currentIndex = ref(0);

  watch(() => store.type, (newVal, oldVal) => {
    // console.log("已经在组件中监听到homestore中的属性变化:" + oldVal + '->' + newVal)
    images = imagesObjectList[newVal]
    currentIndex.value = 0
  })

  // watch(() => currentIndex.value, (newVal, oldVal) => {
  //   console.log("已经在组件中监听到currentIndex中的属性变化:" + oldVal + '->' + newVal)
  // })

  // 图片边框样式
  const borderStyle = computed(() => ({
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // 图片阴影
    border: '2px solid rgba(255, 255, 255, 0.8)', // 图片边框
    borderRadius: '8px', // 图片圆角
    backgroundColor: 'transparent', // 设置背景色为透明
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))', // 反光效果
  }));

  // 图片容器样式
  const itemStyle = computed(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
  }));

  // 定时切换图片
  const switchInterval = 1000; // 切换时间间隔（毫秒）

  onMounted(() => {
    setInterval(() => {
      if(images.length <= 1) {
        currentIndex.value = 0  
      }
      else {
        currentIndex.value = (currentIndex.value + 1) % images.length
      }
    }, switchInterval);
  });
</script>

<style scoped>
.image-slider {
  position: relative;
  width: 100%;
  height: 500px; /* 根据需要调整高度 */
  overflow: hidden;
}

.slider-item {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider-item.active {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>