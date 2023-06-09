export const convertToContentfulContactMessage = (src) => {
    const dest = {
        fields: {
            fullName: {
                'en-US': src.fullName,
            },
            email: {
                'en-US': src.email,
            },
            message: {
                'en-US': src.message,
            },
        },
    };
    if (src.phone) {
        dest.fields.phone = {
            'en-US': src.phone,
        };
    }
    return dest;
};
