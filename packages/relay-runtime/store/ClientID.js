/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayFeatureFlags = require('../util/RelayFeatureFlags');

const {shorten} = require('../util/shortString');

import type {DataID} from '../util/RelayRuntimeTypes';

const PREFIX = 'client:';

function generateClientID(
  id: DataID,
  storageKey: string,
  index?: number,
): DataID {
  const sid = RelayFeatureFlags.STRING_INTERN_LEVEL <= 0 ? id : shorten(id);
  let key = sid + ':' + storageKey;
  if (index != null) {
    key += ':' + index;
  }
  if (key.indexOf(PREFIX) !== 0) {
    key = PREFIX + key;
  }
  return key;
}

function isClientID(id: DataID): boolean {
  return id.indexOf(PREFIX) === 0;
}

let localID: number = 0;
function generateUniqueClientID(): DataID {
  return `${PREFIX}local:${localID++}`;
}

module.exports = {
  generateClientID,
  generateUniqueClientID,
  isClientID,
};
