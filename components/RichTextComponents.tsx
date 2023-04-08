import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import styles from "../styles/richText.module.scss"

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
    return builder.image(source)
}

export const RichTextComponents = {
    image: (props: any) => {
        return (
            <div className={styles['next-image-div']}>
                <Image
                    src={urlFor(props.asset).url()!}
                    alt={props.alt}
                    fill
                    className={styles['next-image']}
                />
            </div>
        )
    }
}