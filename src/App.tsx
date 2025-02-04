import Header from "./components/Header";
import { MainContent } from "./components/MainContent";

function App() {
    return (
        <div className="relative w-full min-h-screen bg-[url('/kizilElma.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* İçerik */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;
