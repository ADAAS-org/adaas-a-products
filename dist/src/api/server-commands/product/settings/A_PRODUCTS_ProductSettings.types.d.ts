import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__ProductSettings_APIEntity } from "../../../app-interactions/index.types";
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductSettingsGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductSettingsGetResponse = Partial<A_PRODUCTS_TYPES__ProductSettings_APIEntity>;
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductSettingsUpdateRequest = {
    /**
     * Product identifier in ADAAS System
     */
    aseid: string;
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ProductSettings_APIEntity>;
};
export type A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__ProductSettings_APIEntity>;
