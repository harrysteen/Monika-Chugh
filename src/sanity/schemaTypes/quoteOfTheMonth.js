import { defineField, defineType } from 'sanity';

// Only one of these exists (ID "quoteOfTheMonth"); sanity.config.js shows it as a single item.
export const quoteOfTheMonth = defineType({
  name: 'quoteOfTheMonth',
  title: 'Quote of the Month',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      description: 'Shown on the home page. Put each line on its own row (press Enter). Around 6 short lines fit the card best.',
      type: 'text',
      rows: 8,
      validation: (rule) => [
        rule.required(),
        rule
          .custom((text) => (!text || text.split('\n').filter((l) => l.trim()).length <= 8 ? true : 'More than 8 lines may not fit inside the card.'))
          .warning()
      ]
    }),
    defineField({
      name: 'author',
      title: 'Signature',
      description: 'Shown under the quote after "~", e.g. monika',
      type: 'string',
      initialValue: 'monika'
    })
  ],
  preview: {
    select: { quote: 'quote' },
    prepare: ({ quote }) => ({ title: 'Quote of the Month', subtitle: quote?.split('\n')[0] })
  }
});
