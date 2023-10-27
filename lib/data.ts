


export interface PreviewPostData {
    post?: {
        databaseId: string;
        slug: string;
        status: string;
    };
}

export interface AllPostsWithSlugData {
    posts?: Posts;
}

export interface SEO {
    readingTime: string;
}

export interface TagNode {
    name: string;
}

export interface Tags {
    nodes: TagNode[];
}

export interface FeaturedImageNode {
    sourceUrl: string;
}

export interface FeaturedImage {
    node: FeaturedImageNode;
}

export interface AuthorNode {
    name: string;
    firstName: string;
    lastName: string;
    avatar: {
        url: string;
    };
}

export interface Author {
    node: AuthorNode;
}

export interface PostNode {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    seo: SEO;
    tags: Tags[];
    featuredImage: FeaturedImage;
    author: Author;
}

export interface PostEdge {
    node: PostNode;
}

export interface AllPosts {
    edges: PostEdge[];
}

export interface AllPostsData {
    posts?: AllPosts;
}
export interface AuthorFields {
    name: string;
    firstName: string;
    lastName: string;
    avatar: {
        url: string;
    };
}

export interface PostFields {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    seo: {
        readingTime: string;
    };
    featuredImage: {
        node: {
            sourceUrl: string;
        };
    };
    author: {
        node: AuthorFields;
    };
    categories: {
        edges: {
            node: {
                name: string;
            };
        }[];
    };
    tags: {
        edges: {
            node: {
                name: string;
            };
        }[];
    };
}

export interface RevisionNode extends PostFields {
    content: string;
}

export interface RevisionEdge {
    node: RevisionNode;
}

export interface Revisions {
    edges: RevisionEdge[];
}

export interface Post extends PostFields {
    content?: string;
    revisions?: Revisions;
}

export interface PostsEdge {
    node: PostFields;
}

export interface Posts {
    edges: PostsEdge[];
}

export interface PostBySlugData {
    post?: Post;
    posts?: Posts;
}
