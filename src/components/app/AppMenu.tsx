import { Minus, Square, X } from 'lucide-react';
import { Button } from "../ui/button";

const AppMenu = () => {
    return (
        <header
          className="flex h-[3rem] shrink-0 items-center gap-2 border-b px-4 justify-between cursor-move" style={{ WebkitAppRegion: "drag" }}
        >
            <div className="flex gap-2" style={{ WebkitAppRegion: "no-drag" }}>
                <img
                    className="dark:invert"
                    src="https://logodix.com/logo/892175.jpg"
                    alt="App Logo"
                    width={30}
                    height={30}
                />
                <h1 className="font-extrabold font-stretch-50%">Happy notes</h1>
            </div>
            <div style={{ WebkitAppRegion: "no-drag" }}>
                <Button variant={"ghost"} onClick={() => window.ipcRenderer.send('minimize')}>
                    <Minus/>
                </Button>
                <Button variant={"ghost"} onClick={() => window.ipcRenderer.send('maximize')}>
                    <Square/>
                </Button>
                <Button variant={"ghost"} onClick={() => window.ipcRenderer.send('close')}>
                    <X/>
                </Button>
            </div>

        </header>
    )
}

export default AppMenu;
