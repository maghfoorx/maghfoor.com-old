import { groq } from "next-sanity";

export const groqQueries = {
  getPosts: groq`
    *[_type=="post" && slug.current == $slug][0]{...}
    `,
};
