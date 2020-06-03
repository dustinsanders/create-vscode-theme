export default ({
  foreground,
  color1,
  color2,
  color3,
  color4,
  color5,
  background,
  comment,
}) => [
  {
    'name': 'Comment',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Comment',
    'scope': 'comment',
    'settings': {
      'foreground': comment
    }
  },
  {
    'name': 'String',
    'scope': 'string',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'String Quoted',
    'scope': 'string.quoted',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Support Constant Math',
    'scope': 'support.constant.math',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Number',
    'scope': [
      'constant.numeric',
      'constant.character.numeric'
    ],
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Built-in constant',
    'scope': [
      'constant.language',
      'punctuation.definition.constant',
      'variable.other.constant'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'User-defined constant',
    'scope': [
      'constant.character',
      'constant.other'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Constant Character Escape',
    'scope': 'constant.character.escape',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'RegExp String',
    'scope': [
      'string.regexp',
      'string.regexp keyword.other'
    ],
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Comma in functions',
    'scope': 'meta.function punctuation.separator.comma',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Variable',
    'scope': 'variable',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Keyword',
    'scope': [
      'punctuation.accessor',
      'keyword'
    ],
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Storage',
    'scope': 'storage',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Storage type',
    'scope': [
      'storage.type',
      'meta.var.expr storage.type',
      'meta.class meta.method.declaration meta.var.expr storage.type.js'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Class name',
    'scope': [
      'entity.name.class',
      'meta.class entity.name.type.class'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Inherited class',
    'scope': 'entity.other.inherited-class',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Function name',
    'scope': 'entity.name.function',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Function Parameters',
    'scope': 'variable.parameter',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Meta Tag',
    'scope': [
      'punctuation.definition.tag',
      'meta.tag'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'HTML Tag names',
    'scope': [
      'support.class.component',
      'meta.tag.other.html',
      'meta.tag.other.js',
      'meta.tag.other.tsx',
      'meta.tag.tsx',
      'meta.tag.html'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'HTML Tag names',
    'scope': [
      'entity.name.tag.tsx',
      'entity.name.tag.js',
      'entity.name.tag',
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Tag attribute',
    'scope': 'entity.other.attribute-name',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Entity Name Tag Custom',
    'scope': 'entity.name.tag.custom',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Library (function & constant)',
    'scope': [
      'support.function',
      'support.constant'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Support Constant Property Value meta',
    'scope': 'support.constant.meta.property-value',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Library class/type',
    'scope': [
      'support.type',
      'support.class'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Support Variable DOM',
    'scope': 'support.variable.dom',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Invalid',
    'scope': 'invalid',
    'settings': {
      'background': color2
  ,
      'foreground': foreground
    }
  },
  {
    'name': 'Invalid deprecated',
    'scope': 'invalid.deprecated',
    'settings': {
      'foreground': foreground,
      'background': color2
  ,
    }
  },
  {
    'name': 'Keyword Operator',
    'scope': 'keyword.operator',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Keyword Operator Relational',
    'scope': 'keyword.operator.relational',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Keyword Operator Assignment',
    'scope': 'keyword.operator.assignment',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Double-Slashed Comment',
    'scope': 'comment.line.double-slash',
    'settings': {
      'foreground': comment
    }
  },
  {
    'name': 'Null',
    'scope': 'constant.language.null',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Meta Brace',
    'scope': 'meta.brace',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Meta Delimiter Period',
    'scope': 'meta.delimiter.period',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Boolean',
    'scope': 'constant.language.boolean',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Object Comma',
    'scope': 'object.comma',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Variable Parameter Function',
    'scope': 'variable.parameter.function',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Support Type Property Name & entity name tags',
    'scope': [
      'support.type.vendored.property-name',
      'support.constant.vendored.property-value',
      'support.type.property-name',
      'meta.property-list entity.name.tag'
    ],
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Entity Name tag reference in stylesheets',
    'scope': 'meta.property-list entity.name.tag.reference',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Constant Other Color RGB Value Punctuation Definition Constant',
    'scope': 'constant.other.color.rgb-value punctuation.definition.constant',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Constant Other Color',
    'scope': 'constant.other.color',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Keyword Other Unit',
    'scope': 'keyword.other.unit',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Meta Selector',
    'scope': 'meta.selector',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Entity Other Attribute Name Id',
    'scope': 'entity.other.attribute-name.id',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Meta Property Name',
    'scope': 'meta.property-name',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Doctypes',
    'scope': [
      'entity.name.tag.doctype',
      'meta.tag.sgml.doctype'
    ],
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Punctuation Definition Parameters',
    'scope': 'punctuation.definition.parameters',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Keyword Control Operator',
    'scope': 'keyword.control.operator',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Keyword Operator Logical',
    'scope': 'keyword.operator.logical',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Variable Instances',
    'scope': [
      'variable.instance',
      'variable.other.instance',
      'variable.reaedwrite.instance',
      'variable.other.readwrite.instance'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Variable Property Other',
    'scope': [
      'variable.other.property',
      'variable.other.object.property'
    ],
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Entity Name Function',
    'scope': 'entity.name.function',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Keyword Operator Comparison',
    'scope': 'keyword.operator.comparison',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Support Constant, `new` keyword, Special Method Keyword',
    'scope': [
      'support.constant',
      'keyword.other.special-method',
      'keyword.other.new'
    ],
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Support Function',
    'scope': 'support.function',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Invalid Broken',
    'scope': 'invalid.broken',
    'settings': {
      'background': color2
  ,
      'foreground': background,
    }
  },
  {
    'name': 'Invalid Unimplemented',
    'scope': 'invalid.unimplemented',
    'settings': {
      'background': color5,
      'foreground': foreground,
    }
  },
  {
    'name': 'Invalid Illegal',
    'scope': 'invalid.illegal',
    'settings': {
      'foreground': foreground,
      'background': color2

    }
  },
  {
    'name': 'Language Variable',
    'scope': 'variable.language',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Support Variable Property',
    'scope': 'support.variable.property',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Variable Function',
    'scope': 'variable.function',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Variable Interpolation',
    'scope': 'variable.interpolation',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Meta Function Call',
    'scope': 'meta.function-call',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Punctuation Section Embedded',
    'scope': 'punctuation.section.embedded',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Template Strings',
    'scope': 'string.template meta.template.expression',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Italics',
    'scope': 'italic',
    'settings': {
      'foreground': color3,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Bold',
    'scope': 'bold',
    'settings': {
      'foreground': color4,
      'fontStyle': 'bold'
    }
  },
  {
    'name': 'Quote',
    'scope': 'quote',
    'settings': {
      'foreground': color1,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Raw Code',
    'scope': 'raw',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'CoffeScript Variable Assignment',
    'scope': 'variable.assignment.coffee',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'CoffeScript Parameter Function',
    'scope': 'variable.parameter.function.coffee',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'CoffeeScript Assignments',
    'scope': 'variable.assignment.coffee',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'C# Readwrite Variables',
    'scope': 'variable.other.readwrite.cs',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'C# Classes & Storage types',
    'scope': [
      'entity.name.type.class.cs',
      'storage.type.cs'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'C# Namespaces',
    'scope': 'entity.name.type.namespace.cs',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Tag names in Stylesheets',
    'scope': [
      'entity.name.tag.css',
      'entity.name.tag.less',
      'entity.name.tag.custom.css'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Wildcard(*) selector in Stylesheets',
    'scope': [
      'entity.name.tag.wildcard.css',
      'entity.name.tag.wildcard.less',
      'entity.name.tag.wildcard.scss',
      'entity.name.tag.wildcard.sass'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'CSS Keyword Other Unit',
    'scope': 'keyword.other.unit.css',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Attribute Name for CSS',
    'scope': 'meta.attribute-selector.css entity.other.attribute-name.attribute',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Elixir Classes',
    'scope': [
      'source.elixir support.type.elixir',
      'source.elixir meta.module.elixir entity.name.class.elixir'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Elixir Functions',
    'scope': 'source.elixir entity.name.function',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Elixir Constants',
    'scope': [
      'source.elixir constant.other.symbol.elixir',
      'source.elixir constant.other.keywords.elixir'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Elixir String Punctuations',
    'scope': 'source.elixir punctuation.definition.string',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Elixir',
    'scope': [
      'source.elixir variable.other.readwrite.module.elixir',
      'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Elixir Binary Punctuations',
    'scope': 'source.elixir .punctuation.binary.elixir',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Go Function Calls',
    'scope': 'source.go meta.function-call.go',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'ID Attribute Name in HTML',
    'scope': 'entity.other.attribute-name.id.html',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'HTML Punctuation Definition Tag',
    'scope': 'punctuation.definition.tag.html',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'HTML Doctype',
    'scope': 'meta.tag.sgml.doctype.html',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'JavaScript Classes',
    'scope': 'meta.class entity.name.type.class.js',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'JavaScript Method Declaration e.g. `constructor`',
    'scope': 'meta.method.declaration storage.type.js',
    'settings': {
      'foreground': color4,
      'fontStyle': 'normal'
    }
  },
  {
    'name': 'JavaScript Terminator',
    'scope': 'terminator.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Meta Punctuation Definition',
    'scope': 'meta.js punctuation.definition.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Entity Names in Code Documentations',
    'scope': [
      'entity.name.type.instance.jsdoc',
      'entity.name.type.instance.phpdoc'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Other Variables in Code Documentations',
    'scope': [
      'variable.other.jsdoc',
      'variable.other.phpdoc'
    ],
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'JavaScript module import',
    'scope': [
      'variable.other.meta.import.js',
      'meta.import.js variable.other'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Variable Parameter Function',
    'scope': 'variable.parameter.function.js',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'JavaScript Variable Other ReadWrite',
    'scope': 'variable.other.readwrite.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript[React] Variable Other Object',
    'scope': [
      'variable.other.object.js',
      'variable.other.object.jsx',
      'variable.object.property.js',
      'variable.object.property.jsx'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JSX children',
    'scope': [
      'meta.jsx.children.js.jsx',
      'meta.jsx.children.js.jsx',
    ],
    'settings': {
      'foreground': color1,
    }
  },
  {
    'name': 'JSX Curlys',
    'scope': [
      'punctuation.section.embedded.begin.js.jsx',
      'punctuation.section.embedded.end.js.jsx',
    ],
    'settings': {
      'foreground': foreground,
    }
  },
  {
    'name': 'JavaScript Variables',
    'scope': [
      'variable.js',
      'variable.other.js'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Entity Name Type',
    'scope': [
      'entity.name.type.js',
      'entity.name.type.module.js'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'JavaScript Support Classes',
    'scope': 'support.class.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JSON Property Names',
    'scope': 'support.type.property-name.json',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'JSON Support Constants',
    'scope': 'support.constant.json',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'JSON Property values (string)',
    'scope': 'meta.structure.dictionary.value.json string.quoted.double',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Strings in JSON values',
    'scope': 'string.quoted.double.json punctuation.definition.string.json',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Specific JSON Property values like null',
    'scope': 'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Ruby Variables',
    'scope': 'variable.other.ruby',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Ruby Hashkeys',
    'scope': 'constant.language.symbol.hashkey.ruby',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'LESS Tag names',
    'scope': 'entity.name.tag.less',
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'LESS Keyword Other Unit',
    'scope': 'keyword.other.unit.css',
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'Attribute Name for LESS',
    'scope': 'meta.attribute-selector.less entity.other.attribute-name.attribute',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Markdown Headings',
    'scope': 'markup.heading.markdown',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Markdown Italics',
    'scope': 'markup.italic.markdown',
    'settings': {
      'foreground': color3,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Markdown Bold',
    'scope': 'markup.bold.markdown',
    'settings': {
      'foreground': color4,
      'fontStyle': 'bold'
    }
  },
  {
    'name': 'Markdown Quote + others',
    'scope': 'markup.quote.markdown',
    'settings': {
      'foreground': color1,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Markdown Raw Code + others',
    'scope': 'markup.inline.raw.markdown',
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Markdown Links',
    'scope': [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown'
    ],
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Markdown Link Title and Description',
    'scope': [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Markdown Punctuation',
    'scope': [
      'punctuation.definition.string.markdown',
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'meta.link.inline.markdown punctuation.definition.string'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Markdown MetaData Punctuation',
    'scope': [
      'punctuation.definition.metadata.markdown'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'Markdown List Punctuation',
    'scope': [
      'beginning.punctuation.definition.list.markdown'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Support Classes in PHP',
    'scope': 'support.class.php',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Punctuations in PHP function calls',
    'scope': 'meta.function-call.php punctuation',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'PHP Global Variables',
    'scope': 'variable.other.global.php',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Declaration Punctuation in PHP Global Variables',
    'scope': 'variable.other.global.php punctuation.definition.variable',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Language Constants in Python',
    'scope': 'constant.language.python',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Python Function Parameter and Arguments',
    'scope': [
      'variable.parameter.function.python',
      'meta.function-call.arguments.python'
    ],
    'settings': {
      'foreground': color1
    }
  },
  {
    'name': 'Punctuations in Python',
    'scope': 'punctuation.python',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Decorator Functions in Python',
    'scope': 'entity.name.function.decorator.python',
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Variables in SASS At-Rules',
    'scope': [
      'source.css.scss meta.at-rule variable',
      'source.css.sass meta.at-rule variable'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'Attribute Name for SASS',
    'scope': [
      'meta.attribute-selector.scss entity.other.attribute-name.attribute',
      'meta.attribute-selector.sass entity.other.attribute-name.attribute'
    ],
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Tag names in SASS',
    'scope': [
      'entity.name.tag.scss',
      'entity.name.tag.sass'
    ],
    'settings': {
      'foreground': color2

    }
  },
  {
    'name': 'SASS Keyword Other Unit',
    'scope': [
      'keyword.other.unit.scss',
      'keyword.other.unit.sass'
    ],
    'settings': {
      'foreground': color3
    }
  },
  {
    'name': 'TypeScript[React] Variables and Object Properties',
    'scope': [
      'variable.other.readwrite.alias.ts',
      'variable.other.readwrite.alias.tsx',
      'variable.other.readwrite.ts',
      'variable.other.readwrite.tsx',
      'variable.other.object.ts',
      'variable.other.object.tsx',
      'variable.object.property.ts',
      'variable.object.property.tsx',
      'variable.other.ts',
      'variable.other.tsx',
      'variable.tsx',
      'variable.ts'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Entity Name Types',
    'scope': [
      'entity.name.type.ts',
      'entity.name.type.tsx'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'TypeScript[React] Node Classes',
    'scope': [
      'support.class.node.ts',
      'support.class.node.tsx'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'TypeScript[React] Entity Name Types as Parameters',
    'scope': [
      'meta.type.parameters.ts entity.name.type',
      'meta.type.parameters.tsx entity.name.type'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Import Punctuations',
    'scope': [
      'meta.import.ts punctuation.definition.block',
      'meta.import.tsx punctuation.definition.block'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Punctuation Decorators',
    'scope': [
      'meta.decorator punctuation.decorator.ts',
      'meta.decorator punctuation.decorator.tsx'
    ],
    'settings': {
      'foreground': color4
    }
  },
  {
    'name': 'TypeScript[React] Punctuation Decorators',
    'scope': [
      'meta.jsx.children.tsx',
      'meta.tag.js meta.jsx.children.tsx'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'YAML Entity Name Tags',
    'scope': 'entity.name.tag.yaml',
    'settings': {
      'foreground': color5
    }
  },
  {
    'name': 'Normalize font style of certain Components',
    'scope': [
      'meta.property-list.css meta.property-value.css variable.other.less',
      'meta.property-list.scss variable.scss',
      'meta.property-list.sass variable.sass',
      'keyword.operator.logical',
      'keyword.operator.arithmetic',
      'keyword.operator.bitwise',
      'keyword.operator.increment',
      'keyword.operator.ternary',
      'keyword.operator.comparison',
      'keyword.operator.assignment',
      'keyword.operator.operator',
      'keyword.operator.or.regexp',
      'punctuation.definintion.string',
      'punctuation'
    ],
    'settings': {
      'fontStyle': 'normal'
    }
  },
]
