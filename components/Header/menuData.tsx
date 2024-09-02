import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Product",
    newTab: false,
    path: "/product",
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Blog Grid",
    //     newTab: false,
    //     path: "/blog",
    //   },
    //   {
    //     id: 34,
    //     title: "Sign In",
    //     newTab: false,
    //     path: "/auth/signin",
    //   },
    //   {
    //     id: 35,
    //     title: "Sign Up",
    //     newTab: false,
    //     path: "/auth/signup",
    //   },
    //   {
    //     id: 35,
    //     title: "Docs",
    //     newTab: false,
    //     path: "/docs",
    //   },
    //   {
    //     id: 35.1,
    //     title: "Support",
    //     newTab: false,
    //     path: "/support",
    //   },
    //   {
    //     id: 36,
    //     title: "404",
    //     newTab: false,
    //     path: "/error",
    //   },
    // ],
  },
  {
    id: 2,
    title: "Pricing",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 2.1,
    title: "Integrations",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Customers",
    newTab: false,
    path: "/docs",
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 3,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },

  {
    id: 4,
    title: "Resources",
    newTab: false,
    path: "/resources",
  },
];

export default menuData;
