import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__AppProfile_APIEntity } from "@adaas/a-sdk/api/app-interactions/index.types";




// =========================  APP PROFILE GET REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    orgASEID: string,
}

export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileGetResponse = Partial<A_PRODUCTS_TYPES__AppProfile_APIEntity>



// =========================  APP PROFILE UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileUpdateRequest = {
    /**
     * App identifier in ADAAS System
     */
    orgASEID: string,
    profile: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__AppProfile_APIEntity>
}

export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileUpdateResponse = Partial<A_PRODUCTS_TYPES__AppProfile_APIEntity>




// =========================  APP PROFILE LOGO UPLOAD REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadRequest = {
    /**
     * App identifier in ADAAS System
     */
    orgASEID: string,
    file: File
}

export type A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadResponse = {
    logo_a_folder_aseid: string
}


