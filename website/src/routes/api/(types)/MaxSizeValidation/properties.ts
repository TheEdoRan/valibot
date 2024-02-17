import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'Map',
          generics: ['any', 'any'],
        },
        {
          type: 'custom',
          name: 'Set',
          generics: ['any'],
        },
        {
          type: 'custom',
          name: 'Blob',
        },
      ],
    },
  },
  TRequirement: {
    modifier: 'extends',
    type: 'number',
  },
  BaseValidation: {
    type: {
      type: 'custom',
      name: 'BaseValidation',
      href: '../BaseValidation/',
      generics: [
        {
          type: 'custom',
          name: 'TInput',
        },
      ],
    },
  },
  type: {
    type: {
      type: 'string',
      value: 'max_size',
    },
  },
  requirement: {
    type: {
      type: 'custom',
      name: 'TRequirement',
    },
  },
};
