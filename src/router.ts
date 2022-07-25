import { createRouter, createWebHistory } from "vue-router";
import UserSettings from "./views/UserSettings.vue";
import UserEmailSubscription from "./views/UserEmailSubscription.vue";
import UserProfile from "./views/UserProfile.vue";
import UserProfilePreview from "./views/UserProfilePreview.vue";
import userPost from "./views/userPost.vue";
import NotFound from "./views/NotFound.vue";
import About from "./views/About.vue";
import ContactInfo from "./views/contactInfo.vue";

export const router = createRouter({
  // router.push(`user/${username}`),
  history: createWebHistory(),
  // routes: [
  //   {
  //     path: "/settings",
  //     name:"settings",
  //     // beforeEnter:["emails"],
  //     component: UserSettings,
  //     children: [
  //       {
  //         path: "emails",
  //         component: UserEmailSubscription,
  //       },
  //       {
  //         path: "profile",
  //         components: {
  //           path: UserProfile,
  //           helper: UserProfilePreview,
  //         },
  //       },
  //     ],
  //   },
  // ],
  // Router.push({path: '/pathmatch', component: NotFound}),
  routes: [
    // {
    //   path: "/user/eduardo/post/1",
    //   components: {
    //     default: NotFound,
    //     a: About,
    //     b: ContactInfo,
    //   },
    // },
    // {
    //   path: "/user/eduardo/post/20",
    //   components: {
    //     default: ContactInfo,
    //     a: About,
    //     b: NotFound,
    //   },
    // },
    {
      path: "/user/:username/post/:posts",
      component: userPost,
      name: "user",
      // props: (route) => ({ query: route.query.q }),
    },
    // { path: "/:pathMatch", name: "NotFound", component: NotFound },
    // {
    //   path: "/about",
    //   name: "About",
    //   component: About,
    //   sensitive: true,
    //   children: [
    //     { path: "contactInfo", name: "contactInfo", component: ContactInfo },
    //   ],
    // },
  ],
  // strict: true,
});
// router.addRoute({ path: '/about', component: About })
router.beforeEach((to, from) => {});
