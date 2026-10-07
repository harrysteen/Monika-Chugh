import { defineField, defineType, defineArrayMember } from 'sanity';
import { BLOG_CATEGORIES } from '../categories';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Page link',
      description: 'The blog\'s web address, e.g. /blogs/write-write-write. Click "Generate" to make it from the title.',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) =>
        rule.required().custom((slug) =>
          !slug?.current || /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug.current)
            ? true
            : 'Use only lowercase letters, numbers and dashes (no slashes or spaces), e.g. my-new-blog. Click "Generate" to fix it.'
        )
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: BLOG_CATEGORIES, layout: 'dropdown' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image description (for accessibility)',
          type: 'string'
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Short excerpt',
      description: 'Two or three lines shown on the blog cards.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(260)
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published on',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'readingMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).integer()
    }),
    defineField({
      name: 'body',
      title: 'Blog content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Sub-heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ]
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Image description', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' })
          ]
        })
      ],
      validation: (rule) => rule.required()
    })
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' }
  }
});
