import { Config } from "apollo-server-micro";

const DB = {
    articles: [
        { id: 1, title: "oliver article", content: "hoge" },
        { id: 2, title: "minakawa article", content: "foo" },
    ],
    forSsrs: [
        { id: 1, content: 'for ssr' }
    ]
};

export const resolvers: Config["resolvers"] = {
    Query: {
        getArticle: (_, { id }: { id: number }) => {
            const articles = DB.articles?.filter((a) => a.id === id);
            return articles ? articles[0] : [];
        },
        getArticles: () => DB.articles,
        getForSsr: (_, { id }: { id: number }) => {
            const forSsrs = DB.forSsrs?.filter((a) => a.id === id);
            return forSsrs ? forSsrs[0] : [];
        },
        getForSsrs: () => DB.forSsrs,
    },
};