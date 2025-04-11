"use client";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/components/BottomNavbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const StorePage = () => {
    const router = useRouter();
    const featuredImages = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVACkpTB-jEuIMqPCHxgu84RCAUpSpd8ikA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Yywo1LuQVLTrYnZu1UfhLDUgGCUVB8kSZw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGzBMFq3g0Gvf_3aE8-cCiadZqpyqriMTsQ&s',
    ];
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10 ">
                <div className="p-4 flex items-center justify-between">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.223" height="23.392" viewBox="0 0 22.223 23.392">
                            <path id="Categories_Icon" d="M124.094-869.474,130.527-880l6.433,10.526Zm12.866,12.866a5.076,5.076,0,0,1-3.728-1.535,5.076,5.076,0,0,1-1.535-3.728,5.076,5.076,0,0,1,1.535-3.728,5.076,5.076,0,0,1,3.728-1.535,5.076,5.076,0,0,1,3.728,1.535,5.076,5.076,0,0,1,1.535,3.728,5.076,5.076,0,0,1-1.535,3.728A5.076,5.076,0,0,1,136.959-856.608ZM120-857.193v-9.357h9.357v9.357Z" transform="translate(-120 880)" />
                        </svg>
                    </button>
                    <h1 className="app-title">Store</h1>
                    <div className="flex items-center gap-3">
                        <button onClick={() => router.push("/addToCart")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.124" height="20.143" viewBox="0 0 20.124 20.143">
                                <path id="Cart_Icon" d="M46.043-859.857a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,46.043-859.857Zm10.071,0a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,56.114-859.857ZM44.23-877.986H59.085a.964.964,0,0,1,.881.516,1.015,1.015,0,0,1,.025,1.045l-3.575,6.446a2.017,2.017,0,0,1-.743.781,1.959,1.959,0,0,1-1.02.277h-7.5l-1.108,2.014H58.128v2.014H46.043a1.864,1.864,0,0,1-1.712-.995,1.9,1.9,0,0,1-.05-1.977l1.36-2.467-3.626-7.654H40V-880h3.273Z" transform="translate(-40 880)" />
                            </svg></button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 20 20">
                                <path id="Search_Icon" d="M138.444-820l-7-7a6.623,6.623,0,0,1-1.917,1.056,6.773,6.773,0,0,1-2.306.389,6.972,6.972,0,0,1-5.125-2.1,6.972,6.972,0,0,1-2.1-5.125,6.972,6.972,0,0,1,2.1-5.125,6.972,6.972,0,0,1,5.125-2.1,6.971,6.971,0,0,1,5.125,2.1,6.972,6.972,0,0,1,2.1,5.125,6.772,6.772,0,0,1-.389,2.305A6.62,6.62,0,0,1,133-828.556l7,7Zm-11.222-7.778a4.822,4.822,0,0,0,3.542-1.458,4.822,4.822,0,0,0,1.458-3.542,4.822,4.822,0,0,0-1.458-3.542,4.822,4.822,0,0,0-3.542-1.458,4.822,4.822,0,0,0-3.542,1.458,4.822,4.822,0,0,0-1.458,3.542,4.822,4.822,0,0,0,1.458,3.542A4.822,4.822,0,0,0,127.222-827.778Z" transform="translate(-120 840)" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 rounded-2xl my-6">
                <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // proper autoplay config
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    className="w-full"
                >
                    {featuredImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Featured Hoodie ${index + 1}`}
                                className="h-60 mx-auto object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                    <div className="bg-gray-100  h-48 rounded-xl text-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-casual-and-stylish-a-black-t-shirt-hanging-neatly-on-hanger-png-image_15725290.png" // Replace with actual image
                            alt="Camisetas"
                            className="h-full w-full object-contain"
                            onClick={() => router.push("/productDetails/2")}
                        />
                    </div>
                    <p className="text-lg font-semibold my-1">Camisetas</p>
                </div>
                <div>
                    <div className="bg-gray-100 h-48 rounded-xl text-center">
                        <img
                            src="https://3dmodels.org/wp-content/uploads/hq3dmod/5211_Quilted_Jacket_for_Men_Mockup_Light_Blue/Quilted_Jacket_for_Men_Mockup_Light_Blue_1000_0008.jpg" // Replace with actual image
                            alt="Sudaderas"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <p className="text-lg font-semibold my-1">Sudaderas</p>
                </div>
                <div>
                    <div className="bg-gray-100  h-48 rounded-xl text-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-casual-and-stylish-a-black-t-shirt-hanging-neatly-on-hanger-png-image_15725290.png" // Replace with actual image
                            alt="Camisetas"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <p className="text-lg font-semibold my-1">Camisetas</p>
                </div>
                <div>
                    <div className="bg-gray-100 h-48 rounded-xl text-center">
                        <img
                            src="https://3dmodels.org/wp-content/uploads/hq3dmod/5211_Quilted_Jacket_for_Men_Mockup_Light_Blue/Quilted_Jacket_for_Men_Mockup_Light_Blue_1000_0008.jpg" // Replace with actual image
                            alt="Sudaderas"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <p className="text-lg font-semibold my-1">Sudaderas</p>
                </div>
            </div>
            <div className="text-center pb-28">
                <div className="bg-gray-100 h-48 rounded-xl flex justify-center items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="92.483" height="74.003" viewBox="0 0 92.483 74.003">
                        <path id="Handshake_Icon" d="M70.521,27.545H48.555v7.494c0,5.442-3.913,10.4-9.328,10.95A10.41,10.41,0,0,1,27.746,35.638V18.2L24.2,20.324A21.315,21.315,0,0,0,13.878,38.586L2.318,45.277a4.613,4.613,0,0,0-1.7,6.3L12.18,71.611a4.654,4.654,0,0,0,6.322,1.7l14.942-8.634h19.74a9.267,9.267,0,0,0,9.249-9.249,6.936,6.936,0,0,0,6.936-6.936V41.548h1.156a3.469,3.469,0,0,0,3.468-3.468V31.143A3.582,3.582,0,0,0,70.521,27.545Zm21.344-5.289L80.311,2.227a4.654,4.654,0,0,0-6.322-1.7L59.046,9.164H50A29.287,29.287,0,0,0,34.527,13.59,4.646,4.646,0,0,0,32.37,17.5V35.768a5.78,5.78,0,1,0,11.561,0V22.921h26.59a8.092,8.092,0,0,1,8.093,8.093v4.119l11.561-6.684A4.456,4.456,0,0,0,91.865,22.256Z" transform="translate(0 0.083)" />
                    </svg>
                </div>
                <p className="text-lg font-semibold mt-2">Sudaderas</p>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default StorePage;
