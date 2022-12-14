/* tslint:disable */
/* eslint-disable */
/**
 * API Reference
 * バックエンドAPI仕様書
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface ApiV1PopulationCompositionPerYearGetRequest {
    xAPIKEY?: string;
    cityCode?: string;
    prefCode?: number;
}

export interface ApiV1PrefecturesGetRequest {
    xAPIKEY?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * population
     */
    async apiV1PopulationCompositionPerYearGetRaw(requestParameters: ApiV1PopulationCompositionPerYearGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.cityCode !== undefined) {
            queryParameters['cityCode'] = requestParameters.cityCode;
        }

        if (requestParameters.prefCode !== undefined) {
            queryParameters['prefCode'] = requestParameters.prefCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAPIKEY !== undefined && requestParameters.xAPIKEY !== null) {
            headerParameters['X-API-KEY'] = String(requestParameters.xAPIKEY);
        }

        const response = await this.request({
            path: `/api/v1/population/composition/perYear`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * population
     */
    async apiV1PopulationCompositionPerYearGet(requestParameters: ApiV1PopulationCompositionPerYearGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiV1PopulationCompositionPerYearGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * prefectures
     */
    async apiV1PrefecturesGetRaw(requestParameters: ApiV1PrefecturesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAPIKEY !== undefined && requestParameters.xAPIKEY !== null) {
            headerParameters['X-API-KEY'] = String(requestParameters.xAPIKEY);
        }

        const response = await this.request({
            path: `/api/v1/prefectures`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * prefectures
     */
    async apiV1PrefecturesGet(requestParameters: ApiV1PrefecturesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiV1PrefecturesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
