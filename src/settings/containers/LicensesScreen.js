/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';

import Licenses from '@settings/components/Licenses';

import NavigationService from '@app/services/navigation';

import AppRoutes from '@app/navigation/routes';

export default function LicensesScreen () {
  const props = {
    onClose: () => NavigationService.navigate(AppRoutes.LEGAL_INFORMATION),
    licenses: [
      {
        name: "MIT",
        link: "https://opensource.org/licenses/MIT",
        tools: [
          {
            name: "Cocoapods",
            link: "https://cocoapods.org/",
          },
        ],
        libraries: [
            {
              name:"TrustKit",
              link: "https://github.com/datatheorem/TrustKit",
            },
        ],
        react_native_packages: [
          {
            name: "@react-native-community/async-storage",
            link: "https://www.npmjs.com/package/@react-native-community/async-storage",
          },
          {
            name: "@react-native-community/checkbox",
            link: "https://www.npmjs.com/package/@react-native-community/checkbox",
          },
          {
            name: "@react-native-community/masked-view",
            link: "https://www.npmjs.com/package/@react-native-community/masked-view",
          },
          {
            name: "@react-native-community/netinfo",
            link: "https://www.npmjs.com/package/@react-native-community/netinfo",
          },
          {
            name: "@react-navigation/bottom-tabs",
            link: "https://www.npmjs.com/package/@react-navigation/bottom-tabs",
          },
          {
            name: "@react-navigation/native",
            link: "https://www.npmjs.com/package/@react-navigation/native",
          },
          {
            name: "@react-navigation/stack",
            link: "https://www.npmjs.com/package/@react-navigation/stack",
          },
          {
            name: "i18n-js",
            link: "https://www.npmjs.com/package/i18n-js",
          },
          {
            name: "jest",
            link: "https://github.com/facebook/jest",
          },
          {
            name: "detox",
            link: "https://github.com/wix/Detox",
          },
          {
            name: "lodash.pickby",
            link: "https://www.npmjs.com/package/lodash.pickby",
          },
          {
            name: "lodash.memoize",
            link: "https://www.npmjs.com/package/lodash.memoize",
          },
          {
            name: "mirror-creator",
            link: "https://www.npmjs.com/package/mirror-creator",
          },
          {
            name: "moment",
            link: "https://www.npmjs.com/package/moment",
          },
          {
            name: "react",
            link: "https://www.npmjs.com/package/react",
          },
          {
            name: "react-native",
            link: "https://www.npmjs.com/package/react-native",
          },
          {
            name: "react-native-android-location-enabler",
            link: "https://www.npmjs.com/package/react-native-android-location-enabler",
          },
          {
            name: "react-native-config",
            link: "https://www.npmjs.com/package/react-native-config",
          },
          {
            name: "react-native-elements",
            link: "https://www.npmjs.com/package/react-native-elements",
          },
          {
            name: "react-native-gesture-handler",
            link: "https://www.npmjs.com/package/react-native-gesture-handler",
          },
          {
            name: "react-native-keyboard-aware-scroll-view",
            link: "https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view",
          },
          {
            name: "react-native-localize",
            link: "https://www.npmjs.com/package/react-native-localize",
          },
          {
            name: "react-native-modal",
            link: "https://www.npmjs.com/package/react-native-modal",
          },
          {
            name: "react-native-permissions",
            link: "https://www.npmjs.com/package/react-native-permissions",
          },
          {
            name: "react-native-reanimated",
            link: "https://www.npmjs.com/package/react-native-reanimated",
          },
          {
            name: "react-native-safe-area-context",
            link: "https://www.npmjs.com/package/react-native-safe-area-context",
          },
          {
            name: "react-native-screens",
            link: "https://www.npmjs.com/package/react-native-screens",
          },
          {
            name: "react-native-splash-screen",
            link: "https://www.npmjs.com/package/react-native-splash-screen",
          },
          {
            name: "react-native-svg",
            link: "https://www.npmjs.com/package/react-native-svg",
          },
          {
            name: "react-native-svg-icon",
            link: "https://www.npmjs.com/package/react-native-svg-icon",
          },
          {
            name: "react-native-swiper",
            link: "https://www.npmjs.com/package/react-native-swiper",
          },
          {
            name: "react-native-vector-icons",
            link: "https://www.npmjs.com/package/react-native-vector-icons",
          },
          {
            name: "react-native-testing-library",
            link: "https://www.npmjs.com/package/react-native-testing-library",
          },
          {
            name: "react-navigation-redux-debouncer",
            link: "https://www.npmjs.com/package/react-navigation-redux-debouncer",
          },
          {
            name: "react-redux",
            link: "https://www.npmjs.com/package/react-redux",
          },
          {
            name: "redux-actions",
            link: "https://www.npmjs.com/package/redux-actions",
          },
          {
            name: "redux-saga",
            link: "https://www.npmjs.com/package/redux-saga",
          },
          {
            name: "reselect",
            link: "https://www.npmjs.com/package/reselect",
          },
        ],
        fonts: [],
      },
      {
        name: "MPL 2.0",
        link: "https://www.mozilla.org/en-US/MPL/2.0/",
        tools: [],
        libraries: [
          {
            name: "DP3T-SDK-Android",
            link: "https://github.com/DP-3T/dp3t-sdk-android",
          },
          {
            name: "DP3T-SDK-iOS",
            link: "https://github.com/DP-3T/dp3t-sdk-ios",
          },
        ],
        react_native_packages: [],
        fonts: [],
      },
      {
        name: "Apache 2.0",
        link: "https://www.apache.org/licenses/LICENSE-2.0",
        tools: [
          {
            name: "Gradle",
            link: "https://gradle.org/",
          },
        ],
        libraries: [
          {
            name: "OkHttp",
            link: "https://github.com/square/okhttp/",
          },
          {
            name: "Retrofit",
            link: "https://github.com/square/retrofit",
          },
          {
            name: "Version Compare",
            link: "https://github.com/G00fY2/version-compare",
          },
        ],
        react_native_packages: [
          {
            name: "react-native-tooltips",
            link: "https://github.com/prscX/react-native-tooltips",
          },
        ],
        fonts: [
          {
            name: "Roboto",
            link: "https://fonts.google.com/specimen/Roboto",
          },
        ],
      },
      {
        name: "BSD-3-Clause",
        link: "https://opensource.org/licenses/BSD-3-Clause",
        tools: [],
        libraries: [],
        react_native_packages: [
          {
            name: "react-native-indicators",
            link: "https://www.npmjs.com/package/react-native-indicators",
          },
        ],
        fonts: [],
      },
    ],
  };

  return (
    <Licenses {...props} />
  );
}
