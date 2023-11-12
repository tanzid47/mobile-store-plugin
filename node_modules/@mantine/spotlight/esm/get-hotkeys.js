import { spotlightActions } from './spotlight.store.js';

function getHotkeys(hotkeys, store) {
  if (!hotkeys) {
    return [];
  }
  const open = () => spotlightActions.open(store);
  if (Array.isArray(hotkeys)) {
    return hotkeys.map((hotkey) => [hotkey, open]);
  }
  return [[hotkeys, open]];
}

export { getHotkeys };
//# sourceMappingURL=get-hotkeys.js.map
