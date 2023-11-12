import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getDefaultZIndex, factory, useProps } from '@mantine/core';
import { spotlightStore, spotlight } from './spotlight.store.js';
import { SpotlightSearch } from './SpotlightSearch.js';
import { SpotlightActionsList } from './SpotlightActionsList.js';
import { SpotlightAction } from './SpotlightAction.js';
import { SpotlightEmpty } from './SpotlightEmpty.js';
import { SpotlightFooter } from './SpotlightFooter.js';
import { SpotlightActionsGroup } from './SpotlightActionsGroup.js';
import { SpotlightRoot } from './SpotlightRoot.js';
import { defaultSpotlightFilter } from './default-spotlight-filter.js';
import { isActionsGroup } from './is-actions-group.js';
import { limitActions } from './limit-actions.js';
import classes from './Spotlight.module.css.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  size: 600,
  yOffset: 80,
  limit: Infinity,
  zIndex: getDefaultZIndex("max"),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: "pop" },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: "mod + K",
  highlightQuery: false
};
const Spotlight = factory((_props, ref) => {
  const props = useProps("Spotlight", defaultProps, _props);
  const _a = props, {
    searchProps,
    filter,
    query,
    onQueryChange,
    actions,
    nothingFound,
    highlightQuery,
    limit
  } = _a, others = __objRest(_a, [
    "searchProps",
    "filter",
    "query",
    "onQueryChange",
    "actions",
    "nothingFound",
    "highlightQuery",
    "limit"
  ]);
  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: "",
    finalValue: "",
    onChange: onQueryChange
  });
  const filteredActions = limitActions(filter(_query, actions), limit).map((item) => {
    if (isActionsGroup(item)) {
      const items = item.actions.map((_a2) => {
        var _b = _a2, { id } = _b, actionData = __objRest(_b, ["id"]);
        return /* @__PURE__ */ React.createElement(SpotlightAction, __spreadValues({ key: id, highlightQuery }, actionData));
      });
      return /* @__PURE__ */ React.createElement(SpotlightActionsGroup, { key: item.group, label: item.group }, items);
    }
    return /* @__PURE__ */ React.createElement(SpotlightAction, __spreadValues({ key: item.id, highlightQuery }, item));
  });
  return /* @__PURE__ */ React.createElement(SpotlightRoot, __spreadProps(__spreadValues({}, others), { query: _query, onQueryChange: setQuery, ref }), /* @__PURE__ */ React.createElement(SpotlightSearch, __spreadValues({}, searchProps)), /* @__PURE__ */ React.createElement(SpotlightActionsList, null, filteredActions, filteredActions.length === 0 && nothingFound && /* @__PURE__ */ React.createElement(SpotlightEmpty, null, nothingFound)));
});
Spotlight.classes = classes;
Spotlight.displayName = "@mantine/spotlight/Spotlight";
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.ActionsGroup = SpotlightActionsGroup;
Spotlight.Footer = SpotlightFooter;
Spotlight.Root = SpotlightRoot;
Spotlight.open = spotlight.open;
Spotlight.close = spotlight.close;
Spotlight.toggle = spotlight.toggle;

export { Spotlight };
//# sourceMappingURL=Spotlight.js.map
