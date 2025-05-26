<template>
  <div class="body">
    <div class="common-layout01">
      <el-container>
        <div>
          <el-image class="Homeicon" src="src/assets/logo/logo.png"></el-image>
        </div>
        <el-header class="header1">
          <div class="title-container">
            <h1 class="title"><strong>清风e路,碳享出行</strong></h1>
            <h4 class="hint">长三角交通碳减排数字赋能平台</h4>
          </div>
          
          <!-- 新增用户信息框 -->
          <div class="user-info-box">
            <div class="user-info-top">
              <el-avatar class="user-avatar" :size="40" src="src/assets/user-avatar.png" />
              <div class="user-stats">
                <div class="carbon-points">碳积分: {{ carbonPoints }}</div>
                <div class="elapsed-time">时间: {{ elapsedTime }}</div>
              </div>
            </div>
            <el-button class="signin-btn" type="primary" @click="showSigninDialog = true">签到</el-button>
            <el-button class="signin-btn" type="primary" @click="openMall()">商城</el-button>
          </div>
        </el-header>

        <br>

        <el-main>
          <h4 class="discription1">猜你喜欢</h4>
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
    <h4 class="discription2">快来解锁你的出行助手吧</h4>
    <div class="guidedTour">
      <header class="guidedTourHeader">
        <div class="guidedTourButton">
          <el-button type="success" @click="TransforClumn('交通设施可视化')">交通设施可视化</el-button>
          <el-button type="success" @click="TransforClumn('碳信息最佳路径')">碳信息最佳路径</el-button>
          <el-button type="success" @click="TransforClumn('碳排放时间分布')">碳排放时间分布</el-button>
          <el-button type="success" @click="TransforClumn('碳排放时间变化')">碳排放时间变化</el-button>
          <el-button type="success" @click="TransforClumn('xLSTM预测')">xLSTM预测</el-button>
        </div>
        <div class="guidedTourLogo">{{ logo }}</div>
      </header>
      <iframe class="guidedTourIframe" id="myFrame" :src="src" frameboder="0"></iframe>
    </div>

    <!-- 签到弹窗 -->
    <el-dialog 
      v-model="showSigninDialog" 
      title="签到"
      width="50%"
      class="signin-dialog"
      :show-close="false">
      <!-- 添加wrapper容器 -->
      <div class="dialog-root-container">
        <iframe src="html/carbon_credits/sign_in.html"></iframe>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import imgBox from '../components/imgBox.vue';
import '@/css/home.css'
import { homeStore } from '../store/homeStore';
import mainImageBox from '../components/mainImgBox.vue'
import clumn from '../components/clumn.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// 用户信息相关状态
const carbonPoints = ref(1500);
const elapsedTime = ref('00:00:00');
const showSigninDialog = ref(false);
let timer = null;

// 原有业务逻辑
const src=ref("html/try/Guided_tour_of_transportation_facilities.html")
const logo = ref("交通设施可视化")
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
    title:"长三角交通碳排放空间聚类",
    discription:""
  },
  {
    src:'src/assets/dataModelImage/03.png',
    title:"不同交通方式碳排放可视化",
    discription:""
  }]

const store = homeStore()

const TransformPage = (page) => {
  store.setType(page)
  console.log('视图切换调试：' + store.type)
}

const TransforClumn = (target) => {
  if(target == "交通设施可视化") {
    src.value = "html/try/Guided_tour_of_transportation_facilities.html"
    logo.value = target
  }
  else if(target == "碳排放时间分布") {
    src.value = "html/try/display1.html"
    logo.value = target
  }
  else if(target == "碳排放时间变化") {
    src.value = "html/try/display2.html"
    logo.value = target
  }
  else if(target == "xLSTM预测") {
    src.value="html/LSTM_introduction.html"
    logo.value = target
  }
  else {
    src.value = "html/try/Optimal_path.html"
    logo.value = target
  }
}

// 新增计时器逻辑
onMounted(() => {
  const startTime = new Date();
  timer = setInterval(() => {
    const now = new Date();
    const diff = now - startTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    elapsedTime.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});


const openMall = () => {
  window.open("../html/carbon_credits/carbon_credits.html", "_blank")
}
</script>