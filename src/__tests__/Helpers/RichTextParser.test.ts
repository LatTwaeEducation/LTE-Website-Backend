import { BLOCKS } from '@contentful/rich-text-types';
import { RichText } from '@data/RichTextFormat';
import { generateParagraphsArray } from '@helpers/RichTextParser';
import dotenv from 'dotenv';

dotenv.config();

const testData = {
  json: {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [
          {
            nodeType: 'text',
            value:
              'IGCSE စာမေးပွဲကို ဖြေဆိုပြီး ပညာရေးခရီးလမ်းကို ဆက်လက်လျှောက်လှမ်းမဲ့ ကျောင်းသား၊ ကျောင်းသူလေးများအတွက် ဘယ်သူမဆို တက်ရောက်နိုင်မယ့် သင့်လျော်တဲ့ သင်တန်းကြေးရှိပါမယ်။',
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
              id: '2K04oXuq2Kef4qmDuehDrD',
              type: 'Link',
              linkType: 'Asset',
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
            value:
              'ပြီးတော့ Computer Science (CS)/ Computer Engineering (CE) နယ်ပယ်တွေမှာ လက်တွေ့အသုံးချ အလုပ်လုပ်ကိုင်နေတဲ့ နည်းပြဆရာတွေက Specialised ယူထားတဲ့ သင်ခန်းစာတွေအလိုက် စနစ်တကျ လေ့ကျင့်သင်ကြားပေးမှာဖြစ်လို့ ပညာရပ်တွေကို နားမလည်မှာ၊ စာမရှင်းမှာတွေကို မပူရတော့ဘူးပေါ့\r\nဒါ့အပြင် ဆရာတွေက လူငယ်တွေဖြစ်လို့ စာပြန်မေးတဲ့အခါမှာလည်း ကြောက်နေစရာမလိုပဲ လွတ်လွတ်လပ်လပ် ပေါ့ပေါ့ပါးပါး ဆွေးနွေးပြောဆိုလို့ရစေမဲ့ စာသင်ခန်းပတ်ဝန်းကျင်လေး ဖြစ်စေမှာပါ။\r\nအတန်းတစ်တန်းစီအတွက် လူဦးရေ ကန့်သတ်ထားတာဖြစ်တာကြောင့် ထိထိရောက်ရောက် ဂရုစိုက်ပြီး သင်ပေးနိုင်သလို အတူသင်ယူမဲ့ အဖော်သူငယ်ချင်းတွေ ရှိတဲ့အတွက် တယောက်နဲ့ တယောက် အမြင်ချင်းဖလှယ်လို့ ရနိုင်ပါမယ်။',
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
              id: '2K04oXuq2Kef4qmDuehDrD',
              type: 'Link',
              linkType: 'Asset',
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
            value:
              'စာမေးပွဲအတွက် အဆင်သင့်ဖြစ်နေအောင် Assignment တွေ၊ သင်ခန်းစာတိုင်းအတွက် Mockup Test တွေအပြင် မေးခွန်းဟောင်းများနှင့်ပါ လေ့ကျင့်သင်ကြားပေးမှာဖြစ်ပါတယ်။ အတန်းများကိုတော့ Zoom Platform နဲ့ Online ကနေသင်ကြားပေးမှာဖြစ်ပြီး တကယ်လို့ မီးပျက်တာတွေ၊ အင်တာနက်လိုင်းပျက်တာတွေအတွက် စာမမှီလိုက်မှာလည်း စိုးရိမ်စရာမလိုပါဘူးနော်။ အဲ့လိုရှောင်လွဲလို့မရတဲ့ အရေးကြီးကိစ္စမျိုးကြုံလာရင် LTE ကနေ သင်ခန်းစာရဲ့ Recorded Video ကို ပေးပို့ပေးမှာပါ။',
            marks: [],
            data: {},
          },
        ],
      },
    ],
  },
  links: {
    assets: {
      block: [
        {
          sys: {
            id: '2K04oXuq2Kef4qmDuehDrD',
          },
          url: 'https://images.ctfassets.net/gxxheul7hh8o/2K04oXuq2Kef4qmDuehDrD/65f5deac572e098e557d643402052a24/LTE_Re-branded_Logo-02.png',
          title: 'Lat Twae Education Logo',
        },
      ],
    },
  },
} satisfies RichText;

describe('Rich Text Parser Tests', () => {
  describe('generateParahraphsArray', () => {
    test('Should return paragraph as array items', () => {
      const result = generateParagraphsArray(testData);
      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
      expect(Array.isArray(result.images)).toBeTruthy();
      expect(Array.isArray(result.paragraphs)).toBeTruthy();
      expect(result.images.length).toBe(2);
      expect(result.paragraphs.length).toBe(3);
    });
  });
});
