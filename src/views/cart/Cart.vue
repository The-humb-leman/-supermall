<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar.vue';
import { mapGetters } from 'vuex';
export default {
    name:'Cart',
    components: { 
    NavBar,
    CartList,
    CartBottomBar
   },
   computed:{
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length:'cartLength'
    })
   }
}
</script>

<style scoped>
  .cart {
        height: 100vh;
        /* position: relative; */
    }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    /* font-weight: 700px; */
  }
</style>