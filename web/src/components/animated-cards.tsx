export default function AnimatedCards({ title, description, image }: { title: string; description: string; image?: string }) {
    return (
        <div className="group font-sans relative h-56 w-84 bg-white/95 backdrop-blur-sm rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.16)] transition-all duration-700 ease-out overflow-hidden border border-white/40">
            {/* Sophisticated gradient foundation */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-25 via-amber-25/40 to-lime-50/70 rounded-[24px]"></div>
            
            {/* Multi-layered atmospheric textures */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(16,185,129,0.12),rgba(255,255,255,0))] rounded-[24px] blur-[0.8px]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_60deg_at_65%_35%,rgba(254,240,138,0.18)_0deg,transparent_100deg,rgba(34,197,94,0.08)_200deg,transparent_300deg)] rounded-[24px] backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(132,204,22,0.06)_0%,transparent_35%,rgba(250,204,21,0.09)_75%,transparent_100%)] rounded-[24px]"></div>
            <div className="absolute inset-0 bg-[mesh-gradient(45deg,rgba(34,197,94,0.04)_0%,rgba(254,240,138,0.06)_50%,rgba(132,204,22,0.03)_100%)] rounded-[24px]"></div>
            
            {/* Premium content arrangement */}
            <div className="relative z-20 h-full flex flex-col justify-between p-10">
                {/* Refined header composition */}
                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="w-14 h-1.5 bg-gradient-to-r from-emerald-400 via-lime-400 to-amber-400 rounded-full group-hover:w-20 transition-all duration-500 ease-out shadow-lg shadow-emerald-200/30"></div>
                        
                        {/* Image with layered texture */}
                        {image && (
                            <div className="relative">
                                {/* Layered background textures for image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-lime-50/40 to-amber-50/30 rounded-xl backdrop-blur-sm"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_70%)] rounded-xl"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(254,240,138,0.12),transparent_60%)] rounded-xl"></div>
                                
                                {/* Image container with enhanced styling */}
                                <div className="relative w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/60 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out overflow-hidden">
                                    <img
                                        src={image}
                                        alt=""
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>
                                
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-lime-200/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out blur-[2px] -z-10"></div>
                            </div>
                        )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 leading-[1.15] tracking-[-0.02em] group-hover:text-emerald-900 transition-all duration-500 ease-out transform group-hover:translate-x-2 group-hover:scale-[1.02]">
                        {title}
                    </h2>
                </div>
                
                {/* Enhanced text presentation */}
                <div className="flex-1 flex items-end pt-4">
                    <p className="text-gray-650 leading-[1.6] text-base font-medium tracking-wide group-hover:text-gray-800 transition-all duration-500 ease-out transform group-hover:translate-y-[-4px] group-hover:scale-[1.01] max-w-[88%] selection:bg-emerald-100">
                        {description}
                    </p>
                </div>
            </div>
            
            {/* Sophisticated interactive atmospherics */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-lime-200/20 via-amber-100/12 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-125 group-hover:rotate-3 blur-[1.2px]"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-emerald-200/16 via-teal-100/8 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-all duration-800 delay-150 ease-out transform group-hover:scale-110 group-hover:-rotate-2 backdrop-blur-[2.5px]"></div>
            <div className="absolute inset-x-6 top-6 h-20 bg-gradient-to-r from-amber-200/8 via-lime-100/12 to-emerald-100/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-75 ease-out blur-[2px]"></div>
            
            {/* Premium shimmer cascade */}
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-transparent via-amber-100/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -skew-x-6 group-hover:translate-x-2 backdrop-blur-[0.8px] group-hover:animate-shimmer"></div>
            
            {/* Micro-interaction highlights */}
            <div className="absolute inset-2 rounded-[20px] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600 ease-out pointer-events-none"></div>
        </div>
    );
}