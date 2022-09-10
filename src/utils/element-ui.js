import Vue from "vue"
import { Button, Select, MessageBox, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Select)
Vue.use(MessageBox)
Vue.use(Message)
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
