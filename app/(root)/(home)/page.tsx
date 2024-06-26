import Filters from "@/components/Filters";
import SearchForm from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import ResourceCard from "@/components/ResourceCard";
import Header from "@/components/Header";

export const revalidate = 900;

interface Props {
    searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: Props) {
    const resources = await getResources({
        query: searchParams?.query || "",
        category: searchParams?.category || "",
        page: "1",
    });

    const resourcesPlaylist = await getResourcesPlaylist();

    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
            <section className="nav-padding w-full">
                <div className="flex-center relative w-full min-h-[274px] felx-col rounded-xl bg-banner bg-cover bg-center text-center">
                    <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
                        JavaScript Mastery Resources
                    </h1>
                </div>
                <SearchForm />
            </section>
            <Filters />
            {searchParams?.query ||
                (searchParams?.category && (
                    <section className="flex-center mt-6 w-full flex-col">
                        <Header
                            query={searchParams?.query || ""}
                            category={searchParams?.category || ""}
                        />
                        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                            {resources?.length > 0 ? (
                                resources.map((resource: any) => (
                                    <ResourceCard
                                        key={resource._id}
                                        resource={resource}
                                    />
                                ))
                            ) : (
                                <p className="body-regular text-white-400">
                                    No Resources Found
                                </p>
                            )}
                        </div>
                    </section>
                ))}
            {resourcesPlaylist.map((item: any) => (
                <section
                    key={item._id}
                    className="flex-center mt-6 w-full flex-col sm:mt-20"
                >
                    <h1 className="heading3 self-start text-white-800">
                        {item.title}
                    </h1>
                    <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                        {item.resources?.length > 0 ? (
                            item.resources.map((resource: any) => (
                                <ResourceCard
                                    key={resource._id}
                                    resource={resource}
                                />
                            ))
                        ) : (
                            <p className="body-regular text-white-400">
                                No Resources Found
                            </p>
                        )}
                    </div>
                </section>
            ))}
        </main>
    );
}
