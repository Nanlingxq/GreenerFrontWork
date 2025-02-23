<template>
  <div class="body">
    <div class="common-layout01">
      <el-container>
        <div>
          <el-image class="icon" src="src/assets/logo/logo.png"></el-image>
        </div>
        <el-header class="header1">
          <h1 class="title"><strong>清风e路,碳享出行</strong></h1>
          <h4 class="hint">长三角地区交通碳平台</h4>
        </el-header>
        
        <br>

        <el-main>
          <h4 class="discription1">小组研究成果图示</h4>
          <el-container class="bodyContainer">
            <el-aside style="width: 20%; height: 100%;">
                <el-header class="imageContainer">
                  <imgBox class="imageBlock" :image="smallImage[0]" @click="TransformPage(0)" />
                </el-header>
                <br>
                <br>
                <br>
                <el-header class="imageContainer">
                  <imgBox class="imageBlock" :image="smallImage[1]" @click="TransformPage(1)" />
                </el-header>
            </el-aside>
            <el-main class="mainImage">
              <!-- <el-image clsss="mainImage" src="src/assets//guideImage/example.jpg" /> -->
              <mainImageBox />
            </el-main>
            <el-aside style="width: 20%; height: 100%;">
                <el-header class="imageContainer">
                  <imgBox class="imageBlock" :image="smallImage[2]" @click="TransformPage(2)" />
                </el-header>
                <br>
                <br>
                <br>
                <el-header class="imageContainer">
                  <imgBox class="imageBlock" :image="smallImage[3]" @click="TransformPage(3)" />
                </el-header>
            </el-aside>
          </el-container>
          <h4 class="discription2">政策与知识栏目</h4>
        </el-main>
        <el-main class="carousel">
          <Carousel />
        </el-main>
      </el-container>
    </div>
    <div class="common-layout02">
      <el-container class="colum">
        <clumn />
      </el-container>
    </div>
  </div>
</template>

<script setup>
  import Carousel from '../components/Carousel.vue';
  import imgBox from '../components/imgBox.vue';
  import '@/css/home.css'
  import { homeStore } from '../store/homeStore';
  import mainImageBox from '../components/mainImgBox.vue'
  import clumn from '../components/clumn.vue';

  const smallImage = [{
      src:'src/assets/dataModelImage/00.png',
      title:"长三角交通碳排放散点图",
      discription:""
    },
    {
      src:'src/assets/dataModelImage/01.png',
      title:"长三角交通碳排放空间分布",
      discription:""
    },
    {
      src:'src/assets/dataModelImage/02.jpg',
      title:"长三角交通碳排放空间重点分布",
      discription:""
    },
    {
      src:'src/assets/dataModelImage/03.png',
      title:"不同交通方式出行雷达图",
      discription:""
    }]
  
  const store = homeStore()

  const TransformPage = (page) => {
    //这里进行主要视图切换的逻辑
    
    store.setType(page)
    console.log('视图切换调试：' + store.type)
  }
</script>