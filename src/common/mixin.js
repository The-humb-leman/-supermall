import { debounce } from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    data(){
        return {
            itemImgListener: null,
            newRefresh: null
        }
    },
    mounted(){
        this.newRefresh = debounce(this.$refs.scroll.refresh,100)
        this.itemImgListener = () =>{
          this.newRefresh()
        }
        this.$bus.$on('imageLoad',this.itemImgListener)
  },
}
 export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBacktop: false,
    }
  },
  methods:{

    backClick() {
      this.$refs.scroll.scrollTo(0, 0,300);
    },
    listenShoBackTop(position) {
      this.isShowBacktop = (-position.y) > 2000
    }
    }
 }