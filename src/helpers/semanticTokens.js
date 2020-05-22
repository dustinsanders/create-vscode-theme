export default [
  {
    key: 'comment',
    fallback: 'comment',
  },
  {
    key: 'string',
    fallback: 'string',
  },
  {
    key: 'function',
    fallback: 'entity.name.function',
    isSemantic: true,
  },
  {
    key: 'variable',
    fallback: ['variable.other.readwrite', 'entity.name.variable'],
    isSemantic: true,
  },
  {
    key: 'parameter',
    fallback: 'variable.parameter',
    isSemantic: true,
  },
  {
    key: 'property',
    fallback: 'variable.other.property',
    isSemantic: true,
  },
  {
    key: 'type',
    fallback: 'entity.name.type',
    isSemantic: true,
  },
  {
    key: 'class',
    fallback: 'entity.name.type.class',
    isSemantic: true,
  },


  // {
  //   key: 'namespace',
  //   fallback: 'entity.name.namespace',
  // },
  // {
  //   key: 'type.defaultLibrary',
  //   fallback: 'support.type',
  // },
  // {
  //   key: 'struct',
  //   fallback: 'storage.type.struct',
  // },
  // {
  //   key: 'class.defaultLibrary',
  //   fallback: 'support.class',
  // },
  // {
  //   key: 'interface',
  //   fallback: 'entity.name.type.interface',
  // },
  // {
  //   key: 'enum',
  //   fallback: 'entity.name.type.enum',
  // },
  // {
  //   key: 'function.defaultLibrary',
  //   fallback: 'support.function',
  // },
  // {
  //   key: 'member',
  //   fallback: 'entity.name.function.member',
  // },
  // {
  //   key: 'macro',
  //   fallback: 'entity.name.other.preprocessor.macro',
  // },
  // {
  //   key: 'variable.readonly',
  //   fallback: 'variable.other.constant',
  // },
  // {
  //   key: 'variable.readonly.defaultLibrary',
  //   fallback: 'support.constant',
  // },
  // {
  //   key: 'property.readonly',
  //   fallback: 'variable.other.constant.property',
  // },
  // {
  //   key: 'enumMember',
  //   fallback: 'variable.other.enummember',
  // },
  // {
  //   key: 'event',
  //   fallback: 'variable.other.event',
  // },
]
