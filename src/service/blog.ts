import { Blog } from "@/types/types";

export const getPosts = (): Blog[] => {
    const data: Blog[] = require('@/../data/posts.json');

    return data;
}

export const getPost = (id: string) => {

    const data = getPosts();

    return data.find(item => item.id === Number(id));
}