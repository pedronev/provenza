import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Provenza CMS",
  projectId: "awbzyb2j",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
