<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <div :data="sidebarBackground" class="sidebar">
      <div ref="sidebarScrollArea" class="sidebar-wrapper">
        <div class="logo">
          <a href="http://www.creative-tim.com" class="simple-text logo-mini">
            <img :src="logo" alt="app-logo" />
          </a>
          <a href="http://www.creative-tim.com" class="simple-text logo-normal">
            {{ title }}
          </a>
        </div>
        <slot></slot>
        <el-menu
          default-active="1-3-1"
          class="el-menu-vertical-demo"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1" @click="handleMenuClick">
              <a href="/" aria-current="page">Dashboard </a>
            </el-menu-item>
            <el-menu-item index="1-2" @click="handleMenuClick">
              <a href="/icons" aria-current="page">Icons</a>
            </el-menu-item>
            <el-submenu index="1-3">
              <template slot="title">item four</template>
              <el-menu-item index="1-3-1" @click="handleMenuClick">
                <span href="/profile" aria-current="page">User Profile</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2" @click="handleMenuClick">
            <a href="/trade/history" aria-current="page">
              <i class="el-icon-menu"></i>
              <span>거래내역</span>
            </a>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4" @click="handleMenuClick">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

      <div :class="{ content: !isFullScreenRoute }" @click="toggleSidebar">
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <nuxt></nuxt>
        </zoom-center-transition>
      </div>
      <content-footer v-if="!isFullScreenRoute"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions'
import { Menu, Submenu, MenuItem, MenuItemGroup, Row, Col } from 'element-ui'
import DashboardNavbar from '@/components/Layout/DashboardNavbar.vue'
import ContentFooter from '@/components/Layout/ContentFooter.vue'
import DashboardContent from '@/components/Layout/Content.vue'
import SidebarItem from '~/components/SidebarPlugin/SidebarItem.vue'

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`)
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className)
    }, 100)
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    SlideYDownTransition,
    ZoomCenterTransition,
    SidebarItem,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  props: {
    title: {
      type: String,
      default: 'Creative Tim',
      description: 'Sidebar title',
    },
    shortTitle: {
      type: String,
      default: 'CT',
      description: 'Sidebar short title',
    },
    logo: {
      type: String,
      default:
        'http://demos.creative-tim.com/nuxt-black-dashboard-pro/img/icon-nuxt.svg',
      description: 'Sidebar app logo',
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: (value) => {
        const acceptedValues = ['', 'vue', 'blue', 'green', 'primary']
        return acceptedValues.includes(value)
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)',
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these.",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        'Whether sidebar should autoclose on mobile when clicking an item',
    },
  },
  data() {
    return {
      sidebarBackground: 'primary', // vue|blue|orange|green|red|primary
    }
  },
  computed: {
    isFullScreenRoute() {
      return this.$route.path === '/maps/full-screen'
    },
  },
  mounted() {
    this.initScrollbar()
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    initScrollbar() {
      const docClasses = document.body.classList
      const isWindows = navigator.platform.startsWith('Win')
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar('sidebar')
        initScrollbar('main-panel')
        initScrollbar('sidebar-wrapper')

        docClasses.add('perfect-scrollbar-on')
      } else {
        docClasses.add('perfect-scrollbar-off')
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleMenuClick(menuItem) {
      console.log(menuItem.index)
      //  this.$router.push(`/Hello/${menuItem.index}`)
    },
  },
}
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}

a {
}
</style>
