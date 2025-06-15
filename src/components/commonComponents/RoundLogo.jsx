export default function RoundLogo({ icon }) {
    return (
        <div className="w-16 h-16 p-[2px] rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
                {icon}
            </div>
        </div>
    );
}
