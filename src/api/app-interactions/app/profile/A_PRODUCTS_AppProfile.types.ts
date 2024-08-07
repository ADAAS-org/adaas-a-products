import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__App_APIEntity } from "../A_PRODUCTS_App.types";

export type A_PRODUCTS_TYPES__AppProfile_APIEntity = {
    id: number,

    name: string;
    description: string;

    contact_email: string;
    website: string;

    logo_identity: string;

    App: A_PRODUCTS_TYPES__App_APIEntity;

    created_at: string;
    updated_at: string;
};



// =========================  APP PROFILE GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetResponse = Partial<A_PRODUCTS_TYPES__AppProfile_APIEntity>



// =========================  APP PROFILE UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string,
    profile: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__AppProfile_APIEntity>
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateResponse = Partial<A_PRODUCTS_TYPES__AppProfile_APIEntity>




// =========================  APP PROFILE LOGO UPLOAD REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string,
    file: File
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadResponse = {
    logo_a_folder_aseid: string
}


