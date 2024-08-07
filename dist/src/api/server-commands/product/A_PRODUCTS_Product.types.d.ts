import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__Product_APIEntity } from "../../app-interactions/index.types";
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Product_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>, [
    'aseid',
    'Profile',
    'Settings',
    'created_at',
    'updated_at'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Product_APIEntity, [
    'Profile.name',
    'Profile.website',
    'Profile.contact_email'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>, [
    'aseid',
    'created_at',
    'updated_at'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Product_APIEntity>, [
    'aseid'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Product_APIEntity>;
