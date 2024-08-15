import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__WidgetSettings_APIEntity } from "../../../app-interactions/widget/settings/A_PRODUCTS_WidgetSettings.types";
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetResponse = Partial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateRequest = {
    /**
     * Widget identifier in ADAAS System
     */
    aseid: string;
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__WidgetSettings_APIEntity>;
