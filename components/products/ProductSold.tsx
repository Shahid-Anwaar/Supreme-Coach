import Link from "next/link";


export default function ProductSold() {
    return (
        <section className="overflow-hidden section-container py-0  ">
            <div className="mx-auto bg-[#1c4774] section-spacing rounded-lg ">
                <div className="relative text-center">
                    <h2 className="section-title mx-auto mt-5 text-white">
                        30M+ products have been sold using Augment
                    </h2>
                    <Link
                        href="/"
                        className="contained-btn mt-8 px-8 py-3 sm:mt-10 capitalize!"
                    >
                        Start for free
                    </Link>
                </div>
            </div>
        </section>
    )
}
