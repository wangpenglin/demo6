import { createApp } from 'vue'
import { Button, Toast, Layout, Row,Col, Grid,GridItem , Input, Icon, Image } from '@nutui/nutui-taro';
import { List, Tabbar, TabbarItem, Elevator } from '@nutui/nutui-taro';
import './app.scss'
import { Navbar } from '@nutui/nutui-taro';
import { FormItem, Form,Cell, CellGroup, Dialog, Popup, OverLay } from '@nutui/nutui-taro';
import registerAcl from './common/acl';
import registerI18n from './common/register.i18n';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Layout).use(Row).use(Col).use(Grid).use(GridItem)
App.use(Input)
App.use(Icon)
App.use(List)
App.use(Tabbar)
App.use(TabbarItem)
App.use(Image)
App.use(Navbar)
App.use(Elevator)
App.use(FormItem)
App.use(Form)
App.use(Cell)
App.use(CellGroup)
App.use(Dialog)
App.use(Popup)
App.use(OverLay)

registerAcl(App);
registerI18n(App);

export default App
