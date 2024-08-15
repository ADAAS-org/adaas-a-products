import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__CustomPage_APIEntity, A_PRODUCTS_TYPES__FramePage_APIEntity, A_PRODUCTS_TYPES__Page_APIEntity, A_PRODUCTS_TYPES__PageParameters, A_PRODUCTS_TYPES__PageSettings_APIEntity } from "../../app-interactions/index.types";
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Page_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetRequest = {
    /**
     * Page identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'id',
    'aseid',
    'path',
    'title',
    'app_aseid',
    'owner_aseid',
    'App',
    'created_at',
    'updated_at'
]> & {
    Settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageSettings_APIEntity>;
    parameters: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageParameters>;
} & ({
    CustomPage: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__CustomPage_APIEntity>;
} | {
    FramePage: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__FramePage_APIEntity>;
});
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Page_APIEntity, [
    'id',
    'path',
    'title',
    'parameters'
]> & {
    Settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageSettings_APIEntity>;
} & ({
    CustomPage: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__CustomPage_APIEntity>;
} | {
    FramePage: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__FramePage_APIEntity>;
});
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'id',
    'aseid',
    'created_at',
    'updated_at'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Page_APIEntity>, [
    'aseid'
]>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Page_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteRequest = {
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteResponse = {
    status: 'OK' | 'ERROR';
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateRequest = {
    pages: Array<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest>;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateResponse = {
    status: 'OK' | 'ERROR';
};
