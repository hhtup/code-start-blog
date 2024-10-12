import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AboutView from "@/views/AboutView.vue";
import ArticleEditor from "@/views/editor/ArticleEditor.vue";
import CodeEditor from "@/views/editor/CodeEditor.vue";
import DraftEditor from "@/views/editor/DraftEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/editor",
      children: [
        {
          path: "article",
          name: "articleEditor",
          component: ArticleEditor,
        },
        {
          path: "code",
          name: "codeEditor",
          component: CodeEditor,
        },
        {
          path: "drafts",
          name: "draftEditor",
          component: DraftEditor,
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
