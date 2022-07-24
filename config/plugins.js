module.exports = () => ({
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                article: {
                    field: 'slug',
                    references: 'title',
                },
            },
        },
    },

    comments: {
        enabled: true,
        config: {
            approvalFlow: ["api::post.post"],
            entryLabel: {
                "*": ["Title", "title", "Name", "name", "Subject", "subject"],
                "api::post.post": ["MyField"],
            },
            reportReasons: {
                MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
            },
            gql: {
                auth: true
            },
        },
    },
});