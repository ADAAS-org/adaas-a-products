import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination
} from "@adaas/a-sdk-types";
import {
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__App_APIEntity } from "../../app-interactions/index.types";








// =========================  APP LIST REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__App_APIEntity>


// =========================  APP GET REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    orgASEID: string,
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>,
    [
        'aseid',
        'Profile',
        'Settings',
        'created_at',
        'updated_at',
    ]>


// =========================  APP CREATE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__App_APIEntity, [
    'Profile.name',
    'Profile.website',
    'Profile.contact_email'
]>


export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>



// =========================  APP UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__App_APIEntity>, [
        'aseid'
    ]>

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__App_APIEntity>




