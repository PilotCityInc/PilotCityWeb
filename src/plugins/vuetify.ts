import Vue from "vue"
import Vuetify, {VTextField} from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify,{
    components:{
        VTextField
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi'  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        themes: {
            light: {
                primary: "#4682b4",
                secondary: "#b0bec5",
                accent: "#8c9eff",
                error: "#b71c1c"
            }
        }
    }
})