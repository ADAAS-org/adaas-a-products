import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types"
import { A_PRODUCTS_TYPES__Widget_APIEntity } from "../A_PRODUCTS_Widget.types";

export type A_PRODUCTS_TYPES__WidgetSettings_APIEntity = {

    id: number,

    display: boolean;

    // Could be a URL or ASEID to folder resource
    background_identity: string;


    // Could be a URL or ASEID to folder resource
    image_identity: string;

    background_color: string;

    Widget: A_PRODUCTS_TYPES__Widget_APIEntity;

    created_at: string;
    updated_at: string;
}




// =========================  WIDGET SETTINGS GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetResponse = Partial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>



// =========================  WIDGET SETTINGS UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string,
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>




