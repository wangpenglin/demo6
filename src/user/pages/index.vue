<template>
  <header-component title="search user something..." @add-click="addClick"></header-component>  
  <nut-cell title="login" desc="login" is-link @click="pop_login"> </nut-cell>
  <nut-cell title="language" desc="language" is-link> </nut-cell>
  <nut-cell title="theme" desc="theme" is-link @click="change_theme"> </nut-cell>
  <!--
  <view id="myDialog" class="myDialog">
    <nut-dialog
      teleport="myDialog"
      :visible="showLogin"
      noCancelBtn
      noOkBtn
      :close-on-click-overlay="true"
      @closed="closeLogin"
    >
      <template v-slot>
        <login></login>
      </template>
    </nut-dialog>
  </view>
  -->
</template>
  
  <script>
import { onMounted, reactive, toRefs,createVNode } from "vue";
import Taro from "@tarojs/taro";
import HeaderComponent from '../../pages/common/header.component.vue';
import {changeTheme} from '../../common/change.theme';
  
export default {
  name: "settingIndex",
  components: {HeaderComponent},
  setup() {
    const {themeData, handleChangeThemes} = changeTheme();

    const state = reactive({
      msg: "this is product list. ",
      showLogin: false,
      //loginContent: createVNode(Login, {}, ''),
    });

    const clickBack = () => {
      console.log("clickBack");
      Taro.navigateBack();
    };

    const closeLogin = () => {
      state.showLogin = false;
    }
    const pop_login =() => {
        //state.showLogin = true;
        console.log('login...');
        Taro.navigateTo({url:'/user/pages/login'});
    }

    const clickRight = () => {
      console.log("clickRight");
    };

    const clickTitle = () => {
      console.log("clickTitle");
    };

    const addClick = () => {
        console.log('add click in user index...');
    }

    const onMounted = () => {
      console.log("onMounted");
      console.log(Taro.getCurrentInstance().router.params.code);
    };

    const change_theme = () => {
      handleChangeThemes();
    }

    return {
      ...toRefs(state),
      clickBack,
      clickRight,
      clickTitle,
      closeLogin,
      pop_login,
      addClick,
      change_theme,
    };
  },
};
</script>
  
<style lang="scss" scoped>
.list-content {
  height: calc(100vh - 100px);
}
.flex-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
/*
.myDialog {
  :deep(.nut-dialog) {
    width: 400px;
    height: 300px;
  }
  :deep(.nut-dialog__content) {
    white-space: normal;
  }
  :deep(.nut-cell) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
*/
</style>
  