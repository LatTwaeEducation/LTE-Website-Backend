import { BLOCKS, Document } from '@contentful/rich-text-types';
import { extractFirstParagraph } from 'src/services/CustomHtmlRenderers';

const texts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tellus blandit neque mollis pharetra',
  ' sit amet eget augue. Sed elementum non lorem vitae volutpat. Aliquam convallis velit eu efficitur posuere. Etiam consequat nunc nec viverra porttitor. Quisque scelerisque non lorem vel auctor. Vivamus non nisi arcu. Proin porta vehicula risus et volutpat. Sed faucibus, dui sit amet placerat molestie, purus massa auctor erat, quis vehicula mauris tellus non massa. Integer dui orci, fringilla vel commodo vel, consectetur vel nunc.',
  'Ut eu purus non nisl sagittis mollis eu non nisl. Nullam maximus, orci eu malesuada cursus, dolor elit tempor libero, ut convallis est metus sit amet lectus. Curabitur viverra risus id semper sagittis. In faucibus dui sapien, nec hendrerit mi blandit id. Vestibulum fermentum nunc et gravida varius. Nam vel nulla ac leo lacinia feugiat eget malesuada augue. Fusce turpis tortor, congue eget mi eget, gravida eleifend elit.',
  'Proin accumsan ex eu pulvinar aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu auctor est. Phasellus et metus ut orci posuere auctor. Vestibulum nunc tellus, congue nec ipsum ut, sollicitudin aliquam purus. Pellentesque rutrum nulla vitae augue dignissim, ut pellentesque elit euismod. Proin vestibulum purus mauris, id lacinia leo hendrerit a. Aenean odio odio, porta at tincidunt ac, ornare non urna. Fusce placerat lorem id sollicitudin hendrerit.',
  'Fusce eget finibus orci, blandit condimentum erat. Duis tincidunt dictum tortor, a aliquam ligula rutrum ut. Etiam quis ante id felis tristique aliquam. Etiam auctor consequat pharetra. Donec nec pellentesque felis. Etiam volutpat sem vehicula, vestibulum tellus sit amet, porttitor sem. Proin blandit dui eget dolor rutrum vulputate. Vivamus venenatis erat eu est ullamcorper posuere. Phasellus vestibulum mi id nulla commodo volutpat. Nam et odio eu risus euismod maximus eget et urna.',
  'Duis a metus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque varius quis ipsum at imperdiet. Vestibulum vestibulum lacus ac sem bibendum, in iaculis nisi tristique. Curabitur in ante risus. Maecenas egestas ante a nunc facilisis, ut venenatis dolor dictum. Nulla sed diam orci. Nam at vestibulum ipsum, sit amet luctus velit.',
];

const json: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: texts[0],
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: texts[1],
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.EMBEDDED_ASSET,
      data: {
        target: {
          sys: {
            id: '1234',
            type: 'Link',
            linkedType: 'Asset',
          },
        },
      },
      content: [],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: texts[1],
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: texts[2],
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: texts[3],
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: texts[4],
          marks: [],
          data: {},
        },
      ],
    },
  ],
};

describe('Contentful HTML Renderers Tests', () => {
  describe('Extracting First Paragraph Test', () => {
    test('It should extract front paragraphs with character counts less than or a bit more than 500', () => {
      const result = extractFirstParagraph(json);

      const expected = texts.reduce((outputText, current) => {
        if (outputText.length < 500) {
          return outputText + current;
        }

        return outputText;
      }, '');

      expect(typeof result).toBe('string');
      expect(result).toBe(expected);
    });
  });
});
