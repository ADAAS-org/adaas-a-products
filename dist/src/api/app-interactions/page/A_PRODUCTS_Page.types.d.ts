import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__PageSettings_APIEntity } from "./settings/A_PRODUCTS_PageSettings.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__App_APIEntity } from "../index.types";
export type A_PRODUCTS_TYPES__PageParameter = {
    name: string;
    type: 'string' | 'number' | 'boolean';
    required: boolean;
};
export type A_PRODUCTS_TYPES__PageParameters = {
    pathParams: Array<A_PRODUCTS_TYPES__PageParameter>;
    queryParams: Array<A_PRODUCTS_TYPES__PageParameter>;
    communicationParams: Array<A_PRODUCTS_TYPES__PageParameter>;
};
export type A_PRODUCTS_TYPES__Page_APIEntity = {
    id: string;
    aseid: string;
    source: string;
    path: string;
    title: string;
    parameters: A_PRODUCTS_TYPES__PageParameters;
    app_aseid: string;
    owner_aseid: string;
    Settings: A_PRODUCTS_TYPES__PageSettings_APIEntity;
    App: A_PRODUCTS_TYPES__App_APIEntity;
    created_at: string;
    updated_at: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Page_APIEntity>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetRequest = {
    /**
     * Page identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'id',
    'aseid',
    'source',
    'path',
    'title',
    'app_aseid',
    'owner_aseid',
    'Settings',
    'App',
    'created_at',
    'updated_at'
]> & {
    parameters: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageParameters>;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Page_APIEntity, [
    'source',
    'path',
    'title',
    'parameters',
    'App'
]> & {
    Settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageSettings_APIEntity>;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'id',
    'aseid',
    'created_at',
    'updated_at'
]>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'aseid'
]>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Page_APIEntity>;
