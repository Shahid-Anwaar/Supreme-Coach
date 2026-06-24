import { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultSEO = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    // icons: {
    //     icon: [
    //         { url: "/logos/s coach fav 2.svg" },
    //         { url: "/icon.png", type: "image/png" },
    //     ],
    //     apple: [{ url: "/apple-icon.png" }],
    // },
    icons: {
        icon: "/logos/s coach fav 2.svg",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} Open Graph image`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        // site: siteConfig.twitterHandle,
        // creator: siteConfig.twitterHandle,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    // verification: {
    //     google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    //     yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    //     yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    // },
};


type CreateMetadataProps = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    noIndex?: boolean;
    keywords?: string[];
};

export function createMetadata({
    title,
    description,
    path = "/",
    image = siteConfig.ogImage,
    noIndex = false,
    keywords,
}: CreateMetadataProps): Metadata {
    const url = new URL(path, siteConfig.url).toString();
    const imageUrl = new URL(image, siteConfig.url).toString();
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    };
}