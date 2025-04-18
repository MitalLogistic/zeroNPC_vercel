"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {
    const pathname = usePathname();
    const isActive = (paths) => paths.some(path => pathname.includes(path));
    return (
        <div className="bottombar">
            <div className="bottombar-container">
                <Link
                    href="/profile"
                    className={`bottombar-icon ${isActive(["/profile", "/friends", "/wardrobe"]) ? "text-black" : "text-[#78757E]"}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className={isActive(["/profile", "/friends", "/wardrobe"]) ? "opacity-100" : "opacity-70"}>

                        <path id="Me_Icon_Active" d="M90.5-861.625a1.811,1.811,0,0,1-1.331-.544,1.811,1.811,0,0,1-.544-1.331,1.81,1.81,0,0,1,.544-1.331,1.81,1.81,0,0,1,1.331-.544,1.81,1.81,0,0,1,1.331.544,1.81,1.81,0,0,1,.544,1.331,1.811,1.811,0,0,1-.544,1.331A1.811,1.811,0,0,1,90.5-861.625Zm9,0a1.81,1.81,0,0,1-1.331-.544,1.811,1.811,0,0,1-.544-1.331,1.81,1.81,0,0,1,.544-1.331,1.81,1.81,0,0,1,1.331-.544,1.81,1.81,0,0,1,1.331.544,1.81,1.81,0,0,1,.544,1.331,1.811,1.811,0,0,1-.544,1.331A1.811,1.811,0,0,1,99.5-861.625ZM95-853a11.581,11.581,0,0,0,8.513-3.488A11.581,11.581,0,0,0,107-865a13.186,13.186,0,0,0-.112-1.744,7.262,7.262,0,0,0-.413-1.631,13.892,13.892,0,0,1-1.575.281,13.975,13.975,0,0,1-1.65.094,14.68,14.68,0,0,1-6.45-1.463,14.974,14.974,0,0,1-5.175-4.088,14.789,14.789,0,0,1-3.431,5.081A14.653,14.653,0,0,1,83-865.225V-865a11.581,11.581,0,0,0,3.488,8.512A11.581,11.581,0,0,0,95-853Zm0,3a14.607,14.607,0,0,1-5.85-1.181,15.149,15.149,0,0,1-4.762-3.206,15.147,15.147,0,0,1-3.206-4.763A14.606,14.606,0,0,1,80-865a14.607,14.607,0,0,1,1.181-5.85,15.148,15.148,0,0,1,3.206-4.763,15.148,15.148,0,0,1,4.762-3.206A14.607,14.607,0,0,1,95-880a14.607,14.607,0,0,1,5.85,1.181,15.148,15.148,0,0,1,4.763,3.206,15.148,15.148,0,0,1,3.206,4.763A14.607,14.607,0,0,1,110-865a14.606,14.606,0,0,1-1.181,5.85,15.147,15.147,0,0,1-3.206,4.763,15.149,15.149,0,0,1-4.763,3.206A14.607,14.607,0,0,1,95-850Z" transform="translate(-80 880)" fill="currentColor" />
                    </svg>
                    <span className="bottombar-menu-name">Yo</span>
                </Link>
                <Link href="/community" className={`bottombar-icon ${isActive(["/community"]) ? "text-black" : "text-[#78757E]"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 30 30" className={isActive(["/community"]) ? "opacity-100" : "opacity-70"}>
                        <path id="Community_Icon" d="M89-859a2.889,2.889,0,0,0,2.119-.881A2.889,2.889,0,0,0,92-862a2.889,2.889,0,0,0-.881-2.119A2.889,2.889,0,0,0,89-865a2.889,2.889,0,0,0-2.119.881A2.889,2.889,0,0,0,86-862a2.889,2.889,0,0,0,.881,2.119A2.889,2.889,0,0,0,89-859Zm12,0a2.889,2.889,0,0,0,2.119-.881A2.889,2.889,0,0,0,104-862a2.889,2.889,0,0,0-.881-2.119A2.889,2.889,0,0,0,101-865a2.889,2.889,0,0,0-2.119.881A2.889,2.889,0,0,0,98-862a2.889,2.889,0,0,0,.881,2.119A2.889,2.889,0,0,0,101-859Zm-6-9a2.889,2.889,0,0,0,2.119-.881A2.889,2.889,0,0,0,98-871a2.889,2.889,0,0,0-.881-2.119A2.889,2.889,0,0,0,95-874a2.889,2.889,0,0,0-2.119.881A2.889,2.889,0,0,0,92-871a2.889,2.889,0,0,0,.881,2.119A2.889,2.889,0,0,0,95-868Zm0,18a14.606,14.606,0,0,1-5.85-1.181,15.147,15.147,0,0,1-4.763-3.206,15.147,15.147,0,0,1-3.206-4.763A14.606,14.606,0,0,1,80-865a14.606,14.606,0,0,1,1.181-5.85,15.147,15.147,0,0,1,3.206-4.763,15.147,15.147,0,0,1,4.763-3.206A14.606,14.606,0,0,1,95-880a14.606,14.606,0,0,1,5.85,1.181,15.147,15.147,0,0,1,4.763,3.206,15.147,15.147,0,0,1,3.206,4.763A14.606,14.606,0,0,1,110-865a14.606,14.606,0,0,1-1.181,5.85,15.147,15.147,0,0,1-3.206,4.763,15.147,15.147,0,0,1-4.763,3.206A14.606,14.606,0,0,1,95-850Z" transform="translate(-80 880)" fill="currentColor" />
                    </svg>
                    <span className="bottombar-menu-name">Comunidad</span>
                </Link>

                {/* Centered Upload Button */}
                <button className="scanner-btn">
                    <div className="scanner-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.72" height="35.72" viewBox="0 0 35.72 35.72">
                            <path id="QR_Yellow" d="M80-871.07V-880h8.93v3.572H83.572v5.358Zm0,26.79v-8.93h3.572v5.358H88.93v3.572Zm26.79,0v-3.572h5.358v-5.358h3.572v8.93Zm5.358-26.79v-5.358H106.79V-880h8.93v8.93Zm-4.465,18.753h2.679v2.679h-2.679Zm0-5.358h2.679V-855h-2.679ZM105-855h2.679v2.679H105Zm-2.679,2.679H105v2.679h-2.679ZM99.646-855h2.679v2.679H99.646ZM105-860.354h2.679v2.679H105Zm-2.679,2.679H105V-855h-2.679Zm-2.679-2.679h2.679v2.679H99.646Zm10.716-14.288v10.716H99.646v-10.716ZM96.074-860.354v10.716H85.358v-10.716Zm0-14.288v10.716H85.358v-10.716ZM93.4-852.317v-5.358H88.037v5.358Zm0-14.288v-5.358H88.037v5.358Zm14.288,0v-5.358h-5.358v5.358Z" transform="translate(-80 880)" fill="#ef0" />
                        </svg>
                    </div>
                </button>

                <Link href="/token" className={`bottombar-icon ${isActive(["/token"]) ? "text-black" : "text-[#78757E]"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 32.417" className={isActive(["/token"]) ? "opacity-100" : "opacity-70"}>
                        <path id="Tokens_Icon" d="M130.167-867.917l-8.417-4.708L135-880l13.25,7.375-8.417,4.708a6.75,6.75,0,0,0-2.208-1.542A6.533,6.533,0,0,0,135-870a6.533,6.533,0,0,0-2.625.542A6.75,6.75,0,0,0,130.167-867.917Zm3.167,20.333L120-855v-14.792L128.542-865a4.448,4.448,0,0,0-.167.813,8.183,8.183,0,0,0-.042.854,6.529,6.529,0,0,0,1.375,4.083,6.487,6.487,0,0,0,3.625,2.375ZM135-860a3.21,3.21,0,0,1-2.354-.979,3.21,3.21,0,0,1-.979-2.354,3.21,3.21,0,0,1,.979-2.354,3.21,3.21,0,0,1,2.354-.979,3.21,3.21,0,0,1,2.354.979,3.21,3.21,0,0,1,.979,2.354,3.21,3.21,0,0,1-.979,2.354A3.21,3.21,0,0,1,135-860Zm1.667,12.417v-9.292a6.487,6.487,0,0,0,3.625-2.375,6.529,6.529,0,0,0,1.375-4.083,8.183,8.183,0,0,0-.042-.854,4.447,4.447,0,0,0-.167-.812L150-869.792V-855Z" transform="translate(-120 880)" fill="currentColor" />
                    </svg>
                    <span className="bottombar-menu-name">Tokens</span>
                </Link>
                <Link href="/store" className={`bottombar-icon ${pathname === "/store" ? "text-black" : "text-[#78757E]"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 26.667" className={pathname === "/store" ? "opacity-100" : "opacity-70"}>
                        <path id="Store_Icon" d="M121.667-796.667V-800h26.667v3.333Zm0,23.333v-10H120v-3.333L121.667-795h26.667L150-786.667v3.333h-1.667v10H145v-10h-6.667v10ZM125-776.667h10v-6.667H125Z" transform="translate(-120 800)" fill="currentColor" opacity="0.7" />
                    </svg>
                    <span className="bottombar-menu-name">Store</span>
                </Link>
            </div>
        </div >
    );
};

export default BottomNavbar;
