import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination
} from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__WidgetSettings_APIEntity } from "./settings/A_PRODUCTS_WidgetSettings.types";
import {
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_PRODUCTS_TYPES__App_APIEntity } from "../index.types";
import { A_PRODUCTS_TYPES__Page_APIEntity, A_PRODUCTS_TYPES__PageParameters } from "../page/A_PRODUCTS_Page.types";

export type A_PRODUCTS_TYPES__CustomWidget_APIEntity = {
    id: number;

    source: string;
    integrity_hash: string;

    parameters: A_PRODUCTS_TYPES__PageParameters;

    created_at: string;
    updated_at: string;
}

export type A_PRODUCTS_TYPES__EntityWidget_APIEntity = {
    id: number;

    creation_page_id: string;
    list_page_id: string;

    Widget: A_PRODUCTS_TYPES__Widget_APIEntity;

    Create: A_PRODUCTS_TYPES__Page_APIEntity;

    List: A_PRODUCTS_TYPES__Page_APIEntity;

    created_at: string;
    updated_at: string;
}

export type A_PRODUCTS_TYPES__PageWidget_APIEntity = {
    id: number;
    page_id: string;

    //=========== FOREIGN KEYS=================
    Widget: A_PRODUCTS_TYPES__Widget_APIEntity;
    // Page: ADAAS_PRODUCTS_DB_Page;

    created_at: string;
    updated_at: string;
}

export type A_PRODUCTS_TYPES__Widget_APIEntity = {
    id: string
    aseid: string
    overline: string;
    headline: string;
    action: string;
    content: string;
    owner_aseid: string
    app_aseid: string;

    //=========== FOREIGN KEYS=================
    Settings: A_PRODUCTS_TYPES__WidgetSettings_APIEntity;

    CustomWidget: A_PRODUCTS_TYPES__CustomWidget_APIEntity;
    EntityWidget: A_PRODUCTS_TYPES__EntityWidget_APIEntity;
    PageWidget: A_PRODUCTS_TYPES__PageWidget_APIEntity;

    App: A_PRODUCTS_TYPES__App_APIEntity

    created_at: string;
    updated_at: string;
};






// =========================  WIDGET LIST REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Widget_APIEntity>


// =========================  WIDGET GET REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Widget_APIEntity>,
    [
        'id',
        'aseid',
        'overline',
        'headline',
        'action',
        'content',
        'owner_aseid',
        'app_aseid',

        'App',

        'created_at',
        'updated_at',
    ]> & {
        Settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>
    } & (
        {
            EntityWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__EntityWidget_APIEntity>
        } |

        {
            CustomWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__CustomWidget_APIEntity>
        } |

        {
            PageWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageWidget_APIEntity>
        }
    )


// =========================  WIDGET CREATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Widget_APIEntity, [
    'id',
    'overline',
    'headline',
    'action',
    'content',
    'App',
]> & {
    Settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>
} & (
        {
            EntityWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__EntityWidget_APIEntity>
        } |

        {
            CustomWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__CustomWidget_APIEntity>
        } |

        {
            PageWidget: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__PageWidget_APIEntity>
        }
    )



export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Widget_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>


// =========================  WIDGET UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Widget_APIEntity>, [
        'aseid'
    ]>

export type A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Widget_APIEntity>




