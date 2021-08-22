import Sidebar from './SideBar.vue'
import SidebarItem from './SidebarItem.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  displaySidebar(value) {
    this.showSidebar = value
  },
}

const SidebarPlugin = {
  install(Vue, options) {
    if (options && options.sidebarLinks) {
      SidebarStore.sidebarLinks = options.sidebarLinks
    }
    const app = new Vue({
      data: {
        sidebarStore: SidebarStore,
      },
    })
    Vue.prototype.$sidebar = app.sidebarStore
    Vue.component('SideBar', Sidebar)
    Vue.component('SidebarItem', SidebarItem)
  },
}

export default SidebarPlugin
