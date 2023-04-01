import { groq } from "next-sanity";

export const groqQueries = {
  getPost: groq`
    *[_type=="post" && slug.current == $slug][0]{...}
    `,
};
