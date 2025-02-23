<template>
    <el-carousel :interval="3000" type="card" class="mainBody">
      <el-carousel-item v-for="(item,index) in items" @click="goToLink(item)" :key="index">
        <img :src="item.src" class="carousel-image" >
      </el-carousel-item>
    </el-carousel>
</template>

<script setup>
    const items = [
        {
            src:"src/assets/cardImage/1.png",
            url:"../html/CO2Page.html"
        },
        {
            src:"src/assets/cardImage/2.png",
            url:"../html/CO2Page.html"
        },
        {
            src:"src/assets/cardImage/3.png",
            url:"../html/CO2Page.html"
        }
    ]

    const goToLink = (item) => {
        // console.log("url = " + item.url)
        // console.log("src = " + item.src)
        window.open(item.url, "_blank")
    }
</script>
  
  <style scoped>
    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    .el-carousel {
      overflow: visible; /* 或不设置，默认为 auto */
    }
  
  .el-carousel__item {
    height: 780px;
    background-color: transparent;
    border-color: #333;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 10px;
  }

  .mainBody {
    height: "800px";
  }
  </style>