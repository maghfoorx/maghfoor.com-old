import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import "../styles/richText.scss"

const projectId = process.env.SANITY_PROJECT_ID!;

const builder = imageUrlBuilder({ projectId, dataset: "production" });

function urlFor(source: any) {
    return builder.image(source).width(400).height(400)
}

export const RichTextComponents = {
    image: (props: any) => {
        console.log(props)
        return (
            <div className='next-image-div'>
                <Image
                    src={urlFor(props.asset).url()!}
                    alt={props.alt}
                    fill
                    className='next-image'
                />
            </div>
        )
    }
}