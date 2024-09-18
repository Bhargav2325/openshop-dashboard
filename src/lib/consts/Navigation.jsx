import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineTable,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";


export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/product",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/order",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customer",
    icon: <HiOutlineUser />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transaction",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/message",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "tables",
    label: "Tables",
    path: "/table",
    icon: <HiOutlineTable />,
  },
];
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/setting",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
