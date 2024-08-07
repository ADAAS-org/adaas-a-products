import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination
} from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__AppProfile_APIEntity } from "./profile/A_PRODUCTS_AppProfile.types";
import { A_PRODUCTS_TYPES__AppSettings_APIEntity } from "./settings/A_PRODUCTS_AppSettings.types";
import {
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__ProductProfile_APIEntity } from "../index.types";
import { A_PRODUCTS_TYPES__AppStatus } from "src/lib/entities/app/A_PRODUCTS_App.types";

export type A_PRODUCTS_TYPES__App_APIEntity = {
    aseid: string,


    privacyPolicyLink: string
    termsAndConditionsLink: string
    namespace: string;
    status: A_PRODUCTS_TYPES__AppStatus;

    owner_aseid: string
    product_aseid: string

    Profile: A_PRODUCTS_TYPES__AppProfile_APIEntity
    Settings: A_PRODUCTS_TYPES__AppSettings_APIEntity

    // Privacies!: ADAAS_PRODUCTS_DB_PrivacyPolicy[]


    // Terms!: ADAAS_PRODUCTS_DB_TermsAndConditions[]

    Product: A_PRODUCTS_TYPES__ProductProfile_APIEntity

    created_at: string;
    updated_at: string;
};






// =========================  APP LIST REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__App_APIEntity>


// =========================  APP GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    asied: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>,
    [
        'aseid',
        'status',
        'Profile',
        'Settings',
        'created_at',
        'updated_at',
    ]>


// =========================  APP CREATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__App_APIEntity, [
    'Profile.name',
    'Profile.website',
    'Profile.contact_email'
]>


export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>



// =========================  APP UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>, [
        'aseid'
    ]>

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__App_APIEntity>




