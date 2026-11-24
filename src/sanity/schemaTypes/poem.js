import { defineField, defineType } from 'sanity';

export const poem = defineType({
  name: 'poem',
  title: 'Poem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers are shown first in the poems row (1, 2, 3...).',
      type: 'number',
      initialValue: 10,
      validation: (rule) => rule.required().integer()
    }),
    defineField({
      name: 'image',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Image description (for accessibility)', type: 'string' })],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'previewLines',
      title: 'Opening lines',
      description: 'The first few lines shown on the card. Put each line on its own row (press Enter). About 5 lines fit best.',
      type: 'text',
      rows: 6,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Link to the full poem',
      description: 'Where the poem is published, e.g. https://spillwords.com/... Opens in a new tab when the card is clicked.',
      type: 'url'
    })
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'title', order: 'order', media: 'image' },
    prepare: ({ title, order, media }) => ({ title, subtitle: `Position ${order ?? '-'}`, media })
  }
});
