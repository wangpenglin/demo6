<template>
  <header-component></header-component>
  <view class="content index" >
    <nut-list :height="50" :list-data="products" @scroll-bottom="scrollBottom" style="height: calc(100vh - 120px);">
      <template v-slot="{ item }" >
        <nut-row>
          <div class="list-item">
            <nut-col :span="4">
              <img src="/assets/image/star.png" width="50px" hight="50px"/>
              </nut-col>
            <nut-col :span="16">
              <div style="display:flex;">{{ item.code }}</div>
              <div style="display:flex; font-size: 0.5em;">
                {{ item.code + "something...." }}
              </div>
            </nut-col>
            <nut-col :span="4">
              <div style="font-size: 0.5em">{{ item.name }}</div>
            </nut-col>
          </div>
        </nut-row>
      </template>
    </nut-list>
  </view>

  <view class="footer">
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="home" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="product" icon="order"></nut-tabbar-item>
      <nut-tabbar-item tab-title="refresh" icon="refresh"></nut-tabbar-item>
      <nut-tabbar-item tab-title="my" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import img_star from "../../assets/image/star.png";
import Taro from '@tarojs/taro';
import HeaderComponent from '../common/header.component.vue';
//import { useI18n } from "vue-i18n";

export default {
  name: "Index",
  components: {HeaderComponent},
  setup() {
    const state = reactive({
      msg: "This is one test.",
      msg2: "你成功了～",
      type: "text",
      show: false,
      cover: false,
      s: "",
      products: new Array(10).fill(0).map((_, index) => {
        return { name: "name " + index, code: "code " + index };
      }),
      star: img_star,
    });
    
    /*
    const {lang, t} = useI18n();
    
    let lang = ref(t('message.s_lang'));

    const changeLang = () => {
      lang.value = 'cn';
      localStorage.setItem('lang', 'cn');
    }
    */

    const tabSwitch = (_, index) => {

      if (index == 1) {
        Taro.navigateTo({url: '/product/pages/index?code=${index}'});
      }
      if (index == 3) {
        Taro.navigateTo({url: '/user/pages/index'});
        //state.showLogin = true;
      }
    };

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const homeClick = () => {
      state.msg = "home click";
    };
    const scrollBottom = () => {
      let arr = new Array(5).fill(0);
      //const len = state.products.length;
      state.products = state.products.concat(
        arr.map((_, index) => {
          return { name: "dddd " + index, code: "code " + index };
        })
      );
    };

    onMounted(() => {
      state.products.push({
        name: "aaa",
        code: "code1",
      });
    });

    const clearS = () => {
      state.s = "";
    };

    return {
      ...toRefs(state),
      handleClick,
      homeClick,
      clearS,
      scrollBottom,
      tabSwitch,
      //changeLang,
      //lang,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
}
.footer {
  height: 70px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.wrapper {
  position: relative;
  height: 0;
  padding-bottom: 80%;
  box-sizing: border-box;
}
.box1 {
  position: absolute;
  box-sizing: border-box;
  left: 10%;
  height: 100%;
  width: 80%;
  border: 1px solid;
  display: flex;
  justify-content: center;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  /* background-color: #f4a8b6; */
  border-radius: 10px;
}
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 120rpx);
  flex-direction: column;
  overflow: hidden;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #afa9a9;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
