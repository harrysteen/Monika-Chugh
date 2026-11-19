import { defineField, defineType } from 'sanity';

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status',
      description: '"Published" books appear under "All Books". "Upcoming" books appear under "Upcoming Releases" with a "Notify Me" button.',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Upcoming', value: 'upcoming' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'published',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers are shown first (1, 2, 3...).',
      type: 'number',
      initialValue: 10,
      validation: (rule) => rule.required().integer()
    }),
    defineField({
      name: 'flatlay',
      title: 'Book photo',
      description: 'The large photo shown on the Books page.',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Image description (for accessibility)', type: 'string' })],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'cover',
      title: 'Cover image (optional)',
      description: 'The plain book cover. Used in the pop-up for books without their own page.',
      type: 'image'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'The text shown next to the book photo.',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'amazonLink',
      title: 'Amazon link ("Buy Now")',
      type: 'url',
      hidden: ({ document }) => document?.status === 'upcoming'
    }),
    defineField({
      name: 'learnMoreLink',
      title: '"Learn More" link',
      description: 'The book\'s own page on this website, e.g. /books/quote-cafe. Leave empty to show a pop-up instead.',
      type: 'string',
      hidden: ({ document }) => document?.status === 'upcoming'
    })
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'status', direction: 'asc' }, { field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'title', status: 'status', media: 'flatlay' },
    prepare: ({ title, status, media }) => ({
      title,
      subtitle: status === 'upcoming' ? 'Upcoming release' : 'Published',
      media
    })
  }
});
