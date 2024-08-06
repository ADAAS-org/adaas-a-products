import { A_AUTH_TYPES__ContextConfigurations } from "@adaas/a-auth"

export type A_PRODUCTS_TYPES__ContextConfigurations = {
    /**
     * Variables for the SDK
     */
    variables: {
        apiLocation?: string
    } & A_AUTH_TYPES__ContextConfigurations['variables']

} & A_AUTH_TYPES__ContextConfigurations