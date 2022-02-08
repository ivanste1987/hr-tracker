import Vue from "vue";
import VueRouter from "vue-router";
/**Vuews pages */
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
/**Components */
import TheGroups from "../components/groups/TheGroups.vue";
import TheDashboard from "../components/dashboard/TheDashboard.vue";
import TheStatistic from "../components/statistic/TheStatistic.vue";
import ThePeople from "../components/people/ThePeople.vue";
import TheChat from "../components/chat/TheChat.vue";
import TheGroupDescript from "../components/groups/TheGroupDescript.vue";
import TaskDrawer from "../components/tasks/TaskDrawer.vue";
import Inbox from "../components/chat/Inbox.vue";
import Sent from "../components/chat/Sent.vue";
import NewMessage from "../components/chat/NewMessage.vue";

//import store
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      require: true,
    },
    children: [
      { path: "/dashboard", name: "dashboard", component: TheDashboard },
      { path: "/dashboard/groups", name: "Groups", component: TheGroups },
      {
        path: "/dashboard/groups/:group_id",
        name: "Group",
        component: TheGroupDescript,
      },
      {
        path: "/dashboard/groups/:group_id/task/:task_id",
        name: "Group Tasks",
        component: TaskDrawer,
        props: true,
      },
      {
        path: "/dashboard/statistic",
        name: "statistic",
        component: TheStatistic,
      },
      { path: "/dashboard/people", name: "people", component: ThePeople },
      {
        path: "/dashboard/chat",
        component: TheChat,
        children: [
          { path: "/dashboard/chat", name: "inbox", component: Inbox },
          { path: "/dashboard/chat/sent", name: "sent", component: Sent },
          { path: "/dashboard/chat/new", name: "new", component: NewMessage },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  console.log(to)
  if (to.meta.require) {
    if (store.getters.GetLogin) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
