import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/global.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/theme/index.css'
import 'element-plus/dist/index.css'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import prismjs from 'prismjs';

import App from './App.vue'
import router from './router'
const app = createApp(App)

VueMarkdownEditor.use(vuepressTheme, {
    prismjs,
    extend(md:any) {
        // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
        // md.set(option).use(plugin);
        md.options = {
            html: true, // 允许使用html标签
            xhtmlOut: false, // 使用/xhtml输出
            breaks: false, // 转换为<br>标签
            langPrefix: 'language-', // 代码块语言前缀
            linkify: true, // 自动把email和url转换为链接
            typographer: false, // 启用排字功能
        };
    },
});

app.use(VueMarkdownEditor);
app.use(createPinia())
app.use(router)

app.mount('#app')
