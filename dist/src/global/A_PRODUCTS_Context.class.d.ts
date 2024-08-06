import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__IAuthenticator, A_AUTH_ContextClass } from "@adaas/a-auth";
import { A_PRODUCTS_TYPES__ContextConfigurations } from "../types/A_PRODUCTS_Context.types";
/**
 * Global Context for A-Products sdk
 */
export declare class A_PRODUCTS_ContextClass extends A_AUTH_ContextClass {
    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass;
    protected API_LOCATION: string;
    protected productsContextAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION", "ENABLE_AUTH", "API_LOCATION"];
    constructor();
    getConfigurationProperty<T = any>(property: typeof this.productsContextAllowedProperties[number]): T;
    /**
     *  Configure the A_PRODUCTS_Context with provided configurations
     *
     * @param config
     */
    configure(config: A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ContextConfigurations>, ['variables.ssoLocation']>): void;
    getAuthenticator(userASEID?: string | undefined, userScope?: string): A_AUTH_TYPES__IAuthenticator;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const A_PRODUCTS_Context: A_PRODUCTS_ContextClass;
