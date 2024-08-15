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
import { A_PRODUCTS_TYPES__CustomWidget_APIEntity, A_PRODUCTS_TYPES__EntityWidget_APIEntity, A_PRODUCTS_TYPES__PageWidget_APIEntity, A_PRODUCTS_TYPES__Widget_APIEntity } from "../../app-interactions/widget/A_PRODUCTS_Widget.types";
import { A_PRODUCTS_TYPES__WidgetSettings_APIEntity } from "../../app-interactions/widget/settings/A_PRODUCTS_WidgetSettings.types";


// =========================  WIDGET LIST REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Widget_APIEntity>


// =========================  WIDGET GET REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string,
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetResponse = A_SDK_TYPES__Required<
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
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest = A_SDK_TYPES__ExtractProperties<A_PRODUCTS_TYPES__Widget_APIEntity, [
    'id',
    'overline',
    'headline',
    'action',
    'content',
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



export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Widget_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>


// =========================  WIDGET UPDATE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__Widget_APIEntity>, [
        'aseid'
    ]>

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_PRODUCTS_TYPES__Widget_APIEntity>





// =========================  WIDGET DELETE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteRequest = {
    aseid: string
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteResponse = {
    status: 'OK' | 'ERROR'
}


// =========================  WIDGET MIGRATE REQUEST API TYPES ================================
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateRequest = {
    pages: Array<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest>
}

export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateResponse = {
    status: 'OK' | 'ERROR'
}


