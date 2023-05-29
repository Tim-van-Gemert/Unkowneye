import Link from "next/link"

export default function Header () {
    const pages = [
        {
            id: 1,
            name: 'Home',
            slug: '/',
        },
        {
            id: 2,
            name: 'Stats',
            slug: '/stats',
        },
        {
            id: 3,
            name: 'Matches',
            slug: '/matches',
        },
        {
            id: 4,
            name: 'Clan',
            slug: '/clan',
        }
    ]
    return (
        <>
            <div className="w-screen text-lg font-thin h-full p-5  font-primary gap-12  min-w-screen min-h-full flex flex-row">

                    {
                        pages.map((page)=>{
                            return (
                                <div key={`pageID: ${page.id}`} className="flex font-primary text-[20px] uppercase flex-col group">
                                    <Link  href={page.slug}>{page.name}</Link>
                                    <div className="w-0 group-hover:w-full h-[2px] bg-black transition-all"></div>
                                </div>
                            )
                        })
                    }
                </div>
        </>
    )
}