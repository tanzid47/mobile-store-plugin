import { createSafeContext } from '@mantine/core';

const [DropzoneProvider, useDropzoneContext] = createSafeContext(
  "Dropzone component was not found in tree"
);

export { DropzoneProvider, useDropzoneContext };
//# sourceMappingURL=Dropzone.context.js.map
