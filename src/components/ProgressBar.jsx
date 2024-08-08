export default function ProgressBar({ value, maxValue }) {
    
    const percentage = (value / maxValue) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-3">
            <div
                className="bg-[#A729F5] h-3 rounded-full transition-width duration-300"
                style={{ width: `${percentage}%` }}
            >
            </div>
        </div>
    );
}