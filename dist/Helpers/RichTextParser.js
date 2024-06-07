import { BLOCKS, helpers } from '@contentful/rich-text-types';
const MAX_DESCRIPTION_LENGTH = 500;
const isParagraph = (block) => {
    return block.nodeType === BLOCKS.PARAGRAPH;
};
export const generateParagraphsArray = (richText) => {
    const documentNode = richText.json;
    const contentBlocks = documentNode.content;
    const paragraphArray = contentBlocks
        .filter(isParagraph)
        .flatMap((p) => p.content.filter(helpers.isText).map((t) => t.value));
    const assetArray = contentBlocks
        .filter((n) => n.nodeType === BLOCKS.EMBEDDED_ASSET)
        .map((n) => n.data.target.sys.id)
        .map((id) => richText.links?.assets?.block?.find((b) => b.sys?.id === id)?.url ?? '');
    return {
        images: assetArray,
        paragraphs: paragraphArray,
    };
};
export function extractFirstParagraph(richText, maxLength = MAX_DESCRIPTION_LENGTH) {
    const paragrahpBlocks = richText.json.content.filter(isParagraph);
    let currentLength = 0;
    const textNodes = paragrahpBlocks.flatMap((p) => p.content.filter(helpers.isText));
    const texts = textNodes.map((t) => t.value);
    const maxTextIndex = texts.findIndex((t) => {
        if (t.length + currentLength >= maxLength) {
            return true;
        }
        currentLength += t.length;
        return false;
    });
    const textToJoin = maxTextIndex > -1 ? texts.slice(maxTextIndex) : texts;
    return textToJoin.join('');
}
