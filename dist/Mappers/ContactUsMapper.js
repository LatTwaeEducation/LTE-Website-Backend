export const mapContactFormSubmission = (src) => {
    return {
        fields: {
            fullName: {
                'en-US': src.fullName,
            },
            email: {
                'en-US': src.email,
            },
            phone: {
                'en-US': src.phone,
            },
            message: {
                'en-US': src.message,
            },
        },
    };
};
export const mapContactUs = (src) => ({
    name: src.name,
    content: src.content,
    heading: src.heading,
    phoneNumbers: src.phoneNumbers,
    emailAddresses: src.emailAddresses,
    address: src.address,
    btnContent: src.btnContent,
});
