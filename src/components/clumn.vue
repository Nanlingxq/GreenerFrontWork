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
        <div class="login">
          <span @click="goLogin">登录/注册</span>
        </div>
      </header>
  
      <main class="main-content">
        <section class="hot-services">
          <div>
            <img class="imageColum" :src="imageList[0].src">
          </div>
        </section>
  
        <section class="public-services">
          <div>
            <img class="imageColum" :src="imageList[1].src">
          </div>
        </section>
  
        <section class="featured-services">
          <div>
            <img class="imageColum" :src="imageList[2].src">
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
    import '../css/clumn.css'
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const goLogin = () => {
      router.push({name:'login'})
    }

    const imageList = [
      {src:'src/assets/columImage/CO21.jpg'},
      {src:'src/assets/columImage/CO22.jpg'},
      {src:'src/assets/columImage/CO23.jpg'}
    ]
  </script>