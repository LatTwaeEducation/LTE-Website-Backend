import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getCourseColor = async (settingName) => {
    const query = `
  query ($settingName: String!) {
    coursePageSettingCollection(where: { name: $settingName }, limit: 1) {
      items {
        color
        secondaryColor
      }
    }
  }`;
    const queryVariable = {
        settingName,
    };
    const { coursePageSettingCollection } = await sendGraphQl(query, queryVariable);
    return coursePageSettingCollection.items.at(0);
};
export const getCoursePageSettingId = async (settingName) => {
    const query = `
    query ($settingName: String!) {
        coursePageSettingCollection(where: { name: $settingName }, limit: 1) {
          items {
            sys {
              id
            }
          }
        }
      }`;
    const queryVariable = {
        settingName,
    };
    const { coursePageSettingCollection } = await sendGraphQl(query, queryVariable);
    return coursePageSettingCollection.items[0]?.sys.id;
};
export const getCoursePageSettingById = async (settingId) => {
    const query = `
  query ($settingId: String!) {
    coursePageSetting(id: $settingId) {
      sys {
        id
      }
      name
      title
      description
      image {
        title
        url
      }
      body {
        json
        links {
          assets {
            block {
              url
            }
          }
        }
      }
    }
  }`;
    const queryVariable = {
        settingId,
    };
    const { coursePageSetting } = await sendGraphQl(query, queryVariable);
    return coursePageSetting;
};
