"use client"
import React, { useState, useEffect } from "react";
import {
    ProductData,
    ANKURAN_PRODUCT_DATA,
    ComponentSpec,
    StageRoadmap,
} from "../data/productData";
import AnimatedCards from "./animated-cards";

// Icons
const ChevronDown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg
        className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const PlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
);

// Enhanced Accordion
interface AccordionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <button
                className="flex justify-between items-center w-full p-2 text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className="flex items-center space-x-2">
                    {icon && <div className="text-emerald-600">{icon}</div>}
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <ChevronDown isOpen={isOpen} />
            </button>
            <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-2 pb-2">
                    <div className="border-t border-gray-100 pt-2">{children}</div>
                </div>
            </div>
        </div>
    );
};

// Header with glass morphism
// const Header: React.FC = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//             scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent'
//         }`}>
//             <div className="container mx-auto px-2 py-2">
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
//                             <span className="text-white font-bold text-sm">A</span>
//                         </div>
//                         <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                             Ankuran
//                         </span>
//                     </div>
                    
//                     <nav className="hidden md:flex items-center space-x-4">
//                         <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
//                             Features
//                         </a>
//                         <a href="#roadmap" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
//                             Roadmap
//                         </a>
//                         <a href="#specs" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
//                             Specs
//                         </a>
//                     </nav>

//                     <button className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// Hero with modern grid and animations
const HeroSection: React.FC<{ data: ProductData }> = ({ data }) => {
    const { title, headline, description } = data.product;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-2 pt-16 pb-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                        {data.product.saas_category}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            {title.split(":")[0]}
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            {title.split(":")[1]}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
                        {headline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8">
                        <button className="group px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                            <span>Explore Ankuran Jal</span>
                            <PlayIcon />
                        </button>
                        <button className="px-4 py-2 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
                            View Documentation
                        </button>
                    </div>
                </div>

                {/* Animated Cards Section */}
                <div className="mt-8">
                    <AnimatedCards 
                        title="Smart Agriculture Solutions"
                        description="Discover how our innovative technology transforms farming practices with real-time monitoring and AI-driven insights."
                    />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mt-8">
                    {data.current_offering_stage1.highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xs">{index + 1}</span>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                                {highlight}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Roadmap with timeline design
const FeaturesSection: React.FC<{ data: ProductData }> = ({ data }) => {
    return (
        <section id="roadmap" className="py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-2">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Progressive <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Development</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {data.product.description}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

                    {data.stages_roadmap.map((stage: StageRoadmap, index) => (
                        <div key={stage.stage_number} className="relative flex items-start mb-6 last:mb-0">
                            {/* Timeline Node */}
                            <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                                stage.status === "Available" 
                                    ? "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg" 
                                    : "bg-gray-300"
                            }`}>
                                {stage.status === "Available" ? <CheckIcon /> : stage.stage_number}
                                {stage.status === "Available" && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 animate-ping opacity-20"></div>
                                )}
                            </div>

                            {/* Content Card */}
                            <div className={`ml-4 flex-1 p-3 rounded-xl transition-all duration-300 ${
                                stage.status === "Available"
                                    ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg"
                                    : "bg-gray-50 border-2 border-gray-200"
                            }`}>
                                <div className="flex items-center mb-2">
                                    <h3 className="text-lg font-bold text-gray-900">{stage.name}</h3>
                                    <span className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
                                        stage.status === "Available"
                                            ? "bg-emerald-500 text-white"
                                            : "bg-gray-400 text-white"
                                    }`}>
                                        {stage.status}
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-emerald-600 mb-1">
                                    Focus: {stage.focus}
                                </p>
                                <p className="text-gray-700 leading-relaxed text-sm">{stage.brief}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Tech specs with modern cards
const TechSpecsSection: React.FC<{ data: ProductData }> = ({ data }) => {
    const { hardware_specifications, user_interface_features } = data.current_offering_stage1;

    return (
        <section id="specs" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-2">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Technical <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Deep Dive</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {data.current_offering_stage1.subtitle}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-3">
                    <Accordion 
                        title="Hardware Architecture" 
                        icon={<div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded"></div>}
                    >
                        <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                                    <h4 className="font-semibold text-gray-900 mb-1">Microcontroller</h4>
                                    <p className="text-gray-700 text-sm">{hardware_specifications.microcontroller}</p>
                                </div>
                                <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                                    <h4 className="font-semibold text-gray-900 mb-1">Power Requirements</h4>
                                    <p className="text-gray-700 text-sm">{hardware_specifications.power_requirements}</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2">
                                    <h4 className="text-white font-semibold text-sm">Component Specifications</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">Component</th>
                                                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">Role</th>
                                                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">Interface</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {hardware_specifications.component_list.map((comp: ComponentSpec, idx: number) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-3 py-2 font-medium text-gray-900 text-sm">{comp.name}</td>
                                                    <td className="px-3 py-2 text-gray-700 text-sm">{comp.role}</td>
                                                    <td className="px-3 py-2">
                                                        <span className="font-mono text-emerald-600 bg-emerald-50 rounded px-1.5 py-0.5 text-xs">
                                                            {comp.interface}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Accordion>

                    <Accordion 
                        title={user_interface_features.feature_name}
                        icon={<div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-600 rounded"></div>}
                    >
                        <div className="space-y-3">
                            <p className="text-gray-700 leading-relaxed text-sm">
                                {user_interface_features.description}
                            </p>
                            
                            <div className="grid gap-3">
                                {user_interface_features.examples.map((ex, idx) => (
                                    <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start space-x-2">
                                            <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-xs">{idx + 1}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-medium text-gray-900 text-sm">
                                                    <span className="text-emerald-600">Input:</span> {ex.input}
                                                </p>
                                                <p className="text-gray-700 text-sm">
                                                    <span className="font-medium">AI Suggestion:</span> {ex.suggestion}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="p-2 bg-gray-50 rounded-lg border-l-4 border-emerald-500">
                                <p className="text-sm text-gray-600">{user_interface_features.data_access}</p>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

// Main component
export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white antialiased">
            {/* <Header /> */}
            <main>
                <HeroSection data={ANKURAN_PRODUCT_DATA} />
                <FeaturesSection data={ANKURAN_PRODUCT_DATA} />
                <TechSpecsSection data={ANKURAN_PRODUCT_DATA} />
            </main>
            
            <footer className="py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="text-xl font-bold text-white">Ankuran</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Bhooyam Initiative - Building the future of sustainable agriculture
                    </p>
                </div>
            </footer>
        </div>
    );
}
