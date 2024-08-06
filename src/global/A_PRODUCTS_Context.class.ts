import { A_SDK_CONSTANTS__ERROR_CODES, A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS } from "../constants/errors.constants";
import { A_AUTH_TYPES__IAuthenticator, A_AUTH_Context, A_AUTH_ContextClass } from "@adaas/a-auth";
import { A_PRODUCTS_TYPES__ContextConfigurations } from "../types/A_PRODUCTS_Context.types";

/**
 * Global Context for A-Products sdk
 */
export class A_PRODUCTS_ContextClass extends A_AUTH_ContextClass {

    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass = A_AUTH_Context


    protected API_LOCATION: string = 'https://api.products.adaas.org';


    protected productsContextAllowedProperties = [
        ...this.authContextAllowedProperties,
        "API_LOCATION"
    ] as const;


    constructor() {
        super({
            namespace: 'a-products',
            errors: A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS
        });
    }


    getConfigurationProperty<T = any>(
        property: typeof this.productsContextAllowedProperties[number]
    ): T {
        if (this.productsContextAllowedProperties.includes(property as any))
            return this[property as string] as T;
        else
            this.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }


    /**
     *  Configure the A_PRODUCTS_Context with provided configurations
     * 
     * @param config 
     */
    configure(config: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ContextConfigurations>) {

        this.Logger.log('Configuring A_PRODUCTS_Context with provided configurations', config);

        this.API_LOCATION = config.products?.apiLocation || this.API_LOCATION;

        super.configure(config);

        this.auth.configure(config);
    }


    getAuthenticator(userASEID?: string | undefined, userScope?: string): A_AUTH_TYPES__IAuthenticator {
        /**
         * In case when the CLIENT_ID and CLIENT_SECRET provided 
         * And their ENV NAMES comes from the ENV CORRESPONDING to the Context NAMESPACE    
         * 
         */
        if (this.CLIENT_ID && this.CLIENT_SECRET)
            return super.getAuthenticator(userASEID, userScope);
        /**
         * Otherwise Use the fallback to the A_AUTH Context
         */
        else
            return this.auth.getAuthenticator(userASEID, userScope);
    }


    protected async loadExtendedConfigurationsFromEnvironment(): Promise<void> {
        this.API_LOCATION = process.env[this.getConfigurationProperty_ENV_Alias('API_LOCATION')] || this.API_LOCATION;
    }

    protected async loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void> {
        this.API_LOCATION = config[this.getConfigurationProperty_File_Alias('API_LOCATION')] || this.API_LOCATION;
    }
}


export const A_PRODUCTS_Context = new A_PRODUCTS_ContextClass()