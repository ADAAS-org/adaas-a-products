import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__App_APIEntity } from "../A_PRODUCTS_App.types";
export type A_PRODUCTS_TYPES__AppSettings_APIEntity = {
    id: number;
    primary_location: string;
    /**
     * Could be a link or an identity inside internal or external system
     */
    terms_identity: string;
    /**
     * Could be a link or an identity inside internal or external system
     */
    privacy_identity: string;
    /**
     * Could be a link or an identity inside internal or external system
     */
    license_identity: string;
    /**
     * Optional object that can store identities of extra documents
     */
    extra_docs_identity: {
        docs: Array<string>;
    };
    origins: {
        origins: Array<string>;
    };
    redirect_urls: {
        urls: Array<string>;
    };
    required_fields?: {
        fields: Array<string>;
    };
    display: boolean;
    App: A_PRODUCTS_TYPES__App_APIEntity;
    created_at: string;
    updated_at: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetResponse = Partial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateRequest = {
    /**
     * App identifier in ADAAS System
     */
    aseid: string;
    settings: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateResponse = Partial<A_PRODUCTS_TYPES__AppSettings_APIEntity>;
