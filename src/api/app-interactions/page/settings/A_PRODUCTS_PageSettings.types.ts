import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types"
import { A_PRODUCTS_TYPES__Page_APIEntity } from "../A_PRODUCTS_Page.types";

export type A_PRODUCTS_TYPES__PageSettings_APIEntity = {

    id: number,

    display: boolean;

    Page: A_PRODUCTS_TYPES__Page_APIEntity;

    created_at: string;
    updated_at: string;
}




// =========================  PAGE SETTINGS GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetRequest = {
    /**
     * Page identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetResponse = Partial<A_PRODUCTS_TYPES__PageSettings_APIEntity>



// =========================  PAGE SETTINGS UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateRequest = {
    /**
     * Page identifier in ADAAS System
     */
    aseid: string,
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageSettings_APIEntity>
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__PageSettings_APIEntity>




