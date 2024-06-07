import { generateParagraphsArray } from "../Helpers/RichTextParser";
export const mapCoursePageSetting = (dbObject) => {
    return {
        title: dbObject.title,
        description: dbObject.description,
        image: dbObject.image?.url,
        body: dbObject.body ? generateParagraphsArray(dbObject.body) : undefined,
    };
};
