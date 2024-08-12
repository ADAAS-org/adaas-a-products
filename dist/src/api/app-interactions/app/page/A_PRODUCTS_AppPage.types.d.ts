import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__Page_APIEntity } from "../../page/A_PRODUCTS_Page.types";
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppPagesListRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppPagesListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Page_APIEntity>;
