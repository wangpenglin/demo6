<template>
  <view class="login-content">
    <view class="con">
      <view class="item">
        <nut-form>
          <nut-form-item>
            <nut-input
              label="userName"
              v-model="userName"
              placeholder="please input account"
              type="text"
            ></nut-input>
          </nut-form-item>
          <nut-form-item>
            <nut-input
              label="password"
              v-model="password"
              :type="isShow ? 'text' : 'password'"
              placeholder="please input password"
              :right-icon="isShow ? 'eye' : 'marshalling'"
              @click-right-icon="click_right"
            ></nut-input>
          </nut-form-item>
          <nut-cell-group>
            <nut-cell>
              <nut-button
                type="primary"
                style="width: 100%"
                @click="account_login()"
                >login</nut-button
              >
            </nut-cell>
            <nut-cell>
              <nut-button
                v-acl="'can:reg'"
                style="width: 100%"
                @click="account_register()"
                >register</nut-button
              >
            </nut-cell>
          </nut-cell-group>
        </nut-form>
        <nut-toast
          :msg="msg"
          :visible="show"
          :type="text"
          @closed="onClosed"
          cover="false"
        ></nut-toast>
      </view>
    </view>
  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import img_star from "../../../assets/image/star.png";
import Taro, { ENV_TYPE } from "@tarojs/taro";
import { WITH_CTX } from "@vue/compiler-core";

export default {
  name: "Login",
  components: {},
  setup() {
    const state = reactive({
      userName: "",
      password: "",
      isShow: 0,
      show: false,
      msg: "",
    });
    const account_login = () => {
      console.log(state.userName + "--" + state.password);
      console.log("login....");
      state.msg = "logined";
      state.show = true;
      //localStorage.setItem('logined', true);
      //localStorage.setItem('lastLoginTime', new Date());
      Taro.setStorageSync("logined", true);
      Taro.setStorageSync("lastLoginTime", new Date());

      if (Taro.getEnv() == ENV_TYPE.WEB) {
        Taro.redirectTo({ url: "/pages/index/index" });
        return;
      }

      Taro.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            console.log(res);
            Taro.redirectTo({ url: "/pages/index/index" });
            /*
      Taro.request({
        url: 'https://test.com/onLogin',
        data: {
          code: res.code
        }
      })
      */
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        },
      });
    };

    const onClosed = () => {
      state.show = false;
    };

    const click_right = () => {
      state.isShow = state.isShow == 1 ? 0 : 1;
      console.log(state.isShow);
    };

    const account_register = () => {
      console.log("register");
    };

    return {
      ...toRefs(state),
      account_login,
      account_register,
      click_right,
      onClosed,
    };
  },
};
</script>

<style lang="scss" scoped>
.taro_page {
  overflow-y: hidden;
}
.login-content .con {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item {
  display: inline-block;
}
</style>

