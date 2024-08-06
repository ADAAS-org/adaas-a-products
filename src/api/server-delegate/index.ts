import { A_PRODUCTS_Context } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_DELEGATE__ProductAPI } from "./product/A_PRODUCTS_Product.api";
import { A_PRODUCTS_SERVER_DELEGATE__ProductSettingsAPI } from "./product/settings/A_PRODUCTS_ProductSettings.api";
import { A_PRODUCTS_SERVER_DELEGATE__ProductProfileAPI } from "./product/profile/A_PRODUCTS_ProductProfile.api";
import { A_PRODUCTS_SERVER_DELEGATE__AppProfileAPI } from "./app/profile/A_PRODUCTS_AppProfile.api";
import { A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI } from "./app/settings/A_PRODUCTS_AppSettings.api";
import { A_PRODUCTS_SERVER_DELEGATE__AppAPI } from "./app/A_PRODUCTS_App.api";


export const App = new A_PRODUCTS_SERVER_DELEGATE__AppAPI(A_PRODUCTS_Context);
export const AppSettings = new A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI(A_PRODUCTS_Context);
export const AppProfile = new A_PRODUCTS_SERVER_DELEGATE__AppProfileAPI(A_PRODUCTS_Context);

export const Product = new A_PRODUCTS_SERVER_DELEGATE__ProductAPI(A_PRODUCTS_Context);
export const ProductSettings = new A_PRODUCTS_SERVER_DELEGATE__ProductSettingsAPI(A_PRODUCTS_Context);
export const ProductProfile = new A_PRODUCTS_SERVER_DELEGATE__ProductProfileAPI(A_PRODUCTS_Context);
