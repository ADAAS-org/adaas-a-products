import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__Widget_APIEntity } from "../../widget/A_PRODUCTS_Widget.types";
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Widget_APIEntity>;
