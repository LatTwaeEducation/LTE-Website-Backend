"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFirstParagraph = void 0;
const rich_text_types_1 = require("@contentful/rich-text-types");
function extractFirstParagraph(richTextDocument) {
    if (!richTextDocument) {
        return '';
    }
    const paragraphOnlyNodes = richTextDocument.content.filter((node) => node.nodeType === rich_text_types_1.BLOCKS.PARAGRAPH);
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
exports.extractFirstParagraph = extractFirstParagraph;
