import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/views/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
