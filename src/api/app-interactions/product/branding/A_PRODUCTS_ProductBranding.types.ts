import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types"
import { A_PRODUCTS_TYPES__ProductBrandingTheme } from "src/lib/entities/product/A_PRODUCTS_ProductBranding.types";
import { A_PRODUCTS_TYPES__Product_APIEntity } from "../A_PRODUCTS_Product.types";

export type A_PRODUCTS_TYPES__ProductBranding_APIEntity = {
    id: number
    primary_color: string;
    secondary_color: string;
    accent_color: string;

    theme: A_PRODUCTS_TYPES__ProductBrandingTheme;

    Product: A_PRODUCTS_TYPES__Product_APIEntity;

    created_at: string;
    updated_at: string;
}


// =========================  APP SETTINGS GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    productASEID: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetResponse = Partial<A_PRODUCTS_TYPES__ProductBranding_APIEntity>



// =========================  APP SETTINGS UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string,
    branding: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ProductBranding_APIEntity>
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateResponse = Partial<A_PRODUCTS_TYPES__ProductBranding_APIEntity>




