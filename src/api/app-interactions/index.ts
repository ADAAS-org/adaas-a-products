import { A_PRODUCTS_Context } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS__ProductAPI } from "./product/A_PRODUCTS_Product.api";
import { A_PRODUCTS_APP_INTERACTIONS__ProductSettingsAPI } from "./product/settings/A_PRODUCTS_ProductSettings.api";
import { A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI } from "./product/profile/A_PRODUCTS_ProductProfile.api";
import { A_PRODUCTS_APP_INTERACTIONS__AppProfileAPI } from "./app/profile/A_PRODUCTS_AppProfile.api";
import { A_PRODUCTS_APP_INTERACTIONS__AppSettingsAPI } from "./app/settings/A_PRODUCTS_AppSettings.api";
import { A_PRODUCTS_APP_INTERACTIONS__AppAPI } from "./app/A_PRODUCTS_App.api";
import { A_PRODUCTS_APP_INTERACTIONS__PageSettingsAPI } from "./page/settings/A_PRODUCTS_PageSettings.api";
import { A_PRODUCTS_APP_INTERACTIONS__WidgetSettingsAPI } from "./widget/settings/A_PRODUCTS_WidgetSettings.api";
import { A_PRODUCTS_APP_INTERACTIONS__WidgetAPI } from "./widget/A_PRODUCTS_Widget.api";
import { A_PRODUCTS_APP_INTERACTIONS__PageAPI } from "./page/A_PRODUCTS_Page.api";
import { A_PRODUCTS_APP_INTERACTIONS__AppWidgetAPI } from "./app/widget/A_PRODUCTS_AppWidget.api";
import { A_PRODUCTS_APP_INTERACTIONS__AppPageAPI } from "./app/page/A_PRODUCTS_AppPage.api";


export const App = new A_PRODUCTS_APP_INTERACTIONS__AppAPI(A_PRODUCTS_Context);
export const AppSettings = new A_PRODUCTS_APP_INTERACTIONS__AppSettingsAPI(A_PRODUCTS_Context);
export const AppProfile = new A_PRODUCTS_APP_INTERACTIONS__AppProfileAPI(A_PRODUCTS_Context);
export const AppWidget = new A_PRODUCTS_APP_INTERACTIONS__AppWidgetAPI(A_PRODUCTS_Context);
export const AppPage = new A_PRODUCTS_APP_INTERACTIONS__AppPageAPI(A_PRODUCTS_Context);

export const Product = new A_PRODUCTS_APP_INTERACTIONS__ProductAPI(A_PRODUCTS_Context);
export const ProductSettings = new A_PRODUCTS_APP_INTERACTIONS__ProductSettingsAPI(A_PRODUCTS_Context);
export const ProductProfile = new A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI(A_PRODUCTS_Context);

export const PageSettings = new A_PRODUCTS_APP_INTERACTIONS__PageSettingsAPI(A_PRODUCTS_Context);
export const WidgetSettings = new A_PRODUCTS_APP_INTERACTIONS__WidgetSettingsAPI(A_PRODUCTS_Context);

export const Widget = new A_PRODUCTS_APP_INTERACTIONS__WidgetAPI(A_PRODUCTS_Context);
export const Page = new A_PRODUCTS_APP_INTERACTIONS__PageAPI(A_PRODUCTS_Context);

