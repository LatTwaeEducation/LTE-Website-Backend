import { BLOCKS } from '@contentful/rich-text-types';
export function extractFirstParagraph(richTextDocument) {
    if (!richTextDocument) {
        return '';
    }
    const paragraphOnlyNodes = richTextDocument.content.filter((node) => node.nodeType === BLOCKS.PARAGRAPH);
    let description = '';
    for (let i = 0; i < paragraphOnlyNodes.length; i += 1) {
        const textNodes = paragraphOnlyNodes[i].content.filter((node) => node.nodeType === 'text');
        description += textNodes.map((node) => node.value).join('');
        if (description.length >= 500) {
            break;
        }
    }
    return description;
}
