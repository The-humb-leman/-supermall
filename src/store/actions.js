// import { reject, resolve } from 'core-js/fn/promise'
import {
  ADD_COUNTER,
  ADD_To_CART
} from './mutation-types'

export default {
  // payload新添加的商品
  // 数组常用的方法有哪些？push/pop/unshift/shift/sort/reverse/map/filter/reduce/join/
  // let oldProduct = null;
  // for(let item of state.cartList){
  //     if (item.iid === payload.iid){
  //         oldProduct = item;
  //     }
  // }
  addCart(context, payload) {
    // 1.查找之前数组中是否有该商品
    return new Promise((resolve,reject) =>{
      
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    // 2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('当前商品数量+1')
    } else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(ADD_To_CART,payload)
      resolve('添加了新的商品')
    }
    })
  }
}