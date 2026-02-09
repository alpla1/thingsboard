///
/// Copyright © 2016-2026 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


import * as L from 'leaflet';

declare module 'leaflet' {

  // =====================================================
  // MarkerCluster
  // =====================================================

  export class MarkerClusterGroup extends L.FeatureGroup {

    constructor(options?: MarkerClusterGroupOptions);

    refreshClusters(layers?: L.Layer[]): void;

    removeLayers(layers: L.Layer[]): void;

  }

  export interface MarkerClusterGroupOptions {
    [key: string]: any;
  }

  export class MarkerCluster extends L.Marker {
    static mergeOptions(options: any): any;
  }

  // =====================================================
  // PolylineDecorator
  // =====================================================

  export class PolylineDecorator extends L.Layer {

    constructor(
      polyline: L.Polyline | L.Polyline[],
      options?: PolylineDecoratorOptions
    );

    setPaths(paths: L.Polyline | L.Polyline[]): void;

    setPatterns(patterns: any[]): void;
  }

  export interface PolylineDecoratorOptions {
    [key: string]: any;
  }

  export const Symbol: any;

  // =====================================================
  // leaflet-providers
  // =====================================================

  namespace tileLayer {
    function provider(name: string, options?: any): L.TileLayer;
  }
}
