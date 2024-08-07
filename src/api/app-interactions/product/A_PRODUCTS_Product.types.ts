import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination
} from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__ProductProfile_APIEntity } from "./profile/A_PRODUCTS_ProductProfile.types";
import { A_PRODUCTS_TYPES__ProductSettings_APIEntity } from "./settings/A_PRODUCTS_ProductSettings.types";
import { A_PRODUCTS_TYPES__ProductBranding_APIEntity } from "./branding/A_PRODUCTS_ProductBranding.types";
import {
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types/dist/src/types/common.types";

export type A_PRODUCTS_TYPES__Product_APIEntity = {
    aseid: string,

    Profile: A_PRODUCTS_TYPES__ProductProfile_APIEntity
    Settings: A_PRODUCTS_TYPES__ProductSettings_APIEntity
    Branding: A_PRODUCTS_TYPES__ProductBranding_APIEntity

    /**
    * User who created this organization
    */
    owner_aseid: string

    created_at: string;
    updated_at: string;
};






// =========================  APP LIST REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Product_APIEntity>


// =========================  APP GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductGetResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>,
    [
        'aseid',
        'Profile',
        'Settings',
        'created_at',
        'updated_at',
    ]>


// =========================  APP CREATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Product_APIEntity, [
    'Profile.name',
    'Profile.website',
    'Profile.contact_email'
]>


export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>



// =========================  APP UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>, [
        'aseid'
    ]>

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Product_APIEntity>




