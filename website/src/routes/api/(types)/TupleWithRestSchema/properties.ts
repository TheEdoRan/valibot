import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TItems: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'TupleItems',
      href: '../TupleItems/',
    },
  },
  TMessage: {
    modifier: 'extends',
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'ErrorMessage',
          href: '../ErrorMessage/',
          generics: [
            {
              type: 'custom',
              name: 'TupleWithRestIssue',
              href: '../TupleWithRestIssue/',
            },
          ],
        },
        'undefined',
      ],
    },
  },
  BaseSchema: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseSchema',
      href: '../BaseSchema/',
      generics: [
        {
          type: 'custom',
          name: 'InferTupleInput',
          href: '../InferTupleInput/',
          generics: [
            {
              type: 'custom',
              name: 'TItems',
            },
          ],
        },
        {
          type: 'custom',
          name: 'InferTupleOutput',
          href: '../InferTupleOutput/',
          generics: [
            {
              type: 'custom',
              name: 'TItems',
            },
          ],
        },
        {
          type: 'union',
          options: [
            {
              type: 'custom',
              name: 'TupleWithRestIssue',
              href: '../TupleWithRestIssue/',
            },
            {
              type: 'custom',
              name: 'InferTupleIssue',
              href: '../InferTupleIssue/',
              generics: [
                {
                  type: 'custom',
                  name: 'TItems',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  type: {
    type: {
      type: 'string',
      value: 'tuple_with_rest',
    },
  },
  reference: {
    type: {
      type: 'custom',
      modifier: 'typeof',
      name: 'tupleWithRest',
      href: '../tupleWithRest/',
    },
  },
  expects: {
    type: {
      type: 'string',
      value: 'Array',
    },
  },
  items: {
    type: {
      type: 'custom',
      name: 'TItems',
    },
  },
  message: {
    type: {
      type: 'custom',
      name: 'TMessage',
    },
  },
};
