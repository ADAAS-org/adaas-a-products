import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__AppSettings_APIEntity } from "../../../app-interactions/index.types";
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppSettingsGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppSettingsGetResponse = Partial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppSettingsUpdateRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__AppSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
