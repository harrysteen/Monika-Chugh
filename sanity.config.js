'use client';

// Sanity Studio, served by the website at /studio
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schemaTypes, singletonTypes } from './src/sanity/schemaTypes';

// Left menu: the single "Quote of the Month" item first, then the lists (blogs, books, poems)
const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Quote of the Month')
        .id('quoteOfTheMonth')
        .child(S.document().schemaType('quoteOfTheMonth').documentId('quoteOfTheMonth').title('Quote of the Month')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId()))
    ]);

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'not-configured',
  dataset,
  title: 'Monika Chugh — Website',
  schema: {
    types: schemaTypes,
    // Hide single items from the "+ Create" menu
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },
  document: {
    // Single items can only be edited and published, not duplicated or deleted
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => ['publish', 'discardChanges', 'restore'].includes(action))
        : actions
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })]
});
