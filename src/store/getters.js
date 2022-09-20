export default {
    cartLength(state) {
      return state.cartList.length
    },
    // cartLength(state) {
    //     return this.$store.state.cartLength.cartLength
    //   }
    cartList(state) {
            return state.cartList
          }
}