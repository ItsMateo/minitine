import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

// The Storybook UI (sidebar and toolbar) reads its theme one time, at start. It
// cannot follow the toolbar control. The library starts in the dark scheme, thus
// the UI does also. The docs pages follow the control: see ThemedDocsContainer.
addons.setConfig({ theme: themes.dark });
