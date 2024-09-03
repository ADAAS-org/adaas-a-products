import { A_PRODUCTS_Context } from "@adaas/a-sdk/definitions/A_PRODUCTS_Context.def";
import { A_PRODUCTS_SERVER_COMMANDS__ProductAPI } from "./product/A_PRODUCTS_Product.api";
import { A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI } from "./product/settings/A_PRODUCTS_ProductSettings.api";
import { A_PRODUCTS_SERVER_COMMANDS__ProductProfileAPI } from "./product/profile/A_PRODUCTS_ProductProfile.api";
import { A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI } from "./app/profile/A_PRODUCTS_AppProfile.api";
import { A_PRODUCTS_SERVER_COMMANDS__AppSettingsAPI } from "./app/settings/A_PRODUCTS_AppSettings.api";
import { A_PRODUCTS_SERVER_COMMANDS__AppAPI } from "./app/A_PRODUCTS_App.api";
import { A_PRODUCTS_SERVER_COMMANDS__WidgetAPI } from "./widget/A_PRODUCTS_Widget.api";
import { A_PRODUCTS_SERVER_COMMANDS__PageAPI } from "./page/A_PRODUCTS_Page.api";


export const App = new A_PRODUCTS_SERVER_COMMANDS__AppAPI(A_PRODUCTS_Context);
export const AppSettings = new A_PRODUCTS_SERVER_COMMANDS__AppSettingsAPI(A_PRODUCTS_Context);
export const AppProfile = new A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI(A_PRODUCTS_Context);

export const Product = new A_PRODUCTS_SERVER_COMMANDS__ProductAPI(A_PRODUCTS_Context);
export const ProductSettings = new A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI(A_PRODUCTS_Context);
export const ProductProfile = new A_PRODUCTS_SERVER_COMMANDS__ProductProfileAPI(A_PRODUCTS_Context);


export const Widget = new A_PRODUCTS_SERVER_COMMANDS__WidgetAPI(A_PRODUCTS_Context);

export const Page = new A_PRODUCTS_SERVER_COMMANDS__PageAPI(A_PRODUCTS_Context);
