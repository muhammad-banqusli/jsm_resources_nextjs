import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Image from "next/image";

type ResourceType = {
    title: string;
    id: string;
    image: string;
    downloadLink: string;
    views: number;
    slug: string;
};

type PropTypes = {
    resource: ResourceType;
};

export default function ResourceCard({ resource }: PropTypes) {
    const { id, title, image, downloadLink, views } = resource;
    
    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Link href={downloadLink} target="_blank">
                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image
                            src={image}
                            alt={title}
                            className="h-full rounded-md object-cover"
                            width={384}
                            height={440}
                        />
                    </div>
                    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full">
                        {title}
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Link>
            <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white">
                    <Image
                        src="/downloads.svg"
                        width={20}
                        height={20}
                        alt="download"
                    />
                    {views}
                </div>
                <Link href={downloadLink} className="flex-center text-gradient_purple-blue body-semibold gap-1.5" target="_blank">
                    Download Now
                    <Image
                        src="/arrow-blue.svg"
                        width={13}
                        height={10}
                        alt="arrow"
                    />
                </Link>
            </CardContent>
        </Card>
    );
}
