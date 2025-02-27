<template>
    <div class="service-portal">
      <header class="header">
        <div class="logo">清风e路</div>
        <div class="stats">
          <div class="stat-item">
            <span class="icon">📋</span>
            <span class="label">事项办理</span>
            <span class="count">0</span>
          </div>
          <div class="stat-item">
            <span class="icon">🔗</span>
            <span class="label">网上预约</span>
            <span class="count">3</span>
          </div>
          <div class="stat-item">
            <span class="icon">⭐</span>
            <span class="label">好差评</span>
            <span class="count">45425</span>
          </div>
        </div>
        <div class="Button">
          <el-button type="success" @click="goToHtml(1)">图表可视化</el-button>
          <el-button type="success" @click="goToHtml(2)">地图可视化</el-button>
        </div>
      </header>
  
      <main class="main-content">
        <section class="hot-services">
          <div>
            <img class="imageColum" @click="transformImage" :src="imageList[imageIndex].src">
          </div>
        </section>
  
        <section class="public-services">
          <div>
            <img class="imageColumNew" :src="gifSource1">
            <img class="imageColumNew" :src="gifSource2">
            <div class="imageAssumption">
              <p class="assumptionTitle">总结:</p>
              <div><div><p>{{ assumption }}</p></div></div>
            </div>
          </div>
        </section>
        <section class="public-services">
          <p class="discriptionTitle">无植被保护的河床</p>
          <div class="imageDiscription">
            <div><p>{{ discription1 }}</p></div>
          </div>
          <p class="discriptionTitle">有植被保护的河床</p>
          <div class="imageDiscription">
            <div><p>{{ discription2 }}</p></div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
    import '../css/clumn.css'
    import { ref } from 'vue';

    const imageList = [
      {src:'src/assets/columImage/CO21.jpg'},
      {src:'src/assets/columImage/CO22.jpg'},
      {src:'src/assets/columImage/CO23.jpg'}
    ]

    let imageIndex = ref(0)
    const gifSource1 = 'src/assets/gifImage/1.gif'
    const gifSource2 = 'src/assets/gifImage/2.gif'
    const htmlUrl1 = '../html/CO2Emission.html'
    const htmlUrl2 = '../html/trajectory_visualization1.html'

    const discription1 = "无植被护堤的模拟图没有植被护堤时，水流对河床的侵蚀作用更为明显。相比于有植被时，红色和黄色表示的较高河床区域减少，蓝色区域增多且分布更广，说明河床高度降低的范围更大、程度更深，因为缺少植被的保护，水流直接冲刷河床，导致更多的沉积物被带走，河床出现更显著的下切现象，深度变化同样在-0.1到-1.8米，但低高度区域占比更大。"
    const discription2 = "有植被护堤的模拟图植被护堤有助于稳固河床土壤，减少水流对河床的侵蚀。如图红色到黄色区域相对较多，表明河床高度在部分区域有所升高（0到0.8米左右 ），因为植被阻挡了部分沉积物，使其得以堆积。而蓝色区域表示河床高度降低的区域，相对来说深度变化在-0.1到-1.8米之间，说明植被在一定程度上减轻了河床过度下切的情况。"
    const assumption = "植被护堤与传统防波堤相比，优势显著。在节能减排上，植被护堤借助自然植被，无需大量工业生产的建材，减少了生产运输中的能耗与碳排放；其自身还能吸收二氧化碳，释放氧气。同时，植被可有效缓冲水流，减少对堤岸的侵蚀，维护成本低。而传统防波堤多由混凝土、钢材等建成，不仅生产过程高耗能、高污染，且生硬结构无法自我修复，一旦受损维修复杂。但植被护堤也有劣势，初期植被生长缓慢，防护能力弱，且易受恶劣环境和病虫害影响，在极端海况下防护效果可能不如坚固的传统防波堤。而长三角地区包含众多河口湿地，如长江河口湿地 ，水流速度相对较缓，且生态环境要求高；同时，该地区也有不少滨海旅游度假区，这些区域对景观生态要求高，适合采用植被护堤，发挥其节能减排、生态环保和景观营造的优势，促进生物多样性发展。但长三角也有一些沿海区域海况较为复杂，海浪和水流条件多变，可能不完全适用植被护堤，可以采用植被护堤与防波堤相结合的方式进行。"

    const transformImage = () => {
      imageIndex.value = (imageIndex.value + 1) % imageList.length
      console.log('imageIndex = ' + imageIndex.value)
    }
    const goToHtml = (page) => {
      if(page == 1) {
        window.open(htmlUrl1, "_blank")
      }
      else if(page ==2) {
        window.open(htmlUrl2, "_blank")
      }
    }
  </script>