import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    var brandname = document.getElementById("brandname");
    var toToggle = document.querySelectorAll(".toggleColour");

    document.addEventListener("scroll", function () {
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
            header.classList.add("bg-white");
            navaction.classList.remove("bg-white");
            navaction.classList.add("bg-gradient-to-r");
            navaction.classList.add("from-emerald-700");
            navaction.classList.add("to-green-600");
            navaction.classList.remove("text-emerald-700");
            navaction.classList.add("text-white");
            //Use to switch toggleColour colours
            for (var i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.add("text-emerald-700");
                toToggle[i].classList.remove("text-white");
            }
            header.classList.add("shadow");
            navcontent.classList.remove("bg-gray-100");
            navcontent.classList.add("bg-white");
        } else {
            header.classList.remove("bg-white");
            navaction.classList.remove("bg-gradient-to-r");
            navaction.classList.remove("from-emerald-700");
            navaction.classList.remove("to-green-600");
            navaction.classList.add("bg-white");
            navaction.classList.remove("text-white");
            navaction.classList.add("text-emerald-700");
            //Use to switch toggleColour colours
            for (var i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.add("text-white");
                toToggle[i].classList.remove("text-emerald-700");
            }

            header.classList.remove("shadow");
            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-gray-100");
        }
    });

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
        var target = (e && e.target) || (event && event.srcElement);

        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, navMenu)) {
                // click on the link
                if (navMenuDiv.classList.contains("hidden")) {
                    navMenuDiv.classList.remove("hidden");
                } else {
                    navMenuDiv.classList.add("hidden");
                }
            } else {
                // click both outside link and outside menu, hide menu
                navMenuDiv.classList.add("hidden");
            }
        }
    }

    function checkParent(t, elm) {
        while (t.parentNode) {
            if (t == elm) {
                return true;
            }
            t = t.parentNode;
        }
        return false;
    }
    return (
        <>
            <Head>
                <title>Welcome</title>
                <link rel="icon" href="/images/logoalfa.png" type="image/png" sizes="16x16" />
            </Head>
            <div className="leading-normal tracking-normal text-white bg-gradient-to-r from-emerald-800 to-green-600">
                <nav id="header" className="fixed top-0 z-30 w-full text-white">
                    <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                        <div className="flex items-center pl-4">
                            <a className="text-2xl font-bold text-white no-underline toggleColour hover:no-underline lg:text-2xl flex justify-center items-center" href="#">
                                <img className="w-16 transition duration-300 transform hover:scale-105" src="/images/logoalfa2.png" alt="logoalfa" />
                                <span className="p-1" />
                                <span>
                                    SMP Al Musyaffa'
                                </span>
                            </a>
                        </div>
                        <div className="block pr-4 lg:hidden">
                            <button id="nav-toggle" className="flex items-center p-1 transition duration-300 ease-in-out transform text-emerald-800 hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="z-20 flex-grow hidden w-full p-4 mt-2 text-black bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
                            <ul className="items-center justify-end flex-1 list-reset lg:flex">
                                <li className="mr-3">
                                    <a className="inline-block px-4 py-2 font-bold no-underline transition duration-300 ease-in-out transform text-slate-700 rounded-3xl hover:underline hover:bg-emerald-500 hover:text-white hover:scale-105" href="#jadwal">Jadwal</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block px-4 py-2 font-bold no-underline transition duration-300 ease-in-out transform text-slate-700 rounded-3xl hover:underline hover:bg-emerald-500 hover:text-white hover:scale-105" href="#syarat">Syarat</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block px-4 py-2 font-bold no-underline transition duration-300 ease-in-out transform text-slate-700 rounded-3xl hover:underline hover:bg-emerald-500 hover:text-white hover:scale-105" href="#seleksi">Seleksi</a>
                                </li>
                            </ul>
                            <a id="navAction" className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105" href={route('login')}>
                                Masuk
                            </a>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="container flex flex-col flex-wrap items-center justify-between px-3 mx-auto md:flex-row">
                        <div className="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left pt-24">
                            <p className="w-full uppercase tracking-loose">portal pendaftaran santri baru</p>
                            <h1 className="my-4 text-5xl font-bold leading-tight">
                                SMP Al Musyaffa'
                            </h1>
                            <p className="mb-8 text-2xl leading-normal">
                                Pendaftaran Santri Baru Tahun Ajaran 2023 / 2024 Belum Mulai, Silahkan Download Brosur Berikut
                            </p>
                            <a href="images/brosur.pdf" className="px-8 py-4 mx-auto my-6 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow-lg lg:mx-0  focus:outline-none focus:shadow-outline hover:scale-105 cursor-pointer" download="brosur-smp-al-musyaffa">
                                Download
                            </a>
                        </div>
                        <div className="flex justify-end w-full py-6 text-center md:w-2/5">
                            <img className="w-full md:w-4/5" src="/images/3orang.png" />
                        </div>
                    </div>
                </div>
                <div className="relative -mt-12 lg:-mt-24">
                    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003" />
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <section className="py-8 bg-white border-b">
                    <div className="container max-w-5xl m-8 mx-auto">
                        <h2 id="jadwal" className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Jadwal Pendaftaran
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 py-0 mx-auto my-0 rounded-t opacity-25 w-72 bg-gradient-to-r from-[#064e3b] to-[#22c55e]" />
                        </div>
                        <div className="flex flex-wrap justify-center p-2">
                            <div className="w-5/6 sm:w-1/2">
                                <div className="mb-3 text-center border-2 border-emerald-700">
                                    <h3 className="p-2 text-xl font-bold leading-none text-gray-800 bg-yellow-400">
                                        GELOMBANG I
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none text-slate-200 bg-emerald-700">6 JANUARI s.d 27
                                        JANUARI 2023
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none bg-white text-slate-700">BIAYA DAFTAR ULANG :
                                        <span className="text-emerald-700"> Rp. 3.500.000</span>
                                    </h3>
                                </div>
                                <div className="mb-3 text-center border-2 border-emerald-700">
                                    <h3 className="p-2 text-xl font-bold leading-none text-gray-800 bg-yellow-400">
                                        GELOMBANG II
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none text-slate-200 bg-emerald-700">3 FEBRUARI s.d 24
                                        FEBRUARI 2023
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none bg-white text-slate-700">BIAYA DAFTAR ULANG :
                                        <span className="text-emerald-700"> Rp. 4.000.000</span>
                                    </h3>
                                </div>
                                <div className="text-center border-2 border-emerald-700">
                                    <h3 className="p-2 text-xl font-bold leading-none text-gray-800 bg-yellow-400">
                                        GELOMBANG III
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none text-slate-200 bg-emerald-700">26 MEI s.d 02 JUNI
                                        2023
                                    </h3>
                                    <h3 className="p-2 text-xl font-bold leading-none bg-white text-slate-700">BIAYA DAFTAR ULANG :
                                        <span className="text-emerald-700"> Rp. 4.500.000</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="w-full p-6 sm:w-1/2">
                                <img src="images/article.png" alt="jadwal" />
                            </div>
                        </div>
                        <div id="syarat" className="flex flex-col-reverse flex-wrap sm:flex-row">
                            <div className="w-full p-6 mt-6 sm:w-1/2">
                                <img src="images/informed.png" alt="syarat" />
                            </div>
                            <div className="w-full p-6 mt-6 sm:w-1/2">
                                <div className="align-middle">
                                    <h3 className="p-2 mb-2 text-xl font-bold leading-none text-center text-gray-800 bg-yellow-400 border-2 rounded-xl border-emerald-700">
                                        SYARAT BERKAS PENDAFTARAN
                                    </h3>
                                    <div className="mb-5 ">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">1</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            Fotokopi
                                            <span className="text-white">Akta Kelahiran 1 Lembar</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">2</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            Fotokopi
                                            <span className="text-white">Kartu Keluarga 1 Lembar</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">3</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            Fotokopi
                                            <span className="text-white">KTP Orang Tua</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">4</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            Fotokopi
                                            <span className="text-white">Kartu NISN</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">5</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            Fotokopi
                                            <span className="text-white">Raport Kelas 1 s.d 6</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="seleksi" className="py-8 bg-white border-b">
                    <div className="container max-w-5xl m-8 mx-auto">
                        <div className="flex flex-col flex-wrap sm:flex-row">
                            <div className="w-full p-6 mt-6 sm:w-1/2">
                                <div className="align-middle">
                                    <h3 className="p-2 mb-2 text-xl font-bold leading-none text-center text-gray-800 bg-yellow-400 border-2 rounded-xl border-emerald-700">
                                        TES SELEKSI
                                    </h3>
                                    <div className="mb-5 ">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">1</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            TES
                                            <span className="text-white">AGAMA</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">2</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            TES
                                            <span className="text-white">AKADEMIK</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">3</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            TES
                                            <span className="text-white">WAWANCARA</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">4</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            TES
                                            <span className="text-white">KESEHATAN</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="p-1 font-bold bg-yellow-400 border-2 rounded-full text-slate-700 border-emerald-700">5</span>
                                        <span className="p-1 font-bold border-b-2 rounded-lg text-slate-800 border-emerald-700 bg-emerald-700">
                                            TES
                                            <span className="text-white">BAKAT MINAT</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-6 mt-6 sm:w-1/2">
                                <img src="images/information.png" alt="syarat" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="leading-normal tracking-normal text-white bg-gradient-to-r from-emerald-800 to-green-600">
                <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                            <g className="wave" fill="#f8fafc">
                                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
                                </path>
                            </g>
                            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <section className="container py-6 mx-auto mb-12 text-center">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        DAFTAR SEGERA !
                    </h2>
                    <div className="w-full mb-4">
                        <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-white rounded-t opacity-25" />
                    </div>
                    <h3 className="my-4 text-3xl leading-tight">
                        Setiap gelombang pendaftaran memiliki kuota pendaftar. Jika kuota sudah penuh maka pendaftaran akan ditutup
                        dan bisa mendaftar di gelombang berikutnya.
                    </h3>
                    <button className="px-8 py-4 mx-auto my-6 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow-lg lg:mx-0 hover:underline focus:outline-none focus:shadow-outline hover:scale-105">
                        Daftar
                    </button>
                </section>
                <footer className="bg-white">
                    <div className="container px-8 mx-auto">
                        <div className="flex flex-col w-full py-6 md:flex-row">
                            <div className="flex-1 mb-6 text-black">
                                <a className="text-xl font-bold no-underline text-emerald-600 hover:no-underline lg:text-2xl" href="#">
                                    <img className="w-32 " src="images/logoalfa2.png" alt="logo" />
                                    SMP Al Musyaffa'
                                </a>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 uppercase md:mb-6">Links</p>
                                <ul className="mb-6 list-reset">
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">FAQ</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Help</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 uppercase md:mb-6">Legal</p>
                                <ul className="mb-6 list-reset">
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Terms</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 uppercase md:mb-6">Social</p>
                                <ul className="mb-6 list-reset">
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="https://www.facebook.com/profile.php?id=100057128814679" target="__blank" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Facebook</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="https://www.instagram.com/smp_almusyaffa/" target="__blank" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 uppercase md:mb-6">Company</p>
                                <ul className="mb-6 list-reset">
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Official
                                            Blog</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">About
                                            Us</a>
                                    </li>
                                    <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                        <a href="#" className="px-2 py-1 text-white no-underline rounded-lg hover:underline hover:text-emerald-500 bg-emerald-700">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.youtube.com/channel/UC6K2YKhHDT2y05U6GorosCQ" target="__blank" className="text-gray-500 pl-3">Developed By : Kendali Koding</a>
                </footer>
            </div>



            {/* <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <svg
                            viewBox="0 0 651 192"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-auto text-gray-700 sm:h-20"
                        >
                            <g clipPath="url(#clip0)" fill="#EF3B2D">
                                <path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" />
                            </g>
                        </svg>
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laravel.com/docs"
                                            className="underline text-gray-900 dark:text-white"
                                        >
                                            Documentation
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel has wonderful, thorough documentation covering every aspect of the
                                        framework. Whether you are new to the framework or have previous experience with
                                        Laravel, we recommend reading all of the documentation from beginning to end.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laracasts.com"
                                            className="underline text-gray-900 dark:text-white"
                                        >
                                            Laracasts
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript
                                        development. Check them out, see for yourself, and massively level up your
                                        development skills in the process.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laravel-news.com/"
                                            className="underline text-gray-900 dark:text-white"
                                        >
                                            Laravel News
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel News is a community driven portal and newsletter aggregating all of the
                                        latest and most important news in the Laravel ecosystem, including new package
                                        releases and tutorials.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        Vibrant Ecosystem
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel's robust library of first-party tools and libraries, such as{' '}
                                        <a href="https://forge.laravel.com" className="underline">
                                            Forge
                                        </a>
                                        ,{' '}
                                        <a href="https://vapor.laravel.com" className="underline">
                                            Vapor
                                        </a>
                                        ,{' '}
                                        <a href="https://nova.laravel.com" className="underline">
                                            Nova
                                        </a>
                                        , and{' '}
                                        <a href="https://envoyer.io" className="underline">
                                            Envoyer
                                        </a>{' '}
                                        help you take your projects to the next level. Pair them with powerful open
                                        source libraries like{' '}
                                        <a href="https://laravel.com/docs/billing" className="underline">
                                            Cashier
                                        </a>
                                        ,{' '}
                                        <a href="https://laravel.com/docs/dusk" className="underline">
                                            Dusk
                                        </a>
                                        ,{' '}
                                        <a href="https://laravel.com/docs/broadcasting" className="underline">
                                            Echo
                                        </a>
                                        ,{' '}
                                        <a href="https://laravel.com/docs/horizon" className="underline">
                                            Horizon
                                        </a>
                                        ,{' '}
                                        <a href="https://laravel.com/docs/sanctum" className="underline">
                                            Sanctum
                                        </a>
                                        ,{' '}
                                        <a href="https://laravel.com/docs/telescope" className="underline">
                                            Telescope
                                        </a>
                                        , and more.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="-mt-px w-5 h-5 text-gray-400"
                                >
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>

                                <a href="https://laravel.bigcartel.com" className="ml-1 underline">
                                    Shop
                                </a>

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="ml-4 -mt-px w-5 h-5 text-gray-400"
                                >
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>

                                <a href="https://github.com/sponsors/taylorotwell" className="ml-1 underline">
                                    Sponsor
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
