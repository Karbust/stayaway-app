/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import { createSelector } from 'reselect';

export const isUnsupported = createSelector(
  state => state.startup,
  startup => startup.unsupported,
);

export const isAppLaunched = createSelector(
  state => state.startup,
  startup => startup.launched,
);

export default {
  isAppLaunched,
  isUnsupported,
};
