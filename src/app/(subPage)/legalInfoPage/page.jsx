"use client";
import { useState } from "react";

export default function LegalInfoPage() {
    const [activeTab, setActiveTab] = useState("legal");

    const tabs = [
        { id: "privacy", label: "Política de Privacidad" },
        { id: "cookies", label: "Política de Cookies" },
        { id: "legal", label: "Aviso Legal" },
    ];
    return (
        <div className="min-h-screen bg-white p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
                Inicio / <span className="text-gray-700 font-medium">Información Legal</span>
            </nav>

            <div className="flex flex-col gap-6">
                {/* Sidebar */}
                <aside className=" bg-white rounded-xl shadow-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">Secciones</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer" onClick={() => setActiveTab("privacy")}>
                            <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" d="M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 6H2.353a.75.75 0 100 1.5H3.93L.563 15.18a.762.762 0 00.21.88c.08.064.161.125.309.221.186.121.452.278.792.433.68.311 1.662.62 2.876.62a6.919 6.919 0 002.876-.62c.34-.155.606-.312.792-.433.15-.097.23-.158.31-.223a.75.75 0 00.209-.878L5.569 7.5h.886c.351 0 .694-.106.984-.303l1.696-1.154A.25.25 0 019.275 6h1.975v14.5H6.763a.75.75 0 000 1.5h10.474a.75.75 0 000-1.5H12.75V6h1.974c.05 0 .1.015.14.043l1.697 1.154c.29.197.633.303.984.303h.886l-3.368 7.68a.75.75 0 00.23.896c.012.009 0 0 .002 0a3.154 3.154 0 00.31.206c.185.112.45.256.79.4a7.343 7.343 0 002.855.568 7.343 7.343 0 002.856-.569c.338-.143.604-.287.79-.399a3.5 3.5 0 00.31-.206.75.75 0 00.23-.896L20.07 7.5h1.578a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.697-1.154a1.75 1.75 0 00-.984-.303H12.75V2.75zM2.193 15.198a5.418 5.418 0 002.557.635 5.418 5.418 0 002.557-.635L4.75 9.368l-2.557 5.83zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.846 5.846 0 002.547-.576L19.25 9.367l-2.547 5.807z" /></g>
                            </svg>  Política de Privacidad
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer" onClick={() => setActiveTab("cookies")}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier"> <path d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.25 5.00419 18.9663 5.00084 18.3988 4.99413C15.4272 4.95899 13.7136 4.71361 12 3C10.2864 4.71361 8.57279 4.95899 5.6012 4.99413C5.03373 5.00084 4.74999 5.00419 4.53865 5.11409C4.35129 5.21152 4.20259 5.36198 4.10739 5.55048C4 5.7631 4 6.04207 4 6.6V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                            </svg>
                            Política de Cookies
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer" onClick={() => setActiveTab("legal")}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier"> <path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                            </svg>Aviso Legal
                        </li>
                    </ul>
                </aside>

                {activeTab == "privacy" && (
                    <main className="flex-1 bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center gap-2 mb-2">

                            <h1 className="text-xl font-semibold">Política de Privacidad</h1>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            Última actualización: 15 de marzo de 2024
                        </p>

                        <section className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">1. Información del Responsable del Tratamiento</h2>
                            <p className="text-gray-700">
                                ZERO NPC, S.L.<br />
                                NIF: B12345678<br />
                                Inscrita en el Registro Mercantil de Madrid<br />
                                Tomo XXXXX, Folio XXX, Hoja M-XXXXXX<br />
                                Domicilio social: Calle Ejemplo 123, 28001 Madrid<br />
                                Email: legal@zeronpc.com<br />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-4">2. Condiciones de Uso</h2>
                            <p className="text-gray-700">El acceso y uso de este sitio web implica la aceptación de:</p>
                            <ul>
                                <li>Términos y condiciones establecidos</li>
                                <li>Política de privacidad y cookies</li>
                                <li>Normativa de uso de la plataforma</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">3. Propiedad Intelectual</h2>
                            <p className="text-gray-700">Todos los derechos reservados. El contenido, diseño y código fuente están protegidos por:</p>
                            <ul>
                                <li>Derechos de autor</li>
                                <li>Marcas registradas</li>
                                <li>Patentes y modelos de utilidad</li>
                                <li>Secretos comerciales</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">4. Responsabilidades</h2>
                            <p className="text-gray-700">ZERO NPC no se hace responsable de:</p>
                            <ul>
                                <li>Interrupciones del servicio por causas técnicas</li>
                                <li>Contenido generado por usuarios</li>
                                <li>Enlaces a sitios de terceros</li>
                                <li>Uso indebido de la plataforma</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">5. Legislación Aplicable</h2>
                            <p className="text-gray-700">Este aviso legal se rige por la legislación española, incluyendo:</p>
                            <ul>
                                <li>Ley 34/2002 de Servicios de la Sociedad de la Información</li>
                                <li>Reglamento General de Protección de Datos (RGPD)</li>
                                <li>Ley Orgánica 3/2018 de Protección de Datos (LOPD)</li>
                                <li>Real Decreto-ley 13/2012 (Cookies)</li>
                            </ul>
                        </section>
                    </main>)}
                {activeTab == "cookies" && (
                    <main className="flex-1 bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center gap-2 mb-2">

                            <h1 className="text-xl font-semibold">Política de Cookies</h1>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            Última actualización: 15 de marzo de 2024
                        </p>

                        <section className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">1. ¿Qué son las Cookies?</h2>
                            <p className="text-gray-700">
                                Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo para almacenar información sobre sus preferencias o actividad.</p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-4">2. Tipos de Cookies que Utilizamos</h2>
                            <p className="text-gray-700">Recopilamos y procesamos los siguientes datos personales
                            </p>
                            <div className="bg-gray-100 p-4 rounded-md my-2">
                                <h3 className="font-semibold">Cookies Técnicas (Propias)</h3>
                                <p className="text-sm text-gray-600">Necesarias para el funcionamiento del sitio<br />
                                    <span className="font-medium">Duración:</span> Sesión
                                </p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md my-2">
                                <h3 className="font-semibold">Cookies de Preferencias (Propias)</h3>
                                <p className="text-sm text-gray-600">Almacenan sus preferencias de navegación<br />
                                    <span className="font-medium">Duración:</span> 1 año
                                </p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md my-2">
                                <h3 className="font-semibold">Cookies Analíticas (Terceros)</h3>
                                <p className="text-sm text-gray-600">Análisis del comportamiento de usuarios<br />
                                    <span className="font-medium">Duración:</span> 2 año
                                </p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md my-2">
                                <h3 className="font-semibold">Cookies de Marketing (Terceros)</h3>
                                <p className="text-sm text-gray-600">Publicidad personalizada<br />
                                    <span className="font-medium">Duración:</span> 90 días
                                </p>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">3. Gestión de Cookies</h2>
                            <p className="text-gray-700">Puede gestionar sus preferencias de cookies en cualquier momento:</p>
                            <button className="text-black bg-yellow rounded-2xl my-3 px-4 h-10">Configurar Cookies</button>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">4. Cómo Desactivar las Cookies</h2>
                            <p className="text-gray-700">Puede desactivar las cookies en su navegador:</p>
                            <ul>
                                <li>Chrome: Configuración → Privacidad y seguridad</li>
                                <li>Firefox: Opciones → Privacidad y Seguridad</li>
                                <li>Safari: Preferencias → Privacidad</li>
                                <li>Edge: Configuración → Privacidad y servicios</li>
                            </ul>
                        </section>
                    </main>
                )}
                {activeTab == "legal" && (
                    <main className="flex-1 bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center gap-2 mb-2">

                            <h1 className="text-xl font-semibold">Aviso Legal</h1>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            Última actualización: 15 de marzo de 2024
                        </p>

                        <section className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">1. Información de la Empresa</h2>
                            <p className="text-gray-700">
                                ZERO NPC, S.L. (en adelante, “ZERO NPC”)<br />
                                NIF: B12345678<br />
                                Domicilio social: Calle Ejemplo 123, 28001 Madrid<br />
                                Email: privacy@zeronpc.com<br />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold mb-4">2. Recolección y Uso de Datos Personales</h2>
                            <p className="text-gray-700">Recopilamos y procesamos los siguientes datos personales
                            </p>
                            <ul>
                                <li>Datos de identificación y contacto</li>
                                <li>Información de perfil y preferencias</li>
                                <li>Datos de transacciones y compras</li>
                                <li>Información técnica y de uso</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">3. Finalidades del Tratamiento</h2>
                            <ul>
                                <li>Gestión de la relación comercial</li>
                                <li>Procesamiento de pedidos y pagos</li>
                                <li>Mejora de nuestros servicios</li>
                                <li>Comunicaciones comerciales (con consentimiento)</li>
                                <li>Cumplimiento de obligaciones legales</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">4. Base Legal para el Procesamiento</h2>
                            <ul>
                                <li>Ejecución de un contrato</li>
                                <li>Consentimiento explícito</li>
                                <li>Obligación legal</li>
                                <li>Interés legítimo</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">5. Derechos RGPD/LOPD</h2>
                            <p className="text-gray-700">Los usuarios pueden ejercer los siguientes derechos:</p>
                            <ul>
                                <li>Acceso a sus datos personales</li>
                                <li>Rectificación de datos inexactos</li>
                                <li>Supresión de datos</li>
                                <li>Limitación del tratamiento</li>
                                <li>Portabilidad de datos</li>
                                <li>Oposición al tratamiento</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold mb-4">6. Medidas de Seguridad</h2>
                            <p className="text-gray-700">Implementamos medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado, incluyendo:</p>
                            <ul>
                                <li>Encriptación de datos sensibles</li>
                                <li>Controles de acceso</li>
                                <li>Copias de seguridad</li>
                                <li>Monitoreo del sistema</li>
                            </ul>
                        </section>
                    </main>
                )}
            </div >
        </div >
    );
}
